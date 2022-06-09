import echarts from "echarts";

export function line_echart(elementId,x,y,propName) {
  var myChart = echarts.init(document.getElementById(elementId)) // 拿到一个实例
  var option = {
    title: {
      text: '养殖环境因子变化',
      textStyle: {
        align: 'center',
        color: '#242f42',
        fontSize: 25,
      },
      top: '5%',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'line', // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: {
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#499c54',//x轴的颜色
          width: 2,//轴线的宽度
        },

      },
      type: 'category',
      boundaryGap: false,
      data: x
    },
    yAxis: {
      axisLabel: {
        show: true,
        textStyle: {
          color: "#499c54",
        }
      },
      axisLine: {
        lineStyle: {
          color: '#499c54',
          width: 2,//轴线的宽度
        },
      },
      boundaryGap: [0, '50%'],
      type: 'value'
    },
    series: [{
      name: propName,
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      itemStyle: {
        normal: {
          color: '#499c54',
        },
      },
      areaStyle: {
        normal: {}
      },
      data: y
    }]
  }
  myChart.setOption(option);
}

