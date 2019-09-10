<template>
    <div class="tabbar">
        <Tabitem txt="首页" mark="home">
            <i slot="normal" class="fa fa-home"></i>
        </Tabitem>
        <Tabitem txt="分类" mark="sort">
            <i slot="normal" class="fa fa-th"></i>
        </Tabitem>
        <Tabitem txt="吃饭吧" mark="eat">
            <i slot="normal" class="fa fa-safari"></i>
        </Tabitem>
        <Tabitem txt="购物车" mark="car">
            <i slot="normal" class="fa fa-cart-plus"></i>
        </Tabitem>
        <Tabitem txt="我的易果" mark="mine">
            <i slot="normal" class="fa fa-user-o"></i>
        </Tabitem>
    </div>
</template>

<script>
//引入Tabitem
import Tabitem from "./Tabitem"
export default {
    components:{
        Tabitem,
    }
}
</script>

<style lang="scss">
    .tabbar{
        position: fixed;
        width:100%;
        height:60px;
        left:0;
        bottom:0;
        background:white;
        display:flex;
        // .active{
        //     color:rgb(67, 204, 67);
        // }
    }

</style>
