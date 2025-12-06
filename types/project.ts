export interface Project {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  image?: string
  category: "web" | "mobile" | "ml" | "tools"
  featured: boolean
  tags: string[]
  details: {
    overview: string
    challenge: string
    solution: string
    results: string[]
  }
  links: {
    github?: string
    live?: string
    demo?: string
  }
  screenshots: string[]
}
