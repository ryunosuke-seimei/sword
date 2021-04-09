<template>
    <div id="count">
        {{name}}
    </div>
</template>

<script>
export default {
    name:"Count",
    computed:{
        name(){
            return this.$store.getters.name
        }
    }
}
</script>