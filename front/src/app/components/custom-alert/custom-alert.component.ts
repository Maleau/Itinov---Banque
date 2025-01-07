import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom-alert',
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.scss'
})
export class CustomAlertComponent
{
    @Input() txt!: string;
    @Input() isRedColor: boolean = false;

    @Output() closeAlert = new EventEmitter<boolean>();

    onCloseAlert()
    {
        this.closeAlert.emit(false);
    }
}
