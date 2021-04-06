import Vue from 'vue';
import Vuex from 'vuex';
import {Module, VuexModule, Mutation, getModule, Action} from "vuex-module-decorators";
import store from '@/store';
import {axiosDefault} from "@/store/BaseAxios";
import {JWT} from "@/libs/JWT";

export interface IAuth {
    User?: IUSerInfo
}

export interface IUSerInfo {
    email: String,
    name: String,
    level: Number,
    expired: String,
    token: String
}

@Module({
    store,
    name: "Auth",
    namespaced: true,
    dynamic: true
})
class Auth extends VuexModule implements IAuth {
    User?: IUSerInfo;

    @Action({
        rawError: true
    })
    login({email, password, remember}: { email: String, password: String, remember?: Boolean }) {
        try {
            axiosDefault().post('/v1/signin', {
                email, password, remember
            }).then(({data}) => {
                JWT.setToken(data.data);
            }).catch(error => {
                console.error('[Module>Auth] 아이디, 또는 패스워드를 확인하세요.');
            })
        } catch {
            console.error('[Module>Auth] 로그인 모듈에 통신과 무관한 문제가 발생했습니다.')
        }
    }

    @Action({
        rawError: true
    })
    logout() {
        JWT.clearToken();
    }
}

export default getModule(Auth);
