import React from "react";
import Link from "next/link";

import { Button } from "react-bootstrap";

const LoginComponents = () => {
  return (
    <>
      <Link href="/register">
        <Button>Register</Button>
      </Link>
    </>
  );
};

export default LoginComponents;
