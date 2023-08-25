 function getPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cake = "🍰";
      // console.log("Ye mera cake hai:" + cake );
      resolve(cake);
    }, 2000);
  });
};

function MakeDho(cake) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Tarbooj = cake + "🍉🍉";
      // console.log("Ye mera Tarbooj hai bhai:"+ "  "+  Tarbooj);
      resolve(Tarbooj);
    }, 2000);
  });
}

function Grapes(Tarbooj) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const graps = Tarbooj + " 🍇";
      // console.log("Ye mera Graps hai bhai:" + graps);
      resolve(graps);
    }, 2000);
  });
}

// getPromie()
//   .then((cake) => {
//     console.log("Ye mera cake hai:" + cake);

//     return MakeDho(cake);
//   })
//   .then((Tarbooj) => {
//     console.log("Ye mera Tarbooj hai bhai:" + "  " + Tarbooj);
//     return Grapes(Tarbooj);
//   })
//   .then((graps) => {
//     console.log("Ye mera Graps hai bhai:" + graps);
//   });

// console.log(getPizza());

// Await////
//  async function someone(){

// }

  async function orderPizza(){
    const cake= await getPizza()
    console.log("Ye mera cake hai:" + cake);

    const Tarbooj= await MakeDho(cake);
    console.log("Ye mera Tarbooj hai bhai:" + "  " + Tarbooj);

    const graps= await Grapes(Tarbooj);
    console.log("Ye mera Graps hai bhai:" + graps);



 }
 orderPizza();



