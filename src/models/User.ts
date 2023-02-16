
export interface User {
    _id?: string;
    email?: string;
    password?: string;
    role?: string;
    verificationCode?:string;
    validationCode?:string;
    verifiedStatus?:string
}
export interface UserData {
  _id?: string;
  email?: string;
  password?: string;
  role?: string;
  verificationCode?:string;
  validationCode?:string;
  verifiedStatus?:string
}
