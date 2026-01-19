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

const milestones = [
  { name: 'Alpha Live', live: true },
  { name: 'Rewrite', live: false },
  { name: 'Core Systems', live: false },
  { name: 'Mobile', live: false },
  { name: 'Monetization', live: false },
  { name: 'Launch', live: false }
]
</script>

<template>
  <section ref="sectionRef" class="deep-dive borders section">
    <div class="deep-dive-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>BORDERS RTS <span class="live-badge">Live Alpha</span></h2>
      <div class="deep-dive-compact">
        <div class="video-placeholder">
          <span>Gameplay Video</span>
        </div>
        <div>
          <h3>What It Is</h3>
          <p class="desc">Pixel-based RTS where players control nations, expand territory, and compete for map dominance. Mobile-first with adaptive camera.</p>
          <h3>Why It Works</h3>
          <ul class="feature-list">
            <li><strong>RTS underserved on Roblox</strong> with high demand</li>
            <li><strong>Session-based</strong> drives replay rate</li>
            <li><strong>Competitive ladder</strong> drives retention</li>
          </ul>
        </div>
        <div>
          <h3>Monetization</h3>
          <ul class="feature-list">
            <li><strong>Battle Pass:</strong> $4.99/season</li>
            <li><strong>Commander Skins:</strong> $1-5</li>
            <li><strong>Boosts & Premium Maps</strong></li>
          </ul>
          <div class="revenue-target">
            <p class="label">Target: 2,500 CCU</p>
            <div class="amount">$2.5K/mo</div>
          </div>
        </div>
      </div>
      <div class="milestones-grid">
        <div
          v-for="milestone in milestones"
          :key="milestone.name"
          class="milestone"
          :class="{ live: milestone.live }"
        >
          <h5>{{ milestone.name }}</h5>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deep-dive {
  background: var(--dark-1);
  position: relative;
}

.deep-dive-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.deep-dive.borders h2 { color: var(--mint); }

.deep-dive h2 {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}

.deep-dive-compact {
  display: grid;
  grid-template-columns: 280px 1fr 1fr;
  gap: 32px;
  align-items: start;
}

@media (max-width: 1024px) {
  .deep-dive-compact {
    grid-template-columns: 1fr;
  }
}

.video-placeholder {
  background: var(--dark-3);
  border: 2px dashed var(--dark-4);
  border-radius: 4px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  color: var(--gray);
  font-size: 0.8rem;
}

.video-placeholder::before {
  content: '\25B6';
  font-size: 1.5rem;
  color: var(--gold);
}

@media (max-width: 1024px) {
  .video-placeholder {
    max-width: 400px;
    height: auto;
    aspect-ratio: 16/9;
  }
}

.desc {
  color: var(--light-gray);
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.feature-list {
  list-style: none;
  font-size: 0.95rem;
}

.feature-list li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  color: var(--light-gray);
  line-height: 1.5;
}

.feature-list li::before {
  content: '\2192';
  position: absolute;
  left: 0;
  color: var(--gold);
}

.feature-list li strong {
  color: var(--white);
}

.revenue-target {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 24px;
  margin-top: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.revenue-target .label {
  margin-bottom: 8px;
}

.revenue-target .amount {
  font-family: var(--font-display);
  font-size: 3rem;
  letter-spacing: 0.02em;
  color: var(--mint);
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-top: 32px;
}

.milestone {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 12px 16px;
  position: relative;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.milestone.live::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 16px;
  width: 8px;
  height: 8px;
  background: var(--mint);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.milestone h5 {
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
