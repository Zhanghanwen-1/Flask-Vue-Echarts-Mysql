<template>
  <section class="overview_container">
    <!--    上部分-->
    <div class="up">
      <!--      上部左边-->
      <div class="up_left">
        <!--        视频监控部分-->
        <div class="video_main"><img src="../assets/img/overview/taoHua.jpg" alt=""></div>
        <div class="video_son">
          <div class="item"><img src="../assets/img/overview/PartVideo1.jpg" alt=""></div>
          <div class="item"><img src="../assets/img/overview/PartVideo2.jpg" alt=""></div>
          <div class="item"><img src="../assets/img/overview/PartVideo3.jpg" alt=""></div>
        </div>
      </div>
      <!--      上部右边-->
      <div class="up_right">
        <div class="introduce">
          <el-descriptions class="margin-top" title="基地信息" :column="2" :size="size" border>
            <!--    <template slot="extra">-->
            <!--      <el-button type="primary" size="small">修改</el-button>-->
            <!--    </template>-->
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                基地
              </template>
              桃花岛养殖基地
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-office-building"></i>
                地址
              </template>
              舟山桃花岛南部对峙村
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                负责人
              </template>
              桂福坤
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                电话
              </template>
              12345678911
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
              </template>
              在舟山桃花岛南部的对峙村一处岛礁附近，一片被467米长的网衣圈围的海湾里养殖着数以万计的岱衢族大黄鱼，这个浅海生态围网养殖基地由某水产公司投资开发，桂福坤带领团队全力提供技术支持。
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="device">
          <h2>设备状态</h2>
          <span style="display: flex;">视频监控&nbsp;   <el-switch v-model="ruleForm.video"></el-switch>&nbsp; 电量：&nbsp; <el-progress :percentage="100"></el-progress></span>
          <span style="display: flex;">水质监测&nbsp;   <el-switch v-model="ruleForm.waterQ"></el-switch>&nbsp; 电量：&nbsp; <el-progress :percentage="80"></el-progress></span>
          <span style="display: flex;">投喂设施&nbsp;   <el-switch v-model="ruleForm.feed"></el-switch>&nbsp; 电量：&nbsp; <el-progress :percentage="56"></el-progress></span>
          <span style="display: flex;">清洗设施&nbsp;   <el-switch v-model="ruleForm.wash"></el-switch>&nbsp; 电量：&nbsp; <el-progress :percentage="79"></el-progress></span>
        </div>
      </div>
    </div>
    <!--    下部分-->
    <div class="down" id="waterQ">
      <div class="item" id="chart1"></div>
      <div class="item" id="chart2"></div>
      <div class="item" id="chart3"></div>
      <div class="item" id="chart4"></div>
      <div class="item" id="chart5"></div>
      <div class="item" id="chart6"></div>
    </div>
  </section>

</template>

<script>
  import {getData} from '../assets/js/waterQ'

  getData();
  export default {
    name: "Overview",
    data() {
      return {
        ruleForm: {
          video: true,
          waterQ: true,
          feed: false,
          wash: false,
        }
      };
    },
    methods: {
      getData() {

      },
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>
  @import "../assets/css/overview.css";
</style>
