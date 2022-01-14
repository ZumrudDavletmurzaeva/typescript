class Vehicle {
//  public  drive():void{
// console.log('Im driving');
// }

// color: string;

// конструктор запускается во время создания нового объекта
// constructor(color:string){
// this.color = color
// }

constructor( public color: string){
  
}

public stop(): void{
  console.log('i have stopped');
}
// private beep(): void {
//   console.log('boop');
// }

  protected beep(): void {
    console.log('boop');
  }

}


class Cars extends Vehicle {

  constructor(public wheels: number, color: string) {
    super(color)
  }

  private  drive():void{
    console.log(`I'm a car and I'm driving`);
    } 

    startDrivingProcess(): void {
      this.drive();
      this.beep();
    }

}

const vehicle =  new Vehicle('black');
console.log(vehicle.color);
// vehicle.drive();
// vehicle.stop();

const cars = new Cars(4, 'silver');
cars.startDrivingProcess();
// cars.beep() /// потому что протектед, мы не можем вызвать его снаружи

// Модификаторы

// public -   этот метод может быть вызван откуда угодно в любое время 

// private - этот метод может быть вызван  только  другими методами внутри того же класса 

// protected -  этот метод может быть вызван другими методами внутри того же класса или другими методами внутри класса наследника


