<template>
    <div>
        <div id="inputFormWrap">
            <div id="inputForm">
                <input v-model="search_content"/>
                <i class="grey large search icon" @click="search"></i>
            </div>
        </div>
        <div id="searchResultWrap">
            <div >
                <div v-for="(subject, key) in search_result" :key = key  id="itemWrap">
                    <div class="item" >
                        <div id="categoryLeft">
                            <div class="title">
                                {{subject.title}}
                            </div>
                            <div class="num" v-if="subject.classroom">
                                {{subject.professor}}, {{subject.classroom}}, {{subject.point}}학점
                            </div>
                            <div class="num" v-else>온라인</div>
                        </div>
                        <div class="categoryRight">

                            <div  class="timeTable">
                                <div id="timeOuter">
                                    <div id="timeInner">
                                        <div v-for="timetable in subject.timetable" style="font-size: 11px;" >
                                            {{timetable.day}} {{timetable.start.slice(0,5)}}~{{timetable.end.slice(0,5)}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="iconWrap" @click="addClass(subject)"> <i class="plus circle large grey icon"></i></div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "SearchTab",
        data(){
            return{
                search_content: '',
                search_result: [],
                search_load: false,
                page: 0,
            }
        },
        methods: {
            search(){
                this.search_result=[];
                this.page=1;
                this.getData(this.page);
                console.log("serach");

            },
            getData(page){
                axios.get('search/?search='+this.search_content+'&page='+page)
                    .then((response)=>{
                        console.log(response);
                        for(let i=0;i<response.data.results.length;i++){
                            this.search_result.push(response.data.results[i]);
                        }
                        if(this.bottomVisible()) {
                            this.page++;
                            this.getData(this.page);
                        }
                    })
            },
            addClass(object){
                this.$store.dispatch('ADD_CLASS', object);
                this.$bus.$emit('getAddClass', object);
            },
            bottomVisible() {
                var scrollY = window.pageYOffset;
                var visible = document.documentElement.clientHeight;
                var pageHeight = document.documentElement.scrollHeight;
                var bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible;
            },
        },//methods
        watch: {
            bottom: function(bottom) {
                if(bottom) {
                    this.page++;
                    this.getData(this.page);
                }
            }
        },
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #inputFormWrap{
        padding-top: 20px;
    }
    #inputForm{

        border-radius: 15px;
        height: 30px;
        width: 90%;
        margin: auto;
        background-color: rgb(244,244,244);
        justify-content:center;
        align-items:center;
    }
    #inputForm input{
        background: none;
        display: flex;
        border-style: none;
        width: 80%;
        float: left;
        height: 30px;
        padding-left: 20px;
        outline-style: none;
    }
    #inputForm i{
        width: 15%;
        float: right;
        height: 30px;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    #searchResultWrap{
        display: inline-block;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 30vh ;
    }

    .categoryRight{
        height: 100%;
        width:53%;
        float: right;
    }
    .item{
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        height: 50px;
        align-items:center;
    }
    .timeTable{
        height: 100%;
        display: inline-block;
        width: 60%;
    }

    hr{
        height: 1px;
        border: 0;
        border-top: 1px solid rgb(226, 226, 226);
        padding: 0;
    }

    #categoryLeft{
        display: inline-block;
        width: 47%;
    }

    .title{
        height: 50%;
        display: flex;
        width: 100%;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 12px;
        text-align: left;
        font-weight: bold;
        align-items:center;
    }
    .num{
        height: 50%;
        display: flex;
        padding-left: 10px;
        align-items:center;
        width: 100%;
        font-size: 10px;
        text-align: left;
        float: left;
        font-weight: bold;
        color: #aaa;
    }
    .iconWrap{
        display: flex;
        height: 100%;
        margin-right: 5%;
        float: right;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }

    #timeOuter{
        display:table;
        font-size: 12px;
        height: 100%;
        text-align: center;
    }
    #timeInner{
        display: table-cell;
        vertical-align: middle;
    }


</style>
