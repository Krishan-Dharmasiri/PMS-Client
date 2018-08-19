import { Component, OnInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  _tabs:TabComponent[]= [];

  constructor() { }

  ngOnInit() {
  }

  addTab(tab:TabComponent){
    if(this._tabs.length === 0){
      tab.isTabActive = true;
    }

    this._tabs.push(tab);
  }

  selectTab(tab:TabComponent){
    this._tabs.forEach((tab) => {tab.isTabActive = false;});
    tab.isTabActive = true;
  }

}
