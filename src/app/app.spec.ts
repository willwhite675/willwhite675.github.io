import { TestBed } from '@angular/core/testing';
import { MainPage } from './Main-Page/main-page';

describe('MainPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPage],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MainPage);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(MainPage);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, willwhite675-github-io');
  });
});
