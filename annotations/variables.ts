let oranges = 5; //анотация типов

let speed: string ='fast';

let hasDog: boolean = true;
let nothing: null =null;
let nothing1 : undefined = undefined;

let now: Date = new Date();

//array
let colors: string[] = ['red', 'yellow']; //аннтоция массива состоящего из строк 

let numbers: number[] = [1, 2, 3]

let results: boolean[] = [true, false]

//classes
class Car {

}

let car: Car = new Car();


// object literal 
let point: {x: number; y: number } = {
  x: 10,
  y: 20
} 

//function 
const logNumber: (i: number) => void = (i: number) => {
console.log(i);
}


//аннотация типов используется 1) когда переменная объявляентся,  а инициализируется позже

let words =['one', 'two', 'three']
let isTwo: boolean;
for (let i =0 ; i< words.length;i++ ){
if(words[i] === 'two'){
  isTwo =true}
}

// 2) когда создается переменная, вывод о типе которой не может быть сделан 

let myNumbers = [-10, -1, 12];
// (значение либо булин либо намбер)
let positivenumber: boolean | number  = false; 

for (let i= 0; i< myNumbers.length; i++){
  if(myNumbers[i]> 0){
    positivenumber = myNumbers[i]
  }
}



// 3) когда функция возвращает тип any и нам нужно уточнить тип 
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y:number} = JSON.parse(json); // метод json.parse возвращает тип any
console.log(coordinates);





//функция с помощью переменной 
const add = (a: number, b: number): number => {
return a + b
}

// именнованая функция 
function divide (a: number, b: number) : number {
  return a/b
}
// анонимная функция
const concat = function(a: number, b: number) : number {
  return a+b
}




// ничего не возвращает 
const logger = (message: string): void => {
console.log(message);
}

//мы не возвращает никакого значения из этой функции 
const throwError = (message: string): never =>{
  throw new Error(message)
}


const forecast = {
  date: new Date(),
  weather:'sunny'
};

// const logWeather = (forecast: {date: Date, weather: string}): void => {
//   console.log(forecast.date);
//   console.log(forecast.weather);
// }

// деструктуризация  с аннотацией типов 
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}


//es15
// const logWeather = ({date, weather}) => {
//   console.log(date);
//   console.log(weather);
// }

logWeather(forecast);









// Аннотация объектов

const profile = {
  name: 'Jack',
  age: 25,
  coordinates:{
lat:1, lng:20
  },
  setAge(age:number): void {
    this.age = age 
  }
}

const {age}: {age: number} = profile;

const {coordinates: {lat, lng} }: {coordinates: {lat: number; lng:number}} = profile