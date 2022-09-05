<template>
    <div class="container" id="box" ref="boxRef"></div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import usethree from "@/hooks/usethree.js"

const boxRef = ref(null)
onMounted(() => {
    const { scene, camera, render, autoRender } = usethree({ el: document.querySelector("#box"), options: { autoPlay: true, modulePath: './scene.gltf' } })
})
</script>

<style lang="scss" scoped>
.container {
    margin: auto;
    width: 800px;
    height: 600px;
    // background-color: rgb(23, 8, 8);
}
</style>