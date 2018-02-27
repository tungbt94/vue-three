const ThreeMaterial = (resolve) => System.import('./ThreeMaterial.vue')

export default function install (Vue) {
  Vue.component('three-material', ThreeMaterial)
}
