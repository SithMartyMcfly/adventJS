const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]


function organizeInventory(inventory) {
    const organizeInventory = {
    };

    inventory.forEach(item => {
        if (!organizeInventory[item.category]) {
            organizeInventory[item.category] = {};
        }
        if (!organizeInventory[item.category][item.name]) {
            organizeInventory[item.category][item.name] = 0;
        }
        organizeInventory[item.category][item.name] += item.quantity;
    });


    return organizeInventory;
}


console.log(organizeInventory(inventory));

