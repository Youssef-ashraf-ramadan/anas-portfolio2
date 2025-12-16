import { MetadataRoute } from "next";
import { personalInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalInfo.name} - Full Stack Developer Portfolio`,
    short_name: "Anas Dev",
    description:
      "Professional Full Stack Developer specialized in PHP, Laravel, and ERP systems",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/images/anas.png",
        sizes: "32x32 64x64 128x128 192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
