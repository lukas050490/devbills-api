"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.Transactiontype = void 0;
const category_entity_1 = require("./category.entity");
var Transactiontype;
(function (Transactiontype) {
    Transactiontype["INCOME"] = "income";
    Transactiontype["EXPENSE"] = "expense";
})(Transactiontype || (exports.Transactiontype = Transactiontype = {}));
class Transaction {
    constructor({ _id, type, date, amount, category, title }) {
        this._id = _id;
        this.title = title;
        this.amount = amount;
        this.date = new Date(date);
        this.category = new category_entity_1.Category(category);
        this.type = type;
    }
}
exports.Transaction = Transaction;
