# Snorkell Landing Page

A modern, mobile-friendly and responsive landing page built with Next.js, TypeScript and Tailwind CSS, featuring Docker support for easy development

<br>

## Tech Used

- [Next.js (Page router)](https://nextjs.org/docs): A popular React framework for building server-side rendered and statically generated websites.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds optional static typing and other features for building large-scale applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building custom designs without writing custom CSS.
- [Docker](https://www.docker.com/): A containerization platform for building, shipping, and running applications in containers.
- [React Flow](https://reactflow.dev/): A library for building interactive node-based UIs, editors, flow diagrams, and more.
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/): A library for animating elements on scroll.
- [React Hook Form](https://react-hook-form.com/): A library for building forms in React with ease
- [React Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed): A library for embedding YouTube videos in React with minimal dependencies.
- [React Scroll](https://github.com/fisshy/react-scroll): A library for handling scroll events in React.
- [React Tiny Popover](https://github.com/alexkatz/react-tiny-popover): A library for creating small, customizable popovers in React.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/): A library for displaying toast notifications in React.
- [OpenCage Geocoding API](https://opencagedata.com/tutorials): API endpoint for reverse geocoding. We are using it to get location info based on user's geographic coordinates and extracting currency code for users location.

<br>

## Getting Started

### Setup Yarn

Our repository has migrated from Yarn v1 to v4 for better performance and improved dependency management. Follow these steps to set up Yarn v4 for this project:

1. Ensure you have Node.js installed (version 16.10 or later recommended).
2. Enable Corepack (comes with Node.js by default): `corepack enable`
3. Navigate to the project directory: `cd /snorkell-landing-page`
4. Set Yarn to the latest stable version (v4): `yarn set version stable`
5. Install dependencies: `yarn install`


### Local Development

1. Clone the repository: `git clone git@github.com:SingularityX-ai/snorkell-landing-page.git`
2. Install the dependencies: `yarn install`
3. Start the development server: `yarn dev`
4. Open your browser and navigate to `http://localhost:3000/`

### Docker Development

1. Build the Docker image: `docker compose build`
2. Start the Docker container: `docker compose up`
3. Open your browser and navigate to `http://localhost:3000/`


<br>

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to contribute to this project.
