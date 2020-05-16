import {
  Component,
  ViewEncapsulation,
  Renderer,
  ElementRef,
} from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = "Shashank-Jain-Portfolio";
  isCollapsed = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer,
    private elref: ElementRef
  ) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res) => {
        let childRouteSnapshot = this.route.firstChild.snapshot;
        let url = childRouteSnapshot.data.imageUrl;
        console.log(url);
        console.log(childRouteSnapshot);
        console.log(res);

        // this.renderer.setElementStyle(
        //   this.elref.nativeElement.childNodes[0],
        //   "background-image",
        //   "url(" + url + ")"
        // );
      });
  }
}
