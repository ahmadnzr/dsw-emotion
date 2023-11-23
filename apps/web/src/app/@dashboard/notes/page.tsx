"use client";

import styled from "@emotion/styled";
import { Button, Colors, Heading, Icon, PageWrapper, Tag, Text } from "ui";

const Notes = () => {
  return (
    <PageWrapper pageTitle="Notes">
      <NoteContainer>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <NoteCard key={item}>
            <NoteHeader>
              <HeaderDetail>
                <Text color={Colors.neutral.medium} size="sm">
                  10 Feb 2024
                </Text>
                <TagContainer>
                  {[1, 2, 3].map((tag) => (
                    <Tag key={tag} size="sm">
                      React
                    </Tag>
                  ))}
                </TagContainer>
              </HeaderDetail>
              <Heading level="h4" size="lg" weight="semibold">
                Alamat Kos
              </Heading>
            </NoteHeader>
            <NoteContent>
              <Text tag="p">
                6C55+7P7, Gg. Puntodewo, Jaranan, Banguntapan, Kec. Banguntapan,
                Kabupaten Bantul, Daerah Istimewa Yogyakarta 55198
              </Text>
            </NoteContent>
            <NoteFooter>
              <ActionContainer>
                <IconContainer>
                  <Icon
                    color={Colors.primary.dark}
                    name="document-duplicate"
                    size="sm"
                  />
                </IconContainer>
                <IconContainer>
                  <Icon color={Colors.primary.dark} name="pencil" size="sm" />
                </IconContainer>
                <IconContainer>
                  <Icon color={Colors.error.medium} name="trash" size="sm" />
                </IconContainer>
              </ActionContainer>
              <Button variant="text">Lihat Detail</Button>
            </NoteFooter>
          </NoteCard>
        ))}
      </NoteContainer>
    </PageWrapper>
  );
};

export default Notes;

const NoteContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
});

const NoteCard = styled.div({
  padding: "15px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 5px 10px -3px rgba(0,0,0,0.1)",
});

const NoteHeader = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const HeaderDetail = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const IconContainer = styled.div({
  width: "24px",
  height: "24px",
  backgroundColor: "#EAF2FF",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const NoteContent = styled.div({
  marginTop: "5px",
});

const NoteFooter = styled.div({
  marginTop: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const TagContainer = styled.div({
  display: "flex",
  gap: "5px",
});

const ActionContainer = styled.div({
  display: "flex",
  gap: "5px",
});
