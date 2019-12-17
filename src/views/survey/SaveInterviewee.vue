<template>
  <div class="save-interviewee-content">
    <van-nav-bar
      title="问卷列表"
      :fixed="fixed"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="register-tips">基本信息填写</div>
    <van-cell-group>
      <template v-for="(item, index) in formData">
        <van-row type="flex" justify="center">
          <van-col span="10" class="item-title">
            {{ item.title }}
          </van-col>
          <van-col span="14" style="padding-left: 5px;">
            <van-field v-if="item.type == 'text'" :type="item.type" :required="item.required" v-model="item.value" :placeholder="item.placeholder"/>
            <van-field v-if="item.type == 'textarea'" type="textarea" autosize rows="3" v-model="item.value"></van-field>
            <van-radio-group v-if="item.type == 'radio'" v-model="item.value">
              <van-radio name="1">是</van-radio>
              <van-radio name="0">否</van-radio>
            </van-radio-group>
          </van-col>
        </van-row>
      </template>
    </van-cell-group>

    <van-row type="flex" justify="center" class="register-button">
      <van-col span="22" class="submit-button">
        <van-button type="primary" size="large" @click.native="nextStep">下一步</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import $http from './../../api/http';
  import $apis from './../../api/apis';
  import {Toast} from 'vant';
  export default {
    name: 'SaveInterviewee',
    components:{Toast},
    data(){
      return {
        fixed: true,
        formData: {
          // caseId: {
          //   hidden: true,
          //   value: "",
          //   title: "调研问卷Id"
          // },
          // uid: {
          //   hidden: true,
          //   value: '',
          //   title: '用户id',
          // },
          // caseUserId: {
          //   hidden: true,
          //   value: '',
          //   title: '数据库中存的id'
          // },
          viewer: {
            title: "调研人员",
            value: "",
            type: "text",
          },
          isRecord: {
            title: "是否有录音",
            value: "",
            type: "radio",
          },
          name: {
            title: "受访者姓名",
            value: "",
            type: "text",
          },
          phoneNum: {
            title: "受访者电话",
            value: "",
            type: "text",
          },
          age: {
            title: "受访者年龄",
            value: "",
            type: 'text',
          },
          sex: {
            title: "受访者性别",
            value: "",
            type: "text",
          },
          education: {
            title: "受访者学历",
            value: "",
            type: "text",
          },
          industry: {
            title: "受访者所在行业",
            value: "",
            type: "text",
          },
          company: {
            title: "受访者所在公司",
            value: "",
            type: "text",
          },
          post: {
            title: "受访者职位",
            value: "",
            type: "text",
          },
          postLevel: {
            title: "受访者职级",
            value: "",
            type: "text",
          },
          remark: {
            title: "访谈者及情况备注",
            value: "",
            type: "textarea",
          }
        }
      }
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      },
      nextStep(){
        const formData = this.formData;

        let params = new FormData();
        params.append('viewer', formData.viewer.value);
        params.append('isRecord', formData.isRecord.value);
        params.append('name', formData.name.value);
        params.append('phoneNum', formData.phoneNum.value);
        params.append('age', formData.age.value);
        params.append('sex', formData.sex.value);
        params.append('education', formData.education.value);
        params.append('industry', formData.industry.value);
        params.append('company', formData.company.value);
        params.append('post', formData.post.value);
        params.append('postLevel', formData.postLevel.value);
        params.append('remark', formData.remark.value);

        $http.post($apis.baseUrl+$apis.saveCaseUser, {
          'viewer': formData.viewer.value,
          'isRecord': formData.isRecord.value,
          'name': formData.name.value,
          'phoneNum': formData.phoneNum.value,
          'age': formData.age.value,
          'sex': formData.sex.value,
          'education': formData.education.value,
          'industry': formData.industry.value,
          'company': formData.company.value,
          'post': formData.post.value,
          'postLevel': formData.postLevel.value,
          'remark': formData.remark.value,
        }).then(res=>{
          Toast({
            message: '提交成功！',
            type: 'success',
            duration: 1500,
            onClose: function () {
              // _this.$router.push({
              //   path: '/login'
              // });
            }
          })
        })

      }
    }
  }
</script>

<style lang="scss" scoped>
.save-interviewee-content{
  background-color: #f5f5f5;
  padding-top: 46px;
  height: 100%;

  .register-tips{
    font-size: .6rem;
    color: #434343;
    padding: 1rem;
  }

  .van-cell-group{
    margin: 0 15px;
    /deep/.van-row{
      padding: 15px 10px;
      .item-title{
        text-align: right;
        /// width: 100%;
        font-size: .8rem;
        color: #8a8a8a;
        line-height: 38px;
      }
      .van-col{
        .van-cell{
          padding: 0;
        }
        input[type=text]{
          border: 1px solid #d8d8d8;
          display: table-cell;
          padding: 6px 0;
          border-radius: 3px;
          width: 100%;
        }
        textarea{
          border: 1px solid #d8d8d8;
          display: table-cell;
          padding: 6px 12px;
          border-radius: 3px;
          width: 100%;
        }
        .van-radio-group{
          display: flex;
          justify-content: space-around;
          height: 38px;
        }
      }
    }
  }

  .register-button {
    background-color: #ffffff;

    .submit-button {
      margin: 1rem 0;

      .van-button--primary {
        color: #fff;
        background-color: #52a9ff;
        border: 1px solid #52a9ff;
        height: 40px;
        border-radius: .3rem;
        line-height: 40px;
      }
    }
  }

}
</style>
