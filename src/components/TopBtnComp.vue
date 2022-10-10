<template>
  <div>
    <button v-show="btnActive" @click="pageTop" class="fixed right-5 bottom-10 bg-gray-900 opacity-70 rounded-2xl p-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" fill-opacity="0.5" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path class="w-20" fill-rule="nonzero" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>
    </button>
  </div>
</template>]

<script>
export default {
  data() {
    return {
      btnActive: false,
      scroll: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    pageTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollWindow() {
      const top = 100;
      this.scroll = window.scrollY;
      if (top <= this.scroll) {
        this.btnActive = true;
      } else {
        this.btnActive = false;
      }
    }
  }
}
</script>