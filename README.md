# _Mr. Roboger's Neighborhood_

#### _Epicodus Independent Project - Mr. Roboger's Neighborhood, 03.07.2020_

#### By _**Tatiana Moroz**_

## Description

_A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:_

* Numbers that contain a 1: all digits are replaced (all digits) with "Beep!" 
* Numbers that contain a 2: all digits are replaced (all digits) with "Boop!" 
* Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?" 
##### _Above exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third._ 

* In the range of numbers from 0 to the users inputted number: 1 is replaced with "Beep!", 2 is replaced with "Boop!", and 3 is replaced with "Won't you be my neighbor?"
A user can enter a new number and see new results over and over again.

## Setup/Installation Requirements

* _Clone this repository https://github.com/tati-it/roboger.git_
* _Use a terminal of your choice to access the webpage and its files by inputting: "git clone (the above clone link)"_
* _Open the folder and open the link in the web browser of your choice to view it._
* _gh-pages link: http://tati-it.github.io/roboger_


## Support and contact details

_If you run into any issues or have questions, ideas or concerns please contact me tatmoroz@msn.com_

## Technologies Used

_HTML_
_CSS_
_Bootstrap_
_JS_
_jQuery_

## Specifications

| Behavor   |     Input Example    |  Output Example |
|---------- |:---------------------:|----------------:|
| The program returns a warning "PLEASE ENTER ANY NUMBER" if users didn't enter a number  |   no input   | PLEASE ENTER ANY NUMBER
| The program returns a range of numbers from 0 to the users inputted number  |  4        | 0, 1, 2, 3, 4           |
| The program returns a range of numbers from 0 to the users inputted number, but 1 is replaced with "Beep!" |  4        | 0, "Beep!", 2, 3, 4           |
| The program returns a range of numbers from 0 to the users inputted number, but 1 is replaced with "Beep!"and 2 is replaced with "Boop!" |  4        | 0, "Beep!", "Boop!", 3, 4           |
| The program returns a range of numbers from 0 to the users inputted number, but 1 is replaced with "Beep!", 2 is replaced with "Boop!", and 3 is replaced with "Won't you be my neighbor?"|  4        | 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4           |
| All digits are replaced with "Beep!" if number contains 1:  |    199   |   "Beep!"  |
| All digits are replaced with "Boop!" if number contains 2:  | 25 |   "Boop!"  |
| All digits are replaced with "Won't you be my neighbor?" if number contains 3:  | 363 |   "Won't you be my neighbor?" |
| Prioritizes replacement rule for numbers containing 2 over replacement rule for numbers containing 1   |      21      |  "Boop" |
| Prioritizes replacement rule for numbers containing 3 over replacement rule for numbers containing 1   |      13      |  "Won't you be my neighbor?" |
| Prioritizes replacement rule for numbers containing 3 over replacement rule for numbers containing 2   |     23      |  "Won't you be my neighbor?" |
| Prioritizes replacement rule for numbers containing 3 over replacement rules for numbers containing 1 and 2  |      123      |  "Won't you be my neighbor?" |

### License

*This application is licensed under the MIT license*

Copyright (c) 2020 **_Tatiana Moroz_**
