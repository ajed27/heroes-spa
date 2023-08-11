import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  
  const Navigate = useNavigate();
  const onLogin = ():void => {
    Navigate('/', {replace:true})
  }

  return (
    <div className="container mt-5" onClick={onLogin}>
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
