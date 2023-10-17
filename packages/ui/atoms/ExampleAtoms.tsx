import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const ExampleAtoms = ({ children }: Props) => {
  return (
    <div>
      <h1>ExampleAtoms</h1>
      {children}
    </div>
  );
};
