"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categories_controller_1 = require("../controllers/categories.controller");
const validator_middleware_1 = require("../middleware/validator.middleware");
const categories_dtos_1 = require("../dtos/categories.dtos");
const categories_factory_1 = require("../factories/categories.factory");
exports.categoriesRoutes = (0, express_1.Router)();
const controller = new categories_controller_1.CategoriesController(categories_factory_1.CategoriesFactory.getServiceInstance());
exports.categoriesRoutes.get('/', controller.index);
exports.categoriesRoutes.post('/', (0, validator_middleware_1.validator)({
    schema: categories_dtos_1.createCategorySchema,
    type: validator_middleware_1.ParamsType.BODY,
}), controller.create);
