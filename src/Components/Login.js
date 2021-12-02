import React from "react";
import { Div } from "../Elements/StylesLogin";

const Login = () => {
  return (
    <Div>
      <section>
        <p>E-mail</p>
        <input placeholder="xxxxx@gmail.com"/>
        <p>Password</p>
        <input placeholder="xxxxxxxx"/>
      </section>

    </Div>
  );
};

export default Login;
