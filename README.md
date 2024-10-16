# My Project

This workspace contains source code for My Project project.
Each app in the `apps` directory has own `README` where you can find more details about it.

## Getting started

1. Install dependencies: `npm install`
1. Launch desired app for development:

```sh
npx nx start {app-name}
```

Or navigate to an app directory to run it as described in `README`.

## Resources

Below are links to tools and services used in this project:

- [Tasks]() (will be added later)
- [Design]() (will be added later)
- [Expo]() (will be added later)
- [Google Play Console]() (will be added later)
- [App Store Connect]() (will be added later)
- [Firebase]() (will be added later)
- [API Documentation]() (will be added later)
- [Laravel Telescope]() (will be added later)
- [Sentry]() (will be added later)

## Repository management

This workspace uses [Nx](https://nx.dev/getting-started/intro) for repository management and code generation.
You can install [Nx extension](https://nx.dev/getting-started/editor-setup) for your code editor.

### Code generation

We use [custom Nx generators](https://github.com/RonasIT/nx-generators) plugin for code generation.\
Run `npx nx list @ronas-it/nx-generators` to view a list of available generators in the plugin.\
Each generator accepts the `--help` argument to show instructions.

#### Generate libraries

```sh
npx nx g react-lib
npx nx g react-lib {app-name|shared}/{context?}/{type}/{name}
```

Examples:

```sh
npx nx g react-lib mobile/account/features/profile-settings
# generate a "profile-settings" feature library in "account" context for "mobile" app

npx nx g react-lib shared/ui/ui-kit
# generate a "ui-kit" ui-library shared between all apps
```

#### Generate components

- `npx nx g react-component` - generate a root component in some library
- `npx nx g react-component --name=AppButton --subcomponent` - generate a library sub-component.

#### Generate apps

- `npx nx g expo-app` - generate new RN Expo app

### Running tasks

To execute tasks with Nx use the following syntax: `npx nx <target> <project> <...options>`.\
You can also run multiple targets: `npx nx run-many -t <target1> <target2>`.\
Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Dependencies management

This repository uses [NPM Workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) to manage dependencies.
Dependencies that used in `libs` should be listed both in root and app's `package.json`.

### Installing dependencies

Run the following scripts in the repository root:

- `npm i {some-package} -w {app-name} -iwr` - install some package for particular app and for the whole repository
- `npm i {some-package} -ws -iwr` - install some package for all apps and including root one `package.json`

You can also navigate to an app directory and install package there:

- `npm i {some-package} -iwr`

### Uninstalling dependencies

The same rules apply to removing dependencies:

- `npm uni {some-package} -w {app-name} -iwr` - uninstall some package for particular app and for the whole repository
- `npm uni {some-package} -ws -iwr` - uninstall some package for all apps and including root `package.json`

### Syncing dependencies

To check consistency of packages versions across workspaces run the following command in the project root:

- `npm run deps:sync`

After that check the changes and run `npm i` to install adjusted versions.

## Code checks

This project has pre-configured linting and formatting rules with pre-commit hook.
You can execute these commands for the whole project manually:

- `npm run lint` - run necessary code checks
- `npm run format` - run code autoformat
