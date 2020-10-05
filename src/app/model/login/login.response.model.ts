import { ActivityLog } from "./activityLog.model";
import { Address } from "./address.model";

export class LoginResponse{
    public username: string;
    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public contact: string;
    public role: string;
    public address: Address;
    public activityLog: ActivityLog;
    public isActive: boolean
    public passwordExpiry: Date;
    public token: string;
}