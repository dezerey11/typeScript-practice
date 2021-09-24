console.log("hello");
/////????? find what place in line the name given is at ?????/////
function findPlaceInLine(arr: string[], name: string): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === name) {
      return i + 1;
    }
  }
}

console.log(findPlaceInLine(["Penny", "Roxy", "Bruce", "Louie"], "Bruce"));

////????? Check if the pet's items are found ?????///

// interface PetItems {
//   tennisBall: boolean;
//   bone: boolean;
//   waterBowl: boolean;
//   foodBowl: boolean;
//   blanket: boolean;
//   toy: boolean;
// }

// allow for any arbitrary key as long as it's
// a string, and the value is a boolean
interface PetItems {
  [item: string]: boolean;
}

// // can also use type instead of interface

// type PetItems = {
//   tennisBall: boolean;
//   bone: boolean;
//   waterBowl: boolean;
//   foodBowl: boolean;
//   blanket: boolean;
//   toy: boolean;
// }

const items: PetItems = {
  tennisBall: true,
  bone: false,
  waterBowl: true,
  foodBowl: true,
  blanket: false,
  toy: false,
};

function hasItem(petItems: PetItems): string[] {
  const missingItems: string[] = [];
  for (const item in petItems) {
    if (!petItems[item]) {
      missingItems.push(item);
    }
  }

  return missingItems;
}

console.log(hasItem(items));

/////????? ?????/////
