import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var headerComp = this;
    $(window).on('scroll', function () {
      (function ($) {
        headerComp.headerStyle();
      })($);
    });
  }

  headerStyle = function () {
    if ($('.main-header').length) {
      var windowpos = $(window).scrollTop();
      if (windowpos >= 150) {
        $('.main-header').addClass('fixed-header');
        $('.scroll-to-top').fadeIn(300);
      } else {
        $('.main-header').removeClass('fixed-header');
        $('.scroll-to-top').fadeOut(300);
      }
    }
  }
}
