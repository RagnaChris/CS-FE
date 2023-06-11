import { Container } from "@mantine/core";
import Head from "next/head";

import { useState } from "react";

export default function LandingPage() {
  const [selectedMethod, setSelectedMethod] = useState("signin");

  const handleMethodChange = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <Container>
        
    </Container>
  );
}
