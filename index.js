let inp = document.querySelector('input');
let result = document.querySelector('p');

let btn = document.querySelector('button');

function addSum() {
  let inpValue = Number(inp.value);
  let resultVal = Number(result.textContent);
  let sum = (result.textContent = inpValue + resultVal);
  localStorage.setItem('sum', JSON.stringify(sum));

  inp.value = '';
}

function getValue() {
  const savedValue = JSON.parse(localStorage.getItem('sum'));
  if (savedValue !== null) {
    result.textContent = savedValue;
  }
}

getValue();

btn.addEventListener('click', addSum);

