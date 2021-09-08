'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance
// prototype은 다음 시간에...

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// 새로운 object를 만들 때는 new라는 키워드를 사용한다.
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 사용자가 말도 안되는 값(마이너스 값)을 입력하는 것을 방지하기 위해 사용한다.
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // call stack size exceeded 경고 문구를 방지하기 위해서는
    // getter와 setter 안에 쓰이는 변수의 이름을 다르게 만들어야 한다.
    // 보통은 하이픈(_)을 이용해 구분한다.
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //   throw Error(`age can not be negative`);
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0; // 클래스 내부에서는 변경, 수정, 사용할 수 있다.
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon!
// typescript에서 많이 사용되는데,
// object와 들어오는 데이터에 상관없이 공통적으로 사용하는 클래스에서 사용하는 것이라면
// static과 static method를 사용하면 코드를 간결하게 작성하여 메모리의 사용량을 줄일 수 있다.
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// 연장한다는 extends라는 키워드를 사용하면 Shape 클래스에 있는 것들이 Rectangle 클래스에 포함되게 된다.
class Rectangle extends Shape {}
// 필요한 함수들만 오버라이딩해서 작성할 수 있다.
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모에서 정의한 메서드도 호출하면서 오버라이딩한 메서드도 호출하고 싶을때
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    // 공통적으로 존재하는 메서드를 오버라이딩도 할 수 있다.
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True
// 모든 object들은 자바스크립트 object를 상속받기 때문에
// 공통적으로 존재하는 메서드를 사용할 수 있다.
console.log(triangle.toString());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
