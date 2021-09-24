console.log("hello");
///// find what place in line the name given is at /////
function findPlaceInLine(arr, name) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            return i + 1;
        }
    }
}
console.log(findPlaceInLine(["Penny", "Roxy", "Bruce", "Louie"], "Bruce"));
// // can also use type instead of interface
// type PetItems = {
//   tennisBall: boolean;
//   bone: boolean;
//   waterBowl: boolean;
//   foodBowl: boolean;
//   blanket: boolean;
//   toy: boolean;
// }
var items = {
    tennisBall: true,
    bone: false,
    waterBowl: true,
    foodBowl: true,
    blanket: false,
    toy: false
};
function hasItem(petItems) {
    var missingItems = [];
    for (var item in petItems) {
        if (!petItems[item]) {
            missingItems.push(item);
        }
    }
    return missingItems;
}
console.log(hasItem(items));
