<template>
  <section class="min-h-screen flex flex-col">
    <div class="flex flex-1 items-center justify-center">
      <div class="rounded-lg lg:px-32 md:px-20 sm:px-20 px-16 py-32 lg:max-w-xl sm:max-w-md w-full text-center">
        <form class="text-center">
          <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
            BUILDER
          </h1>
          <div class="py-2 text-left">
            <input
                v-model="userModel.email"
                :disabled="isLoading"
                type="text"
                class="transition-all hover:bg-gray-200 bg-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg "
                placeholder="Email"/>
            <span v-if="userModel.email.length < 1" class="text-sm text-rose-500 transition-all">{{ validator.email }}</span>
          </div>
          <div class="py-2 text-left">
            <input
                v-model="userModel.password"
                :disabled="isLoading"
                type="password"
                class="transition-all hover:bg-gray-200 bg-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg "
                placeholder="Password"/>
            <span v-if="userModel.password.length < 1" class="text-sm text-rose-500 transition-all">{{ validator.password }}</span>
          </div>
          <div class="py-2">
            <button
                @click="submit"
                type="button"
                :class="{'cursor-not-allowed': isLoading}"
                :disabled="isLoading"
                class="inline-flex w-full justify-center items-center px-4 py-2 text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150">
              <svg v-if="isLoading" class="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p v-else>로그인</p>
            </button>
            <span v-if="isLoginFailed" class="text-sm text-rose-500 transition-all">{{ validator.loginFailed }}</span>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-end justify-center pb-5 text-gray-800 pointer-events-none">Stickinteractive</div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import Auth from "@/store/modules/Auth";
import {JWT} from "@/libs/JWT";

interface UserModel {
  email: String,
  password: String,
  remember?: Boolean
}

interface Validator {
  email: String,
  password: String,
  loginFailed: String,
}

@Component({
  beforeRouteEnter: function (to, from, next) {
    if (JWT.getToken() !== null) {
      next({
        path: '/'
      });
    }
  }
})
export default class Login extends Vue {

  userModel: UserModel = {
    email: '',
    password: '',
    remember: false,
  }

  validator: Validator = {
    email: '',
    password: '',
    loginFailed: '아이디 또는 패스워드를 확인해 주세요.',
  }

  isLoading: Boolean = false;

  isLoginFailed: Boolean = false;

  submit() {
    this.isLoginFailed = false;

    if (this.validate()) {
      this.isLoading = true;

      Auth.login(this.userModel)
          .catch(() => {
            this.isLoading = false;
            this.isLoginFailed = true;
          })
    }
  }

  validate() {
    let valid: Boolean = true;

    if (this.userModel.email.length < 1) {
      this.validator.email = '이메일을 입력해 주세요.';
      valid = false;
    }

    if (this.userModel.password.length < 1) {
      this.validator.password = '패스워드를 입력해 주세요.';
      valid = false;
    }

    return valid;
  }

}
</script>
