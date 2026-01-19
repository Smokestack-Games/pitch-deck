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
  <section ref="sectionRef" class="elevator section">
    <div class="elevator-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container elevator-content parallax-content" :style="contentStyle">
      <h2>We build <strong>high-retention multiplayer games</strong> on Roblox that generate <strong>predictable revenue</strong> without requiring viral-hit scale.</h2>
      <div class="elevator-highlight">
        <p><strong>We're not starting from zero.</strong> Borders RTS, Club Phoenix, and RbxSync are all live today. We built our own dev stack. We've shipped nightclub experiences before.</p>
        <p style="margin-top: 24px;"><span class="big">$5K</span> accelerates what we've already started. Revenue pays it back, then funds everything else.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.elevator {
  background: var(--gold);
  color: var(--black);
  position: relative;
}

.elevator-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.elevator-content {
  max-width: 1000px;
  position: relative;
  z-index: 1;
}

.elevator h2 {
  font-family: var(--font-body);
  font-size: clamp(1.6rem, 4vw, 2.6rem);
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: -0.01em;
  margin-bottom: 0;
}

.elevator h2 strong {
  font-weight: 700;
  color: var(--rust);
}

.elevator-highlight {
  margin-top: 48px;
  padding: 36px;
  background: rgba(0,0,0,0.08);
  border-left: 5px solid var(--rust);
}

.elevator-highlight p {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 12px;
  line-height: 1.7;
}

.elevator-highlight .big {
  font-family: var(--font-display);
  font-size: 4rem;
  color: var(--rust);
  letter-spacing: 0.02em;
}
</style>
