import { DoctorlistData } from "./doctorlist.DoctorData";

export interface DoctorApiResponse<T>{
  success:boolean;
  message:string;
  data: T ;
}
