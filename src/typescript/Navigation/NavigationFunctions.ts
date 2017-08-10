import $ = require('jquery');
import jQuery = require('jquery');

export module Navigation {
  export function mainNavHoverHandler() {
    //main navigation drop downs - university home page
    $('.main-nav>li').each(function() { //hide any other mega-drops open
      $(this).mouseenter(function() {
        $(this).siblings().removeClass('hover');
        $(this).addClass('hover');
        $(this).siblings().find('.mega-drop').hide();
    
        $(this).find('.mega-drop').addClass('mega-drop-open').show();
        $('.mega-drop-open').mouseleave(function() {
          $(this).parent().removeClass('hover');
          $(this).parent().siblings().removeClass('hover');
          $(this).removeClass('mega-drop-open').hide();
        });
      });
    });
  }

  export function aboutNavTabbing() {
    // tabbing for About menu in header
    $('.top-nav li a.about').focus(function() {
      $('.drop').css({'display' : 'none'});
      $(this).parent().find('.drop').css({'display':'block'});
    });
    $('.top-nav li .drop a:last').focusout(function() {
      $('.drop').css({'display':'none'});
    });
  }

  export function megaMenuTabbing() {
    // tabbing for the mega-menus on the homepage
    $('.main-nav > li > a').focus(function() { 
      $('.mega-drop').css({'display' : 'none'});
      $(this).parent().find('.mega-drop').css({'display':'block'});
    });
    $('.mega-drop:last .row .columns a:last').focusout(function() {
      $('.mega-drop').css({'display':'none'});
    });
  }

  export function subsiteDropdownTabbing() {
    // tabbing for dropdowns in subsite home pages
    $('.menu1 > li > a').focus(function() { 
      $('.menu1-drop').css({'display' : 'none'});
      $(this).parent().find('.menu1-drop').css({'display':'block'});
    });
    $('.menu1-drop ul li:last a:last').focusout(function() {
      $('.menu1-drop').css({'display':'none'});
    });
  }

  export function eyebrowTabbing() {
    //tabbing for 'eyebrow' menu
    $('.univertsity-menu li .opener').focus(function() {
      $(this).parent().find('.drop').css({'display':'block'});
    });
    $('.holder .col:last ul li a:last').focusout(function(){
      $('.drop').css({'display':'none'});
    });
  }
}