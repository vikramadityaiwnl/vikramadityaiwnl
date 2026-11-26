import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "Contact Vikramaditya Dhumal";

export default function OpenGraphImage() {
  return createSocialImage("have something in mind?", "let’s connect.");
}
