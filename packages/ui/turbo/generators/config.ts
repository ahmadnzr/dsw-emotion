import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("atoms", {
    description: "Add new atom component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "atoms/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "atoms/index.tsx",
        // pattern: /(?<insertion>\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });

  plop.setGenerator("molecules", {
    description: "Add new molecules component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "molecules/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "molecules/index.tsx",
        // pattern: /(?<insertion>\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });

  plop.setGenerator("organisms", {
    description: "Add new organisms component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "organisms/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "organisms/index.tsx",
        // pattern: /(?<insertion>\/\/ component exports)/g,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
}
