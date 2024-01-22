/* 
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");



function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);




function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0){
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(()=> {
            resolve(`Wake up, ${person}!`)
        }, delay)

    })
}


const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");


function alarm(person, delay){
    return new Promise((resolve, reject) =>{
        if(delay < 0){
            throw new Error("Alarm delay must not be negative!!!")
        }
        setTimeout(() =>{
            resolve(`Wake up, ${person}!`);
        }, delay);
    })
}

button.addEventListener("click", () => {
    alarm(name.value, delay.value)
      .then((message) => (output.textContent = message))
      .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
  });
 */


  const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must not be negative");
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});



console.log('Comecar'); 
 
setTimeout(() => { 
 console.log('setTimeout'); 
}, 0); 
 
Promise.resolve().then(() => { 
 console.log('Promise Resolvida'); 
}); 
 
console.log('End');




console.log("Start");
 
setTimeout(function() {
    console.log("Delayed log after 150 milliseconds");
}, 150);
 
console.log("End");