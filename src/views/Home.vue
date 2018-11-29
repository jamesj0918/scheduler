<template>
    <div id="homeWrap">
        <scheduler id="scheduler" :bus="bus"></scheduler>
        <search-form id="searchForm" :bus="bus"></search-form>
    </div>
</template>

<script>
    import Scheduler from './SchedulerLayout'
    import SearchForm from './SearchForm'
    import Vue from 'vue'
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            'scheduler' : Scheduler,
            'search-form': SearchForm
        },
        data(){
            return{
                bus : new Vue(),
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #homeWrap{
        width: 80%;
        height: 100vh;
        border: 1px solid;
        margin-left: 10%;
    }
    #scheduler{
        display: inline-block;
        width: 50%;
        height: 100vh;
        float: left;
        border: 1px solid;
    }
    #searchForm{
        display: inline-block;
        border: 1px solid;
        width: 50%;
        height: 100vh;
        float: right;
    }
</style>
