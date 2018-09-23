import { ChangelogComponent, Colores, TipoLog } from '../../src/ngx-changelog';
import { By } from '@angular/platform-browser';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DatePipe } from '@angular/common';

describe('Component: ChangelogComponent', () => {
  let fixture: ComponentFixture<ChangelogComponent>;
  let comp: ChangelogComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ChangelogComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ChangelogComponent);
    comp = fixture.componentInstance;
    comp.changelog = [
      {
        version: 'v2.0.0',
        dias: [
          {
            fecha: new Date('2018/09/22'),
            logs: [
              {
                tipo: TipoLog.agregado,
                color: Colores.success,
                contenido: 'Agregado cambios en pedido cotizacion'
              },
              {
                tipo: TipoLog.eliminado,
                color: Colores.danger,
                contenido: 'Eliminado pedido cotizacion'
              }
            ]
          }
        ]
      }
    ];
    fixture.detectChanges();
  });

  it('deberia contener la version de changelog', () => {
    expect(
      fixture.debugElement.query(By.css('.version')).nativeElement.innerText
    ).toContain('v2.0.0');
  });

  it('deberia contener la fecha de los logs', () => {
    expect(
      fixture.debugElement.query(By.css('.fecha')).nativeElement.innerText
    ).toContain(new DatePipe('en').transform(new Date('2018/09/22'), 'yyyy-MM-dd'));
  });

  it('deberia contener la etiqueta success', () => {
    expect(
      fixture.debugElement.query(By.css('.etiqueta')).classes[Colores.success]
    ).toBeTruthy();
  });
});
