import { Addresses, Costumer, CostumerStateModel } from "../entities/costumer/costumerState/costumer.state.model";
import { ProductPrice, Product, ProductStateModel } from "../entities/product/productState/product.state.model";
import { UserStateModel } from "../entities/user/userState/user.state.model";
import * as navBarMockData from "./navBarJsonMockData" 


//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
// UserStateModel ------------------------------------------------------------------

export const USER1: UserStateModel = {
    userId: '1',
    lastName: 'Belgrano',
    surName: 'Juan Manuel',
    email: 'jbelgrano@gmail.com',
    active: true,
    token: '12345',
    menu: navBarMockData.MENU1
};

export const USER2: UserStateModel = {
    userId: '2',
    lastName: 'Lopez',
    surName: 'Rodolfo',
    email: 'rolopez@gmail.com',
    active: true,
    token: '67891',
    menu: navBarMockData.MENU2
};

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//ProductStateModel ----------------------------------------------------------------

export const PRICE1_1: ProductPrice = {
    price: 10,
    currency: 'ARS',
    quantity: 0
};

export const PRICE1_2: ProductPrice = {
    price: 5,
    currency: 'ARS',
    quantity: 10
};

export const PRICE2_1: ProductPrice = {
    price: 15.2,
    currency: 'ARS',
    quantity: 0
};

export const PRICE2_2: ProductPrice = {
    price: 10.2,
    currency: 'ARS',
    quantity: 5
};

export const PRICE3_1: ProductPrice = {
    price: 52.1,
    currency: 'ARS',
    quantity: 0
};

export const PRICE4_1: ProductPrice = {
    price: 45,
    currency: 'ARS',
    quantity: 0
};

export const PRICE5_1: ProductPrice = {
    price: 75,
    currency: 'ARS',
    quantity: 0
};

export const PRICE5_2: ProductPrice = {
    price: 62,
    currency: 'ARS',
    quantity: 10
};

export const PRICE5_3: ProductPrice = {
    price: 35,
    currency: 'ARS',
    quantity: 20
};

export const PRICE6_1: ProductPrice = {
    price: 52,
    currency: 'ARS',
    quantity: 0
};

export const PRICE7_1: ProductPrice = {
    price: 32.1,
    currency: 'ARS',
    quantity: 0
};

export const PRICE7_2: ProductPrice = {
    price: 25.1,
    currency: 'ARS',
    quantity: 5
};

export const PRICE8_1: ProductPrice = {
    price: 456.105,
    currency: 'ARS',
    quantity: 0
};

export const PRICE9_1: ProductPrice = {
    price: 123154.454,
    currency: 'ARS',
    quantity: 0
};

export const PRICE10_1: ProductPrice = {
    price: 52.15,
    currency: 'ARS',
    quantity: 0
};


export const PRODUCT1: Product = {
    productId: '1',
    name: 'Aceitunas',
    type: 'verdes',
    brand: 'Calco',
    heading: 'Almacen',
    description: 'son horribles y no las recomiendo',
    package: {
        measure: 'gr',
        unitsPerPack: 250
    },
    price: [PRICE1_1, PRICE1_2]
};

export const PRODUCT2: Product = {
    productId: '2',
    name: 'Vino tinto',
    type: 'Malbec',
    brand: 'Toro Viejo',
    heading: 'Bebidas con Alcohol',
    description: 'ojo que pega fuerte',
    package: {
        measure: 'cc',
        unitsPerPack: 750
    },
    price: [PRICE2_1, PRICE2_2]    
};

export const PRODUCT3: Product = {
    productId: '3',
    name: 'Azucar',
    type: 'Blanca',
    brand: 'Marolio',
    heading: 'Almacen',
    description: 'mmmm que olio',
    package: {
        measure: 'gr',
        unitsPerPack: 1000
    },
    price: [PRICE3_1]    
};

export const PRODUCT4: Product = {
    productId: '4',
    name: 'Vinagre',
    type: 'Manzana',
    brand: 'Cocinero',
    heading: 'Almacen',
    description: 'para quitar el oxido',
    package: {
        measure: 'cc',
        unitsPerPack: 250
    },
    price: [PRICE4_1]    
};

export const PRODUCT5: Product = {
    productId: '5',
    name: 'Jugo de limon',
    brand: 'Minerva',
    heading: 'Almacen',
    description: 'guarda con los ojos',
    package: {
        measure: 'cc',
        unitsPerPack: 220
    },
    price: [PRICE5_1, PRICE5_2, PRICE5_3]    
};

export const PRODUCT6: Product = {
    productId: '6',
    name: 'Caramelo Sugus',
    type: 'Manzana',
    brand: 'Arcor',
    heading: 'kiosko',
    description: 'prefiero de anana',
    package: {
        measure: 'uni',
        unitsPerPack: 1
    },
    price: [PRICE6_1]    
};

export const PRODUCT7: Product = {
    productId: '7',
    name: 'Vino blanco',
    type: 'Chablis',
    brand: 'Bianchi',
    heading: 'Bebidas con Alcohol',
    description: 'este pega por que es dulce',
    package: {
        measure: 'cc',
        unitsPerPack: 750
    },
    price: [PRICE7_1, PRICE7_2]    
};

export const PRODUCT8: Product = {
    productId: '8',
    name: 'Coca Cola',
    brand: 'Coca Cola',
    heading: 'Bebidas Gaseosas',
    description: 'reemplazo de WD40',
    package: {
        measure: 'cc',
        unitsPerPack: 2250
    },
    price: [PRICE8_1]    
};

export const PRODUCT9: Product = {
    productId: '9',
    name: 'Yerba mate saborizada',
    type: 'Naranja',
    brand: 'CBC',
    heading: 'almacen',
    description: 'un gaucho se suicida',
    package: {
        measure: 'gr',
        unitsPerPack: 500 
    },
    price: [PRICE9_1]    
};

export const PRODUCT10: Product = {
    productId: '10',
    name: 'Lavandina',
    brand: 'Querubin',
    heading: 'quimica',
    description: 'usar con guantes',
    package: {
        measure: 'cc',
        unitsPerPack: 3000
    },
    price: [PRICE10_1]    
};

export const PRODUCTS: ProductStateModel = {
    products: [
        PRODUCT1,
        PRODUCT2,
        PRODUCT3,
        PRODUCT4,
        PRODUCT5,
        PRODUCT6,
        PRODUCT7,
        PRODUCT8,
        PRODUCT9,
        PRODUCT10
    ]
}







//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
//CostumerStateModel ----------------------------------------------------------------

export const tel1: string[] = ['1164541246']
export const tel2: string[] = ['1161320245','+541152645432']
export const tel3: string[] = ['0111565124578','1545786521','+541165876512']

export const mail1: string[] = ['data@elmailloco.com']
export const mail2: string[] = ['pedidos@estrella.com','info@estrella.com']
export const mail3: string[] = ['ivan@uol.com','ardilla@sinectis.com.ar','pincha@piletas.com']

export const address1: Addresses = {
    addressId: '1',
    street: 'Gran canaria',
    number: '1245',
    city: 'Avellaneda',
    province: 'Buenos Aires',
    country: 'Argentina',
    postalCode: '1870', 
}

export const address2: Addresses = {
    addressId: '2',
    street: 'Gutierrez',
    number: '15',
    city: 'Lomas de Zamora',
    province: 'Buenos Aires',
    country: 'Argentina',
    postalCode: '1845', 
}

export const address3: Addresses = {
    addressId: '3',
    street: 'Esmeralda',
    number: '666',
    city: 'Quilmes',
    province: 'Buenos Aires',
    country: 'Argentina',
    postalCode: '1879',
}

export const COSTUMER1: Costumer = {
    costumerId: '1',
    lastName: null,
    surName: null,
    dni: null,
    businessName: 'Estrella del Este',
    cuit: 21544562541,
    emails: mail1,
    phones: tel1,
    addresses: [address1],
    activo: true
}

export const COSTUMER2: Costumer = {
    costumerId: '2',
    lastName: 'Gonzalez',
    surName: 'Araceli',
    dni: 35546789,
    businessName: null,
    cuit: null,
    emails: mail2,
    phones: tel2,
    addresses: [address1, address2],
    activo: true
}

export const COSTUMER3: Costumer = {
    costumerId: '3',
    lastName: null,
    surName: null,
    dni: null,
    businessName: 'Valdez Ramon & Co.',
    cuit: 25457896542,
    emails: mail3,
    phones: tel3,
    addresses: [address1, address2, address3],
    activo: true
}

export const COSTUMER4: Costumer = {
    costumerId: '4',
    lastName: 'Galadriel',
    surName: 'Gandalf',
    dni: 5236958,
    businessName: null,
    cuit: null,
    emails: mail2,
    phones: tel2,
    addresses: [address3],
    activo: true
}


export const COSTUMERS: CostumerStateModel = [
    COSTUMER1,
    COSTUMER2,
    COSTUMER3,
    COSTUMER4
];