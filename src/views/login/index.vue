
<template>
  <div class="grid">
    <vs-row justify="center" class="full-screen">
      <div class="login-container">
        <header class="login-header">
          <h4 class="not-margin">Welcome to <b>Willing</b></h4>
        </header>

        <div class="login-content">
          <div class="con-form">
            <vs-input v-model="loginForm.username" placeholder="username">
              <template #icon>
                <i class="iconfont iconuser" />
              </template>
            </vs-input>
            <vs-input v-model="loginForm.password" type="password" placeholder="password" @keyup.enter.native="handleLogin">
              <template #icon>
                <i class="iconfont iconlock-fill" />
              </template>
            </vs-input>
            <div class="flex">
              <vs-checkbox v-model="rememberMe">Remember me</vs-checkbox>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>

        <footer class="login-footer">
          <div class="footer-dialog">
            <vs-button block :loading="loadingLogin" @click.native.prevent="handleLogin">
              Login In
            </vs-button>

            <div class="new">New Here? <a href="#">Create New Account</a></div>
          </div>
        </footer>
      </div>
    </vs-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    loginForm: {
      username: 'admin',
      password: '111111'
    },
    active: true,
    loadingLogin: false,
    loadingSuccess: false,
    rememberMe: false
  }),
  methods: {
    handleLogin() {
      this.loadingLogin = true
      setTimeout(() => {
        this.loadingLogin = false
        this.success = !this.success
        this.$store.dispatch('user/login', this.loginForm)
          .then(() => {
            this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          })
      }, 1000)
    }
  }
}
</script>

<style>
.login-container {
  background: rgba(var(--vs-background), 1);
  color: rgba(var(--vs-text), 1);
  position: relative;
  min-width: 400px;
  border-radius: var(--vs-radius);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-box-shadow: 0 5px 30px 0 rgba(0, 0, 0, var(--vs-shadow-opacity));
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, var(--vs-shadow-opacity));
  max-width: 800px;
  margin: auto;
  outline: none;
  list-style: none;
}
.login-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 10px 16px;
}
.not-margin {
  margin: 0;
  font-weight: 400;
  padding: 10px 10px 0;
}
.login-content {
  padding: 10px 16px;
  width: 100%;
  position: relative;
  border-radius: inherit;
}
.con-form {
  width: 100%;
}
.con-form .vs-input-content {
  margin: 10px 0;
  width: 100%;
}
.con-form .vs-input-content .vs-input {
  width: 100%;
}
.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con-form .vs-checkbox-label {
  font-size: 0.8rem;
  margin: 0;
}
.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
  color: #333;
}
.login-footer {
  padding: 0 16px 10px;
}
.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.footer-dialog .vs-button {
  margin: 0;
  border-radius: 12px;
}
.footer-dialog .new {
  margin: 20px 0 0;
  padding: 0;
  font-size: 0.7rem;
}
.full-screen {
  height: 100vh;
  align-items: center !important;
  background: url("../../assets/images/background/fancy-pants.jpg");
}
</style>
