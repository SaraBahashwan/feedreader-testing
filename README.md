
## Table of Contents

* Project Overview
* How to run the application?
* How was the project evaluated?

## Project Overview

* A Udacity FEND project 4
This project demonstrates browser based testing using Jasmine.

## How to run the application ?

* Open index.html in the browser. This will display both the page and the Jasmine test suites (in the bottom of the browser).

## How was the project evaluated? (Test suites and tests)

I have created 4 different test suites, with 8 separated Jasmine tests:

1:RSS feeds , checks if :
- RSS sources are defined .
- RSS contain a valid URL .
- RSS not be empty or undefined .

2:Menu behaviour , checks if :
- The Menu is hidden by default 
- The Menu change visibility if icon is clicked .
- The Menu hides when the menu icon is clicked again .

3: Initial Entries loaded on the page
- contain at least one entry element.

4: New Feed selection load asynchronously,once another source is selected. 
- content changes when the feed reloads(has new content).