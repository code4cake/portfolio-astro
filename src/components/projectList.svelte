<script>
  let projects = [
    {
      id: 0,
      title: "0. dpt omgeving",
      year: "2023",
    },
    {
      id: 1,
      title: "1. smilng agency",
      year: "2022",
    },
    {
      id: 2,
      title: "2. Cristy bertolini",
      year: "Coming Soon",
    },
  ]
</script>

<ul class="grid gap-6">
  {#each projects as project (project.id)}
    <li key={project.id} class="flex border-b-2 border-black-muted">
      <a
        href=""
        class="fira__regular pl-8 text-2xl uppercase leading-tight md:pr-2 md:text-3xl"
        >{project.title}
      </a>
      <span class="fira__regular pr-8 text-large">{project.year}</span>
    </li>
  {/each}
  <!-- <li class="flex border-b-2 border-black-muted">
    <a
      href=""
      class="fira__regular ml-8 text-2xl uppercase leading-tight md:pr-2 md:text-3xl"
      >0. dpt omgeving
    </a>
    <span class="fira__regular pr-8 text-large">2023</span>
  </li>
  <li class="flex border-b-2 border-black-muted">
    <a
      href=""
      class="fira__regular pl-8 text-2xl uppercase leading-tight md:pr-2 md:text-3xl"
      >1. smilng agency
    </a>
    <span class="fira__regular pr-8 text-large">2022</span>
  </li>
  <li class="flex border-b-2 border-black-muted">
    <a
      href=""
      class="fira__regular pl-8 text-2xl uppercase leading-tight md:pr-2 md:text-3xl"
      >2. Cristy bertolini
    </a>
    <span class="fira__regular pr-8 text-large">Coming Soon</span>
  </li> -->
</ul>
