export interface appointmentdoctordata{
  id: number;
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  about: string;
  rating: number;
  pricePerHour: number;
  experienceYears: number;
  imgUrl: string;
  reviewsCount: number;
  specialities: string[];
  licenses: any[];
  latitude: number;
  langtude: number;
  bookingCount: number;
  availableSlots: {
    id: number;
    doctorId: number;
    dateTime: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  }[];
}
