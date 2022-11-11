import { Component, HostBinding, OnInit} from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd} from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ScriptService } from './services/script.service';
import { JavaScriptService } from './services/javascript.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 
})
export class AppComponent implements OnInit {
  title = 'SuriXpress.UI';
  public isUserAuthenticated: boolean | undefined;
  showHeader = false;
  showFooter = false;

  constructor(private authService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute, private script:ScriptService, private javascript:JavaScriptService) {}

  ngOnInit(): void {
    this.authService.authChanged
    .subscribe(res => {
      this.isUserAuthenticated = res;
    })

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data['showHeader'] !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data['showFooter'] !== false;
      }
    });


 

  }
  
  public logout = () => {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
