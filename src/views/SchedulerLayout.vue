<template>
    <div id = "schedulerWrap">
        <div id="timeTableOuter">
                <time-table :time_table_id="time_table_id" id="timeTable" :bu="bus"></time-table>
        </div>
    </div>
</template>

<script>
    import TimeTable from './TimeTable'

    export default {
        name: "SchedulerLayout",
        props:['bus'],
        components:{
            'time-table': TimeTable,

        },
        data(){
            return{
                time_table_id : this.$route.params.timeTableId,
            }
        },
        methods: {


        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #schedulerWrap{
        display: inline-block;
    }

    #timeTableOuter{
        display: table;
        width: 100%;
        height: 80vh;
    }
    #timeTable{
        display: table-cell;
        vertical-align: middle;
    }


</style>
