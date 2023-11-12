"use client";

import React, { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Input, Button, Label, Heading } from "ui";
import { type SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  const [showPwd, setShowPwd] = useState(false);

  const handleFormSubmit: SubmitHandler<LoginInputType> = (data) => {
    // eslint-disable-next-line no-console -- Allow for this
    console.log(data);
  };

  return (
    <Container>
      <LeftContent>
        <Swiper modules={[Pagination, A11y]} pagination={{ clickable: true }}>
          <SwiperSlide>
            <Image alt="" height={600} src="/img/image-2.jpeg" width={600} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" height={600} src="/img/image-1.jpeg" width={600} />
          </SwiperSlide>
          <SwiperSlide>
            <Image alt="" height={600} src="/img/image-3.jpeg" width={600} />
          </SwiperSlide>
        </Swiper>
      </LeftContent>
      <RightContent>
        <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
          <Heading>Masuk</Heading>
          <FormGroup>
            <Label htmlFor="companyId" size="sm">
              ID Perusahaan :
            </Label>
            <Input
              autoComplete="off"
              error={errors.companyId?.message}
              leftIcon="building-library"
              placeholder="Masukkan ID Perusahaan"
              {...register("companyId")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="username" size="sm">
              Id Pengguna :
            </Label>
            <Input
              autoComplete="off"
              error={errors.username?.message}
              leftIcon="user"
              placeholder="Masukkan Nama User"
              {...register("username")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password" size="sm">
              Kata Sandi :
            </Label>
            <Input
              autoComplete="off"
              error={errors.password?.message}
              eyeButton
              leftIcon="lock-closed"
              onEyeButtonClick={() => {
                setShowPwd(!showPwd);
              }}
              placeholder="Masukkan Password"
              type={showPwd ? "text" : "password"}
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
  height: "100vh",
});

const LeftContent = styled.div({
  width: "50%",
});

const RightContent = styled.div({
  width: "50%",
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
  backgroundColor: "#fff",
});

const FormGroup = styled.div({
  width: "360px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});
