import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const ExampleMolecules = ({ children }: Props) => {
  return (
    <div>
      <h1>ExampleMolecules</h1>
      {children}
    </div>
  );
};
