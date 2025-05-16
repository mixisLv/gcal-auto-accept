# Auto Accept Pending Calendar Invites

A simple script to automatically accept all pending Google Calendar event invitations. Configure and run to streamline your calendar management by eliminating the need to manually accept each event.


* This script uses the Google Calendar API to automatically accept all events that are currently in a "pending" status on your Google Calendar. Save time and effort by automating the acceptance of meeting and event invitations.
* Automatically accepts all pending invitations in your Google Calendar. This script is ideal for users who receive a high volume of calendar invites and want to ensure they are automatically added to their schedule.
* Tired of manually accepting Google Calendar events? This script automates the process, ensuring that all pending invitations are automatically accepted and added to your calendar. Configure the script to run periodically for continuous automation.
* A lightweight script that leverages the Google Calendar API to scan for and automatically accept all pending event invitations. This helps maintain an up-to-date calendar without manual intervention.

## How to Use This Script

    Open Google Apps Script:
        Go to your [Google Apps Script](https://script.google.com).
        Click on "New Project" button.

    Copy and Paste:
        Delete any existing code.
        Copy the entire code block above and paste it into the script editor.

    Save the Script:
        Click the floppy disk icon (Save project).
        Give your script a name (e.g., "AutoAcceptCalendar").
        Click "OK."

    Authorize the Script:
        You will likely see a prompt asking for authorization. This is necessary for the script to access your Google Calendar.
        Click "Review permissions."
        Select your Google account.
        You might see a warning about the app not being verified. Click "Advanced" and then "Go to [Your Project Name] (unsafe)." (This is because you wrote the script yourself).
        Click "Allow" to grant the necessary permissions.

    Set Up a Time-Driven Trigger (to run automatically):
        In the script editor, select the function setupTrigger from the dropdown menu next to the play button (Run).
        Click the play button (Run).

    Run Manually (for testing or immediate effect):
        In the script editor, select the function autoAcceptEvents from the dropdown menu next to the play button (Run).
        Click the play button.
        Check your Google Calendar; any pending invitations should now be accepted.
