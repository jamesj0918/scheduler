<template>
    <div>
        <div id="title">
            <h3>{{category_name}}</h3>
        </div>
        <div class="ui divider"></div>

    </div>

</template>

<script>
    export default {
        name: "SubjectList",
        data(){
            return{
                category_name: this.$route.params.categoryName,
            }
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .divider{
        width: 100%;
    }
    #title{
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;

    }

</style>
