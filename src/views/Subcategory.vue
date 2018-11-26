<template>
    <div>
        <div id="title">
            <h4>
                {{category}} {{count}}개의 강의
                <i
                        style="cursor: pointer"
                        @click="link_previous()"
                        class="angle left large grey icon">
                </i>
            </h4>
        </div>
        <div class="ui divider"></div>
        <div id="categoryWrap" >
            <div v-for="(subcategory, key) in subcategories" :key="key">
                <div v-if="key === category">
                    <div v-for="(subject, key) in subcategory" :key="key">
                        <div class="item">
                            <div class="title">
                                {{subject}}
                            </div>
                            <div class="categoryInfo">
                                <div v-for="(count_data, key) in lecture_count" :key="key">
                                    <div v-if="count_data.title === subject" class="num">{{count_data.count}}개의 강의</div>
                                </div>
                                <div class="iconWrap" @click="link_subjects(subject)" > <i class="angle right large grey icon"></i></div>
                            </div>
                        </div>
                        <div class="ui divider"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Subcategory",
        data(){
            return{
                category: this.$route.params.category,
                count: 0,
                subcategories:{
                    상경계: ['경제', '경영', '마케팅/세일즈'],
                    인문학: ['철학', '문학', '역사/문화'],
                    사회과학: ['행정', '심리', '교육학', '법', '사회학', '언론/신문/방송'],
                    과학_공학: ['기계/전기/전자', '도시/토목/건설', '물리학', '생물학', '수학', '천문/지구과학', '화학', '컴퓨터'],
                    예술: ['무용', '미술', '음악', '연극/영화', '대중문화'],
                    국방_군사_경찰: ['국방/군사/경찰'],
                    언어: ['국어', '영어', '일본어', '중국어'],
                    진로: ['창업/취업', '진로', '논술/면접대비', '공무원/자격증', '고시', '자기능력계발'],
                    취미_생활: ['리빙', '레저/스포츠', '여성/패션']
                },
                lecture_count: []
            }
        },
        methods:{
            link_subjects(subject){
                if (subject.indexOf("/") !== -1) {
                    subject = subject.replace("/", "_").replace("/", "_");
                }
                console.log(1);
                this.$router.push('/result/'+this.$route.params.timeTableId+'/'+this.category+'/'+subject);
            },
            link_previous(){
                this.$router.go(-1);
            }
        },
        mounted(){
            const search_param = this.category.replace("_","/").replace("_","/");
            axios.get('search/?category='+search_param)
                .then((response)=>{
                    this.count = response.data.count;
                });
            axios.get('subcategory/')
                .then((response)=>{
                    this.lecture_count = response.data.results;
                })
        },
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }

    #title{
        padding-top: 10px;
        padding-left: 20px;
        text-align: left;

    }
    #categoryWrap{
        width: 100%;
        height: 45vh;
    }
    .divider{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .divider:last-child{
    }
    .categoryInfo{
        height: 100%;
        width:50%;
        float: right;
    }
    .item{
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        height: 30px;
        align-items:center;
    }

    .title{
        height: 100%;
        display: flex;
        width: 50%;
        float: left;
        padding-left: 20px;
        font-size: 15px;
        text-align: left;
        font-weight: bold;
        align-items:center;
    }
    .num{
        height: 100%;
        display: flex;
        align-items:center;
        width: 80%;
        text-align: right;
        padding-right:10px;
        float: left;
    }
    .iconWrap{
        display: flex;
        width: 20%;
        height: 100%;
        float: right;
        justify-content:center;
        align-items:center;
        cursor: pointer;
    }
</style>
