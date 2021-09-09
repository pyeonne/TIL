class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        // 클래스를 변수에 할당할 때 인자를 전달하지 않으면 this.callback은 undefined가 되므로 에러가 발생한다.
        // 에러가 발생하지 않게 하려면 this.callback이 true일 경우에만 구문이 실행되도록 해야 한다.
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

// 클래스를 생성할 때 콜백함수를 이용하면 사용자가 자기 입맛에 맞게 만들 수 있다.
const coolCounter = new Counter(alertNum);
function printSomething(num) {
    console.log(`Wow! ${num}`);
}
function alertNum(num) {
    alert(`Wow! ${num}`);
}
coolCounter.increase(); // 1
coolCounter.increase(); // 2
coolCounter.increase(); // 3
coolCounter.increase(); // 4
coolCounter.increase(); // yo!' 5
coolCounter.increase(); // 6
coolCounter.increase(); // 7
coolCounter.increase(); // 8
coolCounter.increase(); // 9
coolCounter.increase(); // 팝업

const printCounter = new Counter(printSomething);
