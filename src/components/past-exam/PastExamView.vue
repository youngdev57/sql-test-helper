<template>
<div class="main-component">
    <section class="question-section">
        <h5 style="color: #cad6ff">{{ question && question.history }}</h5>
        <h1>Q. {{ question && question.question }} </h1>
    </section>
    <section v-if="question && question.sql" class="sql-section section-wrapper">
        <div v-html="question.sql" style="line-height: 25px;"></div>
    </section>
    <div v-if="question && question.tables" class="table-section section-wrapper">
        <div v-for="(tableInfo, idx) in question.tables" :key="`table-${tableInfo.name}-${idx}`">
            <data-table ref="table" :name="tableInfo.name" :data="tableInfo.table" />
        </div>
    </div>
    <div class="section-wrapper" style="display: flex">
        <div style="margin-top: 1px">
            <b style="color: #4873ff">답변 유형 선택</b>
        </div>
        <div style="padding: 0 30px; color: #dcdcdc">
            |
        </div>
        <div style="font-size: 0.9em">
            <form>
                <label style="margin-right: 30px">
                    <input type="radio" name="answer" value="input" v-model="result.type"> 문자열
                </label>
                <label>
                    <input type="radio" name="answer" value="table" v-model="result.type"> 표
                </label>
            </form>
        </div>
    </div>
    <div class="answer-section section-wrapper">
        <div v-if="!mobileStatus" style="margin-top: 1px; width: 80px">
            정답
        </div>
        <div v-if="!mobileStatus" style="padding: 0 30px; color: #dcdcdc">
            |
        </div>
        <div style="flex: 1; display: flex; flex-direction: column">
            <div v-if="result.type === 'input'">
                <input type="text" ref="inpString" v-model="result.string" placeholder="여기에 답을 입력해주세요" class="inp-result" style="width: 80%">
            </div>
            <div v-else>
                <table>
                    <tr v-for="(row, ridx) in result.table.rows" :key="`row-${ridx}`">
                        <td v-for="(col, cidx) in result.table.cols" :key="`col-${cidx}`">
                            <input type="text" class="inp-table" :ref="`row-${ridx}-col-${cidx}`" value="">
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="btn-wrapper">
            <div>
                <button v-show="result.type === 'table'" class="btn-border" @click="addTableRow">행 추가</button>
                <button v-show="result.type === 'table'" class="btn-border" @click="addTableColumn" style="margin-bottom: 10px">열 추가</button>
            </div>
            <div>
                <button @click="emitNext" class="btn-border">건너뛰기</button>
                <button @click="confirm" :style="`background-color: ${ result.type === 'table' || result.string.length > 0 ? '#4873ff' : '#cad6ff'}`">제출</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import DataTable from '../common/DataTable.vue'

export default {
    name: "PastExamView",
    components: {
        DataTable
    },

    props: {
        mobileStatus: Boolean,
        question: {
            type: Object,
            default: () => {}
        }
    },

    emits: ["next", "submit"],

    data() {
        return {
            result: {
                type: "input",
                string: "",
                table: {
                    rows: [""],
                    cols: [""]
                }
            }
        }
    },

    mounted() {
        console.log("this.question...", this.question)
    },

    methods: {
        addTableRow() {
            if (this.result.table.rows.length > 7)
                return;

            this.result.table.rows.push("");
        },

        addTableColumn() {
            if (this.result.table.cols.length > 2)
                return;
            
            this.result.table.cols.push("");
        },

        emitNext() {
            if (confirm("건너뛰시겠습니까?"))
                this.$emit("next");
        },

        confirm() {
            if (this.result.type === "input" && this.result.string === "")
                return this.$refs["inpString"].focus();

            // TODO 테이블 비어 있을 경우 포커스
            if (this.result.type === "table")
                return;

            if (confirm("제출하시겠습니까?"))
                this.emitSubmit();
        },

        emitSubmit() {
            if (this.result.type === "input")
                return this.$emit("submit", this.result.string);

            const rows = this.result.table.rows.length;
            const cols = this.result.table.cols.length;

            const result = Array.from(Array(rows), () => Array(cols).fill(""));
            this.result.table.rows.forEach((row, ridx) => {
                this.result.table.cols.forEach((col, cidx) => {
                    const value = this.$refs[`row-${ridx}-col-${cidx}`][0].value;
                    result[ridx][cidx] = value;
                });
            });

            this.$emit("submit", JSON.stringify(result));
        }
    }
}
</script>

<style scoped>
p, h4 {
    margin: 0;
}
button {
    width: 100px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
}
input[type="text"] {
    border: none;
    outline: none;
    padding: 5px
}
input[type="text"]:focus {
    border: 2px solid #4873ff;
    border-radius: 5px;
}
::placeholder {
    color: #b3b3b3;
}
.horizon-center {
    display: flex;
    justify-content: center;
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-component {
    width: 100%;
    height: fit-content;
}
.section-wrapper {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.16);
}
.question-section {
    color: #fff;
}
.sql-section {
    border-radius: 10px;
    color: #606060;
}
.answer-section {
    display: flex;
    gap: 10px;
    height: fit-content;
}
.table-section {
    display: flex;
    height: fit-content;
    gap: 10px;
}
.table-section > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.table-name {
    width: fit-content;
    background-color: #4873ff;
    padding: 5px 10px;
    border-radius: 12px;
    color: #fff;
    font-size: 0.8em;
    box-shadow: 0 2px 3px 0 rgba(0,0,0,.16);
}
.btn-wrapper {
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
}
.btn-wrapper > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
}
.btn-border {
    transition: 0.2s;
    border: 1px solid;
    color: #4873ff;
    background-color: transparent;
}
.btn-border:hover {
    transition: 0.2s;
    color: #fff;
    background-color: #4873ff;
}
table {
    border-collapse: collapse;
    width: fit-content;
    text-align: center;
    font-size: 0.8em;
}
table td {
    border: 1px solid #dcdcdc;
    padding: 2px;
    width: 120px;
    height: 30px;
}
table tr:nth-child(odd) {
    background-color: #f2f2f2;
}
.inp-table {
    background-color: transparent;
    width: 100px;
}
</style>