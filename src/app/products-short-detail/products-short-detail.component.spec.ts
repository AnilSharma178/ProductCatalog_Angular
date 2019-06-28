import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsShortDetailComponent } from './products-short-detail.component';

describe('ProductsShortDetailComponent', () => {
  let component: ProductsShortDetailComponent;
  let fixture: ComponentFixture<ProductsShortDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsShortDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
