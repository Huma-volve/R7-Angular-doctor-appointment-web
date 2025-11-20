export interface IaddFavourites{
    id:number
} 

 export interface IDoctorFavourite {
  id: number;
  fullName: string;
  about: string | null;
  imgUrl: string | null;
  specialityId: number;
  specialistTitle: string;
  address: string;
  rating: number;
  distance: number | null;
  isFavourite: boolean;
  price: number;
  startDate: string | null;
  endDate: string | null;
  latitude: number | null;
  longitude: number | null;
}
