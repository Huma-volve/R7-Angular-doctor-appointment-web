import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MainNavbar } from '../../shared/main-navbar/main-navbar';
import { MainFooter } from '../../shared/main-footer/main-footer';

import { Doctorservice } from './doctorservice';
import {
  DoctorlistData,
  DoctorSearchRequest,
  AllSpecialist,
} from './doctorlist.DoctorData';

@Component({
  selector: 'app-doctorlist',
  standalone: true,
  imports: [CommonModule, FormsModule, MainNavbar, RouterModule, MainFooter],
  templateUrl: './doctorlist.html',
  styleUrl: './doctorlist.scss',
})
export class Doctorlist implements OnInit {
  // دكاترة + تخصصات
  doctorcontainer: DoctorlistData[] = [];
  specialistcontainer: AllSpecialist[] = [];

  // Pagination
  currentPage = 1;
  pageSize = 9;
  totalPages = 0;
  totalDoctors = 0;

  // فلتر القائمة الجانبية
  filterlistshown = false;
 ref = inject(ChangeDetectorRef);

  // التخصص المختار من الكروت
  selectedSpecialityId: number | null = null;

  // فلتر الريكوست
  filters = {
  keyword: '',
  specialityId: null as number | null,
  gender: 0,   // 0 = all
  sortBy: 0    // 0 = default
};

  // الكاروسيل
  @ViewChild('cardsContainer') cardsContainer!: ElementRef<HTMLDivElement>;
  canScrollLeft = false;
  canScrollRight = false;

  constructor(private doctorService: Doctorservice) {}

  // -------------------- lifecycle --------------------
  ngOnInit(): void {
    this.loadDoctors(1);      // أول صفحة دكاترة
    this.loadSpecialists();
    console.log(this.doctorcontainer);
    console.log('doctorlist init')
      // تحميل التخصصات من الـ API
  }

  // -------------------- API calls --------------------
  loadDoctors(page: number): void {
  this.currentPage = page;

  const body: DoctorSearchRequest = {
    keyword: this.filters.keyword,
    specialityId: this.filters.specialityId,
    gender: this.filters.gender,
    sortBy: this.filters.sortBy,
    pageNumber: this.currentPage,
    pageSize: this.pageSize
  };

  this.doctorService.searchdoctorlisrt(body).subscribe({
    next: (res) => {
      this.doctorcontainer = res.data.doctors;
      this.currentPage = res.data.currentPage;
      this.totalPages = res.data.totalPages;

      // this.totalDoctors = res.data.totalDoctors;
       this.ref.detectChanges()

      console.log('doctors length: ', this.doctorcontainer.length);
      console.log('doctors: ', this.doctorcontainer);
    },
    error: (err) => console.error(err)
  });
}

  loadSpecialists(): void {
    this.doctorService.getAllspecialists().subscribe({
      next: (res) => {
        this.specialistcontainer = res.data;
        this.ref.detectChanges()
      },
      error: (err) => console.error('getAllspecialists error:', err),
    });
  }

  // -------------------- filter side menu --------------------
  togglefiltermenu(): void {
    this.filterlistshown = !this.filterlistshown;
  }



onSearch(value: string): void {
  console.log('search value = ', value);
  this.filters.keyword = value;
  this.loadDoctors(1);
}



  onOpenMap(): void {
    // هنا لو هتفتحي خريطة أو مودال
    console.log('open map clicked');
  }

  // -------------------- specialties carousel --------------------

  onClickSpeciality(card: AllSpecialist): void {
    this.selectedSpecialityId = card.id;
    this.filters.specialityId = card.id;
    this.ref.detectChanges()
    this.loadDoctors(1);
  }

  scrollRight(): void {
    if (!this.cardsContainer) return;
    this.cardsContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    this.onScroll();
  }

  scrollLeft(): void {
    if (!this.cardsContainer) return;
    this.cardsContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    this.onScroll();
  }

  onScroll(): void {
    if (!this.cardsContainer) return;

    const el = this.cardsContainer.nativeElement;
    this.canScrollLeft = el.scrollLeft > 0;

    const maxScroll = el.scrollWidth - el.clientWidth;
    this.canScrollRight = el.scrollLeft < maxScroll;
  }

  // -------------------- pagination --------------------
  get canGoNext(): boolean {
    return this.currentPage < this.totalPages;
  }

  get canGoPrev(): boolean {
    return this.currentPage > 1;
  }

  nextPage(): void {
    if (this.canGoNext) {
      this.loadDoctors(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.canGoPrev) {
      this.loadDoctors(this.currentPage - 1);
    }
  }
}
