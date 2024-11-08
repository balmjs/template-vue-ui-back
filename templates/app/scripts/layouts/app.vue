<template>
  <admin-layout v-if="useAdminLayout"></admin-layout>
  <user-layout v-else></user-layout>
</template>

<script>
import AdminLayout from './admin-layout';
import UserLayout from './user-layout';
import { ROUTE_NAME } from '@/routes/config';

export default {
  name: 'App',
  components: {
    AdminLayout,
    UserLayout
  },
  computed: {
    useAdminLayout() {
      return (
        this.$store.isAuthenticated && this.$route.name !== ROUTE_NAME.login
      );
    }
  },
  beforeMount() {
    this.$bus.on('redirect', (url, replace = false) => {
      if (replace) {
        this.$router.replace(url);
      } else {
        this.$router.push(url);
      }
    });

    this.$bus.on('on-request', () => {
      this.$store.pageLoading = true;
    });

    this.$bus.on('on-response', () => {
      this.$store.pageLoading = false;
    });

    this.$bus.on('on-error', (message) => {
      this.$alert(message);
    });

    this.$bus.on('need-login', ({ message, data }) => {
      this.$store.clearUserAccount();

      if (this.$route.name !== ROUTE_NAME.login) {
        this.$alert(message);
        this.$router.push({
          name: ROUTE_NAME.login,
          query: { callback: location.href } // 回跳
        });
      }
    });
  }
};
</script>
