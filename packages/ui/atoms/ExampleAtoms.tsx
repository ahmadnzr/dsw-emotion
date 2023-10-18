import * as React from "react";

interface ExampleAtomProps {
  children?: React.ReactNode;
}

export const ExampleAtoms = ({ children }: ExampleAtomProps) => {
  return (
    <div>
      <h1>ExampleAtoms</h1>
      {children}
    </div>
  );
};
