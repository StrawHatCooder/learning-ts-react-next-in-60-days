/*
Day 1:
Primitive types in typescript:
we have a total of 9 types inclueding all the small and premitive types :
---------------------------------------Primitive Types:
1> Number type: the number type is for numeric values like integers and floats
2> String type: the string type is for text and characters
3> Boolean type: the boolean type is for true and false values
4> any type: the any type allows for any type to be infered basically we should not use any type in typescript as using that will remove the sole purpose of typescript and it will become plain old javascript
5> void type: the void type is represented for a function which doesn't return anything
6> null and undefined: the null and undefined type are basically almost the same and are used when for a variable which has no value or absent value
7> unknown type: which is a safe alternative to any type which means it is going to have a type but as of now its unknown
8> never type: used for the functions that never return or always throw exceptions

*** difference between the undefined and the null types:

undefined indicates that a variable has been decalred but not assigned a value its default value is undefined

null indicates an intentional absence of a value it is an explicitely defined valuemeaning the programmer assigns it to signal "no values"

Aspect             	null                                  	undefined
Type               	null is of type null.                 	undefined is of type undefined.
Default Value      	Not a default value for any variable. 	Default value for uninitialized variables.
Explicit Assignment	Explicitly assigned by the programmer.	Implicitly assigned by JavaScript/TypeScript.
Usage Context      	Signals intentional absence of value. 	Signals lack of initialization.

-------------------------------------------TypeInference:
the type inference is nothing but typescript automatically infers the types based on the assigned values to the variables which is often called as the type inference

Explicit Type inference:
explicit type inference is useful when the type isn't clear when initializing the variable

*********************************************Day-2********************************************
---------------------------------------------Interfaces in TypeScript:
Interfaces allow you to define the shape of objects. They are primarily used for defining contracts for objects and classes
>>>eg: interface User {
name: string;
age: number;
role: string;
}
for optional properties we should add a quiestion mark before the variable for that interface field
>>eg: interface User{
readonly name: string;
age?: number;
role?: string;
}
===========================================function interface:
eg: interface Greet{
(name: string): string;
} const sayHello: Greet = (name) => `Hello, ${name}`;

=============================================index Dignatures:
interface Dectionary {
[key: string]: string;
}
==============================================Extending Interfaces:
interface User {
name: string;
}

interface Adming extends User {
role: string;
}

==============================================Classes Implementing Interfaces:

interface Shape {
area(): number;}
}
class Circle implements Shape {
constructor(radius: number){}
area(){
return Math.PI*this.radius*this.radius;
}
}


*/

// TODO learn the ts functionlaity;


const num: number = 14;

const str: string = "this is a string";

const sum = (num1: number, num2: number) : number => {
  return num1 + num2
} 

console.log(sum(12,22));


