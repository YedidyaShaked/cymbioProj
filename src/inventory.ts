import axios from "axios";
import * as t from "io-ts";

import { getStores, Store } from "./storeManager";
import * as productTypes from "./productTypes";

const inventoryItemType = t.type({
    SKU: t.string,
    amount: t.number
});

type inventoryItem = t.TypeOf<typeof inventoryItemType>;

const URL = (apiKey: string, password: string, storeName: string) =>
    `https://${apiKey}:${password}@${storeName}.myshopify.com/admin/api/2021-04/products.json`;

const getProducts = (store: Store): Promise<any> => {
    return axios.get<unknown>(URL(store.apiKey, store.password, store.name));
};

export const getInventory = async () => {
    let stores: Store[] = getStores();
    if (!stores.length) return [];

    try {
        const results = await Promise.all(stores.map(getProducts));
        const storeProducts: productTypes.products[] = results.map(({ data }) => data);

        let variants: { [key: string]: inventoryItem } = {};

        storeProducts.forEach((prodList: productTypes.products) => {
            prodList.products?.forEach((prod: productTypes.ProductsEntity) => {
                prod.variants?.forEach((variant: productTypes.VariantsEntity) => {
                    if (variants[variant.sku]) {
                        variants[variant.sku].amount += variant.inventory_quantity;
                    } else {
                        variants[variant.sku] = ({ SKU: variant.sku, amount: variant.inventory_quantity });
                    }
                });
            });
        });

        return Object.values(variants);
    } catch (error) {
        console.log(error.message)
        return [];
    }
}