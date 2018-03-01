<template>
    <div>
      <p>click:{{count}} times, count is {{eventOrOdd}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">incrementIfOdd</button>
      <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>
<script>
    import {mapState, mapGetters, mapActions} from 'vuex'
    export default {
        computed: {
          ...mapState(['count']),
          // mapGetters返回值是一个对象，对象里有一个 eventOrOdd()方法
          ...mapGetters(['eventOrOdd'])
          // 1 - 参数利用数组类型的条件：
                  // 1. 组件中为功能定义的名称必须与store对象中对应的功能名称相同
                  // 2. 以字符串的方式传入

          // 2 - 如果在store中功能定义的名称与组件中对应功能定义的名称不同
                  // 1. 以对象的方式传入 - ...mapGetters({xxx: xxx1})
                  // 2. 以 ...mapGetters({xxx: xxx1})为例：
                                // 第一个传入的是组建中对应功能定义的名称，第二位则是在store对象中功能定义的名称

          /* eventOrOdd () {
                return this.$store.getters.eventOrOdd
          } */
        },
        methods: {
          ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
        }

        /* methods: {
            increment () { // this是组件对象
                this.$store.dispatch('increment')
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
        } */
    }
</script>
<style>

</style>
