<script>
  export let project
</script>

<li key={project.id} class="flex border-b-2 border-black-muted">
  <a
    href={`/projects/${project.slug}`}
    class="fira__regular pl-8 text-2xl uppercase leading-tight md:pr-2 md:text-3xl"
    >{project.data.title}
  </a>
  <span
    class="fira__regular pr-8 text-large self-center justify-self-center place-self-center"
    >{project.data.year}</span
  >
</li>
