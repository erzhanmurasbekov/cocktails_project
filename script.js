import {data} from './getData.js'


// console.log(drinks);
const container = document.querySelector('.container');
const searchBtn = document.querySelector('.searching');
const inputVal = document.querySelector('input');

const drinksData = data();

function showDrinksOnUI(arr){
    for(let drink of arr){
        const div = document.createElement('div');
        const img = document.createElement('img');
        const drinkName = document.createElement('h3');
        drinkName.innerHTML = drink.strDrink;
        img.src = drink.strDrinkThumb;
        div.appendChild(drinkName);
        div.appendChild(img);
        container.appendChild(div);
    }

}


function searchFilter(drink){
    const array = data();
    const filteredDrinks = [];
    for(let el of drinksData){
        let nameOfDrinks= el.strDrink.toLowerCase()
        if(nameOfDrinks.includes(drink.toLowerCase())){
            filteredDrinks.push(el)
        }
    }
    console.log(filteredDrinks,'filtered')
    return filteredDrinks;

}

function clear(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

function clickEvent(){

    if(inputVal.value ==''){
        clear()
        showDrinksOnUI(data())
    }else{
        const inputValue = inputVal.value
        const drinks = searchFilter(inputValue)
        clear()
        showDrinksOnUI(drinks)
    }
    const inputValue = inputVal.value;
    searchFilter(inputValue)
    console.log('input '+inputValue)
    
    
}
////////////hw
const option = document.querySelector('#drinks')

function selection2(){
    
    clear()
    const array = data();
    let filteredArray = [];
    
    array.filter(el=>{
        if(option.value===el['strCategory']){
            filteredArray.push(el)
            console.log('wors')
        }else if(option.value ==='none'){
            console.log('reset')
            filteredArray.push(el)
        }
    })
    
    showDrinksOnUI(filteredArray);
    return filteredArray;
}
console.log(option.value)

option.addEventListener('change',selection2)
///////button adding
const alco = document.querySelector('.alco')
const nonalco = document.querySelector('.nonalco')

alco.addEventListener('click',function(){
    const array = []
    drinksData.filter(el=>{
        if(el['strAlcoholic'] == 'Alcoholic'){
            array.push(el)
            
        }
        
    })
    console.log(array)
    clear();
    showDrinksOnUI(array)
})

nonalco.addEventListener('click',function(){
    const array = []
    drinksData.filter(el=>{
        if(el['strAlcoholic'] == 'Non alcoholic'){
            array.push(el)
            
        }
        
    })
    console.log(array)
    clear();
    showDrinksOnUI(array)
})
const reset = document.querySelector('.reset')
reset.addEventListener('click',()=>{
    clear();
    showDrinksOnUI(drinksData);
})
//////exper
// const option = document.querySelector('#drinks')

// function selection2(){
    
//     clear()
//     const array = data();
//     let filteredArray = [];
    
//     array.filter(el=>{
//         if(select.value===el['strCategory']){
//             filteredArray.push(el)
//             console.log('wors')
//         }else if(select.value ==='none'){
//             console.log('reset')
//             filteredArray.push(el)
//         }
//     })
    
//     showDrinksOnUI(filteredArray);
//     return filteredArray;
// }
// console.log(option.value)

// option.addEventListener('change',selection2)

/////

inputVal.addEventListener('keyup',clickEvent)

showDrinksOnUI(data())

