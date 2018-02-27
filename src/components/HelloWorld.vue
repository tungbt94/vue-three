<template>
  <div class="hello">
    {{message}}
    <three-renderer @init="setRenderer" :width="width" :height="height">
      <three-camera :fov="75" :aspect="getCameraAspect()" :near="0.1" :far="1000" @init="setCamera">
        <three-scene>
          <three-mesh :name="meshCubeName">
            <three-box-geometry x="1" y="1" z="1"></three-box-geometry>
            <three-material
              :morph-targets="true"
              :wireframe="false"
              :wireframe-linewidth="0.3"
              :wireframe-linecap="'round'"
              :color="0x00ff00"
            ></three-material>
          </three-mesh>
        </three-scene>
      </three-camera>
      <three-renderer-animator v-if="isReadyToRender(['cube'])"
        :camera="getCamera"
        :scene="getScene.instance"
        :renderer="getRenderer"
        :refs-to-animate="animateThis"
      ></three-renderer-animator>
    </three-renderer>
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
        meshCubeName: 'cube',
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
      animateThis() {
        return ['cube'];
      },
      ...mapGetters(['getCamera', 'getRenderer', 'getScene', 'getSceneObject', 'isReadyToRender']),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    margin: 0;
  }
  
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
