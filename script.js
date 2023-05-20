const idAdvice = document.querySelector('#id_advice');
const msgAdvice = document.querySelector('.msg_advice');
const button = document.querySelector('.button');

async function getAPI(){
  let responde = await fetch('https://api.adviceslip.com/advice');
  let data = await responde.json();
  console.log(data);
   return data;
}


async function updateIdAdvice(){
  let id_Advice = await getAPI();
  idAdvice.textContent = id_Advice.slip.id;
  msgAdvice.textContent = id_Advice.slip.advice;

}

button.addEventListener('click', (e) => {
  // console.log('Clicou no botão')
  updateIdAdvice();
});