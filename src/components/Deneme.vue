<template>

  <div :style="'color:'+color">
    Deneme componenti
    <div @click="selected">renk seç</div>
  </div>

</template>

<script>

export default {
  name: "Deneme",
  props: {
    color: {type: [String], required: false, default: () => "red"},
    // text: {type: [String], required: false, default: () => "no message"},
    // type: {type: [String], required: false, default: () => "info"},
    // show: {type: [Boolean], required: false, default: () => false},
  },
  methods: {
    selected(){
      this.$emit("selectedColor", this.color)
    }
  }
}
</script>

<style scoped>

</style>