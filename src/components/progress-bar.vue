<template>
  <div class="progress" :style="{
    'width': percent+'%',
    'height': height,
    'background-color': canSuccess? color : failedColor,
    'opacity': show ? 1 : 0
  }"></div>
</template>

<script>
export default {
  data () {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 3000,
      height: '2px',
      color: 'green',
      failedColor: 'red'
    }
  },
  methods: {
    start () {
      this.show = true
      this.canSuccess = true
      if (this.$timer) {
        clearInterval(this.$timer)
        this.percent = 0
      }
      this.$cut = 10000 / Math.floor(this.duration)
      this.$timer = setInterval(() => {
        this.increase(this.$cut * Math.random())
        if (this.percent > 95) {
          this.finish()
        }
      }, 100)
      return this
    },
    set (num) {
      this.show = true
      this.canSuccess = true
      this.percent = Math.floor(num)
      return this
    },
    get () {
      return Math.floor(this.percent)
    },
    increase (num) {
      this.percent = this.percent + Math.floor(num)
      return this
    },
    decrease (num) {
      this.percent = this.percent - Math.floor(num)
      return this
    },
    finish () {
      this.percent = 100
      this.hide()
      return this
    },
    pause () {
      clearInterval(this.$timer)
      return this
    },
    hide () {
      clearInterval(this.$timer)
      this.$timer = null
      setTimeout(() => {
        this.show = false
        this.$nextTick(() => {
          setTimeout(() => {
            this.percent = 0
          }, 200)
        })
      }, 500)
      return this
    },
    fail () {
      this.canSuccess = false
      return this
    }
  }
}
</script>

<style>
.progress {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 2px;
  width: 0%;
  -webkit-transition: width 0.2s, opacity 0.4s;
  -moz-transition: width 0.2s, opacity 0.4s;
  -o-transition: width 0.2s, opacity 0.4s;
  transition: width 0.2s, opacity 0.4s;
  opacity: 1;
  background-color: #efc14e;
  z-index: 999999;
}
</style>
