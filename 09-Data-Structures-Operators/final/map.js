// const rest= new Map();
// rest.set('name','Clasico Italiano')
// rest.set(1,'Firenze, Italy');
// console.log(rest.set(2,'Lisbon, Portugal'));

// rest
//     .set('Category',['Italian','Pizzeria','Vegetarian','Orgamnic'])
//     .set('open',11)
//     .set('close',23)
//     .set(true ,'we are open :D')
//     .set(false ,'we are close:(')

//     console.log(rest.get('name'));
//     console.log(rest.get(1));
//     console.log(rest.get(false));

//     const time =8

//     console.log(rest.get(time > rest.get(open) && time < rest.get(close)));

//     console.log(rest.has('Category'));
//     // rest.delete(2);
//     // console.log(rest.size);
//     // console.log(rest.clear()); 
//     // console.log(rest);
// // const arr=[1,2]
// //     rest.set(arr,'Test');

// //     console.log(rest.get(arr));
// rest.set(document.querySelector('h1').textContent,'Heading')
// console.log(rest);

const  question= new Map([
    ['question','what is the best programming language?'],
    [1,'C'],
    [2,'Java'],
    [3,'JavaScript'],
    ['correct',3],
    [true,'Correct'],
    [false,'Try again']]
)
console.log(question.get('question'));
for(const [keys, values] of question){
    if (typeof keys==='number') {
        console.log(`Answer ${keys} : ${values}`);
    }
}

const ans =Number( prompt('Your Answer'));
console.log(ans);
console.log(question.get(question.get('correct')===ans));

