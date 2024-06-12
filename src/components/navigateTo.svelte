<script>
  let width = 75
  let height = 36
  let viewBox = `0 0 ${width} ${height}`
  let text
  let href

  export { width, height, viewBox, text, href }
</script>

<div class="flex items-center py-10 md:gap-10">
  <h1 class="text-2xl md:text-3xl uppercase leading-none">
    <a {href}>{text}</a>
  </h1>
  <svg
    {width}
    {height}
    {viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M57.7778 1.5L74 18M74 18L57.7778 34.5M74 18H1"
      stroke="#071C20"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</div>
