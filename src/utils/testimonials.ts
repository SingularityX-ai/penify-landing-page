import { StaticImageData } from "next/image";
import janeDoe from "public/images/testimonials/Jane Doe.webp";

interface TestimonialsType {
  name: string;
  role: string;
  company: string;
  avatar: StaticImageData;
  content: string;
}

export const testimonials: TestimonialsType[] = [
  {
    name: "Jane Doe",
    role: "Developer",
    company: "TechCorp",
    avatar: janeDoe,
    content:
      "This AI-powered tool has revolutionized our development process. It's like having an extra team member who never sleeps!",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    company: "TechCorp",
    avatar: janeDoe,
    content:
      "The productivity gains we've seen since adopting this tool are incredible. It's a game-changer for any dev team.",
  },
  {
    name: "Jane Doe",
    role: "Developer",
    company: "TechCorp",
    avatar: janeDoe,
    content:
      "I was skeptical about AI tools, but this one has truly impressed me. It's intuitive, powerful, and constantly improving.",
  },
];
