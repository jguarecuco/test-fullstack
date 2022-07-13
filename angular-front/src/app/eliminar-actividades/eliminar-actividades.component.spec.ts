import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarActividadesComponent } from './eliminar-actividades.component';

describe('EliminarActividadesComponent', () => {
  let component: EliminarActividadesComponent;
  let fixture: ComponentFixture<EliminarActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarActividadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
