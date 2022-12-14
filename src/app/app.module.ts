import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaInputComponent } from './components/ba-input/ba-input.component';
import { BaFormComponent } from './components/ba-form/ba-form.component';
import { BaHeaderComponent } from './components/ba-header/ba-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaValidationFeedbackComponent } from './components/ba-validation-feedback/ba-validation-feedback.component';
import { BaBookingInformationTableComponent } from './components/ba-booking-information-table/ba-booking-information-table.component';
// Apollo
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    BaInputComponent,
    BaFormComponent,
    BaHeaderComponent,
    BaValidationFeedbackComponent,
    BaBookingInformationTableComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, GraphQLModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
