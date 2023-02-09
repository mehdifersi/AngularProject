import {Component, OnInit} from '@angular/core';
import {Article} from "../core/model/article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit{

  titre:string="Les articles du jour"
  i=0
  listeArticles!:Article[]
  ngOnInit(): void {
    this.listeArticles=[
      {titre:"le championnat du monde",contenu:"Le champion du monde de cette année est",date:"12/12/2005",auteur:"Med Taher",categorie:"chompion"},
      {titre:"Les nouveaux parents",contenu:"Les nouveaux Parent .... ",date:"11/11/2018",auteur:"Ahmed Said",categorie:"Education"},
      {titre:"Comment ecrire votre cv",contenu:"Pour reussir a decraucher un emploi ...",date:"02/04/2017",auteur:"Marie Elsa",categorie:"Travail"},
    ]
  }
  nbrArticle():number{
    return this.listeArticles.length
  }

}
