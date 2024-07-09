import {z} from 'zod';
import { Transactiontype } from '../entities/transactions.entity';

export const createTransactionsSchema = {
    title: z.string(),
    amount: z.number().int().positive(),
    type: z.nativeEnum(Transactiontype),
    date: z.coerce.date(),
    categoryId: z.string(),
};

const createTransactionObject = z.object(createTransactionsSchema);
export type createTransactionDTO = z.infer<typeof createTransactionObject>;

export const indexTransactionsSchema = {
    title: z.string().optional(),
    categoryId: z.string().length(24).optional(),
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
};

const indexTransactionsObject = z.object(indexTransactionsSchema);
export type IndexTransactionsDTO = z.infer<typeof indexTransactionsObject>;

export const getDashboardSchema = {
    beginDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(), 
};

const getDashboardObject = z.object(getDashboardSchema);
export type GetDashboardDTO = z.infer<typeof getDashboardObject>;

export const getFinacialEvolutionSchema = {
    year: z.string(),
};

const getFinacialEvolutionObject = z.object(getFinacialEvolutionSchema);
export type GetFinancialEvolutionDTO = z.infer<typeof getFinacialEvolutionObject>;