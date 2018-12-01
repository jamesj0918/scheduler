<template>
    <div id="timeTableWrap">
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
                <td colspan="5" rowspan="12"  v-if="load_true===true">
                    <table id="table">
                        <td class="cell" v-for="(day, day_index) in days"  >
                            <tr class="row" v-for="(time, time_index) in times" :rowspan="2">
                                <div
                                        id="cellContent"
                                        v-if="timeTableLength(day_index,time_index)"
                                        v-bind:style="{height: time_table[day_index][time_index].long+'vh', margin: 0}"
                                        :class="{fill: time_table[day_index][time_index].fill}">
                                    <div
                                            v-if="add_subject.length !== 0"
                                            style = "font-size: 11px; font-weight: bold; text-align: left; border-style: none;" >
                                        {{time_table[day_index][time_index].class_id}} <br/>
                                        {{time_table[day_index][time_index].classroom}}
                                    </div>
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
                add_subject: [],
                time_table: [],
                add_class: [],
                load_true: false,
            }
        },
        mounted(){
            this.time_table = new Array(5);
            for(let i=0;i<5;i++){
                this.time_table[i] = new Array(22);
            }
            for(let i=0;i<5;i++){
                for(let j=0;j<22;j++){
                    this.time_table[i][j]={'fill': false, 'class_id': null, 'classroom': '', 'long': 2.5};
                }
            }
            this.$bus.$on('getAddClass',this.getAddClass);
            this.load_true = true;
        },
        methods:{
            getAddClass(add_class){
                this.add_subject = this.$store.getters.GET_CLASS;
                this.addClassOnTable(add_class);
            },
            /*
            initTimeTable(){
                for(let i = 0;i<this.subject.length;i++) {
                    for (let j = 0; j < this.subject[i].subject.timetable.length; j++) {
                        let day = 0;
                        if (this.subject[i].subject.timetable[j].day === '월') {
                            day = 0;
                        } else if (this.subject[i].subject.timetable[j].day === '화') {
                            day = 1;
                        } else if (this.subject[i].subject.timetable[j].day === '수') {
                            day = 2;
                        } else if (this.subject[i].subject.timetable[j].day === '목') {
                            day = 3;
                        } else if (this.subject[i].subject.timetable[j].day === '금') {
                            day = 4;
                        }

                        let start_h = Number(this.subject[i].subject.timetable[j].start[0] + this.subject[i].subject.timetable[j].start[1]);
                        let start_m = Number(this.subject[i].subject.timetable[j].start[3] + this.subject[i].subject.timetable[j].start[4]);
                        let end_h = Number(this.subject[i].subject.timetable[j].end[0] + this.subject[i].subject.timetable[j].end[1]);
                        let end_m = Number(this.subject[i].subject.timetable[j].end[3] + this.subject[i].subject.timetable[j].end[4]);
                        let start = 0;
                        let end = 0;

                        start = (start_h - 9) * 2;
                        if (start_m === 30) {
                            start = start + 1;
                        }
                        end = (end_h - 9) * 2 - 1;
                        if (end_m === 30) {
                            end = end + 1;
                        }
                            this.time_table[day][start].fill = true;
                            this.time_table[day][start].class_id = this.subject[i].subject.title;
                            this.time_table[day][start].long = (end - start + 1) * 2.5;
                            this.time_table[day][start].classroom = this.subject[i].subject.classroom;

                            for (let k = start + 1; k <= end; k++) {
                                this.time_table[day][k].fill = true;
                                this.time_table[day][k].class_id = this.subject[i].subject.title;
                                this.time_table[day][k].long = 0;
                            }

                        }
                    }

            },//initTimeTable*/
            timeTableLength(day, time){
                if(this.time_table.length !== 0){
                    if(this.time_table[day][time].long !==0){
                        return true;
                    }
                }
                return false;
            },//timeTableLength()
            addClassOnTable(add_class){
                let confirm_answer = false;
                for(let i=0;i<add_class.timetable.length;i++) {
                    let day = 0;
                    if (add_class.timetable[i].day === '월') {
                        day = 0;
                    } else if (add_class.timetable[i].day === '화') {
                        day = 1;
                    } else if (add_class.timetable[i].day === '수') {
                        day = 2;
                    } else if (add_class.timetable[i].day === '목') {
                        day = 3;
                    } else if (add_class.timetable[i].day === '금') {
                        day = 4;
                    }

                    let start_h = Number(add_class.timetable[i].start[0] + add_class.timetable[i].start[1]);
                    let start_m = Number(add_class.timetable[i].start[3] + add_class.timetable[i].start[4]);
                    let end_h = Number(add_class.timetable[i].end[0] + add_class.timetable[i].end[1]);
                    let end_m = Number(add_class.timetable[i].end[3] + add_class.timetable[i].end[4]);
                    let start = 0;
                    let end = 0;

                    start = (start_h - 9) * 2;
                    if (start_m === 30) {
                        start = start + 1;
                    }
                    end = (end_h - 9) * 2 - 1;
                    if (end_m === 30) {
                        end = end + 1;
                    }
                    console.log(start, end);

                    for (let j = start; j <= end; j++) {
                        if (confirm_answer === true) {
                            break;
                        }
                        if (this.time_table[day][j].fill === true) {
                            confirm_answer = confirm("기존의 수업을 삭제하시겠습니까?");
                            if (confirm_answer === true) {
                                this.removeClassOnTable(day, j, this.time_table[day][j]);
                                break;
                            }
                            else {

                                return;
                            }
                        }
                    }

                    this.time_table[day][start].fill = true;
                    this.time_table[day][start].class_id = add_class.title;
                    this.time_table[day][start].long = (end - start + 1) * 2.5;
                    this.time_table[day][start].classroom = add_class.classroom;

                    for (let k = start + 1; k <= end; k++) {
                        this.time_table[day][k].fill = true;
                        this.time_table[day][k].class_id = add_class.title;
                        this.time_table[day][k].long = 0;
                    }
                }

            },//addClassOnTable()
            removeClassOnTable(day ,on, add_class){
                this.load_true = false;
                let foundIndex = this.time_table[day].findIndex(function(element){
                    return element.class_id == add_class.class_id;
                });
                for(let i = 1; i<(this.time_table[day][foundIndex].long/2.5); i++){
                    this.time_table[day][i+foundIndex].fill = false;
                    this.time_table[day][i+foundIndex].class_id = null;
                    this.time_table[day][i+foundIndex].classroom = '';
                    this.time_table[day][i+foundIndex].long = 2.5;
                }
                this.time_table[day][foundIndex].fill=false;
                this.time_table[day][foundIndex].class_id = null;
                this.time_table[day][foundIndex].classroom = '';
                this.time_table[day][foundIndex].long = 2.5;
                this.load_true = true;
            }//removeClassOnTable()
        }
    }


</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    table{
        border-collapse: separate;
        border-spacing: 0;
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
    }
    #timeTableWrap{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    #timeTable{
        display: inline-block;
        margin: auto;
        width: 70%;
        height: auto;
    }

    .day{
        height: 4vh;
        width:10vh;
        color: rgb(200, 200, 200);
    }

    .time{
        width: 10vh;
        height: 5vh;
        padding-right: 5px;
        font-weight: bold;
        color: rgb(200, 200, 200);
    }

    #table{
        width: 50vh;
        height: 55vh;
        background-color: white;
        border: 1px solid rgb(226, 226, 226);
        border-radius: 10px;
        border-collapse: separate;
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
    }

    #cellContent{
        width: 10vh;
        overflow: hidden;
    }
    #table td tr div{
        border-right: 1px solid rgb(226, 226, 226);
    }

    #table td:last-child tr div{
        border-right:0;
    }

    #table td tr:nth-child(even) div{
        border-bottom: 1px solid rgb(226, 226, 226);
    }
    #table td tr:last-child div{
        border-bottom: 0;
    }

    #table td tr:nth-child(even) .fill{
        background-color: #ccc;
        display: none;
    }

    .fill{
        background-color: #bbb;
        padding-left: 2px;
        color: white;
        font-size: 13px;
        width: 100%;
        border-style: none;
    }


</style>
