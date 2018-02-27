<template>
  <div class="hello">
    {{message}}
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex'
  
  export default {
    name: 'HelloWorld',
    data() {
      return {
        meshCubeName: 'meshCube',
        width: 500,
        height: 500,
        message: 'Vuejs love Threejs'
      }
    },
    methods: {
      getCameraAspect() {
        return this.height / this.width;
      },
      ...mapActions(['setCamera', 'setRenderer']),
    },
    computed: {
      animatedThis() {
        return ['meshCube'];
      },
      ...mapGetters(['getCamera', 'getRenderer', 'getScene', 'getSceneObject', 'isReadyToRender']),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
