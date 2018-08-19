import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tab-container',
  templateUrl: './tag-container.component.html',
  styleUrls: ['./tag-container.component.css']
})
export class TagContainerComponent implements OnInit {
  //Struture : Component needs to know how many tabs are there in the run time , max being 5
  //           this is infered based on the array of tab names passed into the component
  

  private _tabs:any[] = [
                         {tabName:'Australia',tabId:'#Australia'}
                        ,{tabName:'Sri Lanka',tabId:'#SriLanka'}]; //this means there will be only two tabs by default
  

  constructor() { }

  ngOnInit() {
  }

}
