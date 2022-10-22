//creating arrays
console.log(' lavine');
// let student=[];
// arrays of strings;
let colors=('red','purple', 'grey');
// console.log(colors[0])
//let strings='red';
colors[0]='pink';
let fruits=['pineaple','bananas'];
fruits.push('apples');
fruits.pop();
fruits.shift();
// fruits.unshift(pineaple);
console.log(fruits);
//concatenating arrays
let cohortone=[true,false,24];
let cohorttwo=[true,false,19];
let femidevs=cohortone.concat(cohorttwo);
console.log(femidevs.includes(' 19'));
console.log(femidevs.indexOf(15));
console.log(femidevs.join('-'));
console.log(femidevs.reverse());
console.log(femidevs.slice(3));
let femidevsTwo=(femidevs.slice());
console.log(femidevs.splice(2, 1, 19));
console.log(femidevsTwo);
console.log(femidevs);
const months =['jan','feb','mar'];
// console.log(months.splice(jan,feb,oct));
// console.log(months);
months.splice(1,0,'may');
console.log(months);
const people=['lexha' ,'lily' ,'femi'];
const marks=[37 ,25 ,22 ,76];
console.log(people.sort());
console.log(marks.sort());
const animals=[
    ['man','monkey','bats','cows'],
    ['lizard' ,'crocodile' ,'chameleon'],
    ['newt' ,'frogs' ,'toads' ,'salamander']
];
//mammals=man,monkey,bat,cows
//reptile=lizard,crocodile,chameleone,turtle
//amphibians=frogs,newt,salamander,toad
const mammals=animals[0];
console.log(mammals);
//using template literal
console.log(` mammals : ${mammals}`);
const reptile=animals[1];
console.log(reptile);
//using template literal
console.log(`reptile : ${reptile}`);
const amphibians=animals[2];
console.log(mammals);
console.log(`amphibians :${amphibians}`);
const name={
lewirain :36,
feilenzon :54,
raimondrt :87,
heumohii : '3 of 6',
};
console.log(age);

