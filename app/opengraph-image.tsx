import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "Vikramaditya Dhumal";

export default function OpenGraphImage() {
  return createSocialImage(
    "building things that feel right.",
    "thoughtful, useful digital products.",
  );
}
