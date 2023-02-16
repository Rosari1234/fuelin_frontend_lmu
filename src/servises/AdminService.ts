import axios from 'axios';
import { CustomerAdmin } from '../models/CustomerAdmin';
import { AppResponse } from "../models/Response";
import { Util } from "../Util";

export class AdminService {
    public static async getAllCustomerAdmins(): Promise<AppResponse<CustomerAdmin[]>> {
        const url = Util.apiAuthUrl(`getAllCustomerAdmins`);
        return await axios.get<void, AppResponse<CustomerAdmin[]>>(url);
    }

    public static async addAminCustomers(data: CustomerAdmin): Promise<AppResponse<CustomerAdmin>> {
        const url = Util.apiAuthUrl("create/adminUser");
        return await axios.post<Partial<CustomerAdmin>, AppResponse<CustomerAdmin>>(url, data);
    }
}