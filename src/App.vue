<template>
  <div id="app" :class="$style['calc-widget']">
    <Modal />
  </div>
</template>

<script>
import Modal from './components/modal/Modal.vue';
export default {
  components:{
    Modal
  },
  // props: {
  //   type: { type: String, default: 'expanded' }
  // }
}
</script>

<style lang="scss" module>

.calc-widget {
  // font-family: Arial, sans-serif;
  font-family: inherit;
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  // @import './scss/normalize.scss';
}
</style>
