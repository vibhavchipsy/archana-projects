import { Component, AfterViewInit } from '@angular/core';
import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@Component({
  selector: 'app-homepage-banner',
  standalone: true,
  imports: [],
  templateUrl: './homepage-banner.component.html',
  styleUrl: './homepage-banner.component.css',
})
export class HomepageBannerComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        autoplay: {
          delay: 500,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index: number, className: string): string => {
            return `<span class="${className}">${index + 1}</span>`;
          },
        },
      });
    }
  }
}
