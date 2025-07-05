    const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise1 done"), 1000);

    });


    const promise2 = new Promise(resolve => {
    setTimeout(() => resolve(" Promise2 done"), 3000);
    });

    const promise3 = new Promise(resolve => {
    setTimeout(() => resolve("Promise3 done"), 2000);
    });

    Promise.all([promise1, promise2, promise3])
    .then(Response => {
        console.log(Response); 
    })
    .catch(error => {
        console.log("error all",error);
    });


    Promise.race([promise1, promise2, promise3])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log("promise race failed:",error);
    });



//Create Person class that has name and age properties 
// and show function that prints the name and age.
// Create method whoAmI() that prints: “I am a person”
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    whoAmI(){
        console.log("I am a person")
    }
}
const person1 = new Person ('Alaa',23);
console.log(person1);


// 1.	Task 3:
// Create a Student class inherits from Person and contains: University, 
// faculty, and final grade,
//  and use print his data in the console using template literals in this format:

// {Std_name} is a student in faculty of {fac_name} in university {Uni_name}

// a)	And Print his final grad is {grad}.

class Student extends Person{

    constructor(name,age,university,faculty,finalgrade){
        super(name,age);
        this.university = university;
        this.faculty = faculty;
        this.finalgrade = finalgrade;

    }
    StudentData() {
    console.log(`${this.name}  is a student in faculty of ${this.faculty} in university ${this.university}`);
    console.log(`His final grade is ${this.finalgrade}`);
    }

}
const student1 = new Student("Alaa", 22, "Cairo University", "Computer Science" ,"A+");

console.log(student1);



 

