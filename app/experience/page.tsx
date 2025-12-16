import { Metadata } from "next";
import dynamic from "next/dynamic";

const ExperienceComponent = dynamic(
  () =>
    import("@/components/sections/Experience").then((m) => ({
      default: m.Experience,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Experience - Professional Work History",
  description:
    "Explore Anas Ashraf's professional experience as a Full Stack Developer and Backend Team Leader. View detailed work history, accomplishments, and technical contributions in web development.",
  alternates: {
    canonical: "https://hamdishehab.dev/experience",
  },
  openGraph: {
    title: "Professional Experience - Anas Ashraf",
    description:
      "Explore my professional journey and technical accomplishments as a Full Stack Developer and Backend Team Leader.",
    url: "https://hamdishehab.dev/experience",
    images: [
      {
        url: "/images/anas.png",
        width: 800,
        height: 800,
        alt: "Anas Ashraf Professional Experience",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ExperiencePage() {
  return (
    <PageWrapper backgroundVariant="experience">
      <ExperienceComponent />
    </PageWrapper>
  );
}
