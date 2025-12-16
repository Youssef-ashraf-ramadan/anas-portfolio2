import { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageWrapper } from "@/components/PageWrapper";

const AboutComponent = dynamic(
  () =>
    import("@/components/sections/About").then((m) => ({ default: m.About })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "About Me - Anas Ashraf",
  description:
    "Learn more about Anas Ashraf, a passionate Full Stack Web Developer specializing in PHP, Laravel, and ERP systems. Discover my journey, skills, and professional background.",
  alternates: {
    canonical: "https://hamdishehab.dev/about",
  },
  openGraph: {
    title: "About Me - Anas Ashraf | Full Stack Developer",
    description:
      "Passionate Full Stack Web Developer skilled in PHP, Laravel, ERP systems, and modern web development. Learn about my journey and expertise.",
    url: "https://hamdishehab.dev/about",
    images: [
      {
        url: "/images/anas.png",
        width: 800,
        height: 800,
        alt: "About Anas Ashraf",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <PageWrapper backgroundVariant="about">
      <AboutComponent />
    </PageWrapper>
  );
}
