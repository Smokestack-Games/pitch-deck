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

const timelineItems = [
  { date: 'Month 1-3', now: true, title: 'Borders RTS Development', desc: 'Alpha live. Full rewrite with RbxSync stack, monetization implementation, launch preparation.' },
  { date: 'Month 4-5', now: false, title: 'Arcade Development', desc: 'Build standalone arcade game and cabinet engine for distribution.' },
  { date: 'Month 6-8', now: false, title: 'Iron Arcade Launch', desc: 'Launch standalone game, release distributable cabinets, onboard partner games.' },
  { date: 'Month 9', now: false, title: 'Club Phoenix Production', desc: 'Alpha live. Final production: lighting, sound, VIP areas, artist booking.' },
  { date: 'Month 10-12', now: false, title: 'Club Launch + Growth', desc: 'Grand opening, brand partnerships, sustainable revenue.' }
]
</script>

<template>
  <section ref="sectionRef" class="timeline-section section">
    <div class="timeline-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>12-MONTH ROADMAP</h2>
      <div class="timeline">
        <div
          v-for="(item, index) in timelineItems"
          :key="index"
          class="timeline-item"
          :class="{ active: item.now }"
        >
          <div class="timeline-date">
            {{ item.date }}
            <span v-if="item.now" class="now">NOW</span>
          </div>
          <div class="timeline-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-section {
  background: linear-gradient(135deg, var(--rust) 0%, var(--dark-1) 60%);
  position: relative;
}

.timeline-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.timeline {
  margin-top: 48px;
  position: relative;
  z-index: 1;
}

.timeline-item {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 40px;
  padding: 32px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: relative;
}

@media (max-width: 600px) {
  .timeline-item { grid-template-columns: 1fr; gap: 12px; }
}

.timeline-item.active::before {
  content: '';
  position: absolute;
  left: 156px;
  top: 40px;
  width: 12px;
  height: 12px;
  background: var(--gold);
  border-radius: 2px;
  box-shadow: 0 0 20px var(--gold-glow);
  animation: pulse-gold 2s ease-in-out infinite;
}

@media (max-width: 600px) {
  .timeline-item.active::before { display: none; }
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--gold);
}

.timeline-date .now {
  display: inline-block;
  padding: 4px 10px;
  background: var(--gold);
  color: var(--black);
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: 8px;
}

.timeline-content h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.timeline-content p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.8);
  line-height: 1.7;
}
</style>
