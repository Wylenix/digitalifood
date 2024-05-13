import React from "react";
import { useSession } from "next-auth/react";

const ProtectedRoute = () => {
  const { data: session } = useSession();

  if (!session) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Protected Route</h1>
      <p>You are logged in as: {session.user.name}</p>
    </div>
  );
};

export default ProtectedRoute;
