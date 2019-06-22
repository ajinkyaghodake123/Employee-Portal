import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms'
import { RegisterationService } from './services/registeration.service';
import { HttpClientModule } from '@angular/common/http';
import { DisplayService } from './services/display.service';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DatePickerModule
  ],
  providers: [RegisterationService,
    DisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
