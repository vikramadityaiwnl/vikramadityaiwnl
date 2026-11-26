import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { createSocialImage, socialSize } from "@/lib/social-image";

export const size = socialSize;
export const contentType = "image/png";
export const alt = "A project by Vikramaditya Dhumal";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return createSocialImage(project.name, project.description);
}
