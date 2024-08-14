interface FaqsItemsTypes {
  title: string;
  text: string;
  active?: boolean;
}

export const faqsItems: FaqsItemsTypes[] = [
  {
    title: "What is Penify (previously Snorkell.ai)?",
    text: "Penify automatically generates and updates your GitHub project docstrings whenever a pull request is merged. This ensures your docstrings are always current with your codebase.",
  },
  {
    title: "What is the difference between Penify and PyDoc?",
    text: "PyDoc is exclusively for Python and can only generate syntactic docstrings. In contrast, Penify generates human-readable and understandable docstrings for multiple languages, including Python, JavaScript, TypeScript, Java, C#, and Kotlin.",
  },
  {
    title:
      "What programming languages are currently supported by Penify for generating docstrings?",
    text: "Penify currently supports the following programming languages: Python, JavaScript, TypeScript, Java, C, C#, and Kotlin.",
  },
  {
    title:
      "Does Penify retain the code on a local server in order to generate the docstrings?",
    text: "No, Penify does not retain your code on local storage. Unlike tools such as Sonar, it retrieves the latest commit files and dynamically creates the docstrings, ensuring the security of your code remains within your GitHub repository.",
  },
  {
    title:
      "How does Penify handle inaccuracies in the automatically generated docstrings?",
    text: "If the docstring produced by Penify contains errors, users can review and suggest corrections through the generated pull request before it is merged. This process ensures that any inaccuracies can be addressed, keeping the docstrings accurate and reliable.",
  },
  {
    title: "Details on Fees and Pricing?",
    text: `
                <a href="/pricing">Click here</a> to get details on pricing. <br />
    
                <a href="https://production-gateway.snorkell.ai/api/toc#fees-and-pricing" target="_blank" rel="noopener noreferrer">Click here</a> to view details on the Pricing Policy. <br />

                <a href="https://production-gateway.snorkell.ai/api/refund-policy" target="_blank" rel="noopener noreferrer">Click here</a> to view the Refund and Cancellation Policy. <br /> <br />

                If you have any questions, you can always email us at <a href="mailto:support@penify.dev">support@penify.dev</a>
        `,
  },
];
