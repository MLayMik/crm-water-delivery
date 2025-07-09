import type { VueElement } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'
import { AppLayoutsEnum, AppLayoutToFileMap } from './types'

const layoutComponents = import.meta.glob('@/pages/layouts/*.vue')

export async function loadLayoutMiddleware(
  route: RouteLocationNormalized,
): Promise<void> {
  const { layout } = route.meta
  const normalizedLayoutName = layout || AppLayoutsEnum.default
  const fileName = AppLayoutToFileMap[normalizedLayoutName]
  const filePath = `/src/pages/layouts/${fileName}`

  const loader = layoutComponents[filePath]

  if (!loader) {
    throw new Error(`Layout component not found for ${filePath}`)
  }

  const component = (await loader()) as { default: VueElement }
  route.meta.layoutComponent = component.default
}
