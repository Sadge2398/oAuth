import { signIn } from "next-auth/react";

function GitHubLogin() {
  return <button type="button"
  onClick={() => signIn("github")}>
    Sign in with GitHub
    </button>;
}

export default GitHubLogin;
