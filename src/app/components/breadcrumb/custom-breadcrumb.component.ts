import { Component, AfterContentInit, NgZone, Input } from '@angular/core';
import { Router, ActivatedRoute, Params, PRIMARY_OUTLET } from '@angular/router';
import { _ } from 'underscore';


interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html',
  styleUrls: ['./custom-breadcrumb.component.scss']
})
export class CustomBreadcrumbComponent implements AfterContentInit {

  public breadcrumbs: any[] = [];
  public breadcrumbTitle: string = '';

  @Input() urlHelp = '';
  @Input() title: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ngZone: NgZone) {
    if (this.breadcrumbs === undefined) {
      this.breadcrumbs = [];
    }
  }

  ngAfterContentInit() {
    const root: ActivatedRoute = this.activatedRoute.root;
    this.setBreadcrumbs(this.getBreadcrumbs(root));
  }

  private setBreadcrumbs(breads: IBreadcrumb[]) {
    this.breadcrumbs = breads;
  }

  private getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const ROUTE_DATA_BREADCRUMB = 'breadcrumb';
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      url += `/${routeURL}`;
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
        params: child.snapshot.params,
        url
      };
      if (_.findWhere(breadcrumbs, {label: child.snapshot.data[ROUTE_DATA_BREADCRUMB]}) === undefined) {
        breadcrumbs.push(breadcrumb);
        if (this.title === undefined) {
          this.breadcrumbTitle = child.snapshot.data[ROUTE_DATA_BREADCRUMB];
        } else if (!!this.title) {
          this.breadcrumbTitle = this.title;
        }
      }
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

  print(): void {
    let printContents;
    let popupWin;
    const sections = document.getElementsByTagName('section');
    if (sections.length === 0) {
      return;
    }
    printContents = sections[0].innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>CVC</title>
          <style>
            .no-print, .no-print * {
              display: none;
            }
          </style>
        </head>
        <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
