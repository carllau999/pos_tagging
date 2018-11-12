<template>
   <div id="app">
      <img src=".././assets/artificial-intelligence.png" width="100px" height="100px">
      <h1 class="mt-3">NLP Tagger</h1>
      <h> Carlson Lau </h>
      <div class="container">
         <section>
            <template>
               <div class="main">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 5}"
                    placeholder="Please input a sentence to test!"
                    style="width:80%;"
                    v-model="text">
            </el-input>
               </div>
               <el-button type="primary" @click="handleProcess">Analyse</el-button>
            </template>

         </section>

         <section>
            <el-dialog title="Summary" :visible.sync="nlpVisible" :close-on-click-modal="false">
              <h1>Detected Entities</h1>
              <el-table
                :data="tableData2"
                style="width: 80%">
                <el-table-column
                  prop="word"
                  label="Word"
                  width="200" header-align="center">
                </el-table-column>
                <el-table-column
                  prop="obj"
                  label="Entity" header-align="center">
                </el-table-column>
              </el-table>
              <h1>Tagged Words</h1>
               <el-table
                :data="tableData"
                style="width: 80%">
                <el-table-column
                  prop="word"
                  label="Word"
                  width="200" header-align="center">
                </el-table-column>
                <el-table-column
                  prop="tag"
                  label="Tag"
                  width="200" header-align="center">
                </el-table-column>
                <el-table-column
                  prop="obj"
                  label="Entity" header-align="center">
                </el-table-column>
              </el-table>
               <div slot="footer" class="dialog-footer">
                  <el-button @click.native="nlpVisible = false">Close</el-button>
               </div>
            </el-dialog>
         </section>
      </div>
   </div>
</template>

<script>
import {nlp} from './index.js'
import axios from 'axios'

export default {
  name: 'app',
  methods: {
   handleProcess: function(){
    console.log("in handle process")
    this.loading = true
    this.tableData = []
    this.tableData2 = []
    // check if api call succesful
    nlp(this.text).then(res => {
        console.log(res)
        for(let k = 0; k<Object.keys(res.entities).length; k++){
          this.tableData2.push({
            word: Object.keys(res.entities)[k],
            obj: res.entities[Object.keys(res.entities)[k]]
          })
        }
        let data, word
        for(let i =0; i<Object.keys(res.pos).length; i++){
          word = Object.keys(res.pos)[i]
          data = {
            word: word,
            tag: res.pos[word],
            obj: ''
          }
          if(Object.keys(res.entities).indexOf(word) > -1){
            data.obj = res.entities.word
          }
          else{
            for(let j = 0; j<Object.keys(res.entities).length; j++){
              if(i != Object.keys(res.pos).length - 1 && Object.keys(res.entities)[j].indexOf(word) > -1 && (Object.keys(res.entities)[j].indexOf(Object.keys(res.pos)[i + 1]) > -1 )){
                data.obj = res.entities[Object.keys(res.entities)[j]]
              }
            }
          }
          this.tableData.push(data)
        }
        this.nlpVisible = true
        // generate notifications
        this.$notify({
            title: 'Success',
            message: 'Succesfully Analysed!',
            type: 'success'
          });
      this.loading = false
    })
   }
 },
  data () {
    return {
      loading: false,
      nlpVisible: false,
      tableData: [],
      tableData2: [],
      text: 'The U.S. is ready to engage in talks about North Korea’s nuclear program even as it maintains pressure on Kim Jong Un’s regime, the Washington Post reported, citing an interview with Vice President Mike Pence. Pence and South Korea’s President Moon Jae-in agreed on a post-Olympics strategy during conversations at the Winter Olympics in the South Korean resort of Pyeongchang that Pence dubbed “maximum pressure and engagement at the same time.” Pence spoke in an interview on his way home from the Winter Olympics. “The point is, no pressure comes off until they are actually doing something that the alliance believes represents a meaningful step toward denuclearization,” the Post quoted Pence as saying. “So the maximum pressure campaign is going to continue and intensify. But if you want to talk, we’ll talk.”'

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
main{
  text-align: center;

}
text{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}

h5 {
   margin-bottom: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
