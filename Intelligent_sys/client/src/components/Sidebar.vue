<template>
<div class="left">
   <div class="sidebar">
  <b-nav vertical class="ml-auto" type="dark" variant="dark">
    <template v-for="item in items" >
    <template v-if="item.subs">
    <b-nav-item :to="{ path: item.index }" :index="item.index" :key="item.index">
      <template>
        <img class=img :src="require('@/assets/icon/'+item.img)">
        <span>{{item.title}}</span>
      </template>
      <template v-for="subItem in item.subs">
        <b-nav-item :index="subItem.index" :key="subItem.index">
          {{ subItem.title }}
        </b-nav-item>
      </template>
      </b-nav-item>
      </template>
    <template v-else>
        <b-nav-item :to="{ path: item.index }">
      <template>
<!--        <img :src="item.src" alt="" class=img>-->
        <img class=img :src="require('@/assets/icon/'+item.img)" alt=""/>
        <span>{{item.title}}</span>
      </template>
      </b-nav-item>
      </template>
      </template>
  </b-nav>
</div>
</div>
</template>
<script>
    export default {
      data(){
        return{
          items:[
              {
                // 文字左侧图标
                img: "overview.png",
                // 跳转到哪个网页
                index: "/overview",
                // 标签文字
                title: "基地总览",
              },
              {
                img:"fish.png",
                index: "/monitor",
                title: "鱼群监控",
                subs: [
                      {
                          index: "/fish1",
                          title: "鱼群监测点1",
                      },
                      {
                          index: "/fish2",
                          title: "鱼群监测点2",
                      },
                      {
                          index: "/fish3",
                          title: "鱼群监测点3",
                      }
                          ],
              },
              {
                img:"monitor.png",
                index: "/waterq",
                title: "水质监测",
                subs: [
                      {
                          index: "/monitor1",
                          title: "水质监测点1",
                      },
                      {
                          index: "/monitor2",
                          title: "水质监测点2",
                      },
                      {
                          index: "/monitor3",
                          title: "水质监测点3",
                      }
                          ],
              },
              {
                img: "fish_eat.png",
                index: "/feed",
                title: "投喂设施",
              },
              {
                img: "net.png",
                index: "/clean",
                title: "清洗设施",
              },
            ]
        }
      },
    };
</script>

<style scoped>
@import "../assets/css/main_box.css";
</style>
