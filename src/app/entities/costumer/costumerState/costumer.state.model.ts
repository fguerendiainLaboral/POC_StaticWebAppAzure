export interface Addresses {
    addressId: string | null;
    street: string | null;
    number: string | null;
    city: string | null;
    province: string | null;
    country: string | null;
    postalCode: string | null;
}

export interface Costumer {
    costumerId: string | null;
    lastName: string | null;
    surName: string | null;
    dni: number | null ;
    businessName: string | null;
    cuit: number | null ;
    emails: string[] | null;
    phones: string[] | null;
    addresses: Addresses[] | null;
    activo: boolean | null;
}

export interface CostumerStateModel {
    [costumer: number]: Costumer;

}
