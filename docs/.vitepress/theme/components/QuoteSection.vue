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
  { speed: 0.25 }
)
</script>

<template>
  <section ref="sectionRef" class="quote-section section">
    <div class="quote-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <blockquote>This investment supports a <strong>team with proven execution</strong>, <strong>live products</strong>, and a <strong>long-term vision</strong>.</blockquote>
    </div>
  </section>
</template>

<style scoped>
.quote-section {
  background: var(--dark-2);
  color: var(--white);
  position: relative;
}

.quote-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

blockquote {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 500;
  line-height: 1.7;
  max-width: 900px;
  color: var(--light-gray);
}

blockquote strong {
  font-weight: 700;
  color: var(--gold);
}
</style>
