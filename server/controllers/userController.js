const { User } = require("../models/");
const { Skill } = require("../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const mailer = require("../modules/mailer");

const { loginValidate, registerValidate } = require("./validate");

const userController = {
  register: async function (req, res) {
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (selectedUser) {
      return res.status(400).send("Email já existe");
    }

    const user = {
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
    };

    try {
      const savedUser = await User.create(user);
      res.status(200).send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async function (req, res) {
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.message);

    const selectedUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (!selectedUser) {
      return res.status(400).send("Email incorreto");
    }

    const passwordAndUserMatch = bcrypt.compareSync(
      req.body.password,
      selectedUser.password
    );
    if (!passwordAndUserMatch)
      return res.status(400).send("Email ou senha incorreto");

    const token = jwt.sign(
      { _id: selectedUser._id, admin: selectedUser.admin },
      process.env.TOKEN_SECRET
    );
    res.header("authorization-token", token);
    res.send(token);
  },

  forgot_password: async function (req, res) {
    const { email } = req.body;

    try {
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado" });
      } else {
        const token = crypto.randomBytes(20).toString("hex");

        const now = new Date();
        now.setHours(now.getHours() + 1);

        user.passwordResetToken = token;
        user.passwordResetExpires = now;
        await user.save();

        console.log(token, now);

        const message = await mailer.sendMail(
          {
            from: "vudmbbatista@gmail.com",
            to: email,
            subject: "Token para alteração de senha",
            context: { token },
            text: `Utilize este token para alterar a sua senha: ${token}`,
            html: "<p>Segue seu token</p>",
          },
          (err) => {
            if (err) {
              return res
                .status(400)
                .send({ error: "Não foi possível enviar o email" });
            }
            return res.status(200).send("E-mail enviado com sucesso");
          }
        );
      }
    } catch (error) {
      res
        .status(400)
        .send({ error: "Erro no esqueci a senha, tente novamente" });
    }
  },

  reset_password: async function (req, res) {
    const { email, token } = req.body;
    const password = bcrypt.hashSync(req.body.password);

    try {
      const user = await User.findOne({
        where: { email: req.body.email, passwordResetToken: req.body.token },
      });

      if (!user) {
        return res.status(400).send({ error: "Usuário não encontrado" });
      }

      if (token !== user.passwordResetToken) {
        return res.status(400).send({ error: "Token inválido" });
      }

      const now = new Date();

      if (now > user.passwordResetExpires) {
        return res
          .status(400)
          .send({ error: "Token expirado. Tente novamente" });
      }

      user.password = password;

      await user.save();

      res.status(200).send("Senha alterada com sucesso.");
    } catch (error) {
      res
        .status(400)
        .send({ error: "Não foi possível alterar a senha, tente novamente." });
    }
  },

  create_skill: async function (req, res) {
    const skill = {
      name: req.body.name,
      type: req.body.type,
    };

    try {
      const savedSkill = await Skill.create(skill);
      res.status(200).send(savedSkill);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = userController;
