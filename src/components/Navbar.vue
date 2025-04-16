<script setup lang="ts">
    import { RouterView } from 'vue-router'
</script>
<template>
    <nav class="nav">
        <div class="nav-item">
            <h2>
                Vue Blog App
            </h2>
            <div class="user">
                <h3>User</h3>
                <button class="avatar"></button>
            </div>
        </div>
    </nav>
    <main>
        <div class="layout">
            <RouterView/>
        </div>
    </main>
</template>
<style scoped>
.avatar{
    background-color:antiquewhite;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    cursor: pointer;
}
.user{
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    gap: 10px;
}
.nav-item{
    margin-inline: 50px;
    display: flex;
    color: white;
    justify-content: space-between;
}
.nav{
    width: 100%;
    background-color: black;
    position: sticky;
    top: 0%;
    z-index: 5;
}
@media only screen and (max-width: 768px) {
  .layout {
    margin-inline: 50px;
  }
}
@media only screen and (min-width: 769px) {
  .layout {
    margin-inline: 300px;
  }
}
</style>