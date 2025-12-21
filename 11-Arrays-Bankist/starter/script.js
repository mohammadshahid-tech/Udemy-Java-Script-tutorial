'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

btnLogin.addEventListener('click', function userLogin(e) {
   e.preventDefault();
  const account = accounts.find(account => (account.owner.toLowerCase().split(' ').map(item=>item.slice(0,1)).join('') === inputLoginUsername.value && account.pin === Number(inputLoginPin.value)))
  if (account) {
    displayMovements(account.movements)
    calculateBalance(account.movements)
  }
})




/////////////////////////////////////////////////



const displayMovements =function (movements){
containerMovements.innerHTML=''
  movements.forEach(function(mov,i){

    const type = mov>0?'deposit':'withdrawal';
    const html=`
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin',html)
  });

}

// displayMovements(account1.movements)
// calculateBalance(account1.movements)

function calculateBalance(movement){

const totalBalance =  (movment) => movment.reduce((acc,mov)=>acc+mov,0)
labelBalance.textContent=`${totalBalance(movement)}€`

const calculateDisplaySummaryIn = (movement)=>movement.filter(mov=>mov>0).reduce((acc,val)=>acc+val,0)
labelSumIn.textContent =`${calculateDisplaySummaryIn(movement)}€` 

const calculateDisplaySummaryOut = (movement)=>movement.filter(mov=>mov<0).reduce((acc,val)=>acc+val,0)
labelSumOut.textContent = `${calculateDisplaySummaryOut(movement)}€`

const calculateDisplaySummaryInterest = (movement)=>movement.filter(mov=>mov>0).map(deposit=>(deposit*1.2)/100).filter(movement=>movement>=1).reduce((acc,int)=>acc+int,0)
labelSumInterest.textContent = `${Math.round(calculateDisplaySummaryInterest(movement))}€`
}


/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


////////////////////////////////////////////////////////


// const dollarInINr = 89.58;
// const currencyMovementsInINR = account4.movements.map(function(mov){
// return mov * dollarInINr;
// })


// getUsername(accounts)
// console.log(accounts);
// function getUsername(accts) {
//   accts.forEach(function (account, index) {
//      account.user = account.owner.toLowerCase()
//         .split(' ').
//         map(items => items[0]).join('')
//   })
// }

//  const withdrawals = [200, -200, 340, -300, -20, 50, 400, -460]

// const add = withdrawals.reduce(function(acc,val){
//   return  acc+val;

// },0)

// console.log(add);

//  const withdrawal =withdrawals.filter(wdr => wdr<0)
// console.log(withdrawal);


////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// Array Functions

// 1. Slice()
// let arr = ['a','b','c','d','e']
// let arr1 = [1,2,3,4,5]
// console.log(arr.slice(0,2)); 
// console.log(arr.slice(-3));
// console.log(arr.slice(-2));
// console.log(arr.slice(1,-1));
// console.log([...arr]);
// console.log(arr);

// 2. Splice() Mutate the original array

// console.log(arr.splice(2,4));
// console.log(arr);

//3. Reverse(); Mutate

// console.log(arr.reverse());
// console.log(arr);

//4. Concat();
// let concat =arr.concat(arr1);

// console.log(arr.concat(arr1));
// console.log([...arr,...arr1]);

//5. Join

// console.log(concat.join('-'));

//6 at();

// let arr1 = [1,2,3,4,5]
// console.log(arr1.at(2));
// // console.log(arr1);
// console.log(arr1[arr1.length-1]);
// console.log(arr1.slice(-1)[0]);

// foreach loop on arrays
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function(Elements,index,arrasys){
// console.log(Elements,index,arrasys)
// })

// //foreach on maps and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value,key,map){
//   console.log(`key : ${key} and value :${value} and map:${map}`);
// })

// const currency =new Set(
//   ['USD','EUR','Rupee','Doller']
// )

// currency.forEach(function(value,key,set){
// console.log(value);
// })