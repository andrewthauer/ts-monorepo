# TypeScript Monorepo Example

This project is a sample repo that is intended to demonstrate how a mono repo
can be created with multiple packages while preserving a consistent developer
experience across packages.

## Goals

- Provide separation of concerns through distinct `npm` packages.
- Allow for source maps debugging across all packages.
- Support TypeScript tooling across packages (e.g. Go to definition, refactor,
  etc.)
- Shared configurations and setup to consolidate setup.

## Features

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
  - Centralize & optimize dependencies
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
  - Better experience for monorepo style projects
- [TypeScript Path Mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
  - Type aliases to simulate importing of npm packages for local packages
- [TypeScript Incremental Builds](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html)
  - Speed up builds
- [Lerna](https://github.com/lerna/lerna)
  - Manage scripts & publishing for multiple modules.
