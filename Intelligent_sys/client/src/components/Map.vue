<!--#!/usr/bin/python-->
<!--# -*- coding:utf8 -*- -->
<template>
<div  class="right">
<div class="map" id="id"></div>
</div>
</template>

<script>
import echarts from 'echarts';
import JSON from "../assets/json/zhoushan.json";
 export default {
  mounted() {
    this.leftCenterMap()
  },
  methods: {
    leftCenterMap() {
      var myChart = echarts.init(document.getElementById('id')) // 拿到一个实例
      echarts.registerMap('舟山市', JSON, {})// 引入地图文件
      // console.log(JSON)
      var option = {
        //工具箱
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          // 辅助线标志,分别是启用，删除上一条，删除全部,可设置更多属性
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: "舟山市",
            type: 'map',
            mapType: '舟山市',// 地图名称
            label: {
              show: true,
            },
            data: [
              { name: "定海区", value: 50 },
              { name: "普陀区", value: 100 },
              { name: "岱山县", value: 150 },
              { name: "嵊泗县", value: 200 },
            ],
            nameMap: {
              定海区: "定海区",
              普陀区: "普陀区",
              岱山县: "岱山县",
              嵊泗县: "嵊泗县",
            },
          }]
      }
      myChart.setOption(option)
    }
  }
};
</script>

<style scoped>
@import "../assets/css/main_box.css";
</style>
