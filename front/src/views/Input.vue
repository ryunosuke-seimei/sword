<template>
    <div id="input">
        {{title}}
        input
    </div>
</template>

<script>
export default {
    name: "Input",
    computed:{
        title(){
            return this.$store.state.title
        },
    },
    methods:{

    }
}
</script>
