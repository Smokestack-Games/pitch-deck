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

const stats = [
  { number: '380M', label: 'Monthly Active Users' },
  { number: '$3.6B', label: 'Platform Revenue (2024)' },
  { number: '60%', label: 'Users Aged 13+' }
]
</script>

<template>
  <section ref="sectionRef" class="market section">
    <div class="market-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>WHY ROBLOX, WHY NOW</h2>
      <div class="stats-row">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
      <p class="market-footer">Games with <strong>2-5K concurrent users</strong> generate <strong>$2-5K/month</strong> with strong retention loops. Our model targets consistent, predictable revenue.</p>
    </div>
  </section>
</template>

<style scoped>
.market {
  background: var(--dark-1);
  position: relative;
}

.market-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin: 48px 0;
}

@media (max-width: 768px) {
  .stats-row { grid-template-columns: 1fr; gap: 24px; }
}

.stat-card {
  text-align: center;
  padding: 48px 24px;
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--rust-light), var(--gold));
}

.stat-number {
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 6rem);
  color: var(--gold);
  line-height: 1;
  text-shadow: 0 0 40px var(--gold-glow);
}

.stat-label {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--light-gray);
  margin-top: 16px;
}

.market-footer {
  text-align: center;
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--light-gray);
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  line-height: 1.8;
}

.market-footer strong {
  color: var(--gold);
}
</style>
