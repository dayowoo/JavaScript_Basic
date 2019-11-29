class Animal {
    constructor(leg) {
        this.leg = leg
    }

    printAnimal() {
        console.log(this.name+"은 "+String(this.leg)+"개 다리를 가진다.")
    }
}

// Lion -> Animal 유용한 기능들 가져다 쓰기
class Lion extends Animal {
    // 초기 lion 객체가 어떤 값을 가지는 지 설정
    constructor(name, leg) {
        // 부모의 input (constructor의 input)
        super(leg)
        this.name = name
    }
    getName() {
        console.log("내 이름은 "+this.name)
    }
}

myLion = new Lion("King", 4)
myLion.getName()
myLion.printAnimal()


// Class & Super Quiz

class Timer extends React.Component {
    // props 는 React.Component의 input
    constructor(props) {
        super(props);
        this.state = { seconds: 0};
    }

    tick() {
        this.setState(state => ({
            seconds: state.seconds +1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
}