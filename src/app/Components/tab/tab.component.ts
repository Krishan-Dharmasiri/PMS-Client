import { Component, OnInit, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  isTabActive:boolean;
  @Input() tabTitle:string;

  constructor(tabs:TabsComponent) { 
    tabs.addTab(this); //this is a new way Angular DI gives a parent component instance into the child component
  }

  ngOnInit() {
  }

}
