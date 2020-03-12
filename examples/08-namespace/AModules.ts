export namespace A{
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `A ${this.name}`;
        }
    }
}
export namespace B{
    interface Animal{
        name:string;
        getName():string;
    }
    export class Dog implements Animal{
        name :string;
        constructor(name:string){
            this.name = name;
        }
        getName():string{
           return `B ${this.name}`;
        }
    }
}