import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MainNavbar } from "../../shared/main-navbar/main-navbar";
import { MainFooter } from "../../shared/main-footer/main-footer";
import { Router, RouterModule } from '@angular/router';
import { ProfileService } from './profileservise';
import { profiledata } from './profileinterface';
import { CommonModule } from '@angular/common';
import { environment } from '../../core/environment/environment';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [MainNavbar, MainFooter,RouterModule,CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {

 cardContent:profiledata|null=null
private profileservice=inject(ProfileService);
constructor(private ref:ChangeDetectorRef){}


ngOnInit(): void {
    this.profileservice.getprofiledata().subscribe({
      next:(req)=>{
        this.cardContent=req.data

        this.ref.detectChanges()


        console.log(this.cardContent)
      },
      error:(err)=>{
        console.log("error",err);

      }
    })


}

//  get profileImage() {
//     return this.cardContent?.imgUrl
//       ? this.imgBaseUrl + this.cardContent.imgUrl
//       : './assets/images/profile-img.jpg';
//   }


   auth = inject(ProfileService);
  router = inject(Router);

  onLogout() {
    this.auth.logout().subscribe({
      next: () => {
        // this.auth.clearSession();
        this.router.navigate(['/auth']);
      },
      error: () => {
        // this.auth.clearSession();
        this.router.navigate(['/auth']);
      },
    });
  }
}
