import { Component, OnInit } from '@angular/core';
//import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import {  ReadJsonFile } from '../services/read-jsondata.service';


@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  providers:[ReadJsonFile]
})

export class ProductCatalogComponent implements OnInit {

    //Variable declareation
    private categories: Array<any>[];

    constructor(
        private _readJsonFile: ReadJsonFile,
        private _router: Router) {
    }

    //Page load
    ngOnInit() {
         debugger;
        this._readJsonFile.getJSONData()
            .subscribe(data => { 
              debugger;
                this.categories = data;
            });
    }
    //Open products page base on catogery
    productsPage(value: any) {
         
        localStorage.setItem("CategoryId", value.Id);
        this._router.navigateByUrl("/productsShortDetail");
    }
}

