# Landing Page v2.0

Welcome to the repository for Snorkell.ai landing page v2, a sleek, modern and responsive landing page built with Next.js, TypeScript and Bootstrap.

## Tech Stack Used

- **Next.js**: For server-side rendering and static site generation.
- **Bootstrap v5**: For styling responsive and mobile friendly UI components.
- **TypeScript**: For strong typing and modern JavaScript features.

## Getting Started

These instructions will get you a copy of the project for running on your local machine for development and testing purpose.

### Requirements

Before you begin, ensure you have the following installed:

- Node.js (>=18)
- Modern browser (Google Chrome | Mozilla Firefox)

### Installation

1. Clone the repository:

```bash
$ git clone https://github.com/SingularityX-ai/snorkell-landing-page.git
```

<br>

2. Install NPM Packages:

```bash
$ npm install
```

<br>

3. Run the development server:

```bash
$ npm run dev
```

The site should now be running on `http://localhost:3000`

<br>

### Building for Production

To build the project and run it in production, you can use the following commands:

```bash
$ npm run build
```

The above command generates an `out` directory which can be served using any static hosting service or using `serve`

To install `serve` and server the production build, run:

```bash
$ npm install -g serve@latest
$ npm run prod-test
```

By default, `serve` will listen on `http://localhost:3000`. Open your browser and go to this address to see our landing page in action.

<br>

## Contribution Guidelines

Please follow these guidelines to contribute to this project:

1. **Communication**: Engage with project maintainers before starting significant work to align with project's roadmap.

2. **Branch**: Create a new branch for your changes.

3. **Testing**: Fully test any code changes you make in your local machine as well as prod-test.

4. **Commit Messages**: Write descriptive commit messages.

5. **Pull Request**: Upon completion, raise a pull request against the `main` branch in the following GitHub repository.

6. **Code Review**: Wait for code review by project maintainers.

7. **Merging**: After review, if your changes are approved, they will be merged into the `main` branch.

<br>

### Continuous Integration and Deployment

Our project utilizes Azure GitHub Actions for Continuous Integration and Deployment. Here's what happens after your code is merged:

1. **Automated Build**: Each new commit to the `main` branch triggers an automated build process through Azure GitHub Actions.

2. **Continuous Deployment**: Upon a successful build, the changes are automatically deployed to the main website.

3. **Live Updates**: Your contributions will be reflected on the live site shortly after the deployment completes.

This CI/CD pipeline ensures that our main website is always up-to-date with the latest changes and improvements. Your adherence to these guidelines ensures a smooth workflow for everyone involved.
