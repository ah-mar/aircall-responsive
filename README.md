A Next JS app simulating call details screen for a typical phone app.

[![Node.js CI](https://github.com/ah-mar/aircall-responsive/actions/workflows/node.js.yml/badge.svg)](https://github.com/ah-mar/aircall-responsive/actions/workflows/node.js.yml)

## App Description

The bottom row footer buttons are non-functional. The header has filters for Inbox(non-archived) calls, All call and Archived calls. Clicking the filters fetch information from rest backend, filter the information and display the refreshed data.
The call cards are toggleable, they conditionally render additional details about the calls. There is an archive button in additional details which can be used archive/unarchive a specific call.

## App Pages and Components

App use a single page(index.js) to organise the three main components- Header, MainBody and Footer. All the components and sub-components can be found in the components folder.
The Header is made up of Logo and nav with three filter buttons for InBox, All and Archive.
The Footer is made up of 5 buttons. Each button has an icon and a description.
The MainBody consist of repeating call cards(ActivityCard.js). All cards functionally acts as a giant button and conditionally render additional information on click(toggleable). The additional information reveals archive button which can be toggled to archive/unarchive a call. Theare are two additional buttons -call and message which are non functional.

## State Management and Props

No external state managment libarary is used. The index file uses 3 state variables - filter, calls and refresh. The filter stores the current selected filter(default is inbox), calls stores all call details received from fetch call and set after component mount and refresh is just used as means to refresh the app after post request are made to archive/unarchive a call.
Header received the filter setter function as prop and use it to update the filter state, which in turn trigger dependent useEffect call to fetch and reset calls.
Footer received a derived value from state - the missed call. This is filter specific and calculate missed calls on each screen.
Activity card components in main receives activity props to render and refresh/setRefresh to toggle state after each post request. Each activity card also manage an internal state for toggling open additional details about the call.

## CSS

The app use Tailwind CSS. Global CSS file is imported at the root level (_app.js). There are some custom classes used in the global CSS to group repeating utility classes for header and footer buttons and Icons.
All the Icons are from HeroIcons since they integrate really well with tailwind.

## Scope for improvement

Showing call details on small screen is still a little hacky- the information is repeated, the grid is not being used as intended which result in ui on third line go a little out of alignment.
Showing navbars/buttons on  mobile view- the information density is way too much. The more popular/better design is to - pack all the buttons and nav on hidden menu which can then be revealed as required by hamburger menu. Possibility for the next iteration perhaps.
Use of random data from faker js library can sometimes cause hydration issues between server rendered and client rendered ui which affect app performance or cause errors. A non-random/ consistent dataset would be a better choice.
