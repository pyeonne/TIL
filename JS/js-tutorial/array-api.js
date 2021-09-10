// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // 원하는 구문자를 전달해도 되고, 안해도 된다.
    const result = fruits.join();
    console.log(result); // apple,banana,orange

    /*
    const result2 = fruits.join('|');
    console.log(result2); // apple|banana|orange
    */
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // split() API는 구분자를 꼭 전달해야 한다.
    // limit 인자를 전달하면 원하는 배열의 크기를 정할 수 있다.
    const result = fruits.split(',');
    console.log(result); // ['🍎', ' 🥝', ' 🍌', ' 🍒']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    // reverse() API는 배열 자체를 역순으로 변화시키고 변화된 배열을 리턴한다.
    console.log(array); // (5) [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    /*
    // splice AIP는 기존 배열도 변화되므로 사용할 수 없다.
    const result = array.splice(0, 2);
    console.log(result); // [1, 2]
    console.log(array); // [3, 4, 5]
    */

    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find(student => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter(student => student.enrolled === true);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    //콜백함수로 전달하는 인자의 이름은 최대한 이해하기 쉽게 짓는 것이 중요하다.
    const result = students.map(student => student.score);
    console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some(student => student.score < 50);
    console.log(result); // true

    //  every() API는 모든 요소들이 조건에 만족해야 true를 리턴한다.
    // 느낌표(!)를 같이 사용하면 되지만, 이해하기 힘든 코드가 될 수 있다.
    const result2 = !students.every(student => student.score < 50);
    console.log(result2); // true
}

// Q9. compute students' average score
{
    // 배열의 요소가 하나씩 순차적으로 curr 값으로 전달된다.
    // 리턴한 값들이 순차적으로 prev 값으로 전달된다.
    // reduce() API는 배열의 요소를 하나씩 돌면서 누적된 값을 구할 때 사용한다.
    // reduceRight() API는 마직막 요소부터 누적된다.
    const result = students.reduce((prev, curr) => prev + curr.score, 0); // initialValue

    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // 함수형 프로그래밍
    // APIs를 하나로 묶어서 사용하면 편리하다.
    const result = students.map(student => student.score).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map(student => student.score)
        .sort((a, b) => a - b)
        // .sort((a, b) => b - a) 점수가 큰 순서대로 정렬하고 싶을 때
        .join();
    console.log(result);
}
