import { redirect } from "next/navigation";
import { getProjectById } from "@/lib/projects";

interface RedirectParams {
  id: string;
}

export default async function ProjectRedirect({
  params,
}: {
  params: RedirectParams;
}) {
  // Safely access params properties
  const id = params?.id;

  if (!id) {
    redirect("/projects");
  }

  const project = getProjectById(id);

  if (project) {
    // Redirect to the new URL format
    redirect(
      `/projects/${project.category}/${project.subcategory}/${project.id}`
    );
  } else {
    // If project not found, redirect to projects page
    redirect("/projects");
  }
}
