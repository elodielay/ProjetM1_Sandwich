
import { IIngredient } from "../ingredients/i-ingredient";


export class Sandwich {
    id: number;
    ingredients : IIngredient[] = [];
    image:string;
    name:string;

    
    constructor(id:number, name:string, image:string){
      this.id = id;
      this.name = name;
      this.image = image;
    }

    getPrix():number{
      let prix : number = 0;
      this.ingredients!.forEach(element => {
        prix += element.getPrix()
      });
      return prix;
    }

    toString():string{
        var final : string = "";
        /*this.ingredients!.forEach(element => {
          let movie2 : any = Object.assign({}, element);
          //console.log(movie2.count);
          if(element.getCount()>=0){
           if(a.includes(element.getLibelle())==false)
              {
                count=1;
                movie2.count=count; 
                  a+=element.getLibelle() + " " + movie2.count +"\n";

                console.log(this.hasNumber(a))
              }else{
                count++;
                movie2.count=count; 
                if(this.hasNumber(a)==true){
                  let str : string = "";
                  str = a.substr(a.indexOf(element.getLibelle()),element.getLibelle().length+5)
                  a = a.replace(str,"");
                }       
                let isnum = /^\d+$/.test(a);  
                console.log(isnum);  
                a+= element.getLibelle() + " " + movie2.count  +"\n";
              }       
          } 
        });*/
        final+= "\n" + this.name  +' : pour le prix de ' + this.getPrix().toFixed(2) + ' €';
        final.replace("\n", "<br>");
        return final;
    }
}
