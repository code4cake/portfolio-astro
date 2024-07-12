import { z, defineCollection } from "astro:content"

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      role: z.string(),
      info: z.string(),
      techStack: z.array(z.string()),
      liveUrl: z.string(),
      // images: z.array(
      //   z.object({
      //     src: z.string(),
      //     alt: z.string(),
      //   }),
      // ),

      // [ERROR]: Importing images like this in frontmatter how
      images: z.array(z.object({ image: image() })).optional(),
    }),
})
export const collections = {
  projects: projectCollection,
}
