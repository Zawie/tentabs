//Handles the home page prompt, and submits a search request to submitter.js
document.addEventListener('DOMContentLoaded', function() {

   var checkPageButton = document.getElementById('search_button');

   checkPageButton.addEventListener('click', function() {
      console.log("Hello!!!!!!!!!!!!!")
      
      chrome.tabs.getCurrent(function(tab) {
         chrome.tabs.remove(tab.id, function(){});
      });

   }, false);
    
}, false);
