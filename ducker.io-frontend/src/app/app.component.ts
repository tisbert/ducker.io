/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';
import { EditorDirective } from './parts/tinymce.directive';

/*

 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  templateUrl: './app.component.html',
  providers: [  EditorDirective ]
})
export class AppComponent implements OnInit {

  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Ducker Application';
  public url = 'https://twitter.com/AngularClass';

  public loadingStatus = true;

  constructor(public appState: AppState, public _editta: EditorDirective) { }

  public ngOnInit() {
    console.debug('MAIN INIT OFF');    
  }



}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */