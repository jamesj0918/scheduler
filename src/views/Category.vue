<template>
    <div id="categoryWrap">

        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap" @click="gotoCategory('인문')"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                인문
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
        <div class="item">
            <div class="title">
                수학
            </div>
            <div class="categoryInfo">
                <div class="num">100개의 강의</div>
                <div class="iconWrap" @click="gotoCategory('수학')"> <i class="angle right large grey icon"></i></div>
            </div>
        </div>
        <div class="ui divider"></div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        methods:{
            gotoCategory(name){
                this.$router.push('/'+name);
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
        overflow-y: scroll;
    }
    .divider{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .divider:last-child{
        display: none;
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
