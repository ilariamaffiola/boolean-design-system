# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
#Boolean Design System


## Esempi di DS

 - https://www.bbc.com/gel/guidelines
 - https://www.wix.com/studio/blog/design-system-examples
 - https://fluent2.microsoft.design/
 -https://storybook.getbento.com/?selectedKind=Getting%20Started&selectedStory=Introduction&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel


## Tool per design-system
-https://storybook.js.org/docs
-https://docusaurus.io/

## Installiamo StoryBook

`npm create storybook@latest`

scegliamo come framework React e Vite quando ci viene chiesto il project tyoe oppure installiamo Vite e React manualmente con

`npm install --save-dev @storybook/react-vite`

In caso di errore di installazione, installiamo le dipendenze manualmente con 

`npm install vite react react-dom --save-dev`

Lanciando il comando `npm run storybook` ci verrà chiesto di scegliere un port per lo StoryBook, scegliamo 6006. 
Avviamo sul nostro browser la nostra prima pagina di StoryBook.

## Utilizzare TypeScript

`npm install @types/react @types/react-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript`

Creiamo nella root di progetto un file tsconfig.json con il seguente contenuto
````JSON
{
	"compilerOptions": {
		"target": "ES2020",
		"useDefineForClassFields": true,
		"lib": ["ES2020", "DOM", "DOM.Iterable"],
		"module": "ESNext",
		"skipLibCheck": true,
		"moduleResolution": "bundler",
		"allowImportingTsExtensions": true,
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx",
		"strict": true,
		"noUnusedLocals": true,
		"noUnusedParameters": true,
		"noFallthroughCasesInSwitch": true,
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true
	},
	"include": ["stories", ".storybook", "components"]
} 
```