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
  <section ref="sectionRef" class="deep-dive club section">
    <div class="deep-dive-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>CLUB PHOENIX <span class="live-badge">Live Alpha</span></h2>

      <div class="media-showcase">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/mby9IZ0klSs"
            title="Club Phoenix Walkthrough"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="video-glow"></div>
        </div>

        <div class="content-grid">
          <div class="content-block">
            <h3>Product Overview</h3>
            <p class="desc">18+ venue with live DJ performances, arcade machines, and virtual bar. Warehouse rave meets retro arcade.</p>
            <h3>Why This Market</h3>
            <ul class="feature-list">
              <li><strong>17-24 demo</strong> fastest-growing on Roblox</li>
              <li><strong>Virtual concerts:</strong> Lil Nas X 33M</li>
              <li><strong>Brands seeking</strong> Gen Z channels</li>
            </ul>
            <p class="note">Prior experience: Built and operated <strong>The Block</strong></p>
          </div>
          <div class="content-block">
            <h3>Revenue Streams</h3>
            <ul class="feature-list">
              <li><strong>Cover charges:</strong> $2-5</li>
              <li><strong>VIP tables:</strong> $10-25</li>
              <li><strong>Cosmetics & Brand activations</strong></li>
              <li><strong>Artist partnerships</strong></li>
              <li><strong>Arcade cabinets</strong></li>
            </ul>
            <div class="revenue-target">
              <p class="label">Target: 2 Events/Week</p>
              <div class="amount">$6K/mo</div>
            </div>
          </div>
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

.deep-dive.club h2 { color: var(--purple); }

.deep-dive h2 {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.media-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 1024px) {
  .media-showcase {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.video-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: var(--black);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  aspect-ratio: 16 / 9;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-glow {
  position: absolute;
  inset: 0;
  border: 2px solid var(--purple);
  border-radius: 8px;
  opacity: 0.4;
  pointer-events: none;
  box-shadow: inset 0 0 20px rgba(180, 100, 255, 0.1);
  z-index: 1;
}

.content-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.content-block h3 {
  font-size: 1rem;
  color: var(--white);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.content-block h3:not(:first-child) {
  margin-top: 20px;
}

.desc {
  color: var(--light-gray);
  margin-bottom: 16px;
  font-size: 0.95rem;
  line-height: 1.6;
}

.note {
  color: var(--gray);
  margin-top: 16px;
  font-size: 0.85rem;
}

.note strong {
  color: var(--white);
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
  margin-top: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  border-left: 3px solid var(--purple);
}

.revenue-target .label {
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: var(--gray);
}

.revenue-target .amount {
  font-family: var(--font-display);
  font-size: 2.5rem;
  letter-spacing: 0.02em;
  color: var(--purple);
}
</style>
