import React from "react";
import "./LoginPageStyle.css";
import { useState } from "react";
import { useEffect } from "react";

export default function LoginPage() {
  const [modal, setModal] = useState(false);
  const API = "https://212.83.191.99:50000/b1s/v2/Login";

  const login = async () => {
    try {
      const response = await fetch(API, {
        method: "POST",

        body: JSON.stringify({
          CompanyDB: "MEGA_TEST2",
          Password: "1234",
          UserName: "manager",
          Language: 24,
        }),
      });

      const dataJson = await response.json();
      console.log("response => ", dataJson);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    login();
  }, []);

  return <div></div>;
}
