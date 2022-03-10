import React from "react";
import { Navigate } from "react-router-dom";

import { useAuthorization } from "../../contexts/AuthorizationContext";

type Props = {
  children: JSX.Element;
};

const AuthorizationProtected = ({ children }: Props) => {
  const { token } = useAuthorization();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AuthorizationProtected;
