// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;

//     setTimeout(() => {
//         if (success) {
//             resolve('Cheers')
//         }

//         reject('bad')
//     },1000)
// })

// promise.then(result => console.log(result)).catch(result => console.log(result))

// const fetchUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3;

//       if (success) {
//         const user = { name: userName, age: 26, posts: 74 };
//         resolve(user);
//       }

//       const error = 'Произошла ошибка :(';
//       reject(error);
//     }, 1000);
//   });
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }

// function onFetchUserError(error) {
//   console.log(`%c ${error}`, 'color: red; font-size: 16px;');
// }

// const makePromise = delay => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// };

// makePromise(4000).then(console.log);

// makePromise(2000).then(console.log);

// makePromise(5000).then(console.log);
// const promise = new Promise(resolve => resolve(5));

// promise.then(x => { return 'x: ', x }).then(y => console.log('y: ', y));

// const log = value => console.log(value);

// const add = (a, b, callback) => callback(a + b);

// add(5,10,log)

// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time} ms`);

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms
