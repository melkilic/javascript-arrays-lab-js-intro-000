var kittens = ["Milo", "Otis", "Garfield"];//define your array here
function destructivelyAppendKitten(Ralph){
return kittens.push("Ralph");
  }
// Add your functions and code here
function destructivelyPrependKitten(Ralph){
  return kittens.unshift(Ralph)
}
function destructivelyRemoveLastKitten(Ralph){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
function appendKitten(Broom){
  var kittens1= ["Broom"];
  console.log(kittens.concat(kittens1));
  return kittens;
}
