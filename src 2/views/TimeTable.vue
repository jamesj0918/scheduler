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

                        <tr class="row top" >
                            <td class="cell topLeft" ></td>
                            <td class="cell"></td>
                            <td class="cell"></td>
                            <td class="cell"></td>
                            <td class="cell"></td>
                        </tr>
                        <tr class="row bottom">
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                            <td ></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row top">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr class="row bottom">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

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
            <tr>
                <td class="time">8</td>
            </tr>

            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TimeTable"
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }


    .day{
        width: 50px;
        height: 25px;
        font-size: 15px;
        color: rgb(207,207,207);
    }
    .time{
        text-align: right;
        width: 50px;
        padding: 10px;
        height: auto;
        vertical-align: center;
        font-size: 15px;
        color: rgb(207,207,207);
    }

    #table{
        background-color: white;
        width: 100%;
        border-spacing: 0;
        border: 1px solid rgb(226, 226, 226);
        -moz-border-radius:10px;
        -webkit-border-radius:10px;
        border-radius:10px
    }

    #table td{
        border-right: 1px solid rgb(226, 226, 226);
    }
    #table td:last-child{
        border-right-style: none;
    }

    #table .bottom td{
        border-bottom: 1px solid rgb(226, 226, 226);
    }
    #table .bottom:last-child td{
        border-bottom-style:none;
    }


    .row{
        height: 20px;
        }


    .cell{
        width: 100px;
    }
</style>
