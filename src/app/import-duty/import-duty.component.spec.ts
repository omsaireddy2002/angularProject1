import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDutyComponent } from './import-duty.component';

describe('ImportDutyComponent', () => {
  let component: ImportDutyComponent;
  let fixture: ComponentFixture<ImportDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportDutyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
