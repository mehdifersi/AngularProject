import {Component, OnInit} from '@angular/core';
import {ProductServiceTsService} from "../service/product-service.ts.service";
import {Formulaire} from "../core/model/formulaire";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  form!:Formulaire
  constructor() {
    this.form=new Formulaire()
  }
  ngOnInit(): void {
  }

}
