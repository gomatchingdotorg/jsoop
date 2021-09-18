import { Product } from "./product.js";

export class MenCloth extends Product {
    constructor(_id, _title, _price, _category) {
        super(_id, _title, _price, _category )
    }
    ToPrice() {
        return super.ToPrice() * 0.5
    }
}
