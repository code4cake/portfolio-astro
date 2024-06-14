<script lang="ts">
  import { onMount } from "svelte"
  import { gsap } from "gsap"

  onMount(() => {
    const duration = 10

    document
      .querySelectorAll(".scrolling-container .wrapper")
      .forEach((ticker) => {
        let totalDistance
        const items = Array.from(ticker.querySelectorAll("li"))

        items.forEach((item) => {
          const clone = item.cloneNode(true)
          ticker.appendChild(clone)
        })

        let anim

        function resize() {
          if (anim) anim.play(0)
          totalDistance = ticker.offsetWidth / 2

          anim = gsap.to(ticker, {
            duration: duration,
            x: -totalDistance,
            ease: "none",
            repeat: -1,
            overwrite: true,
          })
        }

        window.addEventListener("resize", resize)
        resize()
      })
  })
</script>

<!-- [ERROR]: ok issue is with the font-size actually when i remove the font-size 15vw  the text jumps -->
<div class="scrolling-container">
  <ul class="wrapper">
    <li class="scrolling-text text-2xl uppercase">Some random words</li>
  </ul>
</div>

<style>
  .scrolling-container {
    display: flex;
    align-items: center;
    overflow-x: hidden;
    /* position: relative; */
  }

  .scrolling-container .wrapper {
    will-change: transform;
    white-space: nowrap;
    padding: 0;
  }

  .scrolling-text {
    white-space: nowrap;
    list-style: none;
    padding: 0;
    margin-right: 1rem;
    display: inline-block;

    /* font-size: 15vw; */
  }
</style>
