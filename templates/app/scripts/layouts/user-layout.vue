<template>
  <ui-layout-view
    :top-app-bar-attr-or-prop="{
      navIcon: false
    }"
    :use-drawer="false"
  >
    <template #top-app-bar-title>
      <div class="title">网站标题</div>
    </template>

    <div class="main-content">
      <router-view></router-view>
    </div>

    <page-loading v-if="$store.pageLoading" />
  </ui-layout-view>
</template>
