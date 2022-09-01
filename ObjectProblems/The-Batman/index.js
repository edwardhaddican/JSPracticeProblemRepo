/**
 * A Tragedy Occurs:
 * Sadly, a mugging has happened.  In a dark alley, an unnamed mugger has shot and killed both parents of Bruce Wayne.
 *
 * 1. Remove two bullets from the mugger's pistol.
 *
 * 2. Remove the wallet and pearls from thomasWayne and marthaWayne respectively, and give them to the mugger.
 *
 * 3. Remove the parents array from bruceWayne, and set the property isBatman to true
 *
 * Important Notes
 *   Do not change the code that creates the objects.  Instead use ways to access properties add properties, or remove properties.
 * Also, if you you need to access a value to assign it elsewhere, do so before deleting it.
 *
 * Don't forget how to remove elements from arrays... pop and shift still exist!

 */

// DO NOT CHANGE THESE OBJECTS HERE
let thomasWayne = {
  wallet: { cash: 400 },
};

let marthaWayne = {
  pearls: { value: 100 },
};

let bruceWayne = {
  parents: [thomasWayne, marthaWayne],
};

let mugger = {
  pistol: {
    bullets: [true, true, true],
  },
};

// DO NOT CHANGE THESE OBJECTS HERE

//Write your code here
mugger.pistol.bullets.pop();
mugger.pistol.bullets.shift();
// console.log("the muggers pistol bullets: ", mugger.pistol.bullets);

mugger.wallet = thomasWayne.wallet;
mugger.pearls = marthaWayne.pearls;
console.log(mugger);
delete marthaWayne.pearls;
delete thomasWayne.wallet;
delete bruceWayne.parents;
bruceWayne.isBatman = true;
// console.log("martha: ", marthaWayne);

// do not touch this export
module.exports = { thomasWayne, marthaWayne, bruceWayne, mugger };
