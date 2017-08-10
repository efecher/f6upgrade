import $ = require('jquery');
import jQuery = require('jquery');

import 'foundation-sites';


import { ActiveCalendarEvents } from './ActiveCalendarModule';
import { SlickSlider } from './Slick/SlickSliderModule';

import { Navigation } from './Navigation/NavigationFunctions';

//variables defined elsewhere referenced here, to satisfy Typescript compiler
declare var isCalcPage: boolean;




// "shu global object" (namespace)
// if shu hasn't been defined yet, create 
// (it may have been in a ColdFusion Custom Script already)
if(typeof(shu) === 'undefined') {
  var shu = {
    AC: [],
    isCalcPage: true
  };
}

//this would normally be inserted on a page by a custom script 
//to denote there is an event syndication to be imported.
//change to "declare var AC" above 
var AC = [
  {
    syndicationName: 'CommunicationandtheArtsHomepageBox',
    syndicationID: 'b20076434eee4a9c9c60cfe735261f09'
  }
]


if(typeof(AC) !== 'undefined') {
  shu.AC = AC;
}


$(document).ready(function() {
  

  // example of getting an Active "Dude" Calendar event 
  ActiveCalendarEvents.getActiveCalendarEvents(shu.AC[0].syndicationName,shu.AC[0].syndicationID);

  // example of checking for types of navigation on the page and applying
  // our accessibility modifications
  if($('.main-nav')) {
    // apply hover handler for home page mega menus
    Navigation.mainNavHoverHandler();
    // apply accessibility tabbing support for home page menus
    Navigation.megaMenuTabbing();
  }

  //example of how to call the units data script to get element data 
  //from Commonspot
  $.ajax({
    url: '//site8.auth.dev.shu.commonspotcloud.com/_cs_apps/data/units-data.cfm',
    success: function(response) {
      var myData = response;
      myData = JSON.parse(myData);
      console.log(myData.data.length);
      console.dir(myData.data);
      var i: number;
      var output: string;
      for(i=0; i<myData.data.length; i++) {
        output += `<br>
          <h1>` + myData.data[i].prefix + ` ` + myData.data[i].name + `</h1>
          <h2>` + myData.data[i].building + `</h2>`;
      }
      $('#stuff').append(output);
    }
  });

  $(document).foundation();
});

