import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrapp">
      <div className="login-div">
        <button className="sign-in-btn">
          <img src="/assets/google.png" alt="" /> Sign in with Google
        </button>
        <button className="sign-in-btn">
          <img src="/assets/microsoft.png" alt="" /> Sign in with Microsoft
        </button>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter your Password" />
          <Link to={"/main-dash"}>Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
