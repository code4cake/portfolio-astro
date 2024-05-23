<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import {Draggable} from 'gsap/Draggable';

  gsap.registerPlugin(Draggable);

  onMount(() => {
    const duration = 50;
    const wrap = gsap.utils.wrap(0, 1);

    const ticker = document .querySelector('.scrolling-container');
    const text = document.querySelector('.scrolling-text');

    const clone = text.cloneNode(true);
    ticker.appendChild(clone);

    const items = [text, clone];
    let anim: gsap.core.Tween;
    let totalDistance: number;

    const draggable = new Draggable(ticker, {
      type: "x",
      trigger: ticker,
      throwProps: true,
      onPressInit: function() {
        anim.pause();
      },
      onDrag: function() {
        let prog = wrap(-this.x / totalDistance);
        anim.progress(prog);
      },
      onThrowUpdate: function() {
        let prog = wrap(-this.x / totalDistance);
        anim.progress(prog);
      },
      onThrowComplete: function() {
        anim.play();
        gsap.fromTo(anim, { timeScale: 0 }, { duration: 2, timeScale: 1, ease: "power1.in" });
      },
    });

    function resize() {
      if (anim) anim.kill();
      totalDistance = ticker.offsetWidth;

      items.forEach((item, i) => {
        gsap.set(item, {
          x: i * totalDistance
        });
      });

      anim = gsap.to(items, {
        x: `-=${totalDistance}`,
        duration: duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (totalDistance * items.length))
        }
      });
    }

    window.addEventListener('resize', resize);
    resize();
  });
  

</script>

<section class="scrolling-container border-black-muted">
  <h1 class="scrolling-text text-xl uppercase">Some random words</h1>
</section>

<style>
  .scrolling-container {
      display: flex;
      overflow: hidden;
      width: 100%;
      white-space: nowrap;
      /* position: relative; */
      /* align-items: center; */
  }

  .scrolling-text {
      white-space: nowrap;
  }
</style>