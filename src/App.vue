<template>
    <div id="app">
        <header>
        </header>
        <main>
            <PastExamHandler ref="past" :mobile-status="mobileStatus" />
        </main>
      </div>
</template>

<script>
import PastExamHandler from '@/components/past-exam/PastExamHandler.vue'

export default {
    name: 'App',
    components: {
        PastExamHandler
    },

    data() {
        return {
            mobileStatus: false
        }
    },

    mounted() {
        this.checkMobileStatus();
        window.addEventListener('resize', this.checkMobileStatus);
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobileStatus);
    },

    methods: {
        checkMobileStatus() {
          this.mobileStatus = window.innerWidth <= 767;
        }
    }
}
</script>

<style>
#app {
    width: 100vw;
    min-width: 430px;
    height: 100vh;
    display: flex;
    justify-content: center;
    background: linear-gradient(to bottom, #4873ff 40%, #f6f6ff 0);
}
header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    text-align: center;
}
main {
    padding: 50px 20px 0 20px;
    width: 767px;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
}
</style>
