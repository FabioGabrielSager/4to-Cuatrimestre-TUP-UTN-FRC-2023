import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {retry, Subscription} from "rxjs";
import {UniqueProductNameValidatorService} from "../Validators/unique-product-name-validator.service";
import {NoPapaNameValidator} from "../Validators/NoPapaName";
import {ProductsService} from "../../services/products.service";
import {Product, Stock} from "../../model/product";

@Component({
  selector: 'rfc-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  form: FormGroup = this.fb.group({});
  subs: Subscription = new Subscription();
  newProduct: Product = new Product();

  constructor(private fb: FormBuilder, private nameValidator: UniqueProductNameValidatorService,
              private productService: ProductsService) {

    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3), NoPapaNameValidator],
          this.nameValidator.validate.bind(this.nameValidator)],
      description: ["", [Validators.required, Validators.minLength(10)]],
      price: ["", [Validators.required, Validators.min(1)]],
      type: ["", [Validators.required]],
      details: this.fb.array([])
    });

    this.subs.add(this.form.controls['type'].valueChanges.subscribe(
      value => {
        this.manageDetailsFormControls(this.form.controls['type'].value)
      }
    ))
  }

  get detailsFromArray(){
    return this.form.controls['details'] as FormArray;
  }

  manageDetailsFormControls(type: string): void {
    const detailsArray = this.form.get('details') as FormArray;

    detailsArray.clear();

    if (type === 'service') {
      detailsArray.push(this.createServiceForm());
    } else if (type === 'product') {
      detailsArray.push(this.createProductForm());
    }
  }

  addStockControlsToDetails(){
    const detailsArray = this.form.get('details') as FormArray;
    detailsArray.push(this.createProductForm());
  }

  removeStockControl(index: number){
    const detailsArray = this.form.get('details') as FormArray;
    detailsArray.removeAt(index);

  }

  createProductForm(): FormGroup {
    return this.fb.group({
      stock: ["", [Validators.min(1), Validators.max(100), Validators.required]],
      location: ["", [Validators.required, Validators.minLength(5)]]
    });
  }

  createServiceForm(): FormGroup {
    return this.fb.group({
      timeFraction: ["", [Validators.min(10), Validators.max(60)]],
    });
  }

  onSubmit(){
    if(this.form.invalid){
      for(const field in this.form.controls){
        this.form.get(field)?.markAllAsTouched();
      }
      alert("formulario invalido");
      return;
    }

    let newProduct: Product = new Product();
    newProduct.description = this.form.controls['description'].value;
    newProduct.price = this.form.controls['price'].value;
    newProduct.name = this.form.controls['name'].value
    if(this.form.controls['type'].value == 'product'){
      newProduct.productType = 'Producto';
      newProduct.inventories = [];
      for(let i = 0; i < this.detailsFromArray.controls.length; i++){
        let stock: Stock = new Stock();
        stock.location = this.detailsFromArray.controls[i].get('location')?.value;
        stock.count = this.detailsFromArray.controls[i].get('count')?.value;
        newProduct.inventories.push(stock);
      }
    }
    else {
      newProduct.productType = 'Servicio';
      for(let i = 0; i < this.detailsFromArray.controls.length; i++){
        newProduct.timeFraction = this.detailsFromArray.controls[0].get('timeFraction')?.value;
      }
    }

    this.subs.add(this.productService.add(newProduct).subscribe(
        {
          next: value => alert("Cargado correctamente"),
          error: err => alert(err)
        }
    ));
  }
}
