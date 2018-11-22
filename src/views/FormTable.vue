<template>
    <div id="tabWrap">
            <sui-tab
                    id="tab"
                    @change="handleChange"
                    :active-index="activeIndex">
                <sui-tab-pane
                        icon="search grey"
                        title="">
                    <div class="pane">
                        <div id="inputFormWrap">
                            <div id="inputForm">
                                <input>
                                <i class="grey large search icon"></i>
                            </div>
                        </div>
                        <div id="searchResultWrap">
                            <ul>

                            </ul>
                        </div>
                    </div>


                </sui-tab-pane>
                <sui-tab-pane class="pane" icon="tags grey" title="">
                    <div id="routerWrap">
                        <router-view id="router"></router-view>
                    </div>
                </sui-tab-pane>
            </sui-tab>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'FormTable',
        data: () => ({
            table: {
                inside: null,
                index: null,
                title: null,
            },
            subject:[],
            activeIndex: null,
        }),
        mounted() {
            this.activatePane(0);
            axios.get("search/")
                .then((response)=>{
                    console.log(response);
                })
        },
        methods: {
            activatePane(index) {
                this.table.index = +index;
                this.activeIndex = +index;
            },
            handleChange(e, activePane, index) {
                this.table.inside = !!e;
                this.table.index = +index;
                this.table.title = activePane.title;
            },
        },
    };
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #tab{
        width: 80%;
        height: 100%;
        margin: auto;
        padding-top: 10%;
        border: 1px solid;
    }

    #inputFormWrap{
        padding-top: 20px;
    }
    #inputForm{

        border-radius: 15px;
        height: 30px;
        width: 90%;
        margin: auto;
        background-color: rgb(244,244,244);
        justify-content:center;
        align-items:center;
    }
    #inputForm input{
        background: none;
        display: flex;
        border-style: none;
        width: 80%;
        float: left;
        height: 30px;
        padding-left: 20px;
        outline-style: none;
    }
    #inputForm i{
        width: 15%;
        float: right;
        height: 30px;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    #searchResultWrap{
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        height: 40vh;
        overflow-y: scroll;
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: white;
        border-radius: 10px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgb(226,226,226);
        border-radius: 10px;
    }


    #item{
        width: 90%;
        border: 1px solid rgb(226, 226, 226);
        margin: auto;
        list-style: none;
        height: 50px;
        border-radius: 10px;
        text-align: left;
        padding: 5px 20px 5px 20px;
    }

    #subjectWrap{
        width: 80%;
        height: 100%;
        float: left;
    }
    #buttonWrap{
        width: 20%;
        height: 100%;
        float: right;
    }

    #addButton{
        display: flex;
        justify-content:center;
        align-items:center;

    }

    #router{
        height: calc( 40vh);
        overflow-y: scroll;
    }

</style>
