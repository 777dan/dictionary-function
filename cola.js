let products = [
    { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
    { name: "Orange", calories: 160, color: "orange", sold: 12101 },
    { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
    { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
    { name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        document.write("Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold + "</br>");
    }
}

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1; //sort
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1; //sort
    }
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1; //sort
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1; //sort
    }
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1; //sort
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1; //sort
    }
}

function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return -1; //sort
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return 1; //sort
    }
}

printProducts(products);
document.write("compareSold<br>");
products.sort(compareSold);
printProducts(products);
document.write("compareName<br>");
products.sort(compareName);
printProducts(products);
document.write("compareColor<br>");
products.sort(compareColor);
printProducts(products);
document.write("compareCalories<br>");
products.sort(compareCalories);
printProducts(products);