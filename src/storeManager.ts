import * as t from "io-ts";

const storeType = t.type({
    name: t.string,
    apiKey: t.string,
    password: t.string
});

const storesType = t.type({
    stores: t.array(
        storeType
    )
});

export type Store = t.TypeOf<typeof storeType>;

export const getStores = (): Store[] => {
    try {
        const storesInfo = require("../stores.json");
        if (storesType.is(storesInfo)) {
            return (storesInfo.stores);
        }
        console.log("One or more of the items in \"stores.json\" is wrong");

        return [];
    } catch (error) {
        console.log("stores.json is corrupted", error.message);

        return [];
    }
}