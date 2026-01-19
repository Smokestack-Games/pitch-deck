<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { inBrowser } from 'vitepress'
import HeroSection from './components/HeroSection.vue'
import ElevatorSection from './components/ElevatorSection.vue'
import ThesisSection from './components/ThesisSection.vue'
import ProductsSection from './components/ProductsSection.vue'
import MarketSection from './components/MarketSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import BordersSection from './components/BordersSection.vue'
import ArcadeSection from './components/ArcadeSection.vue'
import ClubSection from './components/ClubSection.vue'
import BudgetSection from './components/BudgetSection.vue'
import ProjectionSection from './components/ProjectionSection.vue'
import TeamSection from './components/TeamSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import WhyWinSection from './components/WhyWinSection.vue'
import AskSection from './components/AskSection.vue'
import VisionSection from './components/VisionSection.vue'
import QuoteSection from './components/QuoteSection.vue'
import StepsSection from './components/StepsSection.vue'
import ThanksSection from './components/ThanksSection.vue'

const scrollY = ref(0)
const windowHeight = ref(800)
const activeSection = ref(0)
const docHeight = ref(10000)

const sections = [
  { id: 'hero', label: 'Title' },
  { id: 'elevator', label: 'Pitch' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'products', label: 'Products' },
  { id: 'market', label: 'Market' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'borders', label: 'Borders' },
  { id: 'arcade', label: 'Arcade' },
  { id: 'club', label: 'Club' },
  { id: 'budget', label: 'Budget' },
  { id: 'projection', label: 'Projection' },
  { id: 'team', label: 'Team' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'why-win', label: 'Why Win' },
  { id: 'ask', label: 'The Ask' },
  { id: 'vision', label: 'Vision' },
  { id: 'quote', label: 'Quote' },
  { id: 'steps', label: 'Next Steps' },
  { id: 'thanks', label: 'Thanks' }
]

const progressWidth = computed(() => {
  const scrollableHeight = docHeight.value - windowHeight.value || 1
  return Math.min(100, (scrollY.value / scrollableHeight) * 100)
})

function handleScroll() {
  if (!inBrowser) return

  scrollY.value = window.scrollY
  windowHeight.value = window.innerHeight
  docHeight.value = document.documentElement.scrollHeight

  // Calculate active section based on scroll position
  const sectionElements = sections.map(s => document.getElementById(s.id))
  for (let i = sectionElements.length - 1; i >= 0; i--) {
    const el = sectionElements[i]
    if (el && el.getBoundingClientRect().top <= windowHeight.value * 0.5) {
      activeSection.value = i
      break
    }
  }
}

function scrollToSection(index: number) {
  if (!inBrowser) return

  const el = document.getElementById(sections[index].id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (!inBrowser) return

  windowHeight.value = window.innerHeight
  docHeight.value = document.documentElement.scrollHeight
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  if (!inBrowser) return

  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<template>
  <div class="pitch-deck">
    <!-- Progress Bar -->
    <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>

    <!-- Navigation -->
    <nav class="nav">
      <button
        v-for="(section, index) in sections"
        :key="section.id"
        class="nav-dot"
        :class="{ active: activeSection === index }"
        :data-label="section.label"
        @click="scrollToSection(index)"
      ></button>
    </nav>

    <!-- Sections with Parallax -->
    <HeroSection id="hero" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ElevatorSection id="elevator" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ThesisSection id="thesis" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ProductsSection id="products" :scrollY="scrollY" :windowHeight="windowHeight" />
    <MarketSection id="market" :scrollY="scrollY" :windowHeight="windowHeight" />
    <TimelineSection id="timeline" :scrollY="scrollY" :windowHeight="windowHeight" />
    <BordersSection id="borders" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ArcadeSection id="arcade" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ClubSection id="club" :scrollY="scrollY" :windowHeight="windowHeight" />
    <BudgetSection id="budget" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ProjectionSection id="projection" :scrollY="scrollY" :windowHeight="windowHeight" />
    <TeamSection id="team" :scrollY="scrollY" :windowHeight="windowHeight" />
    <TechStackSection id="tech-stack" :scrollY="scrollY" :windowHeight="windowHeight" />
    <WhyWinSection id="why-win" :scrollY="scrollY" :windowHeight="windowHeight" />
    <AskSection id="ask" :scrollY="scrollY" :windowHeight="windowHeight" />
    <VisionSection id="vision" :scrollY="scrollY" :windowHeight="windowHeight" />
    <QuoteSection id="quote" :scrollY="scrollY" :windowHeight="windowHeight" />
    <StepsSection id="steps" :scrollY="scrollY" :windowHeight="windowHeight" />
    <ThanksSection id="thanks" :scrollY="scrollY" :windowHeight="windowHeight" />
  </div>
</template>

<style scoped>
.pitch-deck {
  min-height: 100vh;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--rust-light), var(--gold), var(--cream));
  z-index: 1001;
  transition: width 0.15s ease-out;
}

.nav {
  position: fixed;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
}

.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background: var(--dark-4);
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-dot:hover {
  background: var(--gray);
  transform: scale(1.4);
}

.nav-dot.active {
  background: var(--gold);
  box-shadow: 0 0 20px var(--gold-glow), 0 0 40px var(--gold-glow);
}

.nav-dot::before {
  content: attr(data-label);
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.05em;
  color: var(--gray);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
  text-transform: uppercase;
}

.nav-dot:hover::before {
  opacity: 1;
}
</style>
