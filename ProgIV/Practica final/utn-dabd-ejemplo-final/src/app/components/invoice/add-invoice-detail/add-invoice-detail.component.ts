import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {retry, Subscription} from "rxjs";
import {Invoice} from "../../../models/Invoice";
import {InvoicesService} from "../../../services/invoices.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Detail} from "../../../models/Detail";
import {v4 as uuidv4} from 'uuid';
import {MinInvoicesByClientName} from "../validators/min-invoices-by-client-name";

@Component({
    selector: 'ef-add-invoice-detail',
    templateUrl: './add-invoice-detail.component.html',
    styleUrls: ['./add-invoice-detail.component.css']
})
export class AddInvoiceDetailComponent implements OnInit, OnDestroy {
    private subs: Subscription = new Subscription();
    originalInvoice: Invoice | null = null;
    newInvoice: Invoice | null = null;
    form: FormGroup = this.fb.group({});

    constructor(private route: ActivatedRoute, private invoiceService: InvoicesService,
                private fb: FormBuilder, private router: Router) {
        this.form = this.fb.group(
            {
                productName: ["", [Validators.required, Validators.min(15)]],
                amount: ["", [Validators.required, Validators.min(1), Validators.max(9)]],
                price: ["", [Validators.required, Validators.min(1)]]
            }
        );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    ngOnInit(): void {
        this.subs.add(
            this.route.queryParams
                .subscribe(
                params => {
                    if (params['invoiceId'] != undefined) {
                        this.originalInvoice = new Invoice();
                        this.originalInvoice.id = params['invoiceId'];
                    } else
                        this.newInvoice = this.invoiceService.getNewInvoice;
                }
            )
        );


        if (this.originalInvoice != null) {
            this.subs.add(
                this.invoiceService.getById(
                    this.originalInvoice.id
                ).subscribe({
                        next: value => {
                            this.originalInvoice = value;
                        },
                        error: err => {
                            alert("Hubo un error: " + err.message)
                        }
                    }
                )
            );
        }
    }

    createDetailFromForm(): Detail | undefined {
        if (this.form.invalid) {
            alert("Formulario invalido");
            this.form.markAllAsTouched();
            return;
        }

        let detail: Detail = new Detail();
        detail.id = uuidv4().toString();
        detail.productName = this.form.controls["productName"].value;
        detail.price = this.form.controls["price"].value;
        detail.amount = this.form.controls["amount"].value;

        return detail;
    }

    saveAndContinue() {
        let newDetail = this.createDetailFromForm();

        if (newDetail == undefined) {
            return;
        }

        if (this.originalInvoice != null) {
            this.originalInvoice.details.push(newDetail);
            this.subs.add(
                this.invoiceService.putDetails(this.originalInvoice).subscribe({
                    next: value => {
                        alert("El detalle se guardo con exito");
                        this.form.reset();
                    },
                    error: err => {
                        alert("Hubo un error al guardar: " + err.message)
                    }
                })
            );
        } else {
            if (this.newInvoice != null) {
                this.newInvoice.details.push(newDetail);
                this.subs.add(
                    this.invoiceService.postInvoice(this.newInvoice).subscribe(
                        {
                            next: value => {
                                alert("El detalle se guardo con exito");
                                this.originalInvoice = value;
                                this.form.reset();
                            },
                            error: err => {
                                alert("Hubo un error al guardar: " + err.message)
                            }
                        }
                    )
                );
            }
        }
    }

    saveAndExit() {
        let newDetail = this.createDetailFromForm();

        if (newDetail == undefined) {
            return;
        }

        if (this.originalInvoice != null) {
            this.originalInvoice.details.push(newDetail);
            this.subs.add(
                this.invoiceService.putDetails(this.originalInvoice).subscribe({
                    next: value => {
                        alert("El detalle se guardo con exito");
                        this.router.navigate(["/invoice/list"]);
                    },
                    error: err => {
                        alert("Hubo un error al guardar: " + err.message)
                    }
                })
            );
        } else {
            if (this.newInvoice != null) {
                this.newInvoice.details.push(newDetail)
                this.subs.add(
                    this.invoiceService.postInvoice(this.newInvoice).subscribe(
                        {
                            next: value => {
                                alert("El detalle se guardo con exito");
                                this.router.navigate(["/invoice/list"]);
                            },
                            error: err => {
                                alert("Hubo un error al guardar: " + err.message)
                            }
                        }
                    )
                );
            }
        }
    }

    // get getFormArray() {
    //     return this.form.controls['details'] as FormArray;
    // }

    // private createProductForm(){
    //     return this.fb.group(
    //         {
    //             productName: ["", [Validators.required, Validators.min(15)]],
    //             amount: ["", [Validators.required, Validators.min(1), Validators.max(9)]],
    //             price: ["", [Validators.required, Validators.min(1)]]
    //         }
    //     )
    // }
    //
    // private createProductFormFromDetail(invoiceDetails: Detail){
    //     return this.fb.group(
    //         {
    //             productName: [invoiceDetails.productName, [Validators.required, Validators.min(15)]],
    //             amount: [invoiceDetails.amount, [Validators.required, Validators.min(1), Validators.max(9)]],
    //             price: [invoiceDetails.price, [Validators.required, Validators.min(1)]]
    //         }
    //     )
    // }
    //
    // removeDetailControl(index: number){
    //     this.getFormArray.removeAt(index);
    // }
    //
    // addDetailControl(){
    //     this.getFormArray.controls.push(this.createProductForm());
    // }
}
