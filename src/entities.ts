export interface Person {
    name:string;
    firstName:string;
    age:number;
}

export interface Dog {
    id?:number;
    name:string;
    breed:string;
    birthdate:string;
}


export interface Application {
    id?:string;
    appliedOn:string|Date;
    name:string;
    firstName:string;
    session:string;
    status:'awaiting'|'refused'|'accepted';
}