import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

function Login() {
  return (
    <div>
      <p>Email :</p>
      <KotakTeks />
      <p>Kata sandi : </p>
      <KotakTeks />
      <Tombol text="Login" />
    </div>
  );
}

export default Login;
