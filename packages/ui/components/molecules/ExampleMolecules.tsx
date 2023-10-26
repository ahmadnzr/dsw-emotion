import * as React from "react";

interface ExampleMoleculesProps {
  children?: React.ReactNode;
}

export const ExampleMolecules = ({ children }: ExampleMoleculesProps) => {
  return (
    <div>
      <h1>ExampleMolecules</h1>
      {children}
    </div>
  );
};
