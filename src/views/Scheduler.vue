<template>
    <div id = "schedulerWrap">
        <!--<time-table id="timeTable"></time-table>-->
                <agile class="agile"  :prevArrow="left" :nextArrow="right">
                    <div class="slide slide--1"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                    <div class="slide slide--2"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                    <div class="slide slide--3"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                    <div class="slide slide--4"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                    <div class="slide slide--5"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                    <div class="slide slide--6"><div class="table"><time-table class="timeTable tablecell"></time-table></div></div>
                </agile>
        </div>
</template>

<script>
    import TimeTable from './TimeTable'

    export default {
        name: "Scheduler",
        components:{
            'time-table': TimeTable,
        },
        data(){
            return{
                left: '<svg style="width: 10px; height: 10px;"><i class="angle large left  icon"></i></svg>',
                right: '<svg style="width: 10px; height: 10px;"><i class="angle large right  icon"></i></svg>'
            }
        },
        methods: {


        }
    }
</script>

<style lang="scss" type="text/scss">
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
