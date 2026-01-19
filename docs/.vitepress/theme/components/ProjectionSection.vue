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

const revenueTargets = [
  { name: 'Borders RTS', amount: '$2,500/mo', color: 'mint' },
  { name: 'Iron Arcade', amount: '$5,000/mo', color: 'blue' },
  { name: 'Club Phoenix', amount: '$6,000/mo', color: 'purple' },
  { name: 'RbxSync', amount: '$1,000/mo', color: 'orange' }
]
</script>

<template>
  <section ref="sectionRef" class="projection section">
    <div class="projection-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>12-MONTH PROJECTION</h2>
      <div class="table-wrapper">
        <table class="budget-table">
          <tr>
            <th>Month</th>
            <th>Product</th>
            <th>Capital Request</th>
            <th>Dev Time</th>
            <th>Revenue Start</th>
            <th>Payback</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Borders RTS</td>
            <td class="gold">$5,000</td>
            <td>1 month</td>
            <td>Month 2</td>
            <td>Month 3</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>Iron Arcade</td>
            <td class="gold">$10,000</td>
            <td>2 months</td>
            <td>Month 6</td>
            <td>Month 8</td>
          </tr>
          <tr>
            <td>9-10</td>
            <td>Club Phoenix</td>
            <td class="gold">$10,000</td>
            <td>2 months</td>
            <td>Month 11</td>
            <td>Month 12</td>
          </tr>
        </table>
      </div>
      <div class="revenue-section">
        <h3>Monthly Revenue Targets (Post-Launch)</h3>
        <div class="revenue-grid">
          <div
            v-for="target in revenueTargets"
            :key="target.name"
            class="revenue-card"
            :class="target.color"
          >
            <p class="label">{{ target.name }}</p>
            <p class="amount">{{ target.amount }}</p>
          </div>
        </div>
        <p class="combined-target">
          <strong>Combined Target (Month 12+):</strong> $14,500/month
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projection {
  background: var(--dark-1);
  position: relative;
}

.projection-bg {
  position: absolute;
  inset: -20%;
  background:
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  will-change: transform;
}

.table-wrapper {
  overflow-x: auto;
}

.budget-table {
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
}

.budget-table th,
.budget-table td {
  padding: 18px 16px;
  text-align: left;
  border-bottom: 1px solid var(--dark-3);
}

.budget-table th {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray);
  font-weight: 600;
}

.budget-table td {
  font-size: 1.1rem;
  font-weight: 500;
}

.budget-table td.gold {
  color: var(--gold);
}

.revenue-section {
  margin-top: 48px;
}

.revenue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.revenue-card {
  background: var(--dark-2);
  padding: 24px;
  border-left: 3px solid var(--gray);
}

.revenue-card.mint { border-color: var(--mint); }
.revenue-card.blue { border-color: var(--blue); }
.revenue-card.purple { border-color: var(--purple); }
.revenue-card.orange { border-color: var(--orange); }

.revenue-card .label {
  color: var(--gray);
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.revenue-card .amount {
  font-size: 1.5rem;
  font-weight: 700;
}

.revenue-card.mint .amount { color: var(--mint); }
.revenue-card.blue .amount { color: var(--blue); }
.revenue-card.purple .amount { color: var(--purple); }
.revenue-card.orange .amount { color: var(--orange); }

.combined-target {
  margin-top: 32px;
  color: var(--light-gray);
  text-align: center;
}

.combined-target strong {
  color: var(--gold);
}
</style>
