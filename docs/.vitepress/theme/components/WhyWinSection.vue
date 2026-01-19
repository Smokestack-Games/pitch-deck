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
  <section ref="sectionRef" class="why-win section">
    <div class="why-win-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>WHY WE WIN</h2>
      <div class="win-grid">
        <div class="win-card">
          <h4>We're Not Starting From Zero</h4>
          <table class="comparison-table">
            <tr>
              <th>Product</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Borders RTS</td>
              <td>Live Alpha</td>
            </tr>
            <tr>
              <td>Club Phoenix</td>
              <td>Live Alpha</td>
            </tr>
            <tr>
              <td>RbxSync</td>
              <td>Launched</td>
            </tr>
          </table>
        </div>
        <div class="win-card">
          <h4>We Built Our Own Stack</h4>
          <table class="comparison-table">
            <tr>
              <th>Capability</th>
              <th>Smokestack</th>
            </tr>
            <tr>
              <td>Version Control</td>
              <td>Git-based</td>
            </tr>
            <tr>
              <td>Code Editing</td>
              <td>VS Code + Studio</td>
            </tr>
            <tr>
              <td>AI Assistance</td>
              <td>Claude via MCP</td>
            </tr>
            <tr>
              <td>Iteration Speed</td>
              <td>2-3x faster</td>
            </tr>
          </table>
        </div>
        <div class="win-card">
          <h4>We've Done This Before</h4>
          <p>Our team built and operated The Block, a Roblox nightclub. We learned what works, what doesn't, and what players actually want. Club Phoenix applies those lessons.</p>
        </div>
        <div class="win-card">
          <h4>AI-Accelerated Production</h4>
          <p>We leverage AI tools with combined shared experience to accelerate traditional productions and match a quality bar of teams 3x our size. RbxSync powers our workflow and generates license revenue.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-win {
  background: var(--dark-1);
  position: relative;
}

.why-win-bg {
  position: absolute;
  inset: -20%;
  background:
    linear-gradient(180deg, var(--rust) 0%, transparent 30%),
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
  pointer-events: none;
  will-change: transform;
}

.win-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .win-grid { grid-template-columns: 1fr; }
}

.win-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.win-card h4 {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 18px;
  color: var(--gold);
}

.win-card p {
  font-size: 1.05rem;
  color: var(--light-gray);
  line-height: 1.8;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 14px;
}

.comparison-table th,
.comparison-table td {
  padding: 14px 12px;
  text-align: left;
  border-bottom: 1px solid var(--dark-3);
  font-size: 1rem;
}

.comparison-table th {
  color: var(--gray);
  font-weight: 600;
}

.comparison-table td:last-child {
  color: var(--mint);
}
</style>
