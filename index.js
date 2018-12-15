const generator=require('./src/generator/index.js')
const n=new generator()
console.log(n.generate({
    length:500,
    numbers:true,
    symbols:true,
    //ignoreSymbol:['(',')','{','}','[',']','.','+','!','&','^','*']
})
)

module.exports=generator
