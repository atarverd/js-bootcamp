// // 1)

// // as you can see toyota2 does not have a logModel function
// // borrow that function from toyota1 and call i, so it console.logs "Toyota Rav4"

// const toyota1 = {
//     model: 'Toyota',
//     type: 'Camry',
//     logModel(){
//         console.log(this.model, this.type);
//     }
// }

// const toyota2 = {
//     model: 'Toyota',
//     type: 'Rav4',
// }

// toyota1.logModel.bind(toyota2)()

// // 2)

// // The following code does not work turn it into working code

// const flights = {

//     flights: [],

//     priorityFlights: [],

//     scheduleFlight(flight){
//         this.flights.push(flight);
//     },

//     removeFlight(flight){
//         this.flights = this.flights.filter(flightFilter.bind(this));
//         function flightFilter(f){
//             if (flight === f){
//                 return this.priorityFlights.includes(flight);
//             }
//             return true
//         }
//     },

//     makePriorityFlight(flight){
//         this.priorityFlights.push(flight);
//     }

// }

// flights.scheduleFlight('1');

// flights.makePriorityFlight('1');

// flights.removeFlight('1')

// console.log(flights.flights);

// // 3)

// // CarConstructor creates cars but what if someone decides to call it without new keyword,
// // write a logic inside the CarConstructor function so it checks if the CarConstructor is called without
// // new keyword it logs "please call me with new keyword" if not it creates a car

// function CarConstructor(model, year){
//     if(!new.target)
//         return new CarConstructor(model,year)
//     this.mode = model;
//     this.year = year;
// }
// console.log( CarConstructor('asd',200))

// // 4)

// // make a new array out of objArr so that every object has the same logName function that is declared below
// // use logName function do not create your own

// const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

// objArr.map(obj=>{
//     obj.func=logName
// })
// function logName(){
//     console.log(this.name);
// }
// console.log(objArr[0].func())
// // 5

// // use foreach method and use arrayOfObjectNames function to log the fallowing objects names from the array;

//  const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

// arrayOfObjectNames.forEach(item=>logArrayObjectNames.bind(item)())
// function logArrayObjectNames(){
// //     console.log(this.name);
// // }

// // 6) for above mentioned arrayOfObjectNames Return an array of functions that when called would log each objects name
// // use Array.map and logArrayObjectNames function

// const mappedFunc = arrayOfObjectNames.map( (item) => logArrayObjectNames.bind(item));

// mappedFunc.forEach(i => i()); // this would print 1, 2, 3

// //7 please take a look at the following

// // this is just an example of object that you will still need to create by calling CreateCar constructor

// const exampleOfAlreadyCreatedObject = {
//   id: 1,
//   model: "Toyota",
//   year: "1996",
//   color: "red",
//   driveTrain: "4x4",
// };

// function CreateCar(id, model, year, color, driveTrain) {
//   // please implement CreateCar function so it creates cars with properties
//   this.id = id;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.driveTrain = driveTrain;
// }

// please take a look at the the inventory object and implement the missing methods

// const inventory = {
//   cars: [],

//   addCar(car) {
//     this.cars.push(car);
//   },

//   removeCar(id) {
//     this.cars = this.cars.filter((car) => car.id !== id);
//   },

//   listCars() {
//     this.cars.forEach((obj) => console.log(obj));
//   },

//   listCarsByConditionCallback(conditionCallback) {
//     this.cars.map((car) => {
//       if (conditionCallback(car)) console.log(car);
//     });
//   },
// };

// inventory.addCar(new CreateCar(1, "Toyota", "1996", "red", "4x4"));
// inventory.addCar(
//   new CreateCar(2, "Mercedes", "2000", "white", "rear wheel drive")
// );
// inventory.addCar(new CreateCar(3, "BMW", "2020", "black", "rear wheel drive"));
// inventory.addCar(new CreateCar(4, "BMW", "2020", "black", "rear wheel drive"));
// inventory.removeCar(2);

// inventory.listCars();
// inventory.listCarsByConditionCallback(
//   (car) => car.model === "BMW" && car.year === "2020"
// );

// // 8)

// // Create a constructor function called Song. Song should take in two arguments, title and artist, which should both be
// // added as properties when the Song constructor function is used. The Song function should also have a method called
// // play When called, the play function should console.log the name of that specific song preceded by the
// // word 'Playing:'.
// // NOTE that play function should be the same for all instances of the Song constructor

// function Song(title, artist) {
//   this.title = title;
//   this.artist = artist;
//   this.play = () => {
//     console.log(`${this.artist} playin ${this.title}`);
//   };
// }
// // 9)

// // 1. Create a folder called Workshop_4 make a git repository inside.
// //
// // 2. without navigating to a different branch create a branch named x_branch
// mkdir Workshop_4
// cd Workshop_4
// git init
// git branch new_branch

// // 10)
// // 1. Make a new folder called 'Workshop_4'
// //   mkdir Workshop_4
// //   cd Workshop_4
// // 2. make that folder into git repo
// //   git init
// // touch readme.txt
// // artar@tux:~/Desktop/Workshop_4$ git add .
// // artar@tux:~/Desktop/Workshop_4$ git branch
// // artar@tux:~/Desktop/Workshop_4$ git commit -m "first commit"
// // 2. create a branch called rename_me
// // artar@tux:~/Desktop/Workshop_4$ git branch rename_me
// // 3. create a branch called delete_me
// // artar@tux:~/Desktop/Workshop_4$ git branch delete_me
// // 4. rename the branch rename_me to renamed_branch
// // artar@tux:~/Desktop/Workshop_4$ git branch -m rename_me renamed_branch
// // 5. delete the branch delete_me
// // artar@tux:~/Desktop/Workshop_4$ git branch -d delete_me

// // 11)

// const checkKnow = {
//     surname: 'surname',
//     name: 'checkKnow',
//     foo: {
//         name: 'foo',
//         logName(){
//             console.log(this.surname);
//         }
//     },
//     boo(){
//         const obj = {
//             name: 'boo method',
//             check:  () => {

//                 console.log(this.name);
//             }
//         }

//         obj.check();
//     }
// }

// checkKnow.foo.logName();
// //logName function's this is foo object cuz it's not an arrow function. returns undefined because there is no surnem property in foo object
// checkKnow.boo();
//check is an arrow function and it takes nearist function this
// with a few words explain why this is happening Armenian or English.
