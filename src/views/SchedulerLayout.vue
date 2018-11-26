<template>
    <div id = "schedulerWrap">

        <time-table :time_table_id="time_table_id" class="timeTable tablecell" :bu="bus"></time-table>

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

<style lang="scss" type="text/scss">
    #schedulerWrap{
        background-color: yellow;
    }
    .timeTable{

        width: 80%;
        margin: auto;
    }

    .table{
        display: table;
    }

    .tablecell{
        display: table-cell;
        vertical-align: middle;
    }

    .agile {
        position: absolute;
        top: 10%;

        &__dots{

            display: inline-block;
            width: 100%;

            text-align: center;
            margin-left: 20px;
            padding: 0 auto;
            bottom: 0;
        }
        &__dot {
            margin: 0 auto;
            width: 10%;
            button {
                width: 20px;
                height: 20px;
                margin: 10px;

                border-radius: 50%;
                background-color: rgb(226, 226, 226);
                border: 1px solid rgb(226, 226, 226);

                &:hover {
                    background-color: #fff;
                }
            }

            &--current {
                button {
                    background-color: darkgray;
                    border: 1px solid darkgray;
                }
            }
        }

        &__arrow{
            &--prev{


                margin: 0;
            }
            background:none;
            color: darkgray;
            border-style: none;
        }


    }

</style>
