import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AreaAlunoComponent } from './area-aluno/area-aluno.component';
import { AreaInstrutorComponent } from './area-instrutor/area-instrutor.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './login/auth.service';
import { AuthGuardsService } from './guardas/auth.guards';
import { ChildGuards } from './guardas/child.guards';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AreaAlunoComponent,
    AreaInstrutorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    AuthService,
    AuthGuardsService,
    ChildGuards
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
