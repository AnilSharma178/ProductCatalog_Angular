import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';
import{ HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import{ReadJsonFile} from './services/read-jsondata.service';
import { ProductsShortDetailComponent } from './products-short-detail/products-short-detail.component';
import {  ProductDetaileComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCatalogComponent,
    ProductsShortDetailComponent,
    ProductDetaileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'productCatalog', pathMatch: 'full' },
      { path: 'productCatalog', component: ProductCatalogComponent },
      { path: 'productsShortDetail', component: ProductsShortDetailComponent },
      { path: 'productDetail', component: ProductDetaileComponent },            
      { path: '**', redirectTo: 'productCatalog' }
    ])
  ],
  providers: [ReadJsonFile],
  bootstrap: [AppComponent]
})
export class AppModule { }
