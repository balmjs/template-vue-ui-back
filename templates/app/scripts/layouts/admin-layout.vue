<template>
  <div class="yb-container">
    <ui-layout-view
      v-if="hasLayout"
      :top-app-bar-attr-or-prop="{
        fixed: true
      }"
      :drawer-attr-or-prop="{
        viewportHeight: true
      }"
      drawer-below-top-app-bar
    >
      <template #top-app-bar-title>网站标题</template>
      <template #top-app-bar-toolbar>
        <div class="user-info">
          <ui-button outlined @click="$store.logout">退出</ui-button>
        </div>
      </template>

      <template #drawer-title>
        <div class="logo"></div>
        <div class="top-bar-app__left-bottom-corner"></div>
      </template>
      <template #drawer-content>
        <template v-for="(menuItem, menuIndex) in $store.menu">
          <div :key="menuIndex">
            <ui-item class="menu-item">
              <ui-item-text-content>
                {{ menuItem.title }}
              </ui-item-text-content>
            </ui-item>
            <ui-nav>
              <template v-for="(submenuItem, submenuIndex) in menuItem.submenu">
                <router-link
                  v-slot="{ navigate, href, isActive }"
                  custom
                  :to="{ name: submenuItem.name }"
                  :key="submenuIndex"
                >
                  <ui-nav-item
                    class="submenu-item"
                    :href="href"
                    :active="isActiveMenu(submenuItem, isActive)"
                    @click.stop="navigate"
                  >
                    <ui-item-text-content>{{
                      submenuItem.title
                    }}</ui-item-text-content>
                  </ui-nav-item>
                </router-link>
              </template>
            </ui-nav>
          </div>
        </template>
      </template>

      <div class="main-content">
        <keep-alive>
          <router-view v-if="keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!keepAlive" :key="routeKey"></router-view>
      </div>

      <page-loading v-if="$store.pageLoading" />
    </ui-layout-view>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import { generateRandomAlphaNum } from '@/utils';

export default {
  computed: {
    hasLayout() {
      return !this.$route.meta?.noLayout;
    },
    routeKey() {
      return this.$route.name + `-${generateRandomAlphaNum(8)}`;
    },
    keepAlive() {
      const { name, matched } = this.$route;
      const noKeepAlive =
        matched.some((route) => route.meta?.keepAlive === false) ||
        /.detail$/.test(name);
      // console.warn('noKeepAlive', noKeepAlive);
      return !noKeepAlive;
    }
  },
  beforeMount() {
    this.$store.getMenu();
  },
  methods: {
    isActiveMenu(submenuItem, isActive) {
      const currentMenu = submenuItem.name;
      const isActivePage =
        currentMenu.replace(/\.list/, '.detail') === this.$route.name;
      return isActive || isActivePage;
    }
  }
};
</script>
