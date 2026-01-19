import { computed, ref, onMounted, onUnmounted, type Ref } from 'vue'
import { inBrowser } from 'vitepress'

export interface ParallaxOptions {
  speed?: number
  fadeDistance?: number
  scaleRange?: [number, number]
}

export function useParallax(
  elementRef: Ref<HTMLElement | null>,
  scrollY: Ref<number>,
  windowHeight: Ref<number>,
  options: ParallaxOptions = {}
) {
  const { speed = 0.3, fadeDistance = 300, scaleRange = [0.95, 1] } = options

  const elementTop = ref(0)
  const elementHeight = ref(800)

  const updateElementPosition = () => {
    if (!inBrowser || !elementRef.value) return

    const rect = elementRef.value.getBoundingClientRect()
    elementTop.value = rect.top + scrollY.value
    elementHeight.value = rect.height
  }

  onMounted(() => {
    if (!inBrowser) return

    updateElementPosition()
    window.addEventListener('resize', updateElementPosition)
  })

  onUnmounted(() => {
    if (!inBrowser) return

    window.removeEventListener('resize', updateElementPosition)
  })

  // Calculate how far the element is from the viewport center
  const distanceFromCenter = computed(() => {
    const viewportCenter = scrollY.value + windowHeight.value / 2
    const elementCenter = elementTop.value + elementHeight.value / 2
    return elementCenter - viewportCenter
  })

  // Parallax transform for background elements (moves slower)
  const backgroundTransform = computed(() => {
    const offset = distanceFromCenter.value * speed * 0.5
    return `translateY(${offset}px)`
  })

  // Parallax transform for foreground content (moves at different rate)
  const contentTransform = computed(() => {
    const offset = distanceFromCenter.value * speed * -0.2
    return `translateY(${offset}px)`
  })

  // Opacity based on distance from viewport center
  const opacity = computed(() => {
    const distance = Math.abs(distanceFromCenter.value)
    const maxDistance = windowHeight.value * 0.8
    return Math.max(0, Math.min(1, 1 - (distance - windowHeight.value * 0.3) / maxDistance))
  })

  // Scale effect
  const scale = computed(() => {
    const distance = Math.abs(distanceFromCenter.value)
    const normalizedDistance = Math.min(1, distance / windowHeight.value)
    const [minScale, maxScale] = scaleRange
    return maxScale - (maxScale - minScale) * normalizedDistance * 0.5
  })

  // Combined content style
  const contentStyle = computed(() => ({
    transform: `${contentTransform.value} scale(${scale.value})`,
    opacity: Math.max(0.2, opacity.value)
  }))

  // Check if element is in view
  const isInView = computed(() => {
    const viewportTop = scrollY.value
    const viewportBottom = scrollY.value + windowHeight.value
    const elementBottom = elementTop.value + elementHeight.value
    return elementBottom > viewportTop && elementTop.value < viewportBottom
  })

  return {
    backgroundTransform,
    contentTransform,
    contentStyle,
    opacity,
    scale,
    isInView,
    distanceFromCenter,
    updateElementPosition
  }
}
