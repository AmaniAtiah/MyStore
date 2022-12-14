export class Product  {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    qty: string;

    constructor(id: number, name: string, price: number, url: string, description: string, qty: string) {
        this.id = id;
        this.name  = name;
        this.price = price;
        this.url = url;
        this.description = description;
        this.qty = qty;
    }
}