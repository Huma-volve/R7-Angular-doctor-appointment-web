import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../core/environment/environment";

@Injectable({
  providedIn: 'root'
})

export class RatingService{

  private httpClient = inject(HttpClient)

  getReviews(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });
    return this.httpClient.get(`${environment.baseUrl}api/Customer/Reviews/GetReviews`, {headers})
  }

  addReview(comment: string | any, rating: number){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });
    const today = new Date();
    return this.httpClient.post(`${environment.baseUrl}api/Customer/Reviews/AddReview`,{
      doctorId: 1,
      rating,
      comment,
      createAt: today
    },{
      headers
    })

  }

  GetReviewsByDoctor(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Customer/Reviews/GetReviewsByDoctor`,{
      headers
    })
  }

  UpdateReview(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Customer/Reviews/UpdateReview`,{
      headers
    })
  }

  DeleteReview(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.post(`${environment.baseUrl}api/Customer/Reviews/DeleteReview`,{
      headers
    })
  }

  // GetReviewsByDoctor/{doctorId}
  // DeleteReview/{doctorId}
  // UpdateReview/{doctorId}
}

