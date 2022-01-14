import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(
  response=> {
    const todo = response.data as Todo
    const id = todo.id
    const title = todo.title
    const completed = todo.completed
    logTodo(id,  title,completed)
  }
)

const logTodo =(id: number, title:string, completed:boolean)=> {
  console.log(`${id},${title}, ${completed}` );
}

// Типы 

// Тип -  простой способ обращения к различным свойствам и функциям которые имеют значение


// string - методы (
//   charAt()
//   charCodeAt()
//   concat()
//   includes()
//   endsWith()
//   indexOf()
//   lastIndexOf()
//   localeCompare()
//   match()
// )

// const today = new Date()
// today.getMonth()
// const person = {
//   age:21
// }

// class Color {

// }

// const red =  new Color ()

// Type annotations -код который мы добавляем для TS чтобы он понял значения какого типа будут содержаться в переменной 

// Type inference - TS пытается сам определить значения какого типа будут содержаться в переменной 