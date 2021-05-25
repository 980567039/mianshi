<template>
  <div>
    <div v-for="(test, index) in frontendTestList" :key="`test${index}`" class="content">
      <p>{{ index+1 }}.{{ test.title }} <span @click="test.showAnswer=!test.showAnswer">{{ test.showAnswer? '显示答案':'隐藏答案' }}</span> </p>
      <div v-show="!test.showAnswer" class="answer">
        <p v-for="(text, index) in test.answer" :key="`text${index}`">{{ text }}</p>
      </div>
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'frontendTest',
  data() {
    return {
      frontendTestList: []
    }
  },
  computed: {
    ...mapState({
      'aaa': 'test'
    }),
    ...mapGetters({
      'getTest': 'getTest'
    }),
    ...mapMutations({
      setTest: 'setTest'
    }),
    ...mapActions([
      'actionA'
    ])
  },
  created() {
    // this.$store.commit('setTest', 'hahahaha')
    this.$store.dispatch('actionA')
    this.$http.get('frontendTest.json').then(res => {
      this.frontendTestList = res.data.frontendTestList
      // console.log(this.getTest(2))
    })
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 2000px;
  margin: 0 auto;
  text-align: left;
  .answer{
    width: 100% ;
    display: inline-block;
    background: #f5f5f5;
    padding: 20px;
    box-sizing: border-box;
  }
  >p{
    &:first-child{
      font-size: 60px;
      margin:40px 0 20px 0;
    }
  }
  p{
    margin: 0;
    font-size: 40px;
  }
  textarea {
    width: 100%;
    margin-top: 40px;
    border: 1px solid #eee;
    box-sizing: border-box;
    min-height: 100px;
  }
}
</style>