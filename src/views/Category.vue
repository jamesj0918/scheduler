<template>
    <div>
        <div id="categoryWrap" >
            <div v-for="category in categories" :key="category">
                <div class="item" >
                    <div class="title">
                        {{category}}
                    </div>
                    <div class="categoryInfo">
                        <div class="num" @>100개의 강의</div>
                        <div class="iconWrap" @click="link_subcategory(category)"> <i class="angle right large grey icon"></i></div>
                    </div>
                </div>
                <div class="ui divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data(){
            return{
                categories:[
                    '상경계',
                    '인문학',
                    '사회과학',
                    '국방/군사/경찰',
                    '과학/공학',
                    '예술',
                    '언어',
                    '진로',
                    '취미/생활',
                ]
            }
        },
        methods:{
            link_subcategory(subcategory){
                if (subcategory.indexOf("/") !== -1) {
                    subcategory = subcategory.replace("/", "_").replace("/", "_");
                }
                this.$router.push('/result/' + subcategory);
            }
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
