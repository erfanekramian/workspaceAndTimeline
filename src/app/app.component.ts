import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TimelineComponent } from './timeline/timeline.component';
import { WorkspaceComponent } from './workspace/workspace/workspace.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i4Twins';
  constructor(private dialog:MatDialog)
  {

  }

  openWorkspaceDialog(): void {
    const dialogRef = this.dialog.open(WorkspaceComponent, {
      width: '500px',
      data: {}
    });

  }

  openTimelineDialog()
  {
    const dialogRef = this.dialog.open(TimelineComponent, {
      width: '600px',
      data: {}
    });
  }
}
