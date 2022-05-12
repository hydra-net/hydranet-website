# [Hydranet Brand Website](https://hydranet.ai/)

This is the brand website repo for Hydranet.

## 📒 Stack
- [React](https://reactjs.org)
- [NextJS](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 🔧 Setting up Local Development

Required:

- [Node v16](https://nodejs.org/download/release/latest-v16.x/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

```bash
$ git clone https://github.com/hydra-net/hydranet-website.git
$ cd hydranet-website

# install dependencies
$ yarn install

# launch dev server
$ yarn dev
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!


## 📁 Architecture/Layout
The app is written in [React](https://reactjs.org/) using [NextJS SSG](https://nextjs.org/) as wrapper for SSG.

The files/folder structure are

```
./pages/            // App page (currently only /)
├── index           // Home page
./src/
├── components/     // Reusable individual components, organized via the Atomic Design Pattern (Atoms,Molecules,Organisms,Templates)
├── constants/      // Constants
├── enums/          // Enums
├── helpers/        // Helper methods to use in the app
├── components/     // Reusable individual components
├── interfaces/     // Interfaces used accross the App
├── styles/         // Tailwind styles imports, fonts, globals and additional components css
...                 // Configurations files
```

## 🔨 ESLint & Prettier
Please configure in your IDE to map your ESlint to the configuration file `.eslintrc.json` and `.prettierrc.json`


## 🔄 Github Workflows

### Lint
Validate files by running a lint Action on each:
- remote push
- pull request

### Continuous deployment
Commits to the follow branches are automatically deployed to their respective URLs.
- main: https://hydranet.ai / PRD
- staging: https://staging.hydranet.ai / STG 
- develop: https://dev.hydranet.ai / DEV


## Trigger a manual export

```bash
$ yarn build

$ yarn export
```
You will get the content in the _out_ folder

## 🗣 Community
- [Join our Discord](https://discord.gg/D8ad7Evkkb)