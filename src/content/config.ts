import { z, defineCollection } from "astro:content"

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    // role: z.string(),
    // info: z.string(),
    // techStack: z.array(z.string()),
    // liveUrl: z.string(),
    // images: z.array(
    //   z.object({
    //     src: z.string(),
    //     alt: z.string(),
    //   }),
    // ),
  }),
})
export const collections = {
  projects: projectCollection,
}
