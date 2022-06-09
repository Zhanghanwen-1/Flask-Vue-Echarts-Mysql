import echarts from "echarts";
import axios from "axios";

export function getData() {
  const path = 'http://localhost:5000/overview';
  axios.get(path)
    .then((res) => {
      var x = [];
      var y1wt = [];
      var y2wt = [];
      var y3wt = [];
      var y1sal = [];
      var y2sal = [];
      var y3sal = [];
      var y1do = [];
      var y2do = [];
      var y3do = [];
      var y1ph = [];
      var y2ph = [];
      var y3ph = [];
      var y1fv = [];
      var y2fv = [];
      var y3fv = [];
      var y1ii = [];
      var y2ii = [];
      var y3ii = [];
      // 取出数据库每条数据，开始判断我们所需要的数据
      for (var i = 0; i < res.data.p.length; i++) {
        if (res.data.p[i] === "监测点1") {
          console.log(i);
          x.push(res.data.lt[i]);
          y1do.push(res.data.do[i]);   //监测点1的do数据
          y1ph.push(res.data.ph[i]);//监测点1的硬度数据
          y1wt.push(res.data.wt[i]);//监测点1的wt数据
          y1sal.push(res.data.sal[i]);//监测点1的溶氧量数据
          y1fv.push(res.data.fv[i]);//监测点1的水温数据
          y1ii.push(res.data.ii[i]);//监测点1的盐度数据
        }
        if (res.data.p[i] === "监测点2") {
          console.log(i);
          y2do.push(res.data.do[i]);    //东极岛的do数据
          y2ph.push(res.data.ph[i]);//东极岛的硬度数据
          y2wt.push(res.data.wt[i]);//东极岛的wt数据
          y2sal.push(res.data.sal[i]);//东极岛的溶氧量数据
          y2fv.push(res.data.fv[i]);//东极岛的水温数据
          y2ii.push(res.data.ii[i]);//东极岛的盐度数据
        }
        if (res.data.p[i] === "监测点3") {
          console.log(i);
          y3do.push(res.data.do[i]);
          y3ph.push(res.data.ph[i]);
          y3wt.push(res.data.wt[i]);
          y3sal.push(res.data.sal[i]);
          y3fv.push(res.data.fv[i]);
          y3ii.push(res.data.ii[i]);
        }
      }
      // this.p = res.res.data.p;
      // this.lt = res.res.data.lt;
      // this.wt = res.res.data.wt;
      // this.sal = res.res.data.sal;
      // this.do = res.res.data.do;
      // this.ph = res.res.data.ph;
      // this.fv = res.res.data.fv;
      // this.ii = res.res.data.ii;
      console.log(x);
      console.log(y1wt);
      console.log(y2do);
      set_comp("chart1", x, y1wt, y2wt, y3wt, "℃", "水温")
      set_comp("chart2", x, y1sal, y2sal, y3sal, "‰", "盐度")
      set_comp("chart3", x, y1do, y2do, y3do, "mg/L", "溶解氧")
      set_comp("chart4", x, y1ph, y2ph, y3ph, "", "ph")
      set_comp("chart5", x, y1fv, y2fv, y3fv, "m/s", "流速")
      set_comp("chart6", x, y1ii, y2ii, y3ii, "104Lux", "光照强度")

    })
}

export function set_comp(elementId, x1, y1, y2, y3, unit, clazz) {
  var myChart = echarts.init(document.getElementById(elementId)) // 拿到一个实例
  var charts = {
    unit: "单位："+unit, //单位：'mg/l'
    names: ["监测点1", "监测点2", "监测点3"],// '监测点1','区域1'..
    lineX: x1,  // 横坐标的值
    value: [
      y1, // 纵坐标的值
      y2,
      y3
    ]
  }
  var option = {
    title: {
      x: 'center',
      y: 'top',
      text: clazz,
      textStyle: {
        fontSize: 15,
        color: '#F1F1F3'
      },
    },
    backgroundColor: 'rgba(1, 22, 53, 1)',
    tooltip: {
      trigger: 'axis'
    },

    legend: {
      top: '10%',
      data: charts.names,
      textStyle: {
        fontSize: 8,
        color: '#FFFFFF'
      },
      right: '4%'
    },
    grid: {
      top: '20%',
      left: '6%',
      right: '4%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: {
      show: true,
      type: 'category',
      boundaryGap: false,
      data: charts.lineX,
      axisLabel: {
        textStyle: {
          color: 'rgb(0,253,255,0.6)'
        },
        formatter: function (params) {
          return params.split(' ')[0] + '\n' + params.split(' ')[1]
        }
      }
    },
    yAxis: {
      show: true,
      splitArea: {
        show: true,
        areaStyle: {
          color: "rgba(1, 22, 53, 1)"
        }
      },
      name: charts.unit,
      left: '4%',
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: 'rgb(0,253,255,0.6)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'rgb(23,255,243,0.3)'
        }
      },

      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgb(0,253,255,0.6)'
        }
      }
    },
    series: [
      {
        name: "监测点1",
        type: 'line',
        itemStyle: {
          normal: {
            color: '#f88307',
            lineStyle: {
              color: '#f88307'
            }
          }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 2,
        data: y1
      },
      {
        name: "监测点2",
        type: 'line',
        itemStyle: {
          normal: {
            color: '#15cbf8',
            lineStyle: {
              color: '#15cbf8'
            }
          }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: 2,
        data: y2
      },
      {
        name: "监测点3",
        type: 'line',
        itemStyle: {
          normal: {
            color: '#00FF00',
            lineStyle: {
              color: '#00FF00'
            }
          }
        },
        // axisLine: {
        //     lineStyle: {
        //         color: '#f007f8'
        //     }
        // },
        // nameTextStyle:{
        //   color:  "#f007f8",
        // },
        smooth: false,
        symbol: 'circle',
        symbolSize: 2,
        data: y3
      }]
  }
  myChart.setOption(option);
}
