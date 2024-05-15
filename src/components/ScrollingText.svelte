<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
  
    onMount(() => {
      const text = document.getElementById("scrolling-text");
      const container = document.getElementById("scrolling-text-container");
      const containerWidth = container?.offsetWidth;
      const textWidth = text?.offsetWidth;
  
      gsap.fromTo(text, 
        { x: containerWidth }, 
        { 
          x: -textWidth, 
          duration: 10, 
          repeat: -1, 
          ease: "linear" 
        });
    });
  </script>
  
  
  <section class="border-b-2 border-black-muted" id="scrolling-text-container">
    <h1  class="text-clip text-xl uppercase" id="scrolling-text">Some random words Some random words </h1>
  </section>
  

  <style is:inline>
    /* #scrolling-text-container {
      overflow: hidden;
      width: 100%;
    } */

    /* #scrolling-text {
      white-space: nowrap;
    } */

    section:is(#scrolling-text-container) {
      overflow: hidden;
      width: 100%;
    }

    h1:is(#scrolling-text) {
      white-space: nowrap;
    }
  </style>