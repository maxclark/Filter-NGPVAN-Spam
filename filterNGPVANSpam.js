// Adapted with thanks from:
//   https://www.geektron.com/2014/01/how-to-filter-gmail-using-email-headers-and-stop-via-spam/

function filterNGPVANSpam() {
  var threads = GmailApp.getInboxThreads(0, 5);
  threads.concat(GmailApp.search('category:promotions', 0, 5));
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) {
      var message = messages[j];
      var body = message.getRawContent();

      var matchedNGPVAN =
        body.match(/^List-Unsubscribe:\s*<(.*ngpvan\.com.*)>\s*$/m) ||
        body.match(/^Received:.*ngp(van|web)\.com/m);

      if(matchedNGPVAN){
        GmailApp.moveThreadToSpam(threads[i]);
      }
      Utilities.sleep(500);
    }
  }
}