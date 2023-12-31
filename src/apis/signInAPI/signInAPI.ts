import { BusinessErrorResponse, HTTPResponse } from '../../types/common';
import { SignUpEmailDuplicateReq, SignUpEmailDuplicateRes, SignUpReq, SignUpRes, SignInReq, SignInRes } from '../../types/signUp';
import { API_URL } from '@shared/index';
import Api from '../Api';

export default class SignInApi extends Api {
  constructor() {
    super();
  }

  public getEmailDuplicate(
    variable: SignUpEmailDuplicateReq,
  ): Promise<HTTPResponse<SignUpEmailDuplicateRes> | BusinessErrorResponse> {
    return this.get<SignUpEmailDuplicateRes, SignUpEmailDuplicateReq>({
      url: API_URL.SIGNIN.EMAIL_DUPLICATE,
      params: variable,
    });
  }

  public postSignUp(variable: SignUpReq): Promise<HTTPResponse<SignUpRes> | BusinessErrorResponse> {
    return this.post<SignUpRes, SignUpReq>({
      url: API_URL.SIGNIN.SIGNUP,
      data: variable,
    });
  }

  public postSignIn(variable: SignInReq): Promise<HTTPResponse<SignInRes> | BusinessErrorResponse> {
    return this.post<SignInRes, SignInReq>({
      url: API_URL.SIGNIN.SIGNIN,
      data: variable,
    });
  }
}
