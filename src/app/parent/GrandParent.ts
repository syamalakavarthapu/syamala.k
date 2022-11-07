import { IChild } from '../Models/IChild';

export class Child implements IChild {

constructor(
    public id: number,
    public firstname: string,
    public lastname:string,
    public age?: number){

    } 
}