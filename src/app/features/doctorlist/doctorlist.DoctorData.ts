export interface DoctorlistData {
            id: number,
            fullName: string,
            about: string,
            imgUrl: string,
            specialityId: number,
            specialistTitle: string,
            address: string,
            rating:number,
            distance: null,
            price: number,
            isFavourite: boolean,
            endDate: null
            startDate: null,
}


export interface AllSpecialist{
            id: number,
            title: string,
            emoji: string
}
