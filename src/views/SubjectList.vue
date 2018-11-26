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
        <div class="ui divider"></div>
        <div v-for="(subject, key) in subjects" :key="key">
            <div class="item" >
                <div class="title">
                    {{subject.title}}
                </div>
                <div class="categoryInfo">
                    <div class="num" v-if="subject.classroom">{{subject.classroom}}</div>
                    <div class="num" v-else>온라인</div>
                    <div  class="timeTable">
                        <div v-for="timetable in subject.timetable">
                            {{timetable.day}} {{timetable.start}}~{{timetable.end}}
                        </div>
                    </div>

                    <div class="iconWrap" @click="addClass(subject)"> <i class="plus circle large grey icon"></i></div>
                </div>
            </div>
            <div class="ui divider"></div>
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
                subjects: []
            }
        },
        mounted(){
            const  search_category = this.category.replace("_","/").replace("_","/");
            let search_subcategory = this.subcategory.replace("_","/").replace("_","/");
            axios.get('search/?category='+search_category+'&subcategory='+search_subcategory).
                then((response)=>{

                    this.count = response.data.count;
                    this.subjects = response.data.results;
            })
        },
        methods:{
            link_previous(){
                this.$router.go(-1);
            },
            addClass(object){
                console.log(object);
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
    .divider{
        width: 100%;
    }
    #title{
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;

    }
    *{
        margin: 0;
        padding: 0;
    }
    .divider{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .divider:last-child{
    }
    .categoryInfo{
        height: 100%;
        width:60%;
        float: right;
    }
    .item{
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        height: 30px;
        align-items:center;
    }
    .timeTable{
        height: 100%;
        display: inline-block;
        width: 50%;

    }

    .title{
        height: 100%;
        display: flex;
        width: 40%;
        float: left;
        padding-left: 20px;
        font-size: 15px;
        text-align: left;
        font-weight: bold;
        align-items:center;
    }
    .num{
        height: 100%;
        display: flex;
        align-items:center;
        width: 30%;
        text-align: right;
        padding-right:10px;
        float: left;
    }
    .iconWrap{
        display: flex;
        width: 20%;
        height: 100%;
        float: right;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
</style>
