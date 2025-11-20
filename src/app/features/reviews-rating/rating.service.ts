import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../core/environment/environment";

@Injectable({
  providedIn: 'root'
})

export class RatingService{
  reviews = signal<any[]>([]);

  private httpClient = inject(HttpClient)


  updateReviews(res : any){
    this.reviews.update(list => [...list, res]);
  }

  getReviews(){
    return this.httpClient.get(`api/Customer/Reviews/GetReviews`)
    }

  addReview(comment: string | any, rating: number){
    const today = new Date();

    this.updateReviews({
      doctorId: 1,
      rating,
      comment,
      createAt: today
  })

    return this.httpClient.post(`api/Customer/Reviews/AddReview`,{
      doctorId: 1,
      rating,
      comment,
      createAt: today
    })
  }

  GetReviewsByDoctor(){
    return this.httpClient.get(`api/Customer/Reviews/GetReviewsByDoctor`)
  }

  UpdateReview(){
    const userToken = localStorage.getItem('userToken')? localStorage.getItem('userToken') : '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json',
    });

    return this.httpClient.put(`api/Customer/Reviews/UpdateReview`,{headers})
  }

  DeleteReview(){

    return this.httpClient.delete(`api/Customer/Reviews/DeleteReview`)
  }

}

