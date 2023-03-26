# TechTime React App

This is a simple React app created with Vite, a build tool for modern web development.

## Installation

To install the dependencies for this project, run the following command:

`yarn install`

## Development

To start the development server, run the following command:

`yarn dev`

This will start the development server on `http://localhost:5173`.

## Building

To build the production-ready version of the app, run the following command:

`yarn build`

This will create a `dist` directory in the root of the project, containing the optimized and minified version of the app.

## Previewing

To preview the production-ready version of the app, run the following command:

`yarn preview`

This will start a local server and open the built app in your default browser.

## Docker

This app also comes with a Dockerfile that can be used to build and run the app in a container. To build the Docker image, run the following command:

`docker build -t techtime .`

This will build the Docker image with the tag `techtime`. To run the app in a Docker container, run the following command:

`docker run -p 5173:5173 techtime`

This will start a Docker container with the app running on port `5173`.

## Dependencies

This app uses the following dependencies:

- [Flowbite](https://github.com/flowbite/flowbite) - A modern CSS framework for faster and better responsive web development.
- [Flowbite React](https://github.com/flowbite/flowbite-react) - A React implementation of Flowbite.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React DOM](https://reactjs.org/docs/react-dom.html) - The entry point to the DOM and server renderers for React.
- [Swiper](https://swiperjs.com/) - A modern mobile touch slider with hardware accelerated transitions and amazing native behavior.

## Dev Dependencies

This app uses the following dev dependencies:

- [@types/react](https://www.npmjs.com/package/@types/react) - TypeScript definitions for React.
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - TypeScript definitions for React DOM.
- [@vitejs/plugin-react](https://github.com/vitejs/vite/tree/main/packages/plugin-react) - A Vite plugin for React.
- [Autoprefixer](https://github.com/postcss/autoprefixer) - A plugin to parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website.
- [PostCSS](https://postcss.org/) - A tool for transforming CSS with JavaScript plugins.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Vite](https://vitejs.dev/) - A fast development server and build tool for modern web development.
