const priceList = {
    'Long Term Nursing Care': 3000,
    'Wound Dressing': 500,
    'Catherterization': 650,
    'Iv Fusion': 350
}
localStorage.setItem('priceList', JSON.stringify(priceList))
var itemList = [];

class Cart{
    constructor(itemList, priceList){
        this.itemList = itemList;
        this.priceList = priceList;
        this.updateDisplay();
    }

    addClass(serviceName, element, cartItem){
        if(element.classList.contains('add')){
            element.classList.remove('add');
            element.classList.add('remove');
            element.innerText = 'Remove';
            this.itemList.push(serviceName)
            cartItem.style.display = 'flex'
        }
        else{
            element.classList.remove('remove');
            element.classList.add('add');
            element.innerText = 'Add';
            this.itemList.pop(serviceName)
            cartItem.style.display = 'none'              
        }
        this.updateDisplay()
    }
    updateDisplay(){
        let totalPrice = 0;

        for (let index = 0; index < this.itemList.length; index++) {
            const j = this.itemList[index];   
            totalPrice += this.priceList[j];   
        }
        finalPrice.innerText = `Rs. ${totalPrice}`;
    }
}

const longTermNursingCare = document.getElementById('long-term-nursing-care');
const woundDressing = document.getElementById('wound-dressing');
const catherterization = document.getElementById('catheterization');
const ivInfusion = document.getElementById('iv-infusion');
const cartItem1 = document.getElementById('item-1');
const cartItem2 = document.getElementById('item-2');
const cartItem3 = document.getElementById('item-3');
const cartItem4 = document.getElementById('item-4');
const finalPrice = document.getElementById('final-price');

const cart = new Cart(itemList, priceList);

longTermNursingCare.addEventListener('click' , () =>{
    cart.addClass('Long Term Nursing Care', longTermNursingCare, cartItem1)
})

woundDressing.addEventListener('click', ()=>{
    cart.addClass('Wound Dressing', woundDressing, cartItem2)
})

catherterization.addEventListener('click', ()=>{
    cart.addClass('Catherterization', catherterization, cartItem3)
})

ivInfusion.addEventListener('click', ()=>{
    cart.addClass('Iv Fusion', ivInfusion, cartItem4)
})