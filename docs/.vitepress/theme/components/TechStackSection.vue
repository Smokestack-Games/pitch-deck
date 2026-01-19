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

const advantages = [
  { title: 'RbxSync', desc: 'End-to-end automated dev stack for Roblox games. Git version control, VS Code editing, bidirectional sync with Studio. Also generates license revenue ($60/license).' },
  { title: 'Multi-Agent Architecture', desc: 'AI agents via MCP handle routine tasks, code generation, and testing. Claude integration throughout the development workflow.' },
  { title: 'Managed Organization', desc: 'Structured project management with Linear integration, automated issue tracking, and coordinated multi-agent development sessions.' },
  { title: 'Iteration Speed', desc: '2-3x faster development cycles compared to traditional Roblox workflows. Changes sync instantly between local files and Studio.' }
]
</script>

<template>
  <section ref="sectionRef" class="tech-stack section">
    <div class="tech-stack-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>OUR TECHNICAL ADVANTAGE</h2>
      <p class="intro">
        We are a game company that built a tool to accelerate our development. Our internal tech stack enables a 2-person team to match the output of teams 3x our size.
      </p>
      <div class="tech-grid">
        <div v-for="item in advantages" :key="item.title" class="tech-card">
          <h4>{{ item.title }}</h4>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack {
  background: var(--black);
  position: relative;
}

.tech-stack-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.intro {
  color: var(--light-gray);
  max-width: 800px;
  margin-bottom: 48px;
  font-size: 1.1rem;
  line-height: 1.8;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .tech-grid { grid-template-columns: 1fr; }
}

.tech-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.tech-card h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--gold);
}

.tech-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.8;
}
</style>
