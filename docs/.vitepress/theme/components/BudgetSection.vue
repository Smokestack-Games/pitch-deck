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
  <section ref="sectionRef" class="budget section">
    <div class="budget-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>FINANCIALS</h2>
      <div class="budget-grid">
        <div>
          <h3>Use of Funds (Borders RTS)</h3>
          <table class="budget-table">
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Staff ($2K each, 2 members)</td>
              <td>$4,000</td>
            </tr>
            <tr>
              <td>Claude Max (2 subscriptions)</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Contracts (assets, sound)</td>
              <td>$400</td>
            </tr>
            <tr>
              <td>Total (1 month of development)</td>
              <td>$5,000</td>
            </tr>
          </table>
        </div>
        <div>
          <h3>Investment Structure</h3>
          <table class="budget-table">
            <tr>
              <th>Product</th>
              <th>Investment</th>
            </tr>
            <tr>
              <td>Borders RTS (current ask)</td>
              <td>$5,000</td>
            </tr>
            <tr>
              <td>The Iron Arcade (future)</td>
              <td>$10,000</td>
            </tr>
            <tr>
              <td>Club Phoenix (future)</td>
              <td>$10,000</td>
            </tr>
            <tr>
              <td>Total (all products)</td>
              <td>$25,000</td>
            </tr>
          </table>
          <div class="budget-note">
            <strong>Current ask: $5,000 for Borders RTS.</strong><br><br>
            We pay back principal from revenue before requesting additional funding for future products.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.budget {
  background: var(--dark-1);
  position: relative;
}

.budget-bg {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(ellipse 40% 40% at 0% 100%, var(--rust) 0%, transparent 50%),
    url("data:image/svg+xml,%3Csvg width='84' height='88' viewBox='0 0 84 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 0h84v88H0V0zm2 2h80v40H2V2zM0 46h40v40H0V46zm44 0h40v40H44V46z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  opacity: 0.5;
  pointer-events: none;
  will-change: transform;
}

.budget-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin-top: 48px;
}

@media (max-width: 900px) {
  .budget-grid { grid-template-columns: 1fr; }
}

.budget-table {
  width: 100%;
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

.budget-table td:last-child {
  font-family: var(--font-mono);
  text-align: right;
}

.budget-table tr:last-child td {
  font-weight: 600;
  color: var(--gold);
  border-bottom: none;
}

.budget-note {
  background: rgba(255, 232, 31, 0.05);
  border: 1px solid rgba(255, 232, 31, 0.2);
  padding: 28px;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--light-gray);
  line-height: 1.7;
  margin-top: 24px;
}

.budget-note strong {
  color: var(--gold);
}
</style>
