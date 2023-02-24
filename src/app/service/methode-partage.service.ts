import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodePartageService implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  calculnombre(critere:string,list:any[],value:any):number{
    let n=0;

    for (var i of list) {
      if(i[critere]===value){
        n++
      }
    }
    return n;
  }
}
