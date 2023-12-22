<template>
<div class="horizon-center">
    <div class="table-name">
        {{ name }}
    </div>
</div>
<div v-if="data" class="horizon-center">
    <table>
        <tr v-for="(row, ridx) in data" :key="`row-${row}-${ridx}`">
            <td v-for="(col, cidx) in data[0].length" :key="`col-${col}-${cidx}`" @click="log(`data[${ridx}][${cidx}]`)">
                {{ data[ridx][cidx] }}
            </td>
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "DataTable",
    props: {
        name: String,
        data: Array
    },

    methods: {
        log(m) {
            console.log(m);
        }
    }
}
</script>

<style scoped>
.horizon-center {
    display: flex;
    justify-content: center;
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
table {
    border-collapse: collapse;
    width: fit-content;
    text-align: center;
    font-size: 0.8em;
}
table td {
    border: 1px solid #dcdcdc;
    padding: 8px;
}
table tr:nth-child(odd) {
    background-color: #f2f2f2;
}
</style>