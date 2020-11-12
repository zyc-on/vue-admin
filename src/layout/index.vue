<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container" />
    <div :class="{ hasTagsView: needTagsView }" class="main-container">
      <nav-bar />
      <tags-view v-if="needTagsView" />
    </div>
    <app-main />
  </div>
</template>

<script>
export default {}
</script>

<style></style>
