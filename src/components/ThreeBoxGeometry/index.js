const ThreeBoxGeometry = (resolve) => System.import('./ThreeBoxGeometry.vue')

export default function install (Vue) {
  Vue.component('three-box-geometry', ThreeBoxGeometry)
}
