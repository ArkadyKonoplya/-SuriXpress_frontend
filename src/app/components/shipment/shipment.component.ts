import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { shipmentDto } from 'src/app/models/shipment/shipmentDto.model';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',

})
export class ShipmentComponent implements OnInit {

  shipmentForm: UntypedFormGroup;
  errorMessage: string = '';
  showError: boolean | undefined; 



  selectTheme = 'primary';
    cities = [
      {value: 'paris-0', viewValue: 'Nickerie'},
      {value: 'miami-1', viewValue: 'Coronie'},
      {value: 'bucharest-2', viewValue: 'Saramacca'},
      {value: 'new-york-3', viewValue: 'Brokopondo'},
      {value: 'london-4', viewValue: 'Para'},
      {value: 'barcelona-5', viewValue: 'Paramaribo'},
      {value: 'moscow-6', viewValue: 'Commewijne'},
      {value: 'moscow-6', viewValue: 'Marowijne'},
    ];


  constructor(private formBuilder:UntypedFormBuilder) { }

 

  ngOnInit(): void {
    this.shipmentForm = new UntypedFormGroup(
      {
        package: this.formBuilder.array([this.getPackage])
      }
    )
  }

  createShipment = (createShipmentValue: any) => {
    this.showError = false;
    const formValues = {... createShipmentValue };

    const shipment: shipmentDto = {
      package: formValues.email,
    } 

  }

  /* **
   * Create form package
   */ 
  private getPackage() {
    const numberPatern = "^[0-9.,]+$";
    return this.formBuilder.group({
      product: new UntypedFormControl(''),
      content: new UntypedFormControl(''), 
      value: new UntypedFormControl(''), 
      weight: new UntypedFormControl(''),
      shippingcost: new UntypedFormControl({value:"", disabled: true},[Validators.required, Validators.pattern(numberPatern)]),
      deliverycost: new UntypedFormControl({value:"", disabled: true},[Validators.required, Validators.pattern(numberPatern)]), 
      PackageTotalPrice: [{ value: "", disabled: true }]
    });
  }

}


