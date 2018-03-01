<template>
  <div>
    <p>clicked:{{$store.state.count}} times, count is {{eventOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
    export default {
        computed: {
          eventOrOdd () { // this代表组件对象
              return this.$store.getters.eventOrOdd
          }
        },
        methods: {
          increment () {
              // 通知veux去增加
              this.$store.dispatch('increment') // 触发store中对应的actions调用
          },
          decrement () {
              this.$store.dispatch('decrement')
          },
          incrementIfOdd () {
              this.$store.dispatch('incrementIfOdd')
          },
          incrementAsync () {
              this.$store.dispatch('incrementAsync')
          }
        }
    }
</script>
<style>

</style>
