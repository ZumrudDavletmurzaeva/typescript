// tuple(кортеж) - структуры похожие на массивы в которых каждый элемент  это какое то свойство записи 

const drink ={
  color: 'brown',
  carbonated: true,
  sugar: 40
}

type Drink = [string, boolean, number];

// const cola: [string, boolean, number] = ['brown', true, 40]

const cola: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 50]

const carSpecs: [number, number] = [400, 4567]

const  carSpaceObj = {
  horsepower: 400,
  weight: 4567
}