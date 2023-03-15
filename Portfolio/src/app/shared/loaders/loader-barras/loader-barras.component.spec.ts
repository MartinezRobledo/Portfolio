import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBarrasComponent } from './loader-barras.component';

describe('LoaderBarrasComponent', () => {
  let component: LoaderBarrasComponent;
  let fixture: ComponentFixture<LoaderBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderBarrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
