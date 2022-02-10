import fs from "fs/promises";

let cache = undefined;

async function getCities() {
    if (!cache) {
        await populateCache();
    }

    return cache;
}

async function populateCache() {
    const rawJson = await fs.readFile(new URL('./cities.json', import.meta.url));
    cache = JSON.parse(rawJson);
}

export default {
    getCities
};