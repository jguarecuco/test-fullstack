import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarActividadesComponent } from './modificar-actividades.component';

describe('ModificarActividadesComponent', () => {
  let component: ModificarActividadesComponent;
  let fixture: ComponentFixture<ModificarActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
