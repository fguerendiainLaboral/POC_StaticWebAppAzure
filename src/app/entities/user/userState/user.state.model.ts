import { MenuItem } from "primeng/api";

export interface UserStateModel {
    userId: string | null;
    lastName: string | null;
    surName: string | null;
    email: string | null;
    active: boolean | null;
    token: string | null;
    menu: MenuItem[];
}