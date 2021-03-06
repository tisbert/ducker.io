import { MaterialModule } from '@angular/material';
import 'hammerjs';

import '../../node_modules/tinymce/tinymce.js';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  NgModule, /* CUSTOM_ELEMENTS_SCHEMA, */
  ApplicationRef
} from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { HeadToolbarComponent } from './parts/head-toolbar';
import { LoaderComponent } from './parts/loader';

import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { PagesControllerService } from './shared/pages-controller.service';
import { HomeComponent } from './home';
import { CalendarComponent } from './calendar/calendar.component';
import { DialogsModule } from './calendar/dialogs/dialogs.module';
import { PagesDialogsModule } from './pages/dialogs/dialogs.module';
import { CalendarIndexComponent } from './calendar/calendar-index/calendar-index.component';
import { PagesIndexComponent } from './pages/pages-index/pages-index.component';
import { PagesComponent } from './pages/pages.component';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';

import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { AuthGuard } from './_guards/auth.guards';

import { OrderByPipe } from './parts/orderBy.pipes';

import '../styles/styles.scss';
import '../styles/bootstrap-grid.css';
import '../styles/zmnv-paddings.css';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  PagesControllerService,
  AuthService,
  AuthGuard
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    CalendarComponent,
    CalendarIndexComponent,
    PagesIndexComponent,
    PagesComponent,
    NoContentComponent,
    XLargeDirective,
    HeadToolbarComponent,
    LoaderComponent,
    LoginComponent,
    OrderByPipe,
  ],
  imports: [ // import Angular's modules
    MaterialModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DialogsModule,
    PagesDialogsModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
