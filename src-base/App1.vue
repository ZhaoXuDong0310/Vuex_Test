<template>
  <div>
    <p>clicked: {{count}}, count is {{eventOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

export default {
    data () {
        return {
            count: 0
        }
    },

    computed: {
        eventOrOdd () {
            return this.count % 2 === 1 ? '奇数' : '偶数'
        }
    },

    methods: {
        // 添加
        increment () {
            const count = this.count
            this.count = count + 1
        },
        // 删除
        decrement () {
            const count = this.count
            if (count > 0) {
                this.count = count - 1
            }
        },
        // 如果是奇数才增加
        incrementIfOdd () {
            const count = this.count
            if (count % 2 === 1) {
                this.count = count + 1
            }
        },
        // 过1s才增加
        incrementAsync () {
            setTimeout(() => {
                const count = this.count
                this.count = count + 1
            }, 1000)
        }
    }
}
</script>

<style>

</style>
