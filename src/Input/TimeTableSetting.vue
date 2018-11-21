<template>
    <div id="timeTableWrap">
        <table>
            <thead>
            <tr>
                <th class="day"></th>
                <th class="day">월</th>
                <th class="day">화</th>
                <th class="day">수</th>
                <th class="day">목</th>
                <th class="day">금</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="time">9</td>
                <td colspan="5" rowspan="12">
                    <table id="table" style="width: 100%">
                            <td class="cell" v-for="(day, day_index) in days">
                                <tr class = "row" v-for="(time, time_index) in times">
                                    <div id="cellContent">
                                        <input style="display: none" type="checkbox" :id="day.day+':'+time.start+':'+time.end" :value="day.day+':'+time.start+':'+time.end" v-model="blank"/>
                                        <label  @click="isChecked[day_index][time_index] = !isChecked[day_index][time_index]" :for="day.day+':'+time.start+':'+time.end" id="label" :class="{checked : isChecked[day_index][time_index]}">
                                           &nbsp
                                        </label>
                                    </div>
                                </tr>
                            </td>
                    </table>
                </td>
            </tr>
            <tr>
                <td class="time">10</td>
            </tr>
            <tr>
                <td class="time">11</td>
            </tr>
            <tr>
                <td class="time">12</td>
            </tr>
            <tr>
                <td class="time">1</td>
            </tr>
            <tr>
                <td class="time">2</td>
            </tr>
            <tr>
                <td class="time">3</td>
            </tr>
            <tr>
                <td class="time">4</td>
            </tr>
            <tr>
                <td class="time">5</td>
            </tr>
            <tr>
                <td class="time">6</td>
            </tr>
            <tr>
                <td class="time">7</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TimeTable",
        data(){
            return{
                blank: [],
                isChecked:[],
                days:[
                    {
                        day:'mon'
                    },
                    {
                        day:'tue'
                    },
                    {
                        day:'wen'
                    },
                    {
                        day:'thu'
                    },
                    {
                        day:'fri'
                    }
                ],

                times:[
                    {
                        start: '0900',
                        end: '0930',
                    },
                    {
                        start: '0930',
                        end: '1000',
                    },
                    {
                        start: '1000',
                        end: '1030',
                    },
                    {
                        start: '1030',
                        end: '1100',
                    },
                    {
                        start: '1100',
                        end: '1130',
                    },
                    {
                        start: '1130',
                        end: '1200',
                    },
                    {
                        start: '1200',
                        end: '1230',
                    },
                    {
                        start: '1230',
                        end: '1300',
                    },
                    {
                        start: '1300',
                        end: '1330',
                    },
                    {
                        start: '1330',
                        end: '1400',
                    },
                    {
                        start: '1400',
                        end: '1430',
                    },
                    {
                        start: '1430',
                        end: '1500',
                    },
                    {
                        start: '1500',
                        end: '1530',
                    },
                    {
                        start: '1530',
                        end: '1600',
                    },
                    {
                        start: '1600',
                        end: '1630',
                    },
                    {
                        start: '1630',
                        end: '1700',
                    },
                    {
                        start: '1700',
                        end: '1730',
                    },
                    {
                        start: '1730',
                        end: '1800',
                    },
                    {
                        start: '1800',
                        end: '1830',
                    },
                    {
                        start: '1830',
                        end: '1900',
                    },
                    {
                        start: '1900',
                        end: '1930',
                    },
                    {
                        start: '1930',
                        end: '2000',
                    }


                ]

            }
        },
        mounted(){
            var arr = new Array(5);
            for(let i=0;i<5;i++){
                arr[i] = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
            }
            this.isChecked = arr;
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    table{
        overflow: hidden;
    }

    .day{
        width: 50px;
        height: 5vh;
        font-size: 15px;
        color: rgb(207,207,207);
    }
    .time{
        text-align: right;
        width: 50px;
        padding: 10px;
        height: calc(100%/ 11);
        vertical-align: center;
        font-size: 15px;
        color: rgb(207,207,207);
    }
    table{
        border-spacing: 0;
    }

    #timeTableWrap{

        height: 100%;
    }
    #table{
        background-color: white;
        width: 100%;
        height: 100%;
        border: 1px solid rgb(226, 226, 226);
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
        border-radius:10px
    }

    #table td{
        padding: 0;
        border-right: 1px solid rgb(226, 226, 226);
    }
    #table td:last-child{
        border-right-style: none;
    }
    #cellContent{
        display: inline-block;
        height: calc(100%/22);
        width:100px;
    }

    .row div{
        height: calc(100%/22);
    }
    .row:nth-child(2n) div{
        border-bottom: 1px solid rgb(226, 226, 226);
    }
    .row:last-child div{

    }
    checkbox{
        outline: none;
        border-style: none;
    }
    label{
        display: inline-block;
        width: 100px;
        height: calc(100%/22);
    }

    .checked{
        background-color: rgb(226,226,226);
    }
    .cell{
        width: 100px;
    }
</style>
