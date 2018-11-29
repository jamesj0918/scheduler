<template>
    <div id="addClassWrap">
        <div v-for="subject in add_subjects" id="itemLayout">
            <div id="itemContent">
                <div id="itemLeft">
                    <div id="itemTitle">
                        {{subject.subject.title}}
                    </div>
                    <div id="itemInfo">
                        {{subject.subject.professor}},{{subject.subject.classroom}}
                    </div>

                </div>
                <div id="itemRight">
                    <i class="ui icon grey circle minus"></i>
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
            this.$bus.$on('GET_CLASS',this.getClass);
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
        margin-bottom: 10px;
        width: 80%;
        height: 25%;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 10px;
    }
    #itemContent{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    #itemLeft{
        display: inline-block;
        width: 90%;
        float: left;
    }

    #itemRight{
        display: inline-block;
        width: 10%;
        float: right;
    }


</style>
