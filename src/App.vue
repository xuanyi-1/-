<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return {
      
            message:'dashabi'
        }
    },
    mounted(){
        console.log('xxx')
    }
}
</script>