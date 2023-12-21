<template>
  <div class="hello">
    <div style="height: 10%; display: flex; flex-direction: column;">
      <div style="font-weight: bold;">{{ curIdx + 1 }}. {{ questions[curIdx].question }}</div>
      <div style="font-size: 0.8em;">출제: {{ questions[curIdx].history }}</div>
    </div>
    <div style="height: 40%; display: flex; flex-direction: column; padding: 10px; box-sizing: border-box;">
      <div style="padding: 10px; background-color: #fff">
        {{ questions[curIdx].sql }}
      </div>
      <div style="height: 100%; padding: 10px; box-sizing: border-box; display: flex; justify-content: space-around;">
        <div style="width: 100%">
          <div>
            {{ questions[curIdx].t1.name }}
          </div>
          <div>
            <tbody>
              <tr v-for="(row, ridx) in questions[curIdx].t1.table" :key="`${questions[curIdx].id}-row-${ridx}`">
                <td v-for="(col, cidx) in questions[curIdx].t1.table[0].length" :key="`${questions[curIdx].id}-col-${cidx}`">
                  {{ questions[curIdx].t1.table[ridx][cidx] }}
                </td>
              </tr>
            </tbody>
          </div>
        </div>
        <div style="width: 100%">
          <div>
            {{ questions[curIdx].t2.name }}
          </div>
          <div>
            <tbody>
              <tr v-for="(row, ridx) in questions[curIdx].t2.table" :key="`${questions[curIdx].id}-row-${ridx}`">
                <td v-for="(col, cidx) in questions[curIdx].t2.table[0].length" :key="`${questions[curIdx].id}-col-${cidx}`">
                  {{ questions[curIdx].t2.table[ridx][cidx] }}
                </td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 10%; border: 1px solid slateblue; display: flex; flex-direction: column;">
      <div>
        <label>
          <input type="radio" value="input" v-model="answerType">
          input
        </label>
        <label>
          <input type="radio" value="table" v-model="answerType">
          table
        </label>
      </div>
      <div>
        <div v-if="answerType === 'input'">
          <button @click="addInp">add inp</button>
        </div>
        <div v-else>
          <button @click="addRow">add row</button>
          <button @click="addColumn">add col</button>
          <button @click="initTable">init</button>
        </div>
      </div>
    </div>
    <div style="height: 30%; padding: 10px; box-sizing: border-box;">
      <div v-if="answerType === 'input'">
        <div v-for="(inp, idx) in resultInput.results" :key="`inp-${idx}`">
          <input type="text" :ref="`inp-${idx}`" :value="inp">
        </div>
      </div>
      <div v-else>
        <tbody>
          <tr v-for="(row, ridx) in resultTable.rows" :key="`row-${ridx}`">
            <td v-for="(col, cidx) in resultTable.cols" :key="`col-${cidx}`">
              <input type="text" :ref="`row-${ridx}col-${cidx}`" value="">
            </td>
          </tr>
        </tbody>
      </div>
    </div>
    <div style="height: 5%; display: flex; justify-content: space-around;">
      <button @click="prev">이전 문제</button>
      <button @click="submit">제출</button>
      <button @click="next">다음 문제</button>
    </div>
  </div>
</template>

<script>
import questions from "@/assets/questions"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      questions: questions,
      curIdx: 0,
      answerType: "input",
      answer: null,
      resultTable: {
        rows: [""],
        cols: [""]
      },
      resultInput: {
        results: [""]
      },
      result: ""
    }
  },

  mounted() {
    console.log(this.questions)
  },

  methods: {
      initTable() {
        this.resultTable = {
          rows: [""],
          cols: [""]
        }
      },
      addRow() {
        this.resultTable.rows.push("");
      },
      addColumn() {
        this.resultTable.cols.push("");
      },
      addInp() {
        if (this.resultInput.results.length === 5)
          return;

          this.resultInput.results.push("");
      },
      log(ridx, cidx) {
        console.log(this.$refs[`row-${ridx}col-${cidx}`][0].value);
      },
      submit() {
        if (this.answerType === "input")
          return this.check();
        
        const rows = this.resultTable.rows.length;
        const cols = this.resultTable.cols.length;

        const result = Array.from(Array(rows), () => Array(cols).fill(""));

        this.resultTable.rows.forEach((row, ridx) => {
          this.resultTable.cols.forEach((col, cidx) => {
            const val = this.$refs[`row-${ridx}col-${cidx}`][0].value;
            result[ridx][cidx] = val;
          });
        });

        this.answer = result;

        console.log(result);
      },
      check() {
        const result = this.questions[this.curIdx].result;
        console.log("result:", result);

        if (this.answerType === "input") {
          const r = this.$refs[`inp-${0}`][0].value;
          alert(r === result? "정답!!@@@" : "다시!!!!!!!!")
        } else {
          // const a = JSON.stringify(this.answer);
          // const b = JSON.stringify(result);
        }
      },
      prev() {
        if (this.curIdx === 0)
          return;

        this.curIdx --;
      },
      next() {
        if (this.curIdx + 1 >= this.questions.length)
          return;

        this.curIdx += 1;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 787px;
  height: 100%;
  background-color: rgb(255, 236, 239);
}
.hello > div {
  display: flex;
  justify-content: center;
}

th, td {
  border: 1px solid #aaa;
  background-clip: padding-box;
  background-color: white;
  padding: 5px;
  scroll-snap-align: start;
  min-width: 100px;
}
</style>
