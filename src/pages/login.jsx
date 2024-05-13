import React from "react";
import { useSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";
function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <p>Logged in as: {session.user.name}</p>
        <a href="/logout">Log out</a>
      </div>
    );
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Please sign in to continue</p>

      <a href="/api/auth/signin/github">Sign in with GitHub</a>
    </div>
  );
}
function LoginPageWithSession() {
  return (
    <SessionProvider>
      <LoginPage />
    </SessionProvider>
  );
}

export default LoginPageWithSession;
