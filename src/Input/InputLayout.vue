<template>
    <div id="inputLayoutWrap">
        <div id="timeTableWrap">
            <time-table id="timeTable"></time-table>
        </div>
        <div id="settingWrap">
            hello
        </div>

    </div>
</template>

<script>
    import TimeTableSetting from './TimeTableSetting'
    export default {
        name: "InputLayout",
        components: {
            'time-table': TimeTableSetting,
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #inputLayoutWrap{
        display: inline-block;
        width: 80%;
        height: 100vh;
    }
    #timeTableWrap{
        display: flex;
        height: 100vh;
        width: 50%;
        float: left;
    }
    #timeTable{
        width: 80%;
        margin: auto;
        justify-content:center;

    }
    #settingWrap{
        width: 50%;
        float: right;
    }

</style>
