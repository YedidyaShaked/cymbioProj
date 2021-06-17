import express from "express";
import { getInventory } from "./inventory";

const app = express();

app.get("/inventory", async (req, res) => {
    const inventory = await getInventory()
    return res.json(inventory);
});

try {
    app.listen(5000, () => console.log("server running"));
} catch (error) {
    console.log("error occurred: ", error.message);
}