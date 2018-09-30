// This is an example dependancy class
class Dep {
  constructor() {
    this.subscribers = []; //Using the observer design pattern we create our storage
  }
  //The depend function saves our target code
  depend() {
    if(target && !this.subscribers.includes(target)) {
      this.subscribers.push(target);
    }
  }
  //the notify function acts as the replay to call the target code again
  notify() {
    this.subscribers.forEach(sub => sub());
  }
}

const dep = new Dep();

let price = 5;
let quantity = 2;
let total = 0;

//Base set of code
let target = () => {
  total = price * quantity;
};

dep.depend();
target();

//Represented as an anon function
Watcher(() => {
  total = price * quantity;
});

//Completed as finished watcher
function watcher(myFunc) {
  target = myFunc;
  dep.depend();
  target();
  target = null;
}