<script>
  export let showAtPixel = 0

  let scrollHeight = 0

  const gotToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  $: showGoToTop = scrollHeight > showAtPixel
</script>

{#if showGoToTop}
  <button
    class="pb-8 text-right text-large uppercase border-none hover:-translate-y-2"
    on:click={gotToTop}>back to to top</button
  >
{/if}

<svelte:window bind:scrollY={scrollHeight} />
