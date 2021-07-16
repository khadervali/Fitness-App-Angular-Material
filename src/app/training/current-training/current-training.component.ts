import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training.component';


@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  @Output() onTrainingexit = new EventEmitter<void>();
  progressStatus = 0;
  timmer: number;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.stopOrResumeTimmer();
  }

  stopOrResumeTimmer() {
    this.timmer = setInterval(() => {
      this.progressStatus = this.progressStatus + 25;
      if (this.progressStatus >=100) {
        clearInterval(this.timmer);
      }
    }, 1000);
  }
  onStopTraining() {
    clearInterval(this.timmer);
    const dialogRef = this.dialog.open(StopTrainingComponent, { data: {
      progress: this.progressStatus
    }});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        this.onTrainingexit.emit();
      } else {
        this.stopOrResumeTimmer();
      }
    })

  }
}
