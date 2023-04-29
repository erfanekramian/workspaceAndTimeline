import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkspaceComponent } from './workspace/workspace/workspace.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimelineComponent } from './timeline/timeline.component';
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    OverlayModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
  
   
    
    
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
