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

const products = [
  {
    type: 'borders',
    tag: 'Establish Revenue',
    name: 'BORDERS RTS',
    desc: 'Real-time territory control strategy game. Pixel-based map conquest with nations, troops, and tactical expansion. Mobile-first.',
    status: 'live',
    statusText: 'Live Alpha'
  },
  {
    type: 'arcade',
    tag: 'Platform Distribution',
    name: 'THE IRON ARCADE',
    desc: 'Standalone arcade game plus embeddable cabinets for other developers. Each play costs Robux. Partner games sell our developer product and share revenue.',
    status: 'planned',
    statusText: 'Planned'
  },
  {
    type: 'club',
    tag: 'Brand Partnerships',
    name: 'CLUB PHOENIX',
    desc: '18+ virtual nightclub with live DJ performances, arcade games, and brand activations. Built on our experience running The Block.',
    status: 'live',
    statusText: 'Live Alpha'
  },
  {
    type: 'rbxsync',
    tag: 'Dev Stack + Revenue',
    name: 'RBXSYNC',
    desc: 'AI-native sync tool for Roblox Studio. Our internal dev stack that we also license ($60 per license). Git, VS Code, MCP for AI agents.',
    status: 'live',
    statusText: 'Launched'
  }
]
</script>

<template>
  <section ref="sectionRef" class="products section">
    <div class="products-bg" :style="{ transform: backgroundTransform }"></div>
    <div class="container parallax-content" :style="contentStyle">
      <h2>FOUR PRODUCTS</h2>
      <div class="products-grid">
        <div
          v-for="product in products"
          :key="product.type"
          class="product-card"
          :class="product.type"
        >
          <span class="tag">{{ product.tag }}</span>
          <h4>{{ product.name }}</h4>
          <p>{{ product.desc }}</p>
          <div class="status">
            <span v-if="product.status === 'live'" class="live-badge">{{ product.statusText }}</span>
            <span v-else class="label">{{ product.statusText }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: var(--black);
  position: relative;
}

.products-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 50% 50% at 100% 100%, var(--rust) 0%, transparent 50%);
  opacity: 0.3;
  pointer-events: none;
  will-change: transform;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1100px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
}

.product-card {
  background: var(--dark-2);
  border: 1px solid var(--dark-3);
  padding: 28px;
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
}

.product-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
}

.product-card.borders::before { background: var(--mint); }
.product-card.arcade::before { background: var(--blue); }
.product-card.club::before { background: var(--purple); }
.product-card.rbxsync::before { background: var(--orange); }

.product-card .tag {
  display: inline-block;
  padding: 6px 12px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
  width: fit-content;
}

.product-card.borders .tag { background: rgba(74,237,196,0.1); color: var(--mint); }
.product-card.arcade .tag { background: rgba(125,211,252,0.1); color: var(--blue); }
.product-card.club .tag { background: rgba(192,132,252,0.1); color: var(--purple); }
.product-card.rbxsync .tag { background: rgba(251,146,60,0.1); color: var(--orange); }

.product-card h4 {
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}

.product-card p {
  font-size: 1rem;
  color: var(--light-gray);
  line-height: 1.75;
  flex-grow: 1;
  margin-bottom: 16px;
}

.product-card .status {
  margin-top: auto;
}
</style>
