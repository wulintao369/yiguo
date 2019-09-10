<template>
    <div class="app-header">
        <div class="left">
            <span>青岛</span>
            <i class="fa fa-angle-down"></i>
        </div>
        <div class="right">
            <form action="">
                <i class="fa fa-search"></i>
                <input type="text" placeholder="请输入商品名称">
            </form>
        </div>
    </div>
</template>
 
<script>
// import router from "@/router"
export default {
    created(){
        //全局前置路由守卫
       
    }
}
</script>

<style lang="scss">
    .app-header{
        position: fixed;
        width:100%;
        height:50px;;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background: linear-gradient(90deg,#39da85,#01b27a);
        .left{
            span{
                color:white;
                font-size:0.14rem;
            }
            i{
                margin-left: .08rem;
                color:white;
            }
        }
        .right{
            display: flex;
            align-items: center;
            margin-left:.1rem;
            
            form{
                width:3rem;
                height: 0.3rem;
                // background-color: blue;
                border-radius: 0.25rem;
                background-color: white;
                // position: relative;
                i{
                    font-size: 0.14rem;
                    margin-left: .1rem;
                }
                input{
                    width:2.5rem;
                    height:0.28rem;
                    
                    border:0;
                    text-indent: 0.1rem;
                }
            }
        }
    }
</style>
