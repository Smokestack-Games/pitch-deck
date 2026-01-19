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
  <section ref="sectionRef" class="deep-dive arcade section">
    <div class="deep-dive-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>THE IRON ARCADE</h2>

      <div class="media-showcase">
        <div class="video-container">
          <video autoplay loop muted playsinline>
            <source src="/arcade.mp4" type="video/mp4">
          </video>
          <div class="video-glow"></div>
        </div>

        <div class="content-grid">
          <div class="content-block">
            <h3>Two Products in One</h3>
            <p class="desc">Standalone arcade game plus embeddable cabinets for other Roblox developers to distribute.</p>
            <h3>Monetization</h3>
            <ul class="feature-list">
              <li><strong>Pay-per-play:</strong> Robux per game</li>
              <li><strong>Standalone:</strong> direct revenue</li>
              <li><strong>Distribution:</strong> partner gamepass split</li>
            </ul>
          </div>
          <div class="content-block">
            <h3>Why Developers Want This</h3>
            <ul class="feature-list">
              <li><strong>Passive revenue</strong> from cabinet usage</li>
              <li><strong>Engagement boost</strong> from minigames</li>
              <li><strong>Zero dev cost:</strong> drag and drop</li>
              <li><strong>Global leaderboards</strong></li>
            </ul>
            <div class="revenue-target">
              <p class="label">Target: 50 Partner Games</p>
              <div class="amount">$5K/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deep-dive {
  background: var(--black);
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

.deep-dive.arcade h2 { color: var(--blue); }

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
  background: var(--dark-1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.video-container video {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.video-glow {
  position: absolute;
  inset: 0;
  border: 2px solid var(--blue);
  border-radius: 8px;
  opacity: 0.4;
  pointer-events: none;
  box-shadow: inset 0 0 20px rgba(100, 180, 255, 0.1);
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
  border-left: 3px solid var(--blue);
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
  color: var(--blue);
}
</style>
