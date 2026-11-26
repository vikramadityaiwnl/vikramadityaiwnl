import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "About Vikramaditya Dhumal";

export default function OpenGraphImage() {
  return createSocialImage(
    "curious by nature. a builder at heart.",
    "skills, education, and interests.",
  );
}
