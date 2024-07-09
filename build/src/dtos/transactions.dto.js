"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFinacialEvolutionSchema = exports.getDashboardSchema = exports.indexTransactionsSchema = exports.createTransactionsSchema = void 0;
const zod_1 = require("zod");
const transactions_entity_1 = require("../entities/transactions.entity");
exports.createTransactionsSchema = {
    title: zod_1.z.string(),
    amount: zod_1.z.number().int().positive(),
    type: zod_1.z.nativeEnum(transactions_entity_1.Transactiontype),
    date: zod_1.z.coerce.date(),
    categoryId: zod_1.z.string(),
};
const createTransactionObject = zod_1.z.object(exports.createTransactionsSchema);
exports.indexTransactionsSchema = {
    title: zod_1.z.string().optional(),
    categoryId: zod_1.z.string().length(24).optional(),
    beginDate: zod_1.z.coerce.date().optional(),
    endDate: zod_1.z.coerce.date().optional(),
};
const indexTransactionsObject = zod_1.z.object(exports.indexTransactionsSchema);
exports.getDashboardSchema = {
    beginDate: zod_1.z.coerce.date().optional(),
    endDate: zod_1.z.coerce.date().optional(),
};
const getDashboardObject = zod_1.z.object(exports.getDashboardSchema);
exports.getFinacialEvolutionSchema = {
    year: zod_1.z.string(),
};
const getFinacialEvolutionObject = zod_1.z.object(exports.getFinacialEvolutionSchema);
