//命名空间

import {A,B} from './AModules'

var aDog = new A.Dog("泰迪");
console.log(aDog.getName());//A 泰迪

var bDog = new B.Dog("斗牛犬");
console.log(bDog.getName());//B 斗牛犬

