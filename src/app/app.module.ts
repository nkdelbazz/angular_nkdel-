import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from './services/user.service';
import {UserComponent} from './user/user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {NavComponent} from './nav/nav.component';
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModealBasicComponent} from './modeal-basic/modeal-basic.component';
import {RouterModule, Routes} from '@angular/router';
import { UserDataComponent } from './user-data/user-data.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NkmainfComponent } from './nkmainf/nkmainf.component';
import { NkutentiusersComponent } from './nkutentiusers/nkutentiusers.component';
import { NkupdateComponent } from './nkupdate/nkupdate.component';
import { NkuinsertComponent } from './nkuinsert/nkuinsert.component';
import { UtentiService } from './services/utenti.service';
import { DropdownuserComponent } from './dropdownuser/dropdownuser.component';
//import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailDetailsComponent } from './cocktail-details/cocktail-details.component';
import { NOTFOUNDPAGEComponent} from './not-found-page/not-found-page.component';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { AngularFontAwesomeComponent } from 'angular-font-awesome';
import { RoleNamePipe } from './progetto-rxjs/custompipe/role-name.pipe';
import { TestNicolaComponent } from './test-nicola/test-nicola.component';
import { TestNicolaChildComponent } from './test-nicola-child/test-nicola-child.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './login/login.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { const1,const2 ,URLBACKEND} from './shared/costant';
import { CorsExampleComponent } from './cors-example/cors-example.component';
import { Direct1Directive } from './directives/direct1.directive';
import { BoostrapTestingComponent } from './boostrap-test/boostrap-testing/boostrap-testing.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthInterceptor } from './inteceptor/auth-interceptor';
import * as $ from 'jquery';
import { AuthjwtserviceService } from './inteceptor/authjwtservice.service';


const routes: Routes = [
  /*
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'users/new',
    component: UserDetailComponent
  },
  {
    path: 'users/:id',
    component: UserDataComponent
  },
  {
    path: 'users/:id/edit',
    component: UserDetailComponent
  },

  */
  {
    path: 'nkdmainif/utentiusers',
    component: NkutentiusersComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'nkdmainif/utentiusers/dropdownUsers',
    component: DropdownuserComponent,
    canActivate: [AuthGuardService]
  },
  
  {
    path: 'nkdmainif/utentiusers/update/:id',
    component: NkupdateComponent,
    canActivate: [AuthGuardService]
  },

  {
    path: 'nkdmainif/utentiusers/insert',
    component: NkuinsertComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'nkdmainif',
    component: NkmainfComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    component: CocktailsListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cocktail-details/:id',
    component: CocktailDetailsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'testNicola',
    component: TestNicolaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'testNicola/details/:id',
    component: TestNicolaChildComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'testNicola/parent',
    component: ParentComponent,
  },
  {
    path: 'formValidator',
    component: FormValidatorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'boostrap-testing',
    component: BoostrapTestingComponent,
    canActivate: [AuthGuardService]
  },
  
  {
    path: 'main-login',
    component : ParentComponent
  },


  {
    path: '',
    pathMatch : 'full',
    redirectTo : 'main-login',
  },
  

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    ModealBasicComponent,
    UserDataComponent,
    NkmainfComponent,
    NkutentiusersComponent,
    NkupdateComponent,
    NkuinsertComponent,
    DropdownuserComponent,
    CocktailDetailsComponent,
    CocktailsListComponent,
    NOTFOUNDPAGEComponent,
    CocktailsListComponent,
    RoleNamePipe,
    TestNicolaComponent,
    TestNicolaChildComponent,
    ChildComponent,
    ParentComponent,
    LoginComponent,
    LoginReactiveFormComponent,
    FormValidatorComponent,
    CorsExampleComponent,
    Direct1Directive,
    BoostrapTestingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot((routes),{useHash: true}),  // settare il funzionamento corretto del server node.js 
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],


  entryComponents: [
  LoginComponent,
  LoginReactiveFormComponent
  ],

  providers: [
     UserService
    ,UtentiService,
    AuthGuardService,
    // per valorizzazione del token 
    AuthjwtserviceService,
    { provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptor, 
      multi: true }
   ],
  bootstrap: [AppComponent]
})
export class AppModule {
}





