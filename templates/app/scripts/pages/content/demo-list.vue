<template>
  <ui-list-view
    title="Demo列表"
    model="demo"
    :thead="thead"
    :tbody="tbody"
    :top-action-config="topActionConfig"
    :row-action-config="rowActionConfig"
  ></ui-list-view>
</template>

<script>
const thead = ['ID', '标题', '操作'];
const tbody = ['id', 'title', { slot: 'actions' }];

const topActionConfig = [
  {
    type: 'router-link',
    text: '新增'
  }
];

const rowActionConfig = [
  {
    type: 'router-link',
    text: '编辑'
  },
  {
    type: 'delete',
    text: '删除',
    message: '确定要删除 %s 的数据吗？',
    messagePlaceholder: 'title'
  }
];

export default {
  data() {
    return {
      thead,
      tbody,
      topActionConfig,
      rowActionConfig
    };
  }
};
</script>
