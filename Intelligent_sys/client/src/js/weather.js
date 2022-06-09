export function getWeather() {
  $.getJSON('https://v0.yiketianqi.com/api?version=v9&appid=96426978&appsecret=AVCEFz7o', function (result) {
    $('.weather').css('background-image', setBgImg(result.data[0].wea));
    $('.city').html(result.city);
    $('.wea').html(result.data[0].wea);

    $('.tem').html(result.data[0].hours[0].tem+"°");
    $('.win').html(result.data[0].hours[0].win+'&nbsp;'+result.data[0].hours[0].win_speed);
    $('.air_level').html('空气&nbsp;'+result.data[0].air_level);
    $('.humidity').html('相对湿度&nbsp;'+result.data[0].humidity);
  })
}
// 根据天气设置背景图片
    function setBgImg(wea)
    {
        var bg_img = '';
        if (wea.indexOf("晴") >= 0) {
            bg_img = "url('../assets/img/bg/qingtian.jpg'";
        } else if (wea.indexOf("雷") >= 0) {
            bg_img = 'url("../assets/img/bg/lei.gif"';
        } else if (wea.indexOf("雨") >= 0) {
            bg_img = 'url("../assets/img/bg/rain.gif"';
        } else if (wea.indexOf("多云") >= 0) {
            if (wea.indexOf("雨") >= 0) {
                bg_img = 'url("../assets/img/bg/rain.gif"';
            } else {
                bg_img = 'url("../assets/img/bg/qingtian.jpg"';
            }
        } else {
            // bg_img = 'url("../assets/img/bg/qingtian.jpg"';
            // bg_img = 'url("require(\'@/assets/img/bg/qingtian.jpg\'"';

        }
        return bg_img;
    }

