<template>
<div>
 <div>产品(嵌套路由三级页面)</div>
   <!-- v-has="'edit'"里面双引号代表是变量 -->
   <h1>下面是权限按钮</h1>
  <el-button v-has="'edit'">编辑</el-button>
  <el-button v-has="'add'">添加</el-button>

</div>
</template>
<script>
export default {
    // 按钮权限指令
 directives: {
  has: {
   inserted(el, bindings, vnode) {
    let flag = vnode.context.$store.state.btnPermission[bindings["value"]];
    !flag && el.parentNode && el.parentNode.removeChild(el);
   }
  }
 },
}
</script>

