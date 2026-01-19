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
  { speed: 0.4 }
)
</script>

<template>
  <section ref="sectionRef" class="hero section">
    <div class="hero-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container hero-content parallax-content" :style="contentStyle">
      <p class="label">Pitch Deck | Confidential</p>
      <h1>SMOKESTACK<br><span class="highlight">GAMES</span></h1>
      <div class="hero-date">
        <span>Q1</span>
        <span>JANUARY</span>
        <span>2026</span>
      </div>
    </div>
    <p class="confidential">Confidential</p>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(45deg, var(--rust) 0%, var(--dark-1) 47%);
  position: relative;
}

.hero-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 100% 80% at 50% 100%, rgba(255, 232, 31, 0.05) 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 0% 0%, rgba(54, 10, 10, 0.5) 0%, transparent 50%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero .label {
  color: var(--gold);
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease forwards;
}

.hero h1 {
  animation: fadeInUp 0.8s ease 0.1s forwards;
  opacity: 0;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
}

.hero h1 .highlight {
  color: var(--gold);
  text-shadow: 0 0 60px var(--gold-glow);
}

.hero-date {
  display: flex;
  gap: 12px;
  margin-top: 48px;
  animation: fadeInUp 0.8s ease 0.2s forwards;
  opacity: 0;
}

.hero-date span {
  padding: 14px 28px;
  background: var(--dark-2);
  border: 1px solid var(--dark-4);
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
}

.hero-date span:first-child {
  background: var(--gold);
  color: var(--black);
  border-color: var(--gold);
}

.confidential {
  position: absolute;
  bottom: 32px;
  left: 80px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: rgba(255,255,255,0.2);
  text-transform: uppercase;
}
</style>
