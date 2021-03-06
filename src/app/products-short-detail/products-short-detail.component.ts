import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReadJsonFile } from '../services/read-jsondata.service';
 
@Component({
  selector: 'app-products-short-detail',
  templateUrl: './products-short-detail.component.html',
  styleUrls: ['./products-short-detail.component.css'],
  providers: [ReadJsonFile]
})
export class ProductsShortDetailComponent implements OnInit {

    //variable declaretion
    private products: Array<any>[];
    private categoryName: string;

    constructor(
        private _readJsonFile: ReadJsonFile,
        private _router: Router
    ) { }

    //Page load
    ngOnInit() {
        //Get session variable
        var categoryId = localStorage.getItem("CategoryId");

        //Get all products base on catogery
        this._readJsonFile.getJSONData()
            .subscribe(data => {                
                this.categoryName = data.filter((a: any) => a.Id == categoryId)[0].Name;
                this.products = data.filter((a: any) => a.Id == categoryId)[0].Products; 
            });
    }

    //Get individual product details
    productPage(value: any) {
        localStorage.setItem("ProductId", value.Id);
        localStorage.setItem("CategoryName", this.categoryName);
        this._router.navigateByUrl("/productDetail");
    }

}

