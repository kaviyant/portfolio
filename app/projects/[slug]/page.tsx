import { ProjectDetailPageClient } from "./client"
import { projects } from "@/data/projects"
import { notFound } from "next/navigation"

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPageClient project={project} />
}
