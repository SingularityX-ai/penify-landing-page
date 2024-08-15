import prReview from "public/images/features/prReview.webp";
import diffDocs from "public/images/features/diffDocs.webp";
import archDocs from "public/images/features/archDocs.webp";
import apiDocs from "public/images/features/apiDocs.webp";
import hosting from "public/images/features/hosting.webp";
import multiLanguage from "public/images/features/multiLanguage.webp";

interface FeaturesTypes {
  title: string;
  text: string;
  img: any;
  href: string | null;
  children: string[];
}

export const featureItems: FeaturesTypes[] = [
  {
    title: "PR Documentation",
    text: "Automates the creation of comprehensive summaries for Pull Requests and Code Reviews",
    img: prReview,
    href: "https://github.com/Snorkell-ai/pokerogue/pull/5",

    children: [
      "Analyzes the changes made in the code and generates a detailed summary",
      "Ensures all stakeholders have a clear understanding of the changes",
      "Eliminates the need for stakeholders to dive deep into the code themselves",
    ],
  },
  {
    title: "Documentation Update",
    text: "Automatically updates documentation when code changes are merged into the main branch.",

    img: diffDocs,
    href: "https://github.com/Snorkell-ai/pokerogue/pull/1/files",
    children: [
      "Detects merged pull requests in the main/master branch",
      "Scans changes in the merged pull request",
      "Identifies documentation affected by code changes",
      "Generates a new pull request with updated documentation",
      "Ensures synchronization between codebase and documentation",
    ],
  },

  {
    title: "Repository Documentation",
    text: "Automatically generates comprehensive documentation for an entire Git repository.",

    img: diffDocs,
    href: "https://github.com/Snorkell-ai/xeno-rat/pull/7/files",

    children: [
      "Analyzes the codebase, including all files and directories",
      "Creates a detailed and organized documentation",
    ],
  },

  {
    title: "Architecture Documentation",
    text: "Creates an interactive architecture diagram of a repository, visualizing module interactions and system structure.",

    img: archDocs,
    href: "https://xeno-rat-snorkell-ai-6.netlify.app/",

    children: [
      "Creates an HTML page hosted at a URL that displays module interactions and provides a high-level overview of system structure",
      "Useful for onboarding new team members and for conducting thorough code reviews.",
    ],
  },

  {
    title: "API Documentation",
    text: "Generates HTML page for your hosted Open APIs, providing a comprehensive and interactive documentation site.",

    img: apiDocs,
    href: "https://snorkell.apidocumentation.com/reference#tag/github_app/post/api/app/github/webhook",
    children: [
      "Details all available endpoints, request parameters, response formats, authentication methods, and code blocks",
      "Easier for developers to integrate with their APIs",
      "Documentation is auto-generated and continuously updated to reflect the latest changes in the API.",
    ],
  },

  {
    title: "Automated Hosting",
    text: "API Documentation and Architecture Documentation are hosted on a public URL.",

    img: hosting,
    href: null,

    children: [
      "Allows you to share the documentation with your team members, stakeholders, and clients without any additional setup.",
      "The documentation is continuously updated to reflect the latest changes in the codebase, ensuring that everyone has access to the most up-to-date information.",
    ],
  },
  {
    title: "Multiple Languages Support",
    text: "Supports multiple programming languages, including Python, JavaScript, Java, Typscript, C, CSharp and Kotlin.",

    img: multiLanguage,
    href: null,

    children: [
      "Analyze code written in different languages and generate comprehensive documentation for each of them.",
      "Ensures that Penify can be used across different projects and teams, regardless of the programming languages they use.",
    ],
  },
];
