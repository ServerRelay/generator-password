# generator-password
generate passwords with this module

example:
```
const generator=require('passwordgenerator');
const passwordGenerator=new generator();
passwordGenerator.generate({
length:10,
numbers:true,
symbols:true,
ignoreSymbols:['(',')']
}
```


