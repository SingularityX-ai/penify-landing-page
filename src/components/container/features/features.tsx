import Image from "next/image";
import { forwardRef } from "react";
import prReview from "@public/images/features/prReview.webp";
import diffDocs from "@public/images/features/diffDocs.webp";
import archDocs from "@public/images/features/archDocs.webp";
import apiDocs from "@public/images/features/apiDocs.webp";
import hosting from "@public/images/features/hosting.webp";
import multiLanguage from "@public/images/features/multiLanguage.webp";
import { IconShare3 } from "@tabler/icons-react";

const FEATURES_LIST = [
  {
    title: "PR Documentation",
    description:
      "Automates the creation of comprehensive summaries for Pull Requests and Code Reviews",
    list: [
      "Analyzes the changes made in the code and generates a detailed summary",
      "Ensures all stakeholders have a clear understanding of the changes",
      "Eliminates the need for stakeholders to dive deep into the code themselves",
    ],
    img: prReview,
    link: "https://github.com/Snorkell-ai/pokerogue/pull/5",
  },
  {
    title: "Documentation Update",
    description:
      "Automatically updates documentation when code changes are merged into the main branch.",
    list: [
      "Detects merged pull requests in the main/master branch",
      "Scans changes in the merged pull request",
      "Identifies documentation affected by code changes",
      "Generates a new pull request with updated documentation",
      "Ensures synchronization between codebase and documentation",
    ],
    img: diffDocs,
    link: "https://github.com/Snorkell-ai/pokerogue/pull/1/files",
  },

  {
    title: "Repository Documentation",
    description:
      "Automatically generates comprehensive documentation for an entire Git repository.",
    list: [
      "Analyzes the codebase, including all files and directories",
      "Creates a detailed and organized documentation",
    ],
    img: diffDocs,
    link: "https://github.com/Snorkell-ai/xeno-rat/pull/7/files",
  },

  {
    title: "Architecture Documentation",
    description:
      "Creates an interactive architecture diagram of a repository, visualizing module interactions and system structure.",
    list: [
      "Creates an HTML page hosted at a URL that displays module interactions and provides a high-level overview of system structure",
      "Useful for onboarding new team members and for conducting thorough code reviews.",
    ],
    img: archDocs,
    link: "https://xeno-rat-snorkell-ai-6.netlify.app/",
  },

  {
    title: "API Documentation",
    description:
      "Generates HTML page for your hosted Open APIs, providing a comprehensive and interactive documentation site.",
    list: [
      "Details all available endpoints, request parameters, response formats, authentication methods, and code blocks",
      "Easier for developers to integrate with their APIs",
      "Documentation is auto-generated and continuously updated to reflect the latest changes in the API.",
    ],
    img: apiDocs,
    link: "https://snorkell.apidocumentation.com/reference#tag/github_app/post/api/app/github/webhook",
  },

  {
    title: "Automated Hosting",
    description:
      "API Documentation and Architecture Documentation are hosted on a public URL.",
    list: [
      "Allows you to share the documentation with your team members, stakeholders, and clients without any additional setup.",
      "The documentation is continuously updated to reflect the latest changes in the codebase, ensuring that everyone has access to the most up-to-date information.",
    ],
    img: hosting,
    link: null,
  },
  {
    title: "Multiple Languages Support",
    description:
      "Supports multiple programming languages, including Python, JavaScript, Java, Typscript, C, CSharp and Kotlin.",
    list: [
      "Analyze code written in different languages and generate comprehensive documentation for each of them.",
      "Ensures that Penify can be used across different projects and teams, regardless of the programming languages they use.",
    ],
    img: multiLanguage,
    link: null,
  },
];

const Features = forwardRef<HTMLDivElement>(function (_, ref) {
  return (
    <section className="feature-wrapper" ref={ref}>
      <div className="feature-wrapper-bordered">
        <div className="feature-title">
          <span>Reach goals that matter</span>
          <h2 className="h2 mb-3">One product, unlimited solutions</h2>
          <p>
            Streamline documentation across your entire development lifecycle
            with AI-powered automation for code, APIs, and architecture.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES_LIST.map(
            ({ title, description, list, img, link }, index) => (
              <div
                className="feature-grid-item"
                key={`feature-list-${crypto.randomUUID()}`}
              >
                <div
                  className={`feature-img ${index % 2 === 0 ? "order-md-1" : ""}`}
                >
                  <Image
                    src={img}
                    alt="feature 01"
                    loading="lazy"
                    width={540}
                  />
                </div>

                <div className="feature-content">
                  <div
                    className={`p-space ${
                      index % 2 === 0 ? "pr-space" : "pl-space"
                    }`}
                  >
                    <h3 className="h3 mb-2">
                      {title}

                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconShare3 color="#e0013f" />
                        </a>
                      )}
                    </h3>
                    <p className="feature-desc">{description}</p>
                    <ul>
                      {list.map((item) => (
                        <li key={`feature-item-${crypto.randomUUID()}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
});

export default Features;
