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

const visionCards = [
  {
    title: 'ENTERTAINMENT',
    division: 'Smokestack Games',
    desc: 'Gaming on Roblox. Generate initial capital and build a recognizable digital brand over 2 years. Multiple revenue streams, proven execution.',
    active: true
  },
  {
    title: 'PRODUCTIVITY',
    division: 'AI Software',
    desc: "Tools that support hardware ecosystems. Entertainment revenue funds R&D. Think Nvidia's software ecosystem approach.",
    active: false
  },
  {
    title: 'DROIDS',
    division: 'Desktop Pilots',
    desc: 'Companion droids that drive user interfaces, virtual ecosystems, and streamline productivity. Long-term vision funded by earlier divisions.',
    active: false
  }
]
</script>

<template>
  <section ref="sectionRef" class="vision section">
    <div class="vision-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>GAMES & DROIDS<br><span class="subtitle">THE BIGGER PICTURE</span></h2>
      <div class="vision-cards">
        <div
          v-for="card in visionCards"
          :key="card.title"
          class="vision-card"
          :class="{ active: card.active }"
        >
          <h4>{{ card.title }}</h4>
          <p class="division">{{ card.division }}</p>
          <p>{{ card.desc }}</p>
        </div>
      </div>
      <p class="vision-footer">Entertainment funds Productivity funds Droids. Resource allocation shifts based on market needs.</p>
    </div>
  </section>
</template>

<style scoped>
.vision {
  background: var(--black);
  position: relative;
}

.vision-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

h2 .subtitle {
  color: var(--gray);
  font-size: 0.5em;
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .vision-cards { grid-template-columns: 1fr; }
}

.vision-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 32px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.vision-card.active {
  border-color: var(--gold);
  box-shadow: 0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px var(--gold);
}

.vision-card.active::before {
  content: 'NOW';
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 4px 8px;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.vision-card h4 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}

.vision-card .division {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 18px;
}

.vision-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.75;
}

.vision-footer {
  text-align: center;
  margin-top: 48px;
  color: var(--gray);
  font-size: 0.95rem;
}
</style>
