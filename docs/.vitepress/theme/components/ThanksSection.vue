<script setup lang="ts">
import { ref, computed } from 'vue'
import { useParallax } from '../composables/useParallax'

const props = defineProps<{
  scrollY: number
  windowHeight: number
}>()

const sectionRef = ref<HTMLElement | null>(null)
const scrollYRef = computed(() => props.scrollY)
const windowHeightRef = computed(() => props.windowHeight)

const { contentStyle, backgroundTransform } = useParallax(
  sectionRef,
  scrollYRef,
  windowHeightRef,
  { speed: 0.3 }
)
</script>

<template>
  <section ref="sectionRef" class="thanks section">
    <div class="thanks-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h1>THANK YOU.</h1>
      <p class="contact-name">Marissa Cheves</p>
      <p class="contact-email">marissacheves@gmail.com</p>
      <p class="tagline">Smokestack Games | A Games & Droids Company</p>
    </div>
  </section>
</template>

<style scoped>
.thanks {
  background: var(--gold);
  color: var(--black);
  text-align: center;
  position: relative;
}

.thanks-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.thanks h1 {
  margin-bottom: 48px;
  text-shadow: none;
}

.contact-name {
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.contact-email {
  font-family: var(--font-mono);
  font-size: 1.15rem;
  font-weight: 500;
  opacity: 0.9;
}

.tagline {
  margin-top: 64px;
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.8;
}
</style>
