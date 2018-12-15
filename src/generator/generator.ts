export=Generator;


declare class Generator{
    constructor();
  public generate(options:{length:number,numbers:boolean,symbols:boolean,ignoreSymbol:Array<String>}):string;
  public generateArray(num:number,options:{length:number,numbers:boolean,symbols:boolean}):Array<string>;
  public on(event:'ready',listener:()=>void):this;
}
