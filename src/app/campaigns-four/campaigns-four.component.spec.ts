import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignsFourComponent } from './campaigns-four.component';

describe('CampaignsFourComponent', () => {
  let component: CampaignsFourComponent;
  let fixture: ComponentFixture<CampaignsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignsFourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
