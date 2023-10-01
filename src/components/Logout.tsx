import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    console.log("log out sucessfull!");
  };
  return (
    <div>
      <GoogleLogout
        clientId="278355168841-kccbmv3pnivdmp3vr4d8ddtd056jtbg1.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};
export default Logout;
