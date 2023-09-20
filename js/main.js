let tests = [
   {
      question: '5 * 6 =',
      answer: 30,
      ball: 1,
   },
   {
      question: '8 * 3 =',
      answer: 24,
      ball: 1,
   },
   {
      question: '4 * 2 + 8 =',
      answer: 16,
      ball: 2,
   },
   {
      question: '9 * 9 - 21 =',
      answer: 70,
      ball: 2,
   },
   {
      question: '6 * 7 / 2 + 50 =',
      answer: 71,
      ball: 3,
   },
   {
      question: '100 - 8 * 5 / 2 =',
      answer: 80,
      ball: 3,
   }
];

let balls = 0;

for (let i = 0; i < tests.length; i++) {
   
   let test = tests[i];
   let qst = test.question;
   let ans = test.answer;
   let bl = test.ball;
   let num = i + 1;

   userAns = prompt('(' + num + '/' + tests.length + ')\n' + qst);
   
   console.log(userAns);

      if (userAns === ans) {
         alert('Right!');
         
      } else if (userAns !== ans){
         alert('Fail!');
      }   
      balls += bl;
}
console.log(balls);