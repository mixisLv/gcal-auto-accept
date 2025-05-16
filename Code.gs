/**
 * Automatically accepts all pending Google Calendar events for the current user.
 */
function autoAcceptEvents() {
  // Get the user's primary calendar.
  var calendar = CalendarApp.getDefaultCalendar();

  
  var startTime = new Date();
      startTime.setHours(0,0,0,0);

  var endTime = new Date(startTime.getTime() + 48 * 60 * 60 * 1000);
  
  Logger.log('startTime: ' + startTime + ', endTime: ' + endTime);

  // Get all events on the calendar that the user has been invited to and hasn't responded to.
  var events = calendar.getEvents(startTime, endTime, {
    "statusFilters": [CalendarApp.GuestStatus.INVITED]     
  });

  // Loop through each pending event.
  for (var i = 0; i < events.length; i++) {
    var event = events[i];

    Logger.log('Event: ' + event.getTitle() + ' (' + event.getStartTime() + ') My Status: ' + event.getMyStatus());
    // Set *your* response status to "yes" (accepted).
      //event.setMyStatus(CalendarApp.GuestStatus.YES);
      Logger.log('Accepted event: ' + event.getTitle() + ' (' + event.getStartTime() + ')');
  }

  Logger.log('Finished processing pending calendar invitations.');
}

/**
 * Sets up a time-driven trigger to run the autoAcceptEvents function periodically.
 */
function setupTrigger() {
  // Delete any existing triggers for this function.
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "autoAcceptEvents") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Create a new daily trigger that runs at a specific time (e.g., every hour).

  ScriptApp.newTrigger('autoAcceptEvents')
      .timeBased()
      .everyDays(1)
      //.everyHours(1) // You can adjust the frequency (e.g., everyMinutes(30), everyDays(1) at a specific hour).
      .atHour(5)
      .create();


  ScriptApp.newTrigger('autoAcceptEvents')
      .timeBased()
      .everyDays(1)
      .atHour(19)
      .create();

  ScriptApp.newTrigger('autoAcceptEvents')
      .timeBased()
      .everyDays(1)
      .atHour(22)
      .create();

  Logger.log('Time-based trigger for autoAcceptEvents has been set up.');
}

/**
 * Removes the time-driven trigger for the autoAcceptEvents function.
 */
function removeTrigger() {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "autoAcceptEvents") {
      ScriptApp.deleteTrigger(triggers[i]);
      Logger.log('Time-based trigger for autoAcceptEvents has been removed.');
      return;
    }
  }
  Logger.log('No time-based trigger for autoAcceptEvents found.');
}
