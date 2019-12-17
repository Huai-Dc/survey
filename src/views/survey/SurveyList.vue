<template>
  <div class="survey-list-content">
    <van-nav-bar
      title="问卷列表"
      :fixed="fixed"
    />
    <div class="survey-list">
      <van-row v-for="(item, index) in surveyList">
        <van-col span="4">
          <div class="circle">{{index+1}}</div>
        </van-col>
        <van-col span="8"><div class="survey-name">{{item.name}}</div></van-col>
        <van-col span="12"><div class="survey-date">{{item.date}}</div></van-col>
      </van-row>
    </div>

  </div>
</template>

<script>
  import $http from './../../api/http';
  import $apis from './../../api/apis'
  export default {
    name: 'SurveyList',
    data(){
      return {
        fixed: true,
        surveyList: [],
      }
    },
    mounted () {
      this.getSurveyList();
    },
    methods: {
      getSurveyList(surceyId){
        $http.get($apis.baseUrl + $apis.getSurveyList+ "15?type=1").then(res=>{
          console.log(res);
        })

        this.surveyList = [{"name":"张三","company":"","sex":"男","post":"","age":"","phoneNum":"","viewer":"nzy","date":"2019-12-17 14:17:26"},{"name":"李四","company":"XXX公司","sex":"","post":"生产经理","age":"30","phoneNum":"123123123","viewer":"nzy","date":"2019-12-17 17:02:29"},{"name":"","company":"","sex":"","post":"","age":"","phoneNum":"","viewer":"","date":"2019-12-17 17:14:59"},{"name":"王五","company":"","sex":"","post":"","age":"","phoneNum":"","viewer":"","date":"2019-12-17 21:16:04"}];
      }
    }
  }
</script>

<style lang="scss" scoped>
.survey-list-content{
  background-color: #f5f5f5;
  padding-top: 46px;
  height: 100%;
  .survey-list{
    padding: 20px 16px;
    .van-row{
      background-color: #ffffff;
      margin-bottom: 1rem;
      border-radius: 2px;
      .van-col{
        .circle{
          width: 36px;
          height: 36px;
          border-radius: 18px;
          background-color: #52a9ff;
          color: #ffffff;
          text-align: center;
          line-height: 36px;
          margin: 10px;
        }
        .survey-name{
          height: 36px;
          line-height: 36px;
          margin: 10px 0;
        }
        .survey-date{
          height: 36px;
          line-height: 36px;
          margin: 10px 0;
          color: #b8b8b8;
          font-size: .9rem;
        }
      }
    }
  }
}
</style>
