import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-form-fields',
  templateUrl: './custom-form-fields.component.html',
  styleUrl: './custom-form-fields.component.scss'
})
export class CustomFormFieldsComponent
{
    @Input() amountPlaceholder!: string;
    @Input() referencePlaceholder!: string;
    
    @Output() amountOutput = new EventEmitter<number>();
    @Output() referenceOutput = new EventEmitter<string>();

    amount!: number;
    reference!: string;


    emitAmount()
    {
        this.amountOutput.emit(this.amount);
    }


    emitReference()
    {
        this.referenceOutput.emit(this.reference);
    }
}
