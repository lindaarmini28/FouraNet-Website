/* eslint-disable react/prop-types */
//import MainLayout from "./Components/mainn";
import MainLayout from "./Components/layout";


const PrivateRoute = ({ component }) => {

  return <MainLayout> {component} </MainLayout>;
};

export default PrivateRoute;
