import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ActiveModule } from './modules/active/active.module';
import { DeletedModule } from './modules/deleted/deleted.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, ActiveModule, DeletedModule , NgbModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
