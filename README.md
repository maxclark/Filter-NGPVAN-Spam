# Filter NGPVAN Spam

Are you constantly receiving emails from random politicans and political action committees you've never heard of? Unfortunately once your email is in the machine it's shared freely with no way out.

Clicking the spam button is easy, but still annoying to receive these in the first place. Thanks to [Duane Johnson](https://twitter.com/canadaduane) I found a better solution using [Google Apps Script](https://developers.google.com/apps-script).

This code reads the latest 50 messages in your inbox on a timed interval and moves any matching messages to the Spam folder.

## Installation

1. Go to https://script.google.com
2. Create a New project (click the + New project button)
3. Click on "Untitled project" at the top and rename (I used "Filter NGPVAN Spam")
4. Code.gs will be selected in Files and have some default javascript. Replace the contents with the code from here [filterNGPVANSpam.js](https://github.com/maxclark/Filter-NGPVAN-Spam/blob/master/filterNGPVANSpam.js) (copy/paste)
5. Save the script (click the floppy icon next to run)
6. Go to Triggers (looks like an alarm clock on left-hand side)
7. Add Trigger (blue botton on the bottom right)
8. Function "filterNGPVANSpam", Event Source "Time-driven", Type "Minutes timer", Interval "Every 10 minutes"
9. You'll need to authorize this script to act on your behalf in the pop-up window, which may require that you use the scary "Advanced" section to allow the script to read/write to your email inbox.

## Forked from:

[Filter-NGPVAN-Political-Emails.md](https://gist.github.com/canadaduane/b5da111903ff748429bd425227af271c)