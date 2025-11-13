export const environment = {
  apiBaseUrl: 'https://cure-doctor-booking.runasp.net/',
  endpoints:{
    doctors:{
      getalldoctors:'api/Customer/Doctors/GetAllDoctors',
      allspecialist:'api/Customer/Specialists/GetAllSpecialists',


    },
    editProfile:{
      getUser:'api/profile/Editprofile/getprofile',
      updateUser:'api/profile/editprofile/updateprofile'

    }
  },

};
