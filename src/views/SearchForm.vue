
<template>
    <div>
        <form-table id="formTable"></form-table>
        <add-class id="addClass"></add-class>
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
        width: 80%;
        height: 70vh;
        margin: auto;
    }
    #addClass{
        width: 80%;
        margin: auto;
        height: 30vh;
    }
</style>
