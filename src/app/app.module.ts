import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListOrderComponent } from './components/list-order/list-order.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './components/data/data.component';
import { UsersComponent } from './components/users/users.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ActivesComponent } from './components/actives/actives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsAdminComponent } from './components/settings-admin/settings-admin.component';
import { InputBaseComponent } from './components/input-base/input-base.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { TableComponent } from './components/table/table.component';
import { SpinerComponent } from './components/spiner/spiner.component';
import { AuthGuardService } from './services/auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/order-list',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  { path: 'data', component: DataComponent },
  { path: 'order-list', component: ListOrderComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'clients', component: ClientsComponent },
  { path: 'actives', component: ActivesComponent },
  { path: 'settings', component: SettingsAdminComponent },
  { path: '**', component: PageNotFoundComponent }
];
registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListOrderComponent,
    FormCreateComponent,
    FormEditComponent,
    DataComponent,
    UsersComponent,
    ClientsComponent,
    ActivesComponent,
    PageNotFoundComponent,
    SettingsAdminComponent,
    InputBaseComponent,
    SearchInputComponent,
    TableComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
