import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name="Ayush";
  // addToCart:number=0;
  //  Product={
  //     name:"IPhone 15 Pro Max",
  //     price:500,
  //     color:"Red",
  //     discountprice:5,
  //  inStock:100,
  //  pImage:"./assets/Image/iphone.jpg",
  //     }
  //     discount(){
  //       return this.Product.price- (this.Product.price*this.Product.discountprice/100);
  //     }  
      // OnNameChange(event:any){
      //   this.name=event.target.value;

       
      // }
    // IncreamentValue(){
    //   if(this.addToCart<this.Product.inStock){
    //    this.addToCart++;
    //   }
    // }
    // DecreamentValue(){
    //   if(this.addToCart >1){
    //    this.addToCart--;
    // }
    listOfString:string[]=['Ayush','Smith','John','Ammith','hapur']
  }
