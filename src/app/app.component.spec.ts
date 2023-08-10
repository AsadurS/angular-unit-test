import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent],
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('test-app app is running!');
  });

  it('it gives true value', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const val = app.returnVal(false)
    expect(val).toBeTrue();
  })
  it('it gives false value', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const val = app.returnVal(true)
    expect(val).toBeFalse();
  })
  // it('check same value service and component', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const user = app.user
  //   const testService = fixture.debugElement.injector.get(TestService)
  //   expect(user.name).toEqual(testService.user.name);
  // })
  // it('it Call not  async data undefined', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   const testService = fixture.debugElement.injector.get(TestService);
  //   // let spy = spyOn(testService, 'getDetails')
  //   //   .and.returnValue(Promise.resolve('data'))
  //   app.getUser();
  //   fixture.detectChanges();

  //   expect(app.data).toBe(undefined);
  // })
  // it('It Call async with data ', async() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   app.getUser();
  //   fixture.detectChanges();
  //   await fixture.whenStable();
  //   expect(app.data).toBe('data');
  
  // })
});
