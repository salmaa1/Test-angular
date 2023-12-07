import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productform!:FormGroup;
  ngOnInit(): void {
  
  this.productform=new FormGroup({

      id:new FormControl(''),
      title:new FormControl(),
      price:new FormControl(),

    })
  }

    add(){
      console.log(console.log("notre form"+JSON.stringify(this.productform.value)))
    }

}
