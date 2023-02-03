import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  name :string='mahdi fersi'
  tab=['mahdi','mariem','rami']
  test=false
  n=3
  ngOnInit(): void {
  }

}
