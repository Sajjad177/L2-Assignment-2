"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.OrderService.createOrderToDB(orderData, res);
        return res.status(200).json({
            status: 'true',
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'false',
            message: 'Internal server error',
            error: error,
        });
    }
});
// get total revenue from db :
const getRevinue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderService.getRevinueFromDB();
        return res.status(200).json({
            status: 'true',
            message: 'Revenue calculated successfully',
            data: result,
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'false',
            message: 'Internal server error',
            error: error,
        });
    }
});
exports.OrderController = {
    createOrder,
    getRevinue,
};
