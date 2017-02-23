<template>
  <header>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <div class="header-button">
          <el-button>默认按钮</el-button>
          <el-button type="text">文字按钮</el-button>
          <router-link to="Register">
            <el-button type="primary">
              注册
            </el-button>
          </router-link>
          <router-link to="Login">
            <el-button type="primary">
              登录
            </el-button>
          </router-link>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
export default {
  name: 'index-header',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header-button {
  display: flex;
  justify-content: flex-end;
}
</style>
