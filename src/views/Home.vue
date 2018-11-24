<template>
    <div id="homeWrap">
        <scheduler id="scheduler"></scheduler>
        <search-form id="searchForm"></search-form>
    </div>
</template>

<script>
    import Scheduler from './Scheduler'
    import SearchForm from './SearchForm'
    // @ is an alias to /src
    export default {
        name: 'home',
        components: {
            'scheduler' : Scheduler,
            'search-form': SearchForm
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
    }
    #searchForm{
        display: inline-block;
        width: 50%;
        height: 100vh;
        float: right;
    }
</style>
