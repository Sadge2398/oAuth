import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script'

const Login = () => {
  const onSuccess = (res: any) => {
    console.log("login success !", res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log("login failed !", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId="278355168841-kccbmv3pnivdmp3vr4d8ddtd056jtbg1.apps.googleusercontent.com"
        onSuccess={onSuccess}
        onFailure={onFailure}
        buttonText="Login"
        isSignedIn={true}
      />
    </div>
  );
};
export default Login;
