<template>
  <div>
    <p>hello test</p>
  </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  created() {
    this.$eventBus.$emit('say', 'hello')
  },
  beforeDestroy() {
    
  }
}
</script>

<style lang='scss' scoped>
p {
  font-size: 25px;
}
</style>
