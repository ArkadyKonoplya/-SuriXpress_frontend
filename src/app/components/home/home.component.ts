import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptService } from 'src/app/services/script.service';
import { JavaScriptService } from 'src/app/services/javascript.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent implements OnInit {

  constructor(private script:ScriptService, private javascript:JavaScriptService) { }
  
  
  ngOnInit(): void {

    
  }

}
