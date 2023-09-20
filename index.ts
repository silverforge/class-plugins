import MyFirstHostClass, { MyFirstHostClassType } from "./src/hosts/MyFirstHostClass";
import MySecondHostClass, { MySecondHostClassType } from "./src/hosts/MySecondHostClass";
import { PluginImpl1 } from "./src/plugins/Plugin1";
import { PluginImpl2 } from "./src/plugins/Plugin2";
import { PluginImpl3 } from "./src/plugins/Plugin3";
import { HostClass } from "./src/typedefs";



const someFunction = (hostClass: HostClass) => {
  console.log('someFunction hostClass type is MyFirstHostClass: ', (hostClass instanceof MyFirstHostClass));
  console.log('someFunction hostClass type is MySecondHostClass: ', (hostClass instanceof MySecondHostClass));

  if (hostClass instanceof MyFirstHostClass) {
    console.log('someFunction hostClass - MyFirstHostClass: ', hostClass.classFunction1());
    // Just for fun: class ref - plugin - classref - function
    const classFunc1Result = (hostClass.plugin1.hostClassRef as MyFirstHostClassType).classFunction1();
    console.log('someFunction hostClass - MyFirstHostClass - Plugin1 - Classref : ', classFunc1Result);
  }

  if (hostClass instanceof MySecondHostClass) {
    console.log('someFunction hostClass - MySecondHostClass: ', hostClass.classFunction2());
    // Just for fun: class ref - plugin - classref - function
    const classFunc2Result = (hostClass.plugin3.hostClassRef as MySecondHostClassType).classFunction2();
    console.log('someFunction hostClass - MySecondHostClass - Plugin3 - Classref : ', classFunc2Result);
  }
}



console.log('----------------------------------------------------------------');
console.log("Hello via Bun!");
console.log('----------------------------------------------------------------');

const pluginImpl11 = new PluginImpl1('apple');
const pluginImpl12 = new PluginImpl2('Suzuki');

const myFirstHostClass = new MyFirstHostClass([pluginImpl11, pluginImpl12]);
const plugin11 = myFirstHostClass.plugin1;
const plugin12 = myFirstHostClass.plugin2;

console.log('myFirstHostClass - plugin 1: ', plugin11.fruitName);
console.log('myFirstHostClass - plugin 2: ', plugin12.carType);

console.log('----------------------------------------------------------------');

const pluginImpl21 = new PluginImpl1('banana');
const pluginImpl22 = new PluginImpl2('Mazda');
const pluginImpl23 = new PluginImpl3('red');

const mySecondHostClass = new MySecondHostClass([
  pluginImpl21,
  pluginImpl22,
  pluginImpl23
]);
const plugin21 = mySecondHostClass.plugin1;
const plugin22 = mySecondHostClass.plugin2;
const plugin23 = mySecondHostClass.plugin3;

console.log('mySecondHostClass - plugin 1: ', plugin21.fruitName);
console.log('mySecondHostClass - plugin 2: ', plugin22.carType);
console.log('mySecondHostClass - plugin 3: ', plugin23.color);

console.log('----------------------------------------------------------------');
someFunction(myFirstHostClass);
console.log('----------------------------------------------------------------');
someFunction(mySecondHostClass);
