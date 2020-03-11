<template>
 <div id="app">
   <el-row>
  <el-col :span="4"><div class="grid-content bg-purple">
    <Menu></Menu>
    </div></el-col>
  <el-col :span="20"><div class="grid-content bg-purple-light">
     <router-view></router-view></div></el-col>
</el-row>
 
 </div>
</template>
<script>
import Menu from "./components/Menu";
export default {

 components: {
  Menu
 }
};
</script>
