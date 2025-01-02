import { Component, Input } from '@angular/core';
import { CompteElementComponent } from "../compte-element/compte-element.component";
import { Compte } from '../../models/compte';
import { ComptesService } from '../../services/comptes.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-comptes-list',
  templateUrl: './comptes-list.component.html',
  styleUrl: './comptes-list.component.scss'
})
export class ComptesListComponent
{
    @Input() title!: string;
    @Input() comptesList!: Compte[];
}
