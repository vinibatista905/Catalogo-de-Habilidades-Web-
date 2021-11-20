import React from "react";
import Navbar from "../../../components/userHome/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./CreateProfileElements";
import ProfileForm from "../../../components/userHome/profileForm/ProfileForm";

const CreateProfile = () => {
  return (
    <>
      <Container>
        <Navbar />

        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../assets/add-skills.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>Adicione o seu perfil</CardTitle>
            <ProfileForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default CreateProfile;
