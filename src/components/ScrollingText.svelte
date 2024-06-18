<script lang="ts">
  import { onMount } from "svelte"
  import { gsap } from "gsap"

  export let text = "Animation + Motion Design + Web development +"
  export let duration: number

  onMount(() => {
    duration = duration || 30

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

<!-- [ERROR]: ok font-size actually when i remove the font-size 15vw  the text jumps, on mobile is ok but on the desktop not ok -->
<div class="scrolling-container">
  <ul class="wrapper">
    <li class="scrolling-text text-2xl uppercase leading-snug">{text}</li>
  </ul>
</div>

<style>
  .scrolling-container {
    display: flex;
    align-items: center;
    overflow-x: hidden;
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
