// Default import
import cube from "./exportFile"
// Explicity import from the file or non - default imports
import {times,plusTwo} from "./exportFile";

import{ times as twoTimes, plusTwo as addTwo} from "./exportFile"

import {temp} from "./exportFile"

console.log(cube(2))

console.log(times(2))

console.log(plusTwo(3))

console.log(twoTimes(3))

console.log(addTwo(10))

console.log(temp)