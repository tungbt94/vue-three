<template>
  <div>
    <slot></slot>
    <three-mesh-generator :name="name" v-if="meshIsReady" @init="onInit"></three-mesh-generator>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    meshObject () {
      return this.getSceneObject(this.name)
    },
    ...mapGetters(['meshIsReady', 'getMeshMaterial', 'getMeshGeometry', 'getSceneObject'])
  },
  methods: {
    onInit (initValue) {
      this.$emit('init', initValue)
    }
  },
  mounted () {
  }
}
</script>
<style></style>
