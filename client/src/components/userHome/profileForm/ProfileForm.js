import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { history } from '../../../history';
import axios from "axios";
import {
  BtnContainer,
  BtnWrap,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  FormBtn,
  LoadingSpinner,
  LoadingWrap,
  ProjectFormWrap,
  SubmitBtn,
} from "./ProfileFormElements";

const ProfileForm = () => {
  //UPLOAD DA IMAGEM NO CLOUDINARY
  const [imageSelected, setImageSelected] = useState("");
  const [profileImage, setProfileImage] = useState([]);

  const uploadImage = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "kgem041l");

    await axios
      .post("https://api.cloudinary.com/v1_1/dudmycscb/image/upload", formData)
      .then((response) => {
        setProfileImage(response);
        setLoading(false);
        setImageLoaded(true);
      });
  };

  //LOADING DA IMAGEM
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  //CRIAÇÃO DO PERFIL
  const handleSubmit = async (values) => {
    const userId = localStorage.getItem("user_id");

    const imageID = profileImage.data.public_id;

    const profileData = {
      role: values.role,
      team: values.team,
      startDate: values.startDate,
      phone: values.phone,
      linkedin: values.linkedin,
      github: values.github,
      profileImage: imageID,
      idUser: userId,
    };

    console.log(profileData);
    await axios
      .post("http://localhost:5000/user/create_profile", profileData)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Perfil Criado!");
          history.push("/profile")
        }
      })
      .catch((err) => {
        alert("Perfil já cadastrado!");
      });
  };

  return (
    <ProjectFormWrap>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="form">
          <FieldContainer>
            <FieldWrap>
              <FieldDesc>Cargo*</FieldDesc>
              <Field
                name="role"
                placeholder="Ex: Desenvolvedor Java"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Time*</FieldDesc>
              <Field
                name="team"
                placeholder="Ex: Time Machine Learning"
                type="text"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Data de Início*</FieldDesc>
              <Field name="startDate" type="date" className="formField" />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Celular</FieldDesc>
              <Field
                name="phone"
                placeholder="Ex: (11) 12345-6789"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>LinkedIn</FieldDesc>
              <Field
                name="linkedin"
                placeholder="Ex: linkedin.com/fulano"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Github</FieldDesc>
              <Field
                name="github"
                placeholder="Ex: github.com/fulano"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Foto de Perfil</FieldDesc>
              <Field
                name="profileImage"
                type="file"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
              />
              <BtnWrap>
                <FormBtn className="upload" type="button" onClick={uploadImage}>
                  Fazer Upload da Imagem
                </FormBtn>
                {loading ? <LoadingSpinner /> : null}
              </BtnWrap>

              <LoadingWrap>
                <span className={imageLoaded ? "loaded-on" : "loaded-off"}>
                  Upload Realizado!
                </span>
              </LoadingWrap>
            </FieldWrap>
          </FieldContainer>
          <BtnContainer>
            <SubmitBtn type="submit">Criar Perfil</SubmitBtn>
  
          </BtnContainer>
        </Form>
      </Formik>
    </ProjectFormWrap>
  );
};

export default ProfileForm;
