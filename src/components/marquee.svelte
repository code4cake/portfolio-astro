<script>
  import { gsap } from "gsap"
  import { onMount } from "svelte"
  // import { Draggable } from "gsap/Draggable"
  import jQuery from "jquery"

  onMount(() => {
    const dur = 10
    const wrap = gsap.utils.wrap(0, 1)

    document
      .querySelectorAll(".scrolling-container .wrapper")
      .forEach((ticker) => {
        let totalDistance
        jQuery(ticker).append(jQuery(ticker.querySelectorAll("li")).clone())
        const items = ticker.querySelectorAll("li")
        let anim

        let startPos
        // const draggable = new Draggable(ticker, {
        //   type: "x",
        //   trigger: ticker,
        //   throwProps: true,
        //   onPressInit: function () {
        //     anim.pause()
        //     startPos = this.x
        //   },
        //   onDrag: function () {
        //     let prog = wrap(-this.x / totalDistance)
        //     anim.progress(prog)
        //   },
        //   onThrowUpdate: function () {
        //     let prog = wrap(-this.x / totalDistance)
        //     anim.progress(prog)
        //   },
        //   onThrowComplete: function () {
        //     anim.play()
        //     gsap.fromTo(
        //       anim,
        //       { timeScale: 0 },
        //       { duration: 2, timeScale: 1, ease: "power1.in" },
        //     )
        //   },
        // })

        function resize() {
          if (anim) anim.play(0)
          totalDistance = jQuery(ticker).width() / 2

          anim = gsap.to(ticker, {
            duration: dur,
            x: -totalDistance,
            ease: "none",
            repeat: -1,
            overwrite: true,
          })
        }

        jQuery(window).resize(resize)
        resize()
      })
  })
</script>

<div class="scrolling-container">
  <ul class="wrapper">
    <li style="color:red;" class="scrolling-text text-2xl uppercase">
      No. 1 \ First point
    </li>
    <!-- <li>No. 2 \ Second point</li>
      <li style="color:blue;">No. 3 \ Third point</li>
      <li>No. 4 \ Fourth point</li> -->
  </ul>
</div>

<style>
  .scrolling-container {
    display: flex;
    align-items: center;
    background: black;
    overflow-x: hidden;
  }

  .scrolling-container .wrapper {
    /* position: absolute; */
    white-space: nowrap;
    padding: 0;
    will-change: transform;
  }

  .scrolling-container li {
    list-style: none;
    padding: 0;
    font-family: sans-serif;
    color: white;
    font-weight: 300;
    /* font-size: 15vw; */
    display: inline-block;
    margin-right: 30px;
  }
</style>
