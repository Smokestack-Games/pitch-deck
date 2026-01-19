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

const steps = [
  { num: '01', title: 'Schedule a Call', desc: "Let's discuss terms, answer your questions, and walk through the roadmap in detail." },
  { num: '02', title: "Play What We've Built", desc: 'Play Borders RTS and Club Phoenix today. See RbxSync in action. These are live products.' },
  { num: '03', title: 'Finalize Investment', desc: 'Agree on terms and accelerate Borders RTS to full launch. First milestone delivery within 30 days.' }
]
</script>

<template>
  <section ref="sectionRef" class="next-steps section">
    <div class="next-steps-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>NEXT STEPS</h2>
      <div class="steps-grid">
        <div v-for="(step, index) in steps" :key="step.num" class="step-card" :class="`step-${index + 1}`">
          <div class="step-number">{{ step.num }}</div>
          <h4>{{ step.title }}</h4>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.next-steps {
  background: var(--dark-1);
  position: relative;
}

.next-steps-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;
}

@media (max-width: 800px) {
  .steps-grid { grid-template-columns: 1fr; }
}

.step-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 32px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.step-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.step-card.step-1::before { background: var(--gold); }
.step-card.step-2::before { background: var(--cream); }
.step-card.step-3::before { background: var(--rust-light); }

.step-number {
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--gold);
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.step-card h4 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.step-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.75;
}
</style>
