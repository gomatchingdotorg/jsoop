export class Product {
    #id
    #title
    #price
    #category
    constructor(_id, _title, _price, _category) {
        this.#id = _id
        this.#title = _title
        this.#price = _price
        this.#category = _category
    }
    ToPrice() {
        return this.#price * 1.1
    }
    GetTitle() {
        return this.#title
    }
    GetId() {
        return this.#id
    }
    GetCategory() {
        return this.#category
    }
}