<template>
  <div class="survey-content">
    <van-nav-bar
      title="问卷调查"
      :fixed="fixed"
      @click-right="onClickRight"
    >
      <i class="van-icon van-icon-wap-nav" style="color: #000000; font-size: 26px;" slot="right"/>
    </van-nav-bar>

    <!-- 弹出层 -->
    <van-popup v-model="show"
        closeable
               close-icon="close"
               position="right"
               :style="{width: '65%', height: '100%', minWidth: '200px'}"
    ></van-popup>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data(){
      return {
        show: false,
        fixed: true,
        questions: [], // 问题列表
      }
    },
    methods: {
      onClickRight(){
        this.show = true;
      },
    }
  }
</script>

<style lang="scss" scoped>
.survey-content{
  background-color: #f5f5f5;
  padding-top: 46px;
  height: 100%;
}
</style>
