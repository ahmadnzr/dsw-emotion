import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const ExampleOrganisms = ({ children }: Props) => {
  return (
    <div>
      <h1>ExampleOrganisms</h1>
      {children}
    </div>
  );
};
