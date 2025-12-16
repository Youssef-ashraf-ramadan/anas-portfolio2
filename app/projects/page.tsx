import { Metadata } from "next";
import dynamic from "next/dynamic";

const ProjectsComponent = dynamic(
  () =>
    import("@/components/sections/Projects").then((m) => ({
      default: m.Projects,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description:
    "Explore my portfolio of web development projects built with React.js, Next.js, TypeScript, and Tailwind CSS. Showcasing real-world applications including travel apps, movie platforms, and educational tools.",
  alternates: {
    canonical: "https://hamdishehab.dev/projects",
  },
  openGraph: {
    title: "Projects Portfolio - Hamdi Shehab | Front-End Developer",
    description:
      "Explore my portfolio of modern web applications built with React.js, Next.js, and cutting-edge technologies.",
    url: "https://hamdishehab.dev/projects",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Hamdi Shehab Projects Portfolio",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ProjectsPage() {
  return (
    <PageWrapper backgroundVariant="projects">
      <ProjectsComponent />
    </PageWrapper>
  );
}
