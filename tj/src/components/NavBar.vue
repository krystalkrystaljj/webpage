<template>
  <div>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-image src="https://taiji.com.cn/TaijiCMS/r/cms/www/default/images/logo.png" fit="cover"></el-image>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">云上遥感图像处理</el-menu-item>
    <el-sub-menu index="2">
      <template #title>工作台</template>
      <el-sub-menu index="2-1">
        <template #title>普通遥感数据</template>
        <router-link to="/noDouble"><el-menu-item index="2-1-1">双景处理</el-menu-item></router-link>
        <router-link to="/noTiming"><el-menu-item index="2-1-2">时序处理</el-menu-item></router-link>
      </el-sub-menu>

      <el-sub-menu index="2-2">
        <template #title>哨兵</template>
        <router-link to="/Double"><el-menu-item index="2-2-1">双景处理</el-menu-item></router-link>
        <el-menu-item index="2-2-2">时序处理</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "NavBar",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
.flex-grow {
  flex-grow: 1;
}

.el-image {
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-image img {
  max-height: 100%;
  max-width: 100%;
}

</style>
