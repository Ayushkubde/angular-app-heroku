export class Products {
    id : number ;
    name: string ;
    description: string;
    price:number;
    imageUrl:string;

 constructor(id,name,description='',price=0,imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-7lIGYI3kvB39bjSjbk-9QwnG-EBcdUtqA&usqp=CAU'){
     this.id=id;
     this.name=name;
     this.description=description;
     this.price=price;
     this.imageUrl=imageUrl;
 }
}

