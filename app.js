let numberContainer = document.querySelector('.container-numbers')
let outPut = document.querySelector('.container-up-side-inner')

for(let i=1;i<10;i++){
    let button = document.createElement('button')
    button.classList.add('number-button')
    button.innerHTML = i
    numberContainer.appendChild(button)
    button.addEventListener('click', takeInput)
}
let zeroButton = document.querySelector('#zeroButton')
zeroButton.addEventListener('click',takeInput)

let finalResult='0'

let operatorButtons = document.querySelectorAll('.operator-button')
let isOperatorClicked = false
operatorButtons.forEach((element)=>{
    element.addEventListener('click',function(){
        
        let op = this.innerHTML
        if(!isOperatorClicked==true){
            switch(op){
                case '=':
                case 'C':    
                    break
                case '*':
                case '/':
                case '+':
                case '-':
                    finalResult+=op
                    outPut.innerHTML=finalResult
                    isOperatorClicked=true
                    break       
            }
        }
        console.log(op)
        console.log(finalResult)
        
    })
})

let isStartWithZero=true

function takeInput(){
    isOperatorClicked=false
    let clickedButton = this.innerHTML
    if(finalResult=='0'&& clickedButton=='0'){
        console.log('hey');
    }else{
        finalResult = finalResult+clickedButton
                if(isStartWithZero==true){
                    finalResult=finalResult.slice(1,finalResult.length)
                    console.log(finalResult)
                    isStartWithZero=false  
                    outPut.innerHTML=finalResult
                }else{
                    console.log(clickedButton)
                    console.log(finalResult);
                }
                outPut.innerHTML=finalResult
    }
    }


let cButton = document.querySelector('#cButton')
cButton.addEventListener('click', function(){
    finalResult = '0'
    isStartWithZero = true
    console.log(finalResult)
    console.clear()
    outPut.innerHTML='0'
})

let equalButton = document.querySelector('#equalButton')
let final
let lastCharIsOperator
equalButton.addEventListener('click',function(){
    final = eval(finalResult)
    outPut.innerHTML=final
    console.log(final)
})