const PI = Math.PI
const E = Math.E;
const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;



const [name, gender] = ['Ejiro Asouwhu', 'Male']

class Person {
    constructor(name) {
        this.name = name;   
    }
    greet() {
        console.log(`Hello ${this.name}!`);
        
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from ${this.level}`);
        
    }
}

const o1 = new Person('Max');
const o2 = new Student('Tina', '1st Grade');
const o3 = new Student('Jane', '2nd Grade');

o1.greet()

const https = require('https');

function fetch(url) {
    return new Promise(resolve, reject) => {
        https.get(url, (res) => {
            let data = ''
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        })
    }
}

fetch('http://javascript.com')
    .then(data => {
        console.log(data.length);
        
    });

(async function read() {
    const data = await ('http://javascript.com');
    console.log(data.length);
})()


