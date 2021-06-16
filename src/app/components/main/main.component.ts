import { AfterViewInit, Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { ResizeService } from './resize.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  // Applying theme class
  @HostBinding('class.dark-theme') darkTheme = false;
  sidenavModeAttr = 'side';
  boxedLayoutAttr = false;
  sideNavOpened = false;

  appTitle: string = 'CVC-Financial Schedules';
  appAbbr: string = 'CVC';

  constructor(
    public resizeService: ResizeService
  ) {
    this.onResize();
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    // Resize after sidenav open on startup to draw charts correctly
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
    setTimeout(() => this.sideNavOpened = true, 0);
  }

  set sidenavMode(val) {
    this.sidenavModeAttr = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }

  get sidenavMode() {
    return this.sidenavModeAttr;
  }

  set boxedLayout(val) {
    this.boxedLayoutAttr = val;
    setTimeout(() => this.resizeService.resizeInformer$.next(), 500);
  }

  get boxedLayout() {
    return this.boxedLayoutAttr;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 800) {
      this.sideNavOpened = false;
      this.sidenavModeAttr = 'over';
    }
  }

}
