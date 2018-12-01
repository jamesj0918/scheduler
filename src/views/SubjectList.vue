<template>
    <div>
        <div id="title">
            <h4>
                {{category}} > {{subcategory}} {{count}}개의 강의
                <i
                    style="cursor: pointer"
                    @click="link_previous()"
                    class="angle left large grey icon">
                </i>
            </h4>
        </div>
        <div id="subjectListContentWrap">
            <hr style="margin-top: 10px; border-top: 1px solid darkgray;">
            <div v-if="load">
                <div v-for="(subject, key) in subjects" :key="key">
                    <div class="item" >
                        <div id="categoryLeft">
                            <div class="title">
                                {{subject.title}}
                            </div>
                            <div class="num" v-if="subject.classroom">
                                {{subject.classroom}}
                            </div>
                            <div class="num" v-else>온라인</div>
                        </div>

                        <div class="categoryRight">

                            <div  class="timeTable">
                                <div id="timeOuter">
                                    <div id="timeInner">
                                        <div v-for="timetable in subject.timetable" >
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
            <div v-else>
                <div style="display: inline-block; height: 100%;" class="ui active inline loader"></div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios'

    export default {
        name: "SubjectList",
        data(){
            return{
                category: this.$route.params.category,
                subcategory: this.$route.params.subcategory,
                count: 0,
                subjects: [],
                load : false,
                answer: '불러오는 중...'

            }
        },
        mounted(){
            const  search_category = this.category.replace("_","/").replace("_","/");
            let search_subcategory = this.subcategory.replace("_","/").replace("_","/");
            axios.get('search/?category='+search_category+'&subcategory='+search_subcategory).
                then((response)=>{
                    this.count = response.data.count;
                    this.subjects = response.data.results;
                    this.load = true;
            })
        },
        methods:{
            link_previous(){
                this.$router.go(-1);
            },
            addClass(object){
                this.$store.dispatch('ADD_CLASS', object);
                this.$bus.$emit('GET_CLASS');
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #title{
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;
    }

    .categoryRight{
        height: 100%;
        width:60%;
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
        width: 40%;
    }

    .title{
        height: 50%;
        display: flex;
        width: 100%;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        font-size: 13px;
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
        text-align: right;
        float: left;
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
