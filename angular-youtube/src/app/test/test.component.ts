// import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef,
//   SimpleChanges,
//    OnChanges,
//    DoCheck,
//    AfterContentInit
//    } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css'],
//   encapsulation: ViewEncapsulation.ShadowDom
// })
// export class TestComponent implements OnInit,OnChanges, DoCheck,{

// @Input('sendingValue') public receivedValue;
//   @Input() public registerAdmin;
// @ViewChild('random') accessingRandom:ElementRef;


//   //create a instance of emitter

// @Output() public childEvent = new EventEmitter();

// constructor() {
//     console.log('constructor called');
//    }
// ngOnChanges(changes: SimpleChanges): void {
//     console.log('changes called');
//     console.log(changes);

//    }

// ngOnInit() {
//     console.log('ngon init called');
//   }
// ngDoCheck(): void {
// console.log('do check called');
// }

// ngAfterContentInit(): void {
//   //Called after ngOnInit when the component's or directive's content has been initialized.
//   //Add 'implements AfterContentInit' to the class.

// }

// ngAfterContentChecked(): void {
//   //Called after every check of the component's or directive's content.
//   //Add 'implements AfterContentChecked' to the class.

// }

// ngAfterContentInit(): void {
//   //Called after ngOnInit when the component's or directive's content has been initialized.
//   //Add 'implements AfterContentInit' to the class.

// }

// ngAfterContentChecked(): void {
//   //Called after every check of the component's or directive's content.
//   //Add 'implements AfterContentChecked' to the class.

// }

// ngOnDestroy(): void {
//   //Called once, before the instance is destroyed.
//   //Add 'implements OnDestroy' to the class.

// }
// fireEvent(){
//     this.childEvent.emit('hey code evolution');
//     let a = this.accessingRandom.nativeElement.value;
//     console.log(a);
//   }

// }
