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
        path: "components/atoms/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "components/atoms/index.tsx",
        pattern: /\n*$/,
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
        path: "components/molecules/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "components/molecules/index.tsx",
        pattern: /\n*$/,
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
        path: "components/organisms/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "append",
        path: "components/organisms/index.tsx",
        pattern: /\n*$/,
        template: 'export * from "./{{pascalCase name}}";',
      },
    ],
  });
}
