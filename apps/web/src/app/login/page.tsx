"use client";

import React from "react";
import styled from "@emotion/styled";
import { Input, Button, Label, Heading } from "ui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface LoginInputType {
  companyId: string;
  username: string;
  password: string;
}

const schema = yup.object({
  companyId: yup.string().required("Req").min(5, "Minimal 5"),
  username: yup.string().required(),
  password: yup.string().required(),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit: SubmitHandler<LoginInputType> = (data) => {
    // eslint-disable-next-line no-console -- Allow for this
    console.log(data);
  };

  return (
    <Container>
      <LeftContent>Left</LeftContent>
      <RightContent>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading>Masuk</Heading>
          <FormGroup>
            <Label size="sm">ID Perusahaan :</Label>
            <Input
              autoComplete="off"
              error={errors.companyId?.message}
              leftIcon="building-library"
              placeholder="Masukkan ID Perusahaan"
              {...register("companyId")}
            />
          </FormGroup>
          <FormGroup>
            <Label size="sm">Id Pengguna :</Label>
            <Input
              autoComplete="off"
              error={errors.username?.message}
              leftIcon="user"
              placeholder="Masukkan Nama User"
              {...register("username")}
            />
          </FormGroup>
          <FormGroup>
            <Label size="sm">Kata Sandi :</Label>
            <Input
              autoComplete="off"
              error={errors.password?.message}
              leftIcon="lock-closed"
              placeholder="Masukkan Password"
              rightIcon="eye"
              type="password"
              {...register("password")}
            />
          </FormGroup>
          <Label size="sm">Lupa Kata Sandi ?</Label>
          <FormGroup>
            <Button type="submit" width="full">
              Masuk
            </Button>
          </FormGroup>
          <Label size="sm">Belum punya akun ? Daftar</Label>
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

const FormGroup = styled.div({
  width: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
