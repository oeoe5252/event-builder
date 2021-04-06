import {NavigationGuard}  from "vue-router";
import {JWT} from "@/libs/JWT";

const beforeEach: NavigationGuard = function (to, from, next) {
    if (JWT.getToken() === null) {
        next({
            path: '/login',
            params: {
                beforeGuard: 'true',
                referer: from.path
            }
        });
    } else {
        next();
    }
};

export default beforeEach;
