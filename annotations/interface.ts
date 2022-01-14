interface Reportable {
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;
}


const oldCivic ={
  name:'civic',
  year: 2000,
  broken: true,
  //функция которая не принимает никаких параметров и возвращает строку 
  summary(): string{
    return `Name ${this.name}`
  }
};

const colas = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string{
    return `Cola has  ${this.sugar} grams of sugar`
  }

}

const printSummary = (item: Reportable): void => {
// console.log(`Name ${item.name}`);
// console.log(`Year ${item.year}`);
// console.log(`Broken${item.broken}`);
console.log(item.summary());
};

printSummary(oldCivic);
printSummary(colas);