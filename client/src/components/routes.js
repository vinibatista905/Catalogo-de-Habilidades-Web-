import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import AdminPrivateRoute from "./AdminPrivateRoute";
import AuthRoute from "./AuthRoute";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Forgot_Password from "../pages/forgot_password/Forgot_Password";
import Reset_Password from "../pages/reset_password/Reset_Password";
import Homepage from "../pages/homepage/Homepage";
import Home from "../pages/home/Home";
import CreateSkill from "../pages/home/create_skill/CreateSkill";
import UpdateSkills from "../pages/home/update_skills/UpdateSkills";
import UpdateSkillPage from "../pages/home/update_skills/update_skill_page/UpdateSkillPage";
import AllSkills from "../pages/home/all_skills/AllSkills";
import SpecUserSkills from "../pages/home/specific_user_skills/SpecUserSkills";
import AllUsers from "../pages/home/all_users/AllUsers";
import CreateProject from "../pages/home/create_project/CreateProject";
import AllProjects from "../pages/home/all_projects/AllProjects";
import UpdateProjects from "../pages/home/update_projects/UpdateProjects";
import SpecUserProjects from "../pages/home/specific_user_projects/SpecUserProjects";
import CreateProfile from "../pages/home/create_profile/CreateProfile";
import UpdateProfile from "../pages/home/update_profile/UpdateProfile";
import Profile from "../pages/home/profile/Profile";
import SpecUserProfilePage from "../pages/home/spec_user_profile/SpecUserProfilePage";
import UpdateProfileImage from "../pages/home/update_profile_image/UpdateProfileImage";
import NotFound from "./notFound/NotFound";
import Admin_Login from "../pages/admin/admin_login/Admin_Login";
import AdminHome from "../pages/admin/adminHome/AdminHome";
import AddNewSkill from "../pages/admin/adminHome/addNewSkill/AddNewSkill";
import SkillsCatalog from "../pages/admin/adminHome/skillsCatalog/SkillsCatalog";
import UpdateCatalog from "../pages/admin/adminHome/updateCatalog/UpdateCatalog";
import AdminAllUsers from "../pages/admin/adminHome/allUsers/AdminAllUsers";
import UpdateUsers from "../pages/admin/adminHome/updateUsers/UpdateUsers";
import UpdateUserFormPage from "../pages/admin/adminHome/updateUserForm/UpdateUserForm";
import CreateNewProject from "../pages/admin/adminHome/createProject/CreateNewProject";
import AdminAllProjects from "../pages/admin/adminHome/allProjects/AdminAllProjects";
import AdminUpdateProjects from "../pages/admin/adminHome/updateProject/AdminUpdateProject";
import UpdateProjectFormPage from "../pages/admin/adminHome/updateProjectFormPage/UpdateProjectFormPage";

import { history } from "../history";

const Routes = () => (
    
  <Router history={history}>
    <Switch>
      <AuthRoute component={Login} exact path="/login" />
      <AuthRoute component={Register} exact path="/register" />
      <AuthRoute component={Forgot_Password} exact path="/forgot_password" />
      <AuthRoute component={Reset_Password} exact path="/reset_password" />
      <AuthRoute component={Homepage} exact path="/" />
      <AuthRoute component={Admin_Login} exact path="/admin/login" />

      <PrivateRoute component={Home} exact path="/home" />
      <PrivateRoute component={CreateSkill} exact path="/create_skill" />
      <PrivateRoute component={UpdateSkills} exact path="/update_skill" />
      <PrivateRoute component={UpdateSkillPage} exact path="/update_skill/:id" />
      <PrivateRoute component={AllSkills} exact path="/all_skills" />
      <PrivateRoute component={AllUsers} exact path="/all_users" />
      <PrivateRoute component={SpecUserSkills} exact path="/users/:id" />
      <PrivateRoute component={CreateProject} exact path="/add_projects" />
      <PrivateRoute component={AllProjects} exact path="/all_projects" />
      <PrivateRoute component={UpdateProjects} exact path="/update_projects" />
      <PrivateRoute component={SpecUserProjects} exact path="/users/projects/:id" />
      <PrivateRoute component={Profile} exact path="/profile" />
      <PrivateRoute component={CreateProfile} exact path="/create_profile" />
      <PrivateRoute component={UpdateProfile} exact path="/update_profile" />
      <PrivateRoute component={UpdateProfileImage} exact path="/update_profile_image" />
      <PrivateRoute component={SpecUserProfilePage} exact path="/profiles/:id" />

      <AdminPrivateRoute component={AdminHome} exact path="/admin/home" />
      <AdminPrivateRoute component={AddNewSkill} exact path="/admin/add_skill" />
      <AdminPrivateRoute component={SkillsCatalog} exact path="/admin/skills_catalog" />
      <AdminPrivateRoute component={UpdateCatalog} exact path="/admin/update_catalog/:id" />
      <AdminPrivateRoute component={AdminAllUsers} exact path="/admin/all_users" />
      <AdminPrivateRoute component={UpdateUsers} exact path="/admin/update_users" />
      <AdminPrivateRoute component={UpdateUserFormPage} exact path="/admin/update_user/:id" />
      <AdminPrivateRoute component={CreateNewProject} exact path="/admin/create_project" />
      <AdminPrivateRoute component={AdminAllProjects} exact path="/admin/all_projects" />
      <AdminPrivateRoute component={AdminUpdateProjects} exact path="/admin/update_projects" />
      <AdminPrivateRoute component={UpdateProjectFormPage} exact path="/admin/update_project/:id" />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
