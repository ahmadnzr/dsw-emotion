"use client";

import React from "react";
import styled from "@emotion/styled";
import { Button } from "ui";

const LoginPage = () => {
  return (
    <Container>
      <LeftContent>Left</LeftContent>
      <RightContent>
        <FormContainer>
          <H1>Masuk</H1>
          <FormGroup>
            <Label>ID Perusahaan :</Label>
            <InputContainer>
              <LeftIcon />
              <Input type="text" placeholder="Masukkan ID Perusahaan" />
              <RightIcon />
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <Label>Id Pengguna :</Label>
            <InputContainer>
              <LeftIcon />
              <Input type="text" placeholder="Masukkan ID Pengguna" />
              <RightIcon />
            </InputContainer>
          </FormGroup>
          <FormGroup>
            <Label>Kata Sandi :</Label>
            <InputContainer>
              <LeftIcon />
              <Input type="text" placeholder="Masukkan Kata Sandi" />
              <RightIcon />
            </InputContainer>
          </FormGroup>
          <Label>Lupa Kata Sandi ?</Label>
          <FormGroup>
            <Button width="full">Masuk</Button>
          </FormGroup>
          <Label>Belum punya akun ? Daftar</Label>
        </FormContainer>
      </RightContent>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div({
  display: "flex",
  minHeight: "100vh",
});

const LeftContent = styled.div({
  flex: 1,
});

const RightContent = styled.div({
  flex: 1,
  position: "relative",
});

const FormContainer = styled.form({
  width: "fit-content",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "15px",
  boxShadow: "0px 8px 10px 2px rgba(188, 200, 231, 0.40)",
});

const H1 = styled.h1({
  fontSize: "24px",
});

const FormGroup = styled.div({
  width: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const InputContainer = styled.div({
  padding: "11px 10px",
  display: "flex",
  gap: "5px",
  borderRadius: "10px",
  border: "1px solid #B3C1E7",
});

const LeftIcon = styled.div({
  width: "18px",
  height: "18px",
  backgroundColor: "aqua",
});

const RightIcon = styled.div({
  width: "18px",
  height: "18px",
  backgroundColor: "aqua",
});

const Input = styled.input({
  flex: 1,
  border: "none",
  fontSize: "15px",
  "&:focus": {
    outline: "none",
  },
});

const Label = styled.label({
  fontSize: "13px",
  letterSpacing: "0.13px",
});
