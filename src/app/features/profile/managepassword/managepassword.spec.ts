import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managepassword } from './managepassword';

describe('Managepassword', () => {
  let component: Managepassword;
  let fixture: ComponentFixture<Managepassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Managepassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Managepassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
