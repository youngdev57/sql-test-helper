(function(){"use strict";var t={8703:function(t,e,n){var s=n(9963),i=n(6252);const l={id:"app"},o=(0,i._)("header",null,null,-1);function r(t,e,n,s,r,a){const u=(0,i.up)("PastExamHandler");return(0,i.wg)(),(0,i.iD)("div",l,[o,(0,i._)("main",null,[(0,i.Wm)(u,{ref:"past","mobile-status":r.mobileStatus},null,8,["mobile-status"])])])}function a(t,e,n,s,l,o){const r=(0,i.up)("past-exam-view");return(0,i.wg)(),(0,i.j4)(r,{ref:"view",question:l.question,"mobile-status":n.mobileStatus,onSubmit:o.submit,onNext:o.next},null,8,["question","mobile-status","onSubmit","onNext"])}var u=n(3577);const c=t=>((0,i.dD)("data-v-21c1abcc"),t=t(),(0,i.Cn)(),t),d={class:"main-component"},p={class:"question-section"},b={style:{color:"#cad6ff"}},m={class:"sql-section section-wrapper"},h={key:0,class:"table-section section-wrapper"},f={class:"section-wrapper",style:{display:"flex"}},w=c((()=>(0,i._)("div",{style:{"margin-top":"1px"}},[(0,i._)("b",{style:{color:"#4873ff"}},"답변 유형 선택")],-1))),y=c((()=>(0,i._)("div",{style:{padding:"0 30px",color:"#dcdcdc"}}," | ",-1))),g={style:{"font-size":"0.9em"}},v={style:{"margin-right":"30px"}},_={class:"answer-section section-wrapper"},q={key:0,style:{"margin-top":"1px",width:"80px"}},x={key:1,style:{padding:"0 30px",color:"#dcdcdc"}},k={style:{flex:"1",display:"flex","flex-direction":"column"}},S={key:0},D={key:1},E={class:"btn-wrapper"};function $(t,e,n,l,o,r){const a=(0,i.up)("data-table");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("section",p,[(0,i._)("h5",b,(0,u.zw)(n.question&&n.question.history),1),(0,i._)("h1",null,"Q. "+(0,u.zw)(n.question&&n.question.question),1)]),(0,i._)("section",m,[(0,i._)("p",null,(0,u.zw)(n.question&&n.question.sql),1)]),n.question&&n.question.tables?((0,i.wg)(),(0,i.iD)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.question.tables,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{key:`table-${t.name}-${e}`},[(0,i.Wm)(a,{ref_for:!0,ref:"table",name:t.name,data:t.table},null,8,["name","data"])])))),128))])):(0,i.kq)("",!0),(0,i._)("div",f,[w,y,(0,i._)("div",g,[(0,i._)("form",null,[(0,i._)("label",v,[(0,i.wy)((0,i._)("input",{type:"radio",name:"answer",value:"input","onUpdate:modelValue":e[0]||(e[0]=t=>o.result.type=t)},null,512),[[s.G2,o.result.type]]),(0,i.Uk)(" 문자열 ")]),(0,i._)("label",null,[(0,i.wy)((0,i._)("input",{type:"radio",name:"answer",value:"table","onUpdate:modelValue":e[1]||(e[1]=t=>o.result.type=t)},null,512),[[s.G2,o.result.type]]),(0,i.Uk)(" 표 ")])])])]),(0,i._)("div",_,[n.mobileStatus?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",q," 정답 ")),n.mobileStatus?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",x," | ")),(0,i._)("div",k,["input"===o.result.type?((0,i.wg)(),(0,i.iD)("div",S,[(0,i.wy)((0,i._)("input",{type:"text",ref:"inpString","onUpdate:modelValue":e[2]||(e[2]=t=>o.result.string=t),placeholder:"여기에 답을 입력해주세요",class:"inp-result",style:{width:"80%"}},null,512),[[s.nr,o.result.string]])])):((0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("table",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.result.table.rows,((t,e)=>((0,i.wg)(),(0,i.iD)("tr",{key:`row-${e}`},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.result.table.cols,((t,n)=>((0,i.wg)(),(0,i.iD)("td",{key:`col-${n}`},[(0,i._)("input",{type:"text",class:"inp-table",ref_for:!0,ref:`row-${e}-col-${n}`,value:""},null,512)])))),128))])))),128))])]))]),(0,i._)("div",E,[(0,i._)("div",null,[(0,i.wy)((0,i._)("button",{class:"btn-border",onClick:e[3]||(e[3]=(...t)=>r.addTableRow&&r.addTableRow(...t))},"행 추가",512),[[s.F8,"table"===o.result.type]]),(0,i.wy)((0,i._)("button",{class:"btn-border",onClick:e[4]||(e[4]=(...t)=>r.addTableColumn&&r.addTableColumn(...t)),style:{"margin-bottom":"10px"}},"열 추가",512),[[s.F8,"table"===o.result.type]])]),(0,i._)("div",null,[(0,i._)("button",{onClick:e[5]||(e[5]=(...t)=>r.emitNext&&r.emitNext(...t)),class:"btn-border"},"건너뛰기"),(0,i._)("button",{onClick:e[6]||(e[6]=(...t)=>r.confirm&&r.confirm(...t)),style:(0,u.j5)("background-color: "+("table"===o.result.type||o.result.string.length>0?"#4873ff":"#cad6ff"))},"제출",4)])])])])}n(560);const C={class:"horizon-center"},O={class:"table-name"},T={key:0,class:"horizon-center"},H=["onClick"];function R(t,e,n,s,l,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",C,[(0,i._)("div",O,(0,u.zw)(n.name),1)]),n.data?((0,i.wg)(),(0,i.iD)("div",T,[(0,i._)("table",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,((t,e)=>((0,i.wg)(),(0,i.iD)("tr",{key:`row-${t}-${e}`},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data[0].length,((t,s)=>((0,i.wg)(),(0,i.iD)("td",{key:`col-${t}-${s}`,onClick:t=>o.log(`data[${e}][${s}]`)},(0,u.zw)(n.data[e][s]),9,H)))),128))])))),128))])])):(0,i.kq)("",!0)],64)}var z={name:"DataTable",props:{name:String,data:Array},methods:{log(t){console.log(t)}}},j=n(3744);const I=(0,j.Z)(z,[["render",R],["__scopeId","data-v-35c6f4aa"]]);var L=I,M={name:"PastExamView",components:{DataTable:L},props:{mobileStatus:Boolean,question:{type:Object,default:()=>{}}},emits:["next","submit"],data(){return{result:{type:"input",string:"",table:{rows:[""],cols:[""]}}}},mounted(){console.log("this.question...",this.question)},methods:{addTableRow(){this.result.table.rows.length>7||this.result.table.rows.push("")},addTableColumn(){this.result.table.cols.length>2||this.result.table.cols.push("")},emitNext(){confirm("건너뛰시겠습니까?")&&this.$emit("next")},confirm(){if("input"===this.result.type&&""===this.result.string)return this.$refs["inpString"].focus();"table"!==this.result.type&&confirm("제출하시겠습니까?")&&this.emitSubmit()},emitSubmit(){if("input"===this.result.type)return this.$emit("submit",this.result.string);const t=this.result.table.rows.length,e=this.result.table.cols.length,n=Array.from(Array(t),(()=>Array(e).fill("")));this.result.table.rows.forEach(((t,e)=>{this.result.table.cols.forEach(((t,s)=>{const i=this.$refs[`row-${e}-col-${s}`][0].value;n[e][s]=i}))})),this.$emit("submit",JSON.stringify(n))}}};const N=(0,j.Z)(M,[["render",$],["__scopeId","data-v-21c1abcc"]]);var P=N,F=[{id:200101,question:"다음 SQL문의 실행 결과를 쓰시오.",history:"2020년 1회 정보처리기사 필기",sql:"SELECT 가격 FROM 도서가격 WHERE 책번호 = (\n            SELECT 책번호 FROM 도서 WHERE 책명='자료구조');",tables:[{name:"도서",table:[["책번호","책명"],["111","운영체제"],["222","자료구조"],["333","컴퓨터구조"]]},{name:"도서가격",table:[["책번호","가격"],["111","20,000"],["222","25,000"],["333","10,000"],["444","15,000"]]}],result:"25000"},{id:200201,question:"관계 데이터베이스인 테이블 R1에 대한 아래 SQL 문의 실행결과를 쓰시오.",history:"2020년 2회 정보처리기사 필기",sql:"SELECT DISTINCT 학년 FROM R1;",tables:[{name:"R1",table:[["학번","이름","학년","학과","주소"],["1000","홍길동","1","컴퓨터공학","서울"],["2000","김철수","1","전기공학","경기"],["3000","강남길","2","전자공학","경기"],["4000","오말자","3","컴퓨터공학","경기"],["5000","장미화","4","전자공학","서울"]]}],result:[["학년"],["1"],["2"],["3"]]}],U={name:"PastExamHandler",components:{PastExamView:P},props:{mobileStatus:Boolean},data(){return{questions:F,currentIndex:0,question:null}},mounted(){console.log(this.questions),this.question=this.questions[this.currentIndex]},methods:{submit(t){const e=this.question.result===t?"정답":"오답";alert(e)},next(){if(this.currentIndex+1>=this.questions.length)return alert("마지막 문제입니다.");this.currentIndex++,this.question=this.questions[this.currentIndex]}}};const Y=(0,j.Z)(U,[["render",a]]);var A=Y,K={name:"App",components:{PastExamHandler:A},data(){return{mobileStatus:!1}},mounted(){this.checkMobileStatus(),window.addEventListener("resize",this.checkMobileStatus)},beforeUnmount(){window.removeEventListener("resize",this.checkMobileStatus)},methods:{checkMobileStatus(){this.mobileStatus=window.innerWidth<=767}}};const V=(0,j.Z)(K,[["render",r]]);var W=V;(0,s.ri)(W).mount("#app")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var l=e[s]={exports:{}};return t[s].call(l.exports,l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,s,i,l){if(!s){var o=1/0;for(c=0;c<t.length;c++){s=t[c][0],i=t[c][1],l=t[c][2];for(var r=!0,a=0;a<s.length;a++)(!1&l||o>=l)&&Object.keys(n.O).every((function(t){return n.O[t](s[a])}))?s.splice(a--,1):(r=!1,l<o&&(o=l));if(r){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[s,i,l]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,l,o=s[0],r=s[1],a=s[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(a)var c=a(n)}for(e&&e(s);u<o.length;u++)l=o[u],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},s=self["webpackChunksql_test_helper"]=self["webpackChunksql_test_helper"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(8703)}));s=n.O(s)})();
//# sourceMappingURL=app.33903e6e.js.map