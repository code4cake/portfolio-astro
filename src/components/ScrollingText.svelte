<script lang="ts">
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';


  export let textOne
  export let textTwo
  export let textThree

  let id = `scrolling-text-${Math.random().toString(36).substring(2, 15)}`

  onMount(() => {
    
    const duration = 20;

    const ticker = document.querySelector('.scrolling-container') as HTMLElement;
    const items = Array.from(ticker.querySelectorAll('li')) as HTMLElement[];

  
    items.forEach(item => {
      const clone = item.cloneNode(true) as HTMLElement;
      ticker.appendChild(clone);
      items.push(clone);
    });

    let anim: gsap.core.Tween;
    let totalDistance: number;

    function resize() {
      if (anim) anim.kill();
      totalDistance = items[0].offsetWidth * items.length / 2;

      items.forEach((item, i) => {
        gsap.set(item, {
          x: i * items[0].offsetWidth
        });
      });

      anim = gsap.to(items, {
        x: `-=${totalDistance}`,
        duration: duration,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalDistance)
        }
      });
    }

  
    window.addEventListener('resize', resize);
    resize();
  });
</script>

<section id={id} class="scrolling-container ">
  <ul class="wrapper">
    <li class="scrolling-text text-xl uppercase">{textOne}</li>
    <li class="scrolling-text text-xl uppercase">{textTwo}</li>
    <li class="scrolling-text text-xl uppercase">{textThree}</li>
  </ul>
</section>

<style>
  .scrolling-container {
    display: flex;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  }

  .wrapper {
    display: flex;
    will-change: transform;
  }

  .scrolling-text {
    white-space: nowrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>