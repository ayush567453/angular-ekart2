import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchText:string=""
searchItem(event:any){
  this.searchText=event.target.value;
  console.log(event.target.value);
   
  }
}


