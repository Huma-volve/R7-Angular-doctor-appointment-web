export interface DoctorlistData {



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


export interface AllSpecialist{
            id: number,
            title: string,
            emoji: string
}


export interface DoctorSearchRequest {
  keyword: string;
  specialityId: number | null;
  gender: number;    // 0 = All
  sortBy: number;    // 0 = Default
  pageNumber: number;
  pageSize: number;
}


export interface DoctorSearchResponse{
  success: boolean;
  message: string;
  data: {
    currentPage: number;
    totalPages: number;
    totalDoctors: number;
    pageSize: number;
    doctors: DoctorlistData[];
  };
}

