import KotakTeks from "./KotakTeks";
import Tombol from "./Tombol";

function Login() {
  return (
    <div>
      {/* <p>Email :</p> */}
      <KotakTeks ph="Email" />
      {/* <p>Kata sandi : </p> */}
      <KotakTeks ph="Kata Sandi" />
      <Tombol text="Login" />
    </div>
  );
}

export default Login;
