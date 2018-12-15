
const symbolList=[
    '_',
    '.',
    '/',
    '?',
    '&',
    '#',
    '!',
    '$',
    '%',
    '-',
    '+',
    '^',
    '*',
    '(',
    ')',
    '[',
    ']',
    '{',
    '}'
]

function gL(){
        if (Math.round(Math.random() * 1) == 1) {
            return String.fromCharCode(97 + Math.round(Math.random() * 25));
        }
    
        return String.fromCharCode(65 + Math.round(Math.random() * 25));
    
    
    }

function gN(){
        return Math.round(Math.random() * 9);
    
    }

function gS(){
    let f=Math.round(Math.random() * (symbolList.length-1))
    if(symbolList[f]==undefined){
        gS()
        
    }
    else{
    return symbolList[f]
    }
    
}

class Generator{
    constructor(){

    }
    
    dW(){
        if (Math.round(Math.random() * 1) == 1) {
            return gL()
        } 
    
        else {
            return gN();
        }

}
    
    generate(options={}){
        if(!options){
            console.error('[PW] missing options')
        }
        if(!options && !options.length){
            console.error('[PW] missing length option')
        }
        let length=options.length||null
        let numbers=options.numbers||null
        let symbols=options.symbols||null
        let ignores=options.ignoreSymbol||[]
        let st=''
        
        if(ignores.length>0){
            for(let i of ignores){
           symbolList.splice(symbolList.indexOf(i),1)
           
            }
                        
        }
        
        for(let i=0;i<length;i++){
            if(symbols){
                if (Math.round(Math.random() * 1) == 1) {
                     st+=gL()
                } 
            
                else if(Math.round(Math.random() %2) == 0){
                    st+=gS()
                }
                else if(numbers){
                    st+=gN()
                }

            }

            else if(!symbols &&numbers){
                st+=this.dW()
            }

            else if(!symbols && !numbers){
                st+=gL()
            }

        }
       
        
        return st
    }

    generateArray(num,options={}){
        let arr=[]
        for(let i=0;i<num;i++){
            arr[i]=this.generate(options)
        }
        return arr
    }
}
module.exports=Generator
