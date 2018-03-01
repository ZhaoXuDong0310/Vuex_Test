<template>
    <div>
      <p>clicked:{{$store.state.count}} times, count is {{eventOrOdd}}</p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">incrementIfOdd</button>
      <button @click="incrementAsync">incrementAsync</button>
    </div>
</template>
<script>
    export default {
        computed: {
            eventOrOdd () {
                return this.$store.getters.eventOrOdd
            }
        },
        methods: {
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
        }
    }
</script>
<style>

</style>
