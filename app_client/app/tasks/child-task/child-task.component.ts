import { Component, OnInit, Output, Input, EventEmitter, OnChanges } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'child-task',
  templateUrl: 'app/tasks/child-task/child-task.component.html'
})

export class ChildTaskComponent implements OnInit, OnChanges {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  @Input() name: string;
  @Input() parentSubject: Subject<any> = new Subject();
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  public ngOnInit() { 
    this.parentSubject.subscribe((value: any) => {
      console.log('Subject from parent '+ value.message);
    });
  }

  public ngOnChanges(changes:any) {
    console.log(changes);
  }

  public notify(): void {
    this.name = 'Child';
    this.nameChange.emit(this.name);
    this.notifyParent.emit({name: 'Changed from Child'});
  }
}