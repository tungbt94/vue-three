const ThreeCamera = (resolve) => System.import('./ThreeCamera.vue')

export default function install (Vue) {
  Vue.component('three-camera', ThreeCamera)
}
