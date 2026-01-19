<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
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

const marissaPhoto = withBase('/marissa.jpg')
const benPhoto = withBase('/ben.jpg')
</script>

<template>
  <section ref="sectionRef" class="team section">
    <div class="team-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>TEAM</h2>
      <div class="team-grid">
        <div class="team-card">
          <img :src="marissaPhoto" alt="Marissa Cheves" class="team-photo">
          <h4>Marissa Cheves</h4>
          <p class="role">Founder & Team Lead</p>
          <p>5+ years building on Roblox. <span class="highlight">Built RbxSync from the ground up</span>, the same tool that powers our development and generates license revenue.</p>
          <p style="margin-top: 12px;">Previously built and operated <span class="highlight">The Block</span>, a Roblox nightclub. Learnings from that project directly inform Club Phoenix.</p>
        </div>
        <div class="team-card">
          <img :src="benPhoto" alt="Benjamin Marsh" class="team-photo">
          <h4>Benjamin Marsh</h4>
          <p class="role">Developer</p>
          <p>5+ years Roblox development. Multiple shipped titles. <span class="highlight">Systems specialist</span> in gameplay programming, networking, and data architecture.</p>
          <p style="margin-top: 12px;">Proven track record delivering polished multiplayer experiences. Expert in Luau and Roblox's technical stack.</p>
        </div>
      </div>

      <div class="collab-section">
        <h3>COLLABORATION HISTORY</h3>
        <p class="collab-text">
          Worked together on <strong>5+ projects</strong> across 2 teams.
          Built <strong>Pirates vs. Ninjas</strong> from scratch together (Marissa on design, Ben on tech).
          Co-developed alpha versions of Borders RTS, Club Phoenix, and Iron Arcade internal prototypes.
        </p>
        <div class="company-logos">
          <div class="company">
            <img
              src="/Supersocial.webp"
              alt="Supersocial"
              class="company-logo"
            >
            <p class="company-date">2021-2022</p>
          </div>
          <div class="company">
            <img
              src="https://audioscape.ai/Text_Transparent_White.png"
              alt="Audioscape"
              class="company-logo"
              @error="(e) => e.target.style.display = 'none'"
            >
            <span class="company-name fallback">Audioscape</span>
            <p class="company-date">2025-2026</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team {
  background: var(--black);
  position: relative;
}

.team-bg {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(ellipse 60% 60% at 50% 100%, var(--rust) 0%, transparent 50%);
  opacity: 0.2;
  pointer-events: none;
  will-change: transform;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 48px auto 0;
}

@media (max-width: 700px) {
  .team-grid { grid-template-columns: 1fr; }
}

.team-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
}

.team-card h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.team-card .role {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 18px;
}

.team-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.8;
}

.team-card .highlight {
  color: var(--white);
  font-weight: 500;
}

.collab-section {
  margin-top: 64px;
  text-align: center;
}

.collab-text {
  color: var(--light-gray);
  max-width: 800px;
  margin: 0 auto 32px;
  line-height: 1.8;
}

.collab-text strong {
  color: var(--white);
}

.company-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  flex-wrap: wrap;
}

.company {
  text-align: center;
}

.company-logo {
  height: 60px;
  width: 200px;
  object-fit: contain;
  margin-bottom: 12px;
}

.company-logo + .company-name.fallback {
  display: none;
}

.company-name {
  color: var(--white);
  font-weight: 600;
  font-size: 1.1rem;
}

.company-date {
  font-size: 0.85rem;
  color: var(--gray);
  margin-top: 4px;
}
</style>
