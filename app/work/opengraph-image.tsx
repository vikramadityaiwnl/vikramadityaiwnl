import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "work by vikramaditya dhumal";

export default function OpenGraphImage() {
  return createSocialImage(
    "ideas made into something real.",
    "projects, experiments, and collaborations.",
  );
}
