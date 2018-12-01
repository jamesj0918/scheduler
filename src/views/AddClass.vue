<template>
    <div id="addClassWrap">
        <div v-for="subject in add_subjects" id="itemLayout">
            <div id="itemContent">
                <div id="itemLeftOuter">
                    <div id="itemLeftInner">
                        <div>
                            <div id="itemTitle">
                                {{subject.subject.title}}
                            </div>
                            <div class="itemInfo" v-if="subject.classroom">
                                {{subject.subject.professor}},{{subject.subject.classroom}}
                            </div>
                            <div class="itemInfo" v-else>온라인</div>
                        </div>

                    </div>


                </div>

                <div id="itemRightOuter">
                        <div id="itemRightInner">
                            <div id="timeTableOuter">
                                <div id="timeTable">
                                    <div v-for="time in subject.subject.timetable" style="font-size: 12px;" >
                                        {{time.day}}{{time.start.slice(0,5)}}~{{time.end.slice(0,5)}}
                                    </div>
                                </div>
                            </div>

                            <div id="iconWrap">
                                <div id="icon">
                                    <i class="ui icon grey large circle minus"></i>
                                </div>
                            </div>

                        </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddClass",
        data(){
            return{
                add_subjects: [],
            }
        },
        mounted(){
            this.$bus.$on('getAddClass',this.getClass);
        },
        methods:{
            getClass(){
                this.add_subjects = this.$store.getters.GET_CLASS;
            },
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #addClassWrap{
        display: inline-block;
        width: 80%;
    }

    #itemLayout{
        display: inline-block;
        background-color: white;
        margin-bottom: 5px;
        width: 60%;
        height: 65px;
        padding-top: 5px;
        padding-bottom: 5px;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 10px;
    }
    #itemContent{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    #itemLeftOuter{
        display: table;
        width: 40%;
        height: 100%;
        padding-left: 10px;
        float: left;
    }
    #itemLeftInner{
        display: table-cell;
        height: 100%;
        vertical-align: middle;
    }

    #itemTitle{
        text-align: left;
        font-size: 13px;
        font-weight: bold;
    }
    .itemInfo{
        display: flex;
        height: 50%;
        float: left;
        width: 100%;
        font-size: 10px;
        text-align: left;
    }

    #itemRightOuter{
        display: table;
        width: 60%;
        height: 100%;
        float: right;
    }
    #timeTableOuter{
        display: table;
        width: 70%;
        height: 100%;
        float: left;

    }
    #timeTable{
        display: table-cell;
        height: 100%;
        vertical-align: middle;
    }
    #iconWrap{
        display: table;
        width: 30%;
        height: 100%;
    }
    #icon{
        display: table-cell;
        vertical-align: middle;
        width: 100%;
    }

    #itemRightInner{
        display: inline-block;
        width: 100%;
        height: 100%;
    }


</style>
