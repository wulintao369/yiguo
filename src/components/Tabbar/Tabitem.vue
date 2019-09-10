<template>
    <router-link tag="div" class="tabitem" active-class="active" :to="'/' + mark">
            <span  ><slot name="normal"></slot></span>
            <span class="title">{{txt}}</span>
    </router-link>
</template>

<script>

export default {
    props:['txt','mark'],
    data(){
        return{
            clicked:0  //标识，初始化默认选中第一项
        }
    },
    methods:{
        
    }
}
</script>

<style lang="scss">
    .tabitem{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        i{
            font-size: 24px;   
        }
        span{
            font-size: 14px;
        }
        img{
            width:40px;
            height:40px;
        }
        &.active{
            color:rgb(67, 204, 67);
        }
    }

</style>
