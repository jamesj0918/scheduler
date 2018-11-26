<template>
    <div id="timeTableWrap">
        추가 목록{{subject.title}}
        <table id="timeTable">
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
                    <table id="table" style="width: 100%" v-if="days && times" >
                        <td class="cell"  v-for="(day, day_index) in days">
                            <tr class = "row" v-for="(time, time_index) in times">
                                <div id="cellContent">
                                    {{time_table[day_index][time_index].class_id}}

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


                ],
                time_table_id: this.$route.params.timeTableId,
                subject: [],
                time_table: [],
            }
        },
        mounted(){
            this.time_table = new Array(5);
            for(let i=0;i<5;i++){
                this.time_table[i] = new Array(22);
            }
            for(let i=0;i<5;i++){
                for(let j=0;j<22;j++){
                    this.time_table[i][j]={'fill': 0, 'class_id': null};
                }
            }
            this.$bus.$on('GET_CLASS',this.getClass);
        },
        methods:{
            getClass(){
                this.subject = this.$store.getters.GET_CLASS;
                this.addClassOnTable();
            },

            addClassOnTable(){
                for(let i = 0;i<this.subject.length;i++){
                    for(let j=0;j<this.subject[i].subject.timetable.length;j++){
                        let day = 0;
                        if(this.subject[i].subject.timetable[j].day == '월'){
                            day=0;
                        }else if(this.subject[i].subject.timetable[j].day == '화'){
                            day=1;
                        }else if(this.subject[i].subject.timetable[j].day == '수'){
                            day=2;
                        }else if(this.subject[i].subject.timetable[j].day == '목'){
                            day=3;
                        }else if(this.subject[i].subject.timetable[j].day == '금'){
                            day=4;
                        }

                        let start_h = Number(this.subject[i].subject.timetable[j].start[0]+this.subject[i].subject.timetable[j].start[1]);
                        let start_m = Number(this.subject[i].subject.timetable[j].start[3]+this.subject[i].subject.timetable[j].start[4]);
                        let end_h = Number(this.subject[i].subject.timetable[j].end[0]+this.subject[i].subject.timetable[j].end[1]);
                        let end_m = Number(this.subject[i].subject.timetable[j].end[3]+this.subject[i].subject.timetable[j].end[4]);


                        console.log(start_h, start_m, end_h, end_m);

                        let start = 0;
                        let end = 0;

                        start = (start_h-9)*2;
                        if(start_m == 30){
                            start++;
                        }

                        end = (end_h-9)*2;
                        if(end_m == 30){
                            end++;
                        }

                        for(let k=start;k<end;k++){
                            this.time_table[day][k].fill = 1;
                            this.time_table[day][k].class_id=this.subject[i].subject.title;
                        }

                    }
                }

            }

        }
    }


</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }


    .day{
        width: 50px;
        height: 5vh;
        font-size: 15px;
        color: rgb(207,207,207);
    }
    .time{
        text-align: right;
        width: 10%;
        padding: 10px;
        height: calc(100%/ 11);
        vertical-align: center;
        font-size: 15px;
        color: rgb(207,207,207);
    }
    table{
        display: inline-block;
        border-spacing: 0;
        width: 80%;
    }

    #timeTableWrap{
        border: 1px solid;
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    #timeTable{
        overflow-x: scroll;
        display: inline-block;
        width: 100%;
    }
    #table{
        display: inline-block;
        background-color: white;
        width :70%;
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
        text-overflow: ellipsis;
    }
    .checked{
        background-color: rgb(226,226,226);
    }

    .cell{
        font-size: 11px;
        height: 100%;
        width: 100px;

    }
</style>
