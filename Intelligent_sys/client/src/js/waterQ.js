// export function setOp(x, y, serious_name) {
  var option = {
    title: {
      text: '养殖环境因子变化',
      textStyle: {
        align: 'center',
        color: '#fff',
        fontSize: 25,
      },
      top: '5%',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: {
      axisLabel: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,247,255,0.2)',//x轴的颜色
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
          color: "rgba(255,200,100,1)",
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(0,247,255,0.2)',
          width: 2,//轴线的宽度
        },
      },
      boundaryGap: [0, '50%'],
      type: 'value'
    },
    series: [{
      name: serious_name,
      type: 'line',
      smooth: true,
      symbol: 'none',
      stack: 'a',
      itemStyle: {
        normal: {
          color: 'rgba(0,225,255,0.5)',
        },
      },
      areaStyle: {
        normal: {}
      },
      data: y
    }]
}
