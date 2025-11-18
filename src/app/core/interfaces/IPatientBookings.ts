export interface IPatientBookings {
data:IPatientBookingsResponse;
}

export interface IPatientBookingsResponse {
  totalRecords: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  data: IAppointmentItem[];
}

export interface IAppointmentItem {
  id: number;
  doctorId: number;
  doctorName: string;
  doctorSpeciality: string;
  doctorImg: string;
  patientId: number;
  patientName: string;
  payment: string;
  status: string;
  paymentUrl: string;
  appointmentAt: string; 
}
