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
  { speed: 0.35 }
)

const askCards = [
  {
    title: 'What It Funds',
    items: [
      '1 month of development (2 months to payback)',
      'Monetization implementation',
      'Marketing push for launch',
      'Creator partnerships'
    ]
  },
  {
    title: 'What You Get',
    items: [
      'Principal-only repayment from game revenue',
      'No equity dilution',
      'No revenue share',
      'Money back first, before we expand'
    ]
  },
  {
    title: 'What Happens Next',
    items: [
      'We pay back $5K principal from Borders revenue',
      'Request additional funding after payback',
      'Future products funded through same structure',
      'Investor gets paid back before each new phase'
    ]
  },
  {
    title: 'Why This Is Low Risk',
    items: [
      'Products are already live, not speculative',
      'Team has shipped together (Pirates vs. Ninjas, The Block, RbxSync)',
      'Principal-only repayment, no equity',
      'Payback required before next funding request'
    ]
  }
]
</script>

<template>
  <section ref="sectionRef" class="the-ask section">
    <div class="the-ask-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <div class="ask-amount">$5,000</div>
      <p class="ask-subtitle">to accelerate Borders RTS from alpha to full launch</p>
      <div class="ask-grid">
        <div v-for="card in askCards" :key="card.title" class="ask-card">
          <h4>{{ card.title }}</h4>
          <ul>
            <li v-for="item in card.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.the-ask {
  background: linear-gradient(135deg, var(--rust) 0%, var(--dark-1) 70%);
  text-align: center;
  position: relative;
}

.the-ask-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.the-ask::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255, 232, 31, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.ask-amount {
  font-family: var(--font-display);
  font-size: clamp(6rem, 20vw, 14rem);
  line-height: 1;
  color: var(--gold);
  text-shadow: 0 0 80px var(--gold-glow);
  margin-bottom: 16px;
  letter-spacing: 0.02em;
}

.ask-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  margin-bottom: 64px;
}

.ask-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

@media (max-width: 700px) {
  .ask-grid { grid-template-columns: 1fr; }
}

.ask-card {
  background: rgba(0,0,0,0.3);
  border-left: 3px solid var(--gold);
  padding: 24px;
}

.ask-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gold);
  margin-bottom: 14px;
}

.ask-card ul {
  list-style: none;
}

.ask-card li {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.9);
  line-height: 1.8;
}

.ask-card li::before {
  content: '\2022';
  color: var(--gold);
  margin-right: 8px;
}
</style>
