"use client";

import styled from "@emotion/styled";

export default function Home() {
  return (
    <ContentWrapper>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iste quae
      corporis?
    </ContentWrapper>
  );
}

const ContentWrapper = styled.main({
  padding: "20px",
  position: "fixed",
  top: "80px",
  left: "200px",
  right: 0,
  bottom: 0,
  backgroundColor: "#F4F7FB",
});
