<script setup lang="ts"></script>
<template>
  <form action="" class="form-layout">
    <div class="form-input">
      <label for="title">Title</label>
      <input id="title" name="title" type="text" />
    </div>
    <div class="form-input">
      <label for="desc">Description</label>
      <input id="desc" name="desc" type="text" />
    </div>
    <div class="position-btn">
      <button class="post-btn">Post</button>
    </div>
  </form>
</template>
<style>
.form-input {
  display: flex;
  flex-direction: column;
}
.form-layout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;
}
.post-btn {
  width: 100px;
  padding: 5px;
  border-radius: 3px;
  background-color: green;
  color: white;
  border: none;
}

.position-btn {
  display: flex;
  justify-content: end;
}
</style>
