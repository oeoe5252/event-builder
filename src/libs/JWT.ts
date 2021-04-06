export class JWT {

    static jwt: string | null =  sessionStorage.getItem('jwt');

    static getToken() {
        return JWT.jwt;
    }

    static setToken(jwt: string) {
        JWT.jwt = jwt;
        sessionStorage.setItem('jwt', jwt);
    }

    static clearToken() {
        sessionStorage.removeItem('jwt');
    }
}
