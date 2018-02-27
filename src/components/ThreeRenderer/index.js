const ThreeRenderer = (resolve) => System.import('./ThreeRenderer.vue')
const ThreeRendererAnimator = (resolve) => System.import('./ThreeRendererAnimator.vue')

export default function install (Vue) {
  Vue.component('three-renderer', ThreeRenderer)
  Vue.component('three-renderer-animator', ThreeRendererAnimator)
}
