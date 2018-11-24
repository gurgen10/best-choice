import { Component, OnDestroy, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public title = 'Best choice';
  public showSideBar: Boolean = false;
  private subscriptions: Subscription;

  constructor(private router: Router) {
    this.subscriptions = router.events.subscribe((val) => {
      if (this.router.url == '/') {
        this.showSideBar = false;
      } else {
        this.showSideBar = true;
      }
    });
  }

  ngOnDestroy(){
    this.subscriptions.unsubscribe();
  }
}
