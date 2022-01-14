const colorss: string[] = ['red', 'blue', 'white'];

const dates = [new Date(), new Date()]

const fruitsByColor = [
  ['tomato'],
  ['apple'],
  ['lemon']
]

// Help with inference when extracting values
const color = colorss[0]
const color1 = colorss.pop()

// Help with map

colorss.map((color:string):string => {
  return color.toUpperCase()

})


// flexible types
//можно записывать в массив только даты и/или строки 
const importantDates: (Date | string)[] = [new Date()]

importantDates.push('bvjhfbvj')
