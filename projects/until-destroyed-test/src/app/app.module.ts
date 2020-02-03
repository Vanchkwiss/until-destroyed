import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UntilDestroyedTestComponent } from './until-destroyed-test/until-destroyed-test.component';
import { UntilDestroyedContentTestComponent } from './until-destroyed-test/until-destroyed-content-test/until-destroyed-content-test.component';

@NgModule({
  declarations: [
    AppComponent,
    UntilDestroyedTestComponent,
    UntilDestroyedContentTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
