const priceList = {
    'Vitamin D (25-OH)': 649,
    'Vitamin B12 - Serum': 499,
    'Complete Blood Count (CBC) - EDTA Whole Blood': 349,
    'Glucose Fasting (FBS) - Sodium Flouride': 99,
    'Covid RT PCR - SWAB': 599,
    'Complete Urine Examination (CUE) - Spot Urine': 149,
    'Liver Function Test (LFT)': 399,
    'KIDNEY FUNCTION TEST (KFT) - Serum': 399,
    'Blood Grouping & Rh Type - EDTA Whole Blood': 99,
    'C-Reactive Protein (CRP) - Serum': 349,
    'Calcium - Serum': 199,
    'HBA1c': 399,
    'Creatinine - Serum': 139,
    'Haemogram (CBC+ESR) - EDTA Whole Blood': 399,
    'Glucose Random (RBS) - Sodium Flouride': 149

}
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

const vitaminD = document.getElementById('Vitamin D (25-OH)');
const vitaminB = document.getElementById('Vitamin B12 - Serum');
const complateBloodCount = document.getElementById('Complete Blood Count (CBC) - EDTA Whole Blood');
const glucoseFasting = document.getElementById('Glucose Fasting (FBS) - Sodium Flouride');
const covidRtPcr = document.getElementById('Covid RT PCR - SWAB');
const complateUrine = document.getElementById('Complete Urine Examination (CUE) - Spot Urine');
const liverFunction = document.getElementById('Liver Function Test (LFT)');
const kidneyFunction = document.getElementById('KIDNEY FUNCTION TEST (KFT) - Serum');
const blodGrouping = document.getElementById('Blood Grouping & Rh Type - EDTA Whole Blood');
const reactiveProtein = document.getElementById('C-Reactive Protein (CRP) - Serum');

const calciumSerum = document.getElementById('Calcium - Serum');
const hba1c = document.getElementById('HBA1c');
const criatinineSerum = document.getElementById('Creatinine - Serum');
const haemogramWhole = document.getElementById('Haemogram (CBC+ESR) - EDTA Whole Blood');
const glucoseRandom = document.getElementById('Glucose Random (RBS) - Sodium Flouride');

const cartItem1 = document.getElementById('item-1');
const cartItem2 = document.getElementById('item-2');
const cartItem3 = document.getElementById('item-3');
const cartItem4 = document.getElementById('item-4');
const cartItem5 = document.getElementById('item-5');
const cartItem6 = document.getElementById('item-6');
const cartItem7 = document.getElementById('item-7');
const cartItem8 = document.getElementById('item-8');
const cartItem9 = document.getElementById('item-9');
const cartItem10 = document.getElementById('item-10');
const cartItem11 = document.getElementById('item-11');
const cartItem12 = document.getElementById('item-12');
const cartItem13 = document.getElementById('item-13');
const cartItem14 = document.getElementById('item-14');
const cartItem15 = document.getElementById('item-15');
const finalPrice = document.getElementById('final-price');

const cart = new Cart(itemList, priceList);

vitaminD.addEventListener('click' , () =>{
    cart.addClass('Vitamin D (25-OH)', vitaminD, cartItem1)
})

vitaminB.addEventListener('click', ()=>{
    cart.addClass('Vitamin B12 - Serum', vitaminB, cartItem2)
})

complateBloodCount.addEventListener('click', ()=>{
    cart.addClass('Complete Blood Count (CBC) - EDTA Whole Blood', complateBloodCount, cartItem3)
})

glucoseFasting.addEventListener('click', ()=>{
    cart.addClass('Glucose Fasting (FBS) - Sodium Flouride', glucoseFasting, cartItem4)
})

covidRtPcr.addEventListener('click', ()=>{
    cart.addClass('Covid RT PCR - SWAB', covidRtPcr, cartItem5)
})

complateUrine.addEventListener('click', ()=>{
    cart.addClass('Complete Urine Examination (CUE) - Spot Urine', complateUrine, cartItem6)
})

liverFunction.addEventListener('click', ()=>{
    cart.addClass('Liver Function Test (LFT)', liverFunction, cartItem7)
})

kidneyFunction.addEventListener('click', ()=>{
    cart.addClass('KIDNEY FUNCTION TEST (KFT) - Serum', kidneyFunction, cartItem8)
})

blodGrouping.addEventListener('click', ()=>{
    cart.addClass('Blood Grouping & Rh Type - EDTA Whole Blood', blodGrouping, cartItem9)
})

reactiveProtein.addEventListener('click', ()=>{
    cart.addClass('C-Reactive Protein (CRP) - Serum', reactiveProtein, cartItem10)
})



calciumSerum.addEventListener('click', ()=>{
    cart.addClass('Calcium - Serum', calciumSerum, cartItem11)
})
hba1c.addEventListener('click', ()=>{
    cart.addClass('HBA1c', hba1c, cartItem12)
})
criatinineSerum.addEventListener('click', ()=>{
    cart.addClass('Creatinine - Serum', criatinineSerum, cartItem13)
})
haemogramWhole.addEventListener('click', ()=>{
    cart.addClass('Haemogram (CBC+ESR) - EDTA Whole Blood', haemogramWhole, cartItem14)
})
glucoseRandom.addEventListener('click', ()=>{
    cart.addClass('Glucose Random (RBS) - Sodium Flouride', glucoseRandom, cartItem15)
})



