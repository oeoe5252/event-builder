interface IBaseResponse {
    code: String;
    message: String;
    devMessage: String;
}

export class BaseResponse implements IBaseResponse{

    code: String;
    message: String;
    devMessage: String;

    constructor() {
        this.code = "";
        this.message = "";
        this.devMessage = "";
        this.setBasicError();
    }

    setBasicError() {
        this.code = '-1';
        this.message = '요청에 실패 하였습니다.';
    }

    setAuthError() {
        this.code = '403';
        this.message = '인증 기간이 만료 되었습니다.';
    }


}
