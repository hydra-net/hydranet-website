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
$ git clone https://github.com/hydranet/hydranet-website.git
$ cd hydranet-website

# install dependencies
$ yarn install

# launch dev server
$ yarn dev
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!
://docs.github.com/en/get-started/quickstart/fork-a-repo).

## 📁 Architecture/Layout
The app is written in [React](https://reactjs.org/) using [NextJS SSG](https://nextjs.org/) as wrapper for SSG.

The files/folder structure are

```
./pages/            // App page (currently only /)
├── [lang]/         // I18n pages 
├── index           // Converted to React.FC to redirect to i18n pages 
./src/
├── components/     // Reusable individual components, organized via the Atomic Design Pattern (Atoms,Molecules,Organisms,Templates)
├── constants/      // Constants
├── context/        // App ContextApi, currently only handle the I18n
├── enums/          // Enums
├── helpers/        // Helper methods to use in the app
├── components/     // Reusable individual components
├── hooks/          // Shared reactHooks (currently the useTranslation)
├── interfaces/     // Interfaces used accross the App
├── styles/         // Tailwind styles imports, fonts, globals and additional components css
├── themes/         // Style sheets for dark vs light theme
└── translations/   // Application translations, i18n config
...                 // Configurations files
```


## 🌍 Translations
Since NextJS doesn't support the I18n module for SSG(next export), we had to come up with a _custom solution_ for our translations

We use browser language detection for this project, if we can't find your browser language or your language is not supported,
the fallback will be in the **en** locale and you will be redirect to **/en**.

#### Translations location
Each locale has a namespace under `/translations/locales/{lang}/{namespace}`.
All locale namespace are then imported and exported in the `index.ts` of the folder mentioned before.

#### Namespaces for translations declarations (Interfaces)
The Interfaces for the namespaces have been centralized in `translations/namespaces.ts`.

The **ITranslations** interface regroup each namespace Interfaces.
A namespace interface will contain all the keys necessary/available in that particular namespace

#### Localization Type
The Localization type is the one that will be fed to the Context.Provider and thus, to the pages


### How to access a translation in a component ?
Import the useTranslation hook, it needs 2 args: 
1. The namespace we want to access
2. The key present in the namespace

If you fail to provide both of them, only a warn in the console will pop and an empty string will be returned as translation. 
```typescript jsx
const {t, locale} = useTranslation();
...
<p>{t('aNamespace', 'aKey')}</p>
```

### How to edit a translation ?
Open the `/translations/locales/{lang}/{namespace}` concerned, edit the value, you're good.

### How to edit a translation key ?
Open the `/translations/locales/{lang}/{namespace}` concerned, edit the key, and repeat for each locale.
The Typescript validation will then trigger, you have to open the `translations/namespaces.ts` and edit the key of the interface concerned as well, then you're good.

_Don't forget to edit in the component code as well with the new key_

### How to add a new translation ?
Open the `/translations/locales/{lang}/{namespace}` concerned, add the key:value pair, repeat for each locale and then add the key to the `/translations/namespaces.ts` relevant interface.

### How to add a new namespace ?
Create a new interface in `/translations/namespace.ts` following this naming: **I**MyNameSpaceName**Translations**, add the relevant keys needed and add the new interface namespace reference in ITranslations (same file) 
```typescript
export interface ITranslations {
    common: ICommonTranslations;
    landing: ILandingTranslations;
    yourNewNamespace: IMyNewNamespaceTranslations;
}
```
Create a new file under `/translations/locales/{lang}/`, declare the object with a type of the freshly created interface (see about/common files to have an idea)
```typescript
const myNewNamespace: ImyNewNamespaceTranslations = {
    aKey: 'aValue',
    ...
}
export default myNewNamespace
```
Repeat for each locale, you're good.

When new texts are created or existing texts are modified in the application please leave a message in the OlympusDao app-translation channel for the translators to translate them.

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
- staging: https://stg.hydranet.ai / STG (IN PROGRESS)
- develop: https://dev.hydranet.ai / DEV (IN PROGRESS)


## Trigger a manual export

```bash
$ yarn build

$ yarn export
```
You will get the content in the _out_ folder

## 🗣 Community
- [Join our Discord](https://discord.gg/vkpzTucY)