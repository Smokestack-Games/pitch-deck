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

const thesisCards = [
  {
    num: '01',
    title: "You don't need a viral hit",
    desc: "Games with 2-5K concurrent users generate $2-5K/month with strong retention loops. We focus on predictable, recurring revenue."
  },
  {
    num: '02',
    title: "We've already built the foundation",
    desc: "Three products live today. This is a pitch to accelerate what's already working and generating traction."
  },
  {
    num: '03',
    title: "We built our own infrastructure",
    desc: "RbxSync is our internal dev stack: git version control, VS Code, AI agents via MCP. A 2-person team ships what normally takes 5-6."
  },
  {
    num: '04',
    title: "Multiple revenue streams",
    desc: "Direct game revenue, tool licensing, platform distribution fees, and brand partnerships. Diversified income reduces single-product risk."
  }
]
</script>

<template>
  <section ref="sectionRef" class="thesis section">
    <div class="thesis-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>OUR THESIS</h2>
      <div class="thesis-grid">
        <div
          v-for="card in thesisCards"
          :key="card.num"
          class="thesis-card"
          :data-num="card.num"
        >
          <h4>{{ card.title }}</h4>
          <p>{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.thesis {
  background: var(--dark-1);
  position: relative;
}

.thesis-bg {
  position: absolute;
  inset: -20%;
  background:
    linear-gradient(135deg, var(--rust) 0%, transparent 30%),
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
  pointer-events: none;
  will-change: transform;
}

.thesis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 48px;
}

.thesis-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 32px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.thesis-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px var(--rust-light);
}

.thesis-card h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 14px;
  color: var(--white);
}

.thesis-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.8;
}
</style>
