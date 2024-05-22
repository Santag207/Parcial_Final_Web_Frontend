import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEntityCreateComponent } from './my-entity-create.component';

describe('MyEntityCreateComponent', () => {
  let component: MyEntityCreateComponent;
  let fixture: ComponentFixture<MyEntityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyEntityCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyEntityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
