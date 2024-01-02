const api_key ="cb793f59c3ea5110f8229588";
const url = "https://v6.exchangerate-api.com/v6/" + api_key;

const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const list_one = document.getElementById("list_one");
const list_two = document.getElementById("list_two");
const amount = document.getElementById("amount");
const calcutale = document.getElementById("calculate");
const result = document.getElementById("result");

fetch(url + "/codes")
.then(res => res.json())
.then(data => {
    const items = data.supported_codes;
    let options;
    for(let item of items){
       options += `<option value = ${item[0]}>${item[1]}</option>`;
    }

    list_one.innerHTML = options;
    list_two.innerHTML = options
})

calcutale.addEventListener("click",function(){
    const döviz1 = currency_one.value
    const döviz2 = currency_two.value
    const miktar = amount.value

    fetch(url + "/latest/" + döviz1)
    .then(res => res.json())
    .then(data => {
        const sonuc = data.conversion_rates[döviz2]*miktar;
        result.innerHTML = `<div class="card border-primary">
        <div class="card-body text-center" style="font-size:30px;">
            ${miktar} ${döviz1} = ${sonuc} ${döviz2}
        </div>
    </div> `;
    })
})