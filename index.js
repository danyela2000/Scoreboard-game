let box1 = document.getElementById("first-box");
let box2 = document.getElementById("second-box");
let count1 = 0;
let count2 = 0;


function add11(){
  count1 += 1  
  box1.textContent = count1
}

function add21(){
  count1 += 2 
  box1.textContent = count1
}

function add31(){
  count1 += 3 
  box1.textContent = count1
}

function add12(){
  count2 += 1  
  box2.textContent = count2
}

function add22(){
  count2 += 2 
  box2.textContent = count2
}

function add32(){
  count2 += 3 
  box2.textContent = count2
}

function reset(){
  count1 = 0
  count2 = 0
  box1.textContent = count1
  box2.textContent = count2

}