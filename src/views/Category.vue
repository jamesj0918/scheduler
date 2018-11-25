<template>
    <div>
        <div id="categoryWrap" >
            <div v-for="(category, index) in categories" :key="category">
                <div class="item" >
                    <div class="title">
                        {{category}}
                    </div>
                    <div class="categoryInfo">
                        <div
                            v-if="lecture_count[index] !== undefined"
                            class="num">
                            {{lecture_count[index].count}}개의 강의
                        </div>
                        <div class="iconWrap" @click="link_subcategory(category)"> <i class="angle right large grey icon"></i></div>
                    </div>
                </div>
                <div class="ui divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Category",
        data(){
            return{
                categories:[
                    '인문학',
                    '언어',
                    '사회과학',
                    '상경계',
                    '진로',
                    '과학/공학',
                    '예술',
                    '취미/생활',
                    '국방/군사/경찰',
                ],
                lecture_count:[]
            }
        },
        methods:{
            link_subcategory(subcategory){
                if (subcategory.indexOf("/") !== -1) {
                    subcategory = subcategory.replace("/", "_").replace("/", "_");
                }
                this.$router.push('/result/' + subcategory);
            }
        },
        mounted(){
            axios.get('category/')
                .then((response)=>{
                    this.lecture_count = response.data.results;
                })

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #categoryWrap{
        width: 100%;
        height: 45vh;
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
        width:50%;
        float: right;
    }
    .item{
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        height: 30px;
        align-items:center;
    }

    .title{
        height: 100%;
        display: flex;
        width: 50%;
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
        width: 80%;
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
