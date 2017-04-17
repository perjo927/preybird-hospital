import { AppComponent } from './app.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavItem } from './models/navitem.model';
import { ConsultationService } from './services/consultation.service';
import { DoctorService } from './services/doctors.service';
import { ImageService } from './services/image.service';
import { MachineService } from './services/machines.service';
import { PatientService } from './services/patient.service';
import { RoomService } from './services/rooms.service';

xdescribe('As a Developer I want an AppComponent so that I can bootstrap my web app', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let baseServiceStub = {
    fullUrl: 'foo',
    getAll: (): any => {
      return null;
    },
    get: (id: string): any => {
      return null;
    },
    post: (body: any): any => {
      return null;
    }
  };

  describe('Given that I have configured an App Component', function () {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        providers: [
          { provide: ConsultationService, useValue: baseServiceStub },
          { provide: DoctorService, useValue: baseServiceStub },
          { provide: ImageService, useValue: baseServiceStub },
          { provide: MachineService, useValue: baseServiceStub },
          { provide: PatientService, useValue: baseServiceStub },
          { provide: RoomService, useValue: baseServiceStub }
        ]
      })
        .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('h1'));
    });

    describe('When I compile it', () => {

      it('Then a component must have been created', () => {
        expect(comp).toBeDefined();
      });

    });

    it('And then it must have a title', () => {
      fixture.detectChanges();
      const h1 = de.nativeElement;
      expect(h1.innerText).toMatch(/Hospitality/i,
        '<h1> should say something about "Hospitality"');
    });
  });
});
