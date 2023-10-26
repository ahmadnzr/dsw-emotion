import * as React from "react";

interface ExampleOrganismsProps {
  children?: React.ReactNode;
}

export const ExampleOrganisms = ({ children }: ExampleOrganismsProps) => {
  return (
    <div>
      <h1>ExampleOrganisms</h1>
      {children}
    </div>
  );
};
