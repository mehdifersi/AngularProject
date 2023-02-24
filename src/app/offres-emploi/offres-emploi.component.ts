import {Component, OnInit} from '@angular/core';
import {Emploi} from "../core/model/emploi";
import {MethodePartageService} from "../service/methode-partage.service";

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit{
  listOffreEmploi!:Emploi[]
  nomEntreprise!:string
  offreOFF!:number
  constructor(private mp:MethodePartageService) {
  }
  ngOnInit(): void {
    this.listOffreEmploi=[
      {reference:"emp1",titre:"software engineer",entreprise:"OnCode",etat:true },
      {reference:"emp2",titre:"data scientist",entreprise:"SIMENS",etat:false },
      {reference:"emp3",titre:"web developer",entreprise:"SagemCom",etat:true },
    ]
  }
  bilan():number{
    let i =0
    for (let offre of this.listOffreEmploi) {
      if (offre.etat){
        i++
      }
    }
    return i
  }
  calculnombre(){
    this.offreOFF =this.mp.calculnombre("etat",this.listOffreEmploi,false)
  }

}
