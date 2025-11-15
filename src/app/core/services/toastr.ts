import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Toastr {
    subject = new Subject<string>();

    

    sandAlertMassege(massege:string){
  this.subject.next(massege)

   } 

  

  getalert(){
   return this.subject.asObservable()
  }
}

