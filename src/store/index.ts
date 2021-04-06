import Vue from 'vue';
import Vuex from 'vuex';
import { IAuth } from "@/store/modules/Auth";

Vue.use(Vuex);
export interface IRootState {
    Auth: IAuth
}

export default new Vuex.Store<IRootState>({});
