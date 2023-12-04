import { Button, PageWrapper } from "ui";

const Summary = () => {
  return (
    <PageWrapper pageTitle="Summary">
      <div>Hi Summary</div>
      <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
        <Button>Submit</Button>
        <Button shape="round">Submit</Button>
        <Button variant="text" shape="round">
          Submit
        </Button>
      </div>
    </PageWrapper>
  );
};

export default Summary;
