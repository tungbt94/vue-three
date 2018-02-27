const ThreeMesh = (resolve) => System.import('./ThreeMesh.vue')
const ThreeMeshGenerator = (resolve) => System.import('./ThreeMeshGenerator.vue')

export default function install (Vue) {
  Vue.component('three-mesh-generator', ThreeMeshGenerator)
  Vue.component('three-mesh', ThreeMesh)
}
