<template>
  <ui-list-view model="article" :thead="thead" :tbody="tbody"></ui-list-view>
</template>

<script>
const thead = ['ID', '标题'];
const tbody = ['id', 'title'];

export default {
  data() {
    return {
      thead,
      tbody
    };
  }
};
</script>
