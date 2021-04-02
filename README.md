Meet App

This meet application will use React and be built using the TDD technique. It uses the Google Calendar API and OAuth2 authentication flow. This application uses
serverless functions (AWS lambda) for the authorization server. 

This application can be viewed offline and passes Lighthouse's PWA checklist. Users can install the app on desktop and on their mobile homescreen. 

Technical Requirements:
  React, Google Calendar API, AWS Lambda, Github Pages
  
Key Features:
Featur 1: Filter Events By City
As a user, I should be able to “filter events by city” so that I can see the list of events that take place in that city

Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
Given user hasn't searched for any city
When the user opens the app
Then the user should see a list of all upcoming events-

Scenario 2: User should see a list of suggestions when they search for a city
Given the main page is open
When the user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they've typed

Scenario 3: User can select a city from the suggested list
Given the user was typing in a specifi name of a city textbox and the list of suggested cities is showing
When the user selects a city (e.g. "Tokyo, Japan") from the list
Then their city should be changed to that city (Tokyo) and the user should receive a list of upcoming events in that city

Feature 2: Show/Hide an event's details

As a user, I should be able to view an event, and then show/hide the additional details of that event.
Scenario 1: An event element is collapsed by default

Given: the elements are collapsed by default
When: the user views the events
Then: the user can expand and collapse elements at will

Scenario 2: User can expand an event to see its details
Given: the user should be able to expand the element to view its details
When: the user clicks on 'view details'
Then: the user will be able to view the details of the event

Scenario 3: User can collapse an event to hide its details
Given: the user can hide details of the element
When: the user clicks on 'hide details'
Then: the element's details will be hidden and the element collapsed

Feature 3: Specify Number of Events
As a user, I should be able to view the events displayed on the main page and change the number of
events I would like to see.

Scenario 1: When user hasn't specified a number, 32 is the default number
Given: 32 is the default number of events to be displayed on the main page
When: the user views the main page
Then: the page will default to 32 events on its page until the user performs an action

Scenario 2: User can change the number of events they want to see
Given: the user can change the number of events to be viewed
When: the user views the main page
Then: the user can choose the number of events to be displayed

Feature 4: Use the App Offline
As a user, I should be able to see data from the app while viewing it offline.

Scenario 1: Show cached data when there's no internet connection
Given: show cached data when offline
When: the user opens the application
Then: the user can view their saved data

Scenario 2: Show error when user changes the settings (city, time, range)
Given: error when the user tries to change saved settings
When: the user makes a change while offline
Then: the app will show error when a change is made while offline

Feature 5: Data Visualization
As a user, I should be able to view the upcoming events in each city displayed in a chart, so the
information is easy for me to read and interact with.

Scenario 1: Show a chart with a number of upcoming events in each city
Given: show a chart with each city's upcoming events
When: the user moves to view a city's events
Then: the user will be able to view a chart with the upcoming events in the selected city
