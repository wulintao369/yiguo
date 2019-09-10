<template>
    <div class="home-banner swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"
                 v-for="banner in banners"
                 :key="banner.id">
                <img :src="banner.pictureUrl" alt="">
            </div>
        </div>
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
//请求数据用axios

//引入Swiper模块
import Swiper from "swiper"
// import Banner from "../../DataBase/1_banner.js"
export default {
    data(){
        return{
            banners:[]
        }
    },
    created(){
        this.$http.get("/DataBase/1_banner.json").then(res=>{
            console.log(res.data)
            this.banners = res.data
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    //自动播放
                    autoplay:{
                        delay: 4000,
                        disableOnInteraction:false,
                    },
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    
                })
            })
        })
    }
}
</script>

<style lang = "scss">
    .home-banner{
        width: 100%;
        height:2.5rem;
        img{
            margin-top:.4rem;
            width:100%;
            height:100%;
        }
        .swiper-pagination-bullet-active {
            opacity: 1;
            background: rgb(255, 248, 248);
        }   
    }
</style>
