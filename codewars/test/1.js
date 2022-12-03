function zero(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 0 + args[1];
      case 1:return 0 - args[1];
      case 2:return 0*args[1];
      case 3:return Math.floor(0/args[1]);
    }
  }else{
    return 0;
  }
}

function one(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 1 + args[1];
      case 1:return 1 - args[1];
      case 2:return 1*args[1];
      case 3:return Math.floor(1/args[1]);
    }
  }else{
    return 1;
  }
}
function two(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 2 + args[1];
      case 1:return 2 - args[1];
      case 2:return 2*args[1];
      case 3:return Math.floor(2/args[1]);
    }
  }else{
    return 2;
  }
}
function three(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 3 + args[1];
      case 1:return 3 - args[1];
      case 2:return 3*args[1];
      case 3:return Math.floor(3/args[1]);
    }
  }else{
    return 3;
  }
}
function four(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 4 + args[1];
      case 1:return 4 - args[1];
      case 2:return 4*args[1];
      case 3:return Math.floor(4/args[1]);
    }
  }else{
    return 4;
  }
}
function five(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 5 + args[1];
      case 1:return 5 - args[1];
      case 2:return 5*args[1];
      case 3:return Math.floor(5/args[1]);
    }
  }else{
    return 5;
  }
}
function six(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 6 + args[1];
      case 1:return 6 - args[1];
      case 2:return 6*args[1];
      case 3:return Math.floor(6/args[1]);
    }
  }else{
    return 6;
  }
}
function seven(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 7 + args[1];
      case 1:return 7 - args[1];
      case 2:return 7*args[1];
      case 3:return Math.floor(7/args[1]);
    }
  }else{
    return 7;
  }
}
function eight(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 8 + args[1];
      case 1:return 8 - args[1];
      case 2:return 8*args[1];
      case 3:return Math.floor(8/args[1]);
    }
  }else{
    return 8;
  }
}
function nine(args) {
  if(typeof(args) === "object"){
    switch(args[0]){
      case 0:return 9 + args[1];
      case 1:return 9 - args[1];
      case 2:return 9*args[1];
      case 3:return Math.floor(9/args[1]);
    }
  }else{
    return 9;
  }
}

function plus(arg) {
  let arr = [];
  arr.push(0);
  arr.push(arg)
  return arr;
}
function minus(arg) {
  let arr = [];
  arr.push(1);
  arr.push(arg)
  return arr;
}
function times(arg) {
  let arr = [];
  arr.push(2);
  arr.push(arg)
  return arr;
}
function dividedBy(arg) {
  let arr = [];
  arr.push(3);
  arr.push(arg)
  return arr;
}


function a(arg){
  console.log(typeof(arg))
}

a();//undefined

function b(arg){
  console.log('b');
}

function c(arg){
  console.log('c');
}

function d(arg){
  console.log('d');
}

// c(b(a()))//a b c

// c(b(a()),d())//a b d c

