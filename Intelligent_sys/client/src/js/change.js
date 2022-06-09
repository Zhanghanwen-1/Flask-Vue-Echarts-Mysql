export function getWeather() {
    $('.weather').css('background-image', setBgImg(result.data[0].wea));
    $('.city').html(result.city);
    $('.wea').html(result.data[0].wea);

    $('.tem').html(result.data[0].hours[0].tem + "°");
    $('.win').html(result.data[0].hours[0].win + '&nbsp;' + result.data[0].hours[0].win_speed);
    $('.air_level').html('空气&nbsp;' + result.data[0].air_level);
    $('.humidity').html('相对湿度&nbsp;' + result.data[0].humidity);
  }
