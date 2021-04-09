<template>
    <div id="top">
        {{title}}
        top
        <Count></Count>
    </div>
</template>

<script>
import Count from "../components/Count"

export default {
    name: "Top",
    components:{
        Count
    },
    computed:{
        title(){
            return this.$store.getters.title
        },
    },
    methods:{

    }
}
</script>
