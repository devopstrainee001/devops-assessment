import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from "@angular/core";
import { FormsModule,ReactiveFormsModule, } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

import { BarComponent } from './bar/bar.component';
import{MatProgressBarModule} from '@angular/material/progress-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule} from '@angular/material/radio'



@NgModule({
    declarations: [AppComponent, BarComponent, ],
    imports: [BrowserModule, FormsModule, MatProgressBarModule, BrowserAnimationsModule,
         ReactiveFormsModule, MatRadioModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,],
    bootstrap: [AppComponent],
})
export class AppModule{}