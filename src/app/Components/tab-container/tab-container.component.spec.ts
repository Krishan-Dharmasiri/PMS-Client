import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagContainerComponent } from './tab-container.component';

describe('TagContainerComponent', () => {
  let component: TagContainerComponent;
  let fixture: ComponentFixture<TagContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
