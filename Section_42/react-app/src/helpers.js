function choice(items) {
    return items[Math.floor((Math.random() * items.length))]
}

function remove(items, item) {
    if (items.includes(item)) {
        const index = items.indexOf(item);
        const itemToReturn = items[index];
        items.splice(index, 1);
        return itemToReturn;
    }
    return undefined;
}


export { choice, remove };