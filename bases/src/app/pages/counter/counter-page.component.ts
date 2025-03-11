import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

 @Component({
    templateUrl: './counter-page.component.html',
    styles: `
      button{
         padding:5px;
         margin: 5px 10px;
         width: 75px;
      }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
 })
export class CounterPageComponent{
   counter = 15;
   counterSignal = signal(10);
   constructor(){
      setInterval(()=>  {
         // this.counter +=1;
         // this.counterSignal.update((v) => v + 1)
         // console.log('tick');
      },2000);
   }
   increaseCounter(value: number){
      this.counter += value;
   }
   resetCounter(){
      this.counter = 15;
   }
}