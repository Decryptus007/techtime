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

To run the app in a Docker container, you need to have Docker installed on your machine. If you're on Linux, you may need to grant permission to Docker by prepending sudo to your Docker commands.

### macOS

If you're using macOS, you can install Docker Desktop to run Docker containers. Once you have Docker Desktop installed, you can build and run the Docker container using the following commands:

`docker build -t techtime .`
`docker run -p 5173:5173 techtime`

### Windows
If you're using Windows, you can install Docker Desktop to run Docker containers. Once you have Docker Desktop installed, you can build and run the Docker container using the following commands:

`docker build -t techtime .`
`docker run -p 5173:5173 techtime`

Note that if you're using PowerShell, you may need to use the & operator to run the Docker commands:

`& docker build -t techtime .`
`& docker run -p 5173:5173 techtime`

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
