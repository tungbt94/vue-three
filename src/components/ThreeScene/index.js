const ThreeScene = (resolve) => System.import('./ThreeScene.vue')

export default function install (Vue) {
  Vue.component('three-scene', ThreeScene)
}
