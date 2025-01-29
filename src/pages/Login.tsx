import ImagenDerecha from "../components/Login/ImagenDerecha";
import InputLogin from "../components/Login/InputLogin";
import "../Styles/Login.css";

const Login = () => {
    return (
        <div className="loginContainer">
            <InputLogin />
            <ImagenDerecha />
        </div>
    );
};

export default Login;
