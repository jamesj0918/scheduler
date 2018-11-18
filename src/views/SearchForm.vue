
<template>
    <div>
        <form-table id="formTable"></form-table>
    </div>
</template>

<script>
    import FormTable from './FormTable'
    export default {
        name: 'SearchForm',
        components:{
            'form-table': FormTable,
        }

    };
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #formTable{
        width: 80%;
        margin: auto;
    }
</style>
