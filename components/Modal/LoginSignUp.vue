<template>
  <div class="modal-login-container">
    <input id="modal-login-toggle" type="checkbox">
    <label class="modal-backdrop" for="modal-login-toggle" />

    <div class="modal-content">
      <label class="modal-close-btn" for="modal-login-toggle">
        <svg width="50" height="50">
          <line x1="10" y1="10" x2="40" y2="40" />
          <line x1="40" y1="10" x2="10" y2="40" />
        </svg>
      </label>
      <!---->
      <el-row v-if="userInfo" type="flex" justify="center" class="tabs modal-text">
        e-mail: {{ userInfo.email }}
        <div class="submitBtn" @click="logOut">
          Log Out
        </div>
      </el-row>
      <!---->
      <div v-if="!userInfo" class="tabs">
        <!--  LOG IN  -->
        <input id="tab-1" class="radio" name="tabs-name" type="radio" checked>
        <label for="tab-1" class="table"><span>Login</span></label>
        <div class="tabs-content">
          <form action="">
            <input v-model="data.email" type="email" placeholder="Email" required>
            <input v-model="data.password" type="password" placeholder="Password" required>
            <label class="loginText">Test: user@user/ userpw</label>
            <!-- <input type="submit" value="Log In" @click="login"> -->
            <div class="submitBtn" @click="login">
              Log In
            </div>
          </form>
          <form class="forgot-password" action="">
            <input id="forgot-password-toggle" type="checkbox">
            <label for="forgot-password-toggle">forgot password?</label>
            <div class="forgot-password-content">
              <input type="email" placeholder="enter your email" required>
              <!-- <input type="submit" value="go"> -->
              <div class="submitBtn">
                go
              </div>
            </div>
          </form>
        </div>
        <!--  SIGN UP  -->
        <input id="tab-2" class="radio" name="tabs-name" type="radio">
        <label for="tab-2" class="table"><span>Sign up</span></label>
        <div class="tabs-content">
          <form action="">
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm password" required>
            <!-- <input type="submit" value="Sign Up"> -->
            <label class="loginText">X</label>
            <div class="submitBtn">
              Sign Up
            </div>
          </form>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LoginSignUp',
  components: {},
  props: {
  },
  data () {
    return {
      data: {
        email: 'user@user',
        password: 'userpw'
      }
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'user/userInfo'
    })
  },
  methods: {
    async login () {
      await this.$store.dispatch('user/login', this.data)
      // this.$router.push({ name: 'index' })
    },
    async logOut () {
      await this.$store.dispatch('user/logOut')
    }
  }
}
</script>
