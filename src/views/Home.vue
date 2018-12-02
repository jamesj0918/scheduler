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
        display: inline-block;
        width: 60%;
        height: 100vh;
        margin: auto;
    }
    #scheduler{
        display: inline-block;
        width: 40%;
        height: 100vh;
        float: left;
    }
    #searchForm{
        display: inline-block;
        width: 60%;
        height: 100vh;
        float: right;
    }
</style>
