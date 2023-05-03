import React, { useLayoutEffect, useState } from "react";

export const ProtectRouter = ({ children }) => {
  const [authorized, setAuthorized] = useState(false);

  useLayoutEffect(() => {
    const userInfoStorage = JSON.parse(localStorage.getItem("userInfoStorage"));
    if (userInfoStorage && userInfoStorage.role === "ADMIN") {
      setAuthorized(true);
    } else {
      window.alert("NOT AUTHORIZED USER");
      window.location.replace("/");
    }
  });

  if (authorized) {
    return children;
  }
};
