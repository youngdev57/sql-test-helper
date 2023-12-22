<template>
    <past-exam-view ref="view"
                    :question="question"
                    :mobile-status="mobileStatus"
                    @submit="submit"
                    @next="next" />
</template>

<script>
import PastExamView from './PastExamView.vue'
import questions from "@/assets/questions"

export default {
    name: "PastExamHandler",
    components: {
        PastExamView
    },

    props: {
        mobileStatus: Boolean
    },

    data() {
        return {
            questions: questions,
            currentIndex: 0,
            question: null
        }
    },

    mounted() {
        console.log(this.questions);
        this.question = this.questions[this.currentIndex];
    },

    methods: {
        submit(result) {
            const message = this.question.result === result ? "정답" : "오답";
            alert(message);
        },

        next() {
            if (this.currentIndex + 1 >= this.questions.length)
                return alert("마지막 문제입니다.");

            this.currentIndex ++;
            this.question = this.questions[this.currentIndex];
        }
    }
}
</script>

<style scoped>
</style>