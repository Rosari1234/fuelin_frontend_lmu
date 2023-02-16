import axios from "axios";
import { AppResponse } from "../models/Response";
import { Util } from "../Util";
import { User, UserData } from "../models/User";
import { Admin} from "../models/Admin";

export interface UserLoginData {
  email: string;
  password: string;
}

export interface UserUpdateData {
  email: string;
}

export interface UserReset {
  userId: string;
  token: string
  password: string;
}

export class AuthService {
 
  
}
