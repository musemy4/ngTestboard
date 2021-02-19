// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home/home.component';
import { BoardComponent } from './component/board/board.component';
import { SigninComponent } from './component/member/signin/signin.component';
import { SignupComponent } from './component/member/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostViewComponent } from './component/board/post-view/post-view.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    SigninComponent,
    SignupComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule

  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [], //
  bootstrap: [AppComponent]
})
export class AppModule { }
