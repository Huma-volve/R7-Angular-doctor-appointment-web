import { Pipe, PipeTransform } from '@angular/core';
import { ITopRatedDoctors } from '../interfaces/topRatedDoctors';

@Pipe({
  name: 'searchAllDoctors'
})
export class SearchAllDoctorsPipe implements PipeTransform {

transform( args: ITopRatedDoctors[] , value: string,) {

 return   args.filter((res:ITopRatedDoctors) => res.fullName.toLowerCase().includes(value.toLowerCase()) || res.specialistTitle.toLowerCase().includes(value.toLowerCase()))
 
  }


}
