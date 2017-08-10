import $ = require('jquery');
declare var shu;
declare var ActiveData;

export module ActiveCalendarEvents {
  
  export function getActiveCalendarEvents(syndicationName: string, syndicationId: string): any {
    console.log(syndicationName + " " + syndicationId);
    ActiveData.Events('https://events.shu.edu/handlers/query.ashx?id=' + syndicationId + '&tenant=&site=', function(response) {  $('#'+syndicationName).append(response.data);});
  }
}