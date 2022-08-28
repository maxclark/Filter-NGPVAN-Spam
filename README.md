# Filter NGPVAN Spam

Are you constantly receiving emails from random politicans and political action committees you've never heard of? Unfortunately once your email is in the machine it's shared freely with no way out.

Clicking the spam button is easy, but still annoying to receive these in the first place. Thanks to [Duane Johnson](https://twitter.com/canadaduane) I found a better solution using [Google Apps Script](https://developers.google.com/apps-script).

[Filter-NGPVAN-Political-Emails.md](https://gist.github.com/canadaduane/b5da111903ff748429bd425227af271c)

This code reads the latest 50 messages in your inbox on a timed interval and moves any matching messages to the Spam folder.

## Installation

1. Go to https://script.google.com
2. Create a New Project
3. Replace the `Code.gs` file it creates for you with the javascript below (copy/paste)
4. Save the script
5. Go to Triggers (looks like an alarm clock on left-hand side)
6. Create a Trigger that acts every 10 minutes and calls `filterNGPVANSpam`
7. You'll need to authorize this script to act on your behalf, which may require that you use the scary "Advanced" section to allow the script to read/write to your email inbox.