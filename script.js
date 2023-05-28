const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 34)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
let inter = null;

const h2Elements = document.querySelectorAll('h2');

h2Elements.forEach(h2 => h2.onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(inter);
    
    inter = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 34)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(inter);
      }
      
      iteration += 1 / 3;
    }, 30);
});