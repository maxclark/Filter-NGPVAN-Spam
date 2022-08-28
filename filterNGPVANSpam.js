// Copyright 2022, Max Clark
// 
// Copying and distribution of this file, with or without modification, are permitted in any medium without royalty, provided the copyright notice and this notice are preserved. This file is offered as-is, without any warranty.
// 
// Adapted with thanks from:
// https://www.geektron.com/2014/01/how-to-filter-gmail-using-email-headers-and-stop-via-spam/
// https://gist.github.com/canadaduane/b5da111903ff748429bd425227af271c

function filterNGPVANSpam() {
  // var threads = GmailApp.getInboxThreads(0, 5);
  // threads.concat(GmailApp.search('category:promotions', 0, 5));
  var threads = GmailApp.getInboxThreads(0,50);
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    // Logger.log(threads[i].getFirstMessageSubject());
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var body = message.getRawContent();

      var matchedNGPVAN =
        body.match(/^List-Unsubscribe:\s*<(.*ngpvan\.com.*)>\s*$/m) ||
        body.match(/^Received:.*ngp(van|web)\.com/m) ||
        body.match(/^List-Unsubscribe:\s*<(.*actionkit\.com.*)>\s*$/m) ||
        body.match(/^Received:.*actionkit\.com/m);

      if(matchedNGPVAN){
        GmailApp.moveThreadToSpam(threads[i]);
        // Logger.log('Moved to spam: %s', threads[i].getFirstMessageSubject());
      }
      Utilities.sleep(500);
    }
  }
}