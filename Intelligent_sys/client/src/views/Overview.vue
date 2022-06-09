<template>
  <div id="content">
    <!--  视频部分 -->
    <div class="video">
      <!--    主屏和子屏-->
      <!--    <div class="main"><img src="../assets/img/MainVideo.jpg" alt=""></div>-->
      <div class="main"><img src="../assets/img/MainVideo.jpg" alt=""></div>
      <div class="part">
        <!--      <div class="part1"><img src="../assets/img/PartVideo1.jpg" alt=""></div>-->
        <!--      <div class="part2"><img src="../assets/img/PartVideo2.jpg" alt=""></div>-->
        <!--      <div class="part3"><img src="../assets/img/PartVideo3.jpg" alt=""></div>-->
        <div class="part1"><img src="../assets/img/PartVideo1.jpg" alt=""></div>
        <div class="part2"><img src="../assets/img/PartVideo2.jpg" alt=""></div>
        <div class="part3"><img src="../assets/img/PartVideo3.jpg" alt=""></div>
      </div>
    </div>
    <!--  信息部分-->
    <div class="info">
      <div class="words_weather">
        <div class="words">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <img src="../assets/img/taoHua.jpg" alt="">
              </b-col>
              <b-col md="6">
                <b-card-body title="桃花岛养殖基地">
                  <b-card-text>
                    在舟山桃花岛南部的对峙村一处岛礁附近，一片被467米长的网衣圈围的海湾里养殖着数以万计的岱衢族大黄鱼，这个浅海生态围网养殖基地由某水产公司投资开发，桂福坤带领团队全力提供技术支持。
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
        <div class="weather">今日天气
          <div class="city"></div>
          <div class="wea"></div>
          <div class="tem"></div>
          <div class="win"></div>
          <div class="air_level"></div>
          <div class="humidity"></div>
        </div>
      </div>
      <div class="waterQ" id="waterQ">
        <div class="drawBox" id="chart1"></div>
        <div class="drawBox" id="chart2"></div>
        <div class="drawBox" id="chart3"></div>
        <div class="drawBox" id="chart4"></div>
        <div class="drawBox" id="chart5"></div>
        <div class="drawBox" id="chart6"></div>
      </div>
      <div class="equipment">
        <table>
          <tr class="highlight">
            <th></th>
            <th>视频监控</th>
            <th>水质监测</th>
            <th>投饵设施</th>
            <th>洗网设施</th>
          </tr>
          <tr>
            <th class="highlight">电量</th>
            <th>80%</th>
            <th>70%</th>
            <th>80%</th>
            <th>50%</th>
          </tr>
          <tr>
            <th class="highlight">信号</th>
            <th>强</th>
            <th>强</th>
            <th>强</th>
            <th>强</th>
          </tr>
          <tr>
            <th class="highlight">工作状态</th>
            <th>开启</th>
            <th>开启</th>
            <th>关闭</th>
            <th>开启</th>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import {getWeather} from '../js/weather'
  // import {setOp} from '../js/waterQ'
  import {getData} from '../js/test'
  import echarts from 'echarts';
  import axios from 'axios';

  getWeather();
  getData();
  export default {
    name: "overview",
    data() {
      return {
        // lt: [],
        // do: [],
      };
    },
    methods: {
      // getWeather: getWeather(),
      change() {
      },
      getData(){
      },
      // draw() {
      //   const path = 'http://localhost:5000/overview';
      //   axios.get(path)
      //     .then((res) => {
      //       this.lt = res.data.lt;
      //       this.do = res.data.do;
      //       console.log(this.do);
      //       console.log(this.lt);
      //       var myChart = echarts.init(document.getElementById('waterQ')) // 拿到一个实例
      //       var option = {
      //         title: {
      //           text: '养殖环境因子变化',
      //           textStyle: {
      //             align: 'center',
      //             color: '#242f42',
      //             fontSize: 25,
      //           },
      //           top: '5%',
      //           left: 'center',
      //         },
      //         tooltip: {
      //           trigger: 'axis',
      //           axisPointer: { // 坐标轴指示器，坐标轴触发有效
      //             type: 'line', // 默认为直线，可选为：'line' | 'shadow'
      //           }
      //         },
      //         xAxis: {
      //           axisLabel: {
      //             show: false,
      //           },
      //           axisLine: {
      //             lineStyle: {
      //               color: '#499c54',//x轴的颜色
      //               width: 2,//轴线的宽度
      //             },
      //           },
      //           type: 'category',
      //           boundaryGap: false,
      //           data: this.lt
      //         },
      //         yAxis: {
      //           axisLabel: {
      //             show: true,
      //             textStyle: {
      //               color: "#499c54",
      //             }
      //           },
      //           axisLine: {
      //             lineStyle: {
      //               color: '#499c54',
      //               width: 2,//轴线的宽度
      //             },
      //           },
      //           boundaryGap: [0, '50%'],
      //           type: 'value'
      //         },
      //         series: [{
      //           name: "溶解氧",
      //           type: 'line',
      //           smooth: true,
      //           symbol: 'none',
      //           stack: 'a',
      //           itemStyle: {
      //             normal: {
      //               color: '#499c54',
      //             },
      //           },
      //           areaStyle: {
      //             normal: {}
      //           },
      //           data: this.do
      //         }]
      //       }
      //       myChart.setOption(option);
      //       line_echart('waterQ',this.lt,this.do,'溶解氧');
      //     })
      //     .catch((error) => {
      //       console.error(error)
      //     })
      // }
    },
    mounted() {
      // this.draw();
      this.getData();
    }
  }
</script>

<style scoped>
  @import "../assets/css/overview.css";

  .weather {

  }
</style>
