"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStores = void 0;
const t = __importStar(require("io-ts"));
const storeType = t.type({
    name: t.string,
    apiKey: t.string,
    password: t.string
});
const storesType = t.type({
    stores: t.array(storeType)
});
const getStores = () => {
    try {
        const storesInfo = require("../stores.json");
        if (storesType.is(storesInfo)) {
            return (storesInfo.stores);
        }
        console.log("One or more of the items in \"stores.json\" is wrong");
        return [];
    }
    catch (error) {
        console.log("stores.json is corrupted", error.message);
        return [];
    }
};
exports.getStores = getStores;
