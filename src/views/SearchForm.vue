
<template>
    <div id="searchFormWrap">
        <form-table id="formTable"></form-table>
        <add-class id="addClass" ></add-class>
    </div>
</template>

<script>
    import FormTable from './FormTable'
    import AddClass from './AddClass'

    export default {
        name: 'SearchForm',
        components:{
            'form-table': FormTable,
            'add-class': AddClass,
        }

    };
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #formTable{
        display: inline-block;
        width: 90%;
        height: 50vh;
        margin: auto;
    }
    #addClass{
        display: inline-block;
        width: 90%;
        padding-top: 20px;
        margin: auto;
        height: 40vh;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        display: none;
    }
</style>
