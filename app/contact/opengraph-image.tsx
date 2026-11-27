import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "contact vikramaditya dhumal";

export default function OpenGraphImage() {
  return createSocialImage("have something in mind?", "let’s connect.");
}
