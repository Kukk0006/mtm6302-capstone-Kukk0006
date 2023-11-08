# mtm6302-capstone-Kukk0006
Web Dev III Capstone Project
Cassie Kukkonen
SID #041-039-803
Intended Project -Astronomy Picture of the Day Search

I went for more of an App feel rather than a static website.  There will be interactive elements, the main ones are using the telescope to access the picture of the day.  There will be options to view the picture without the overlay, as well as learning more.  The favorites button will be on all 3 of the screens.  Clicking on the books will access the favorites or the past pictures of the day.  I will be using Turn.Js to create the book effect, it adds animation that looks like page turns.  The favorites will look like a photo album with two pictures per page.  On the bottom left of each picture will open the choice to read more or delete the favorite.  The past pictures will have one picture per pages, and provide the additional information about each by default.  The first page will allow the user to jump to a specific date.  I chose a drop down menu, so there isn't a conflict with the date format.  The past pictures also have the option to favorite the image.

The fonts I chose is Exo for the main font.  It is clean and easy to read, but gives a sci-fi feel to it.  Consolas is the "header" font used on the title pages of the books.

I plan on making the books and telescope grow on hover for the desktop, maybe add a bit of a dropshadow that acts like a glow, and for tablet/mobile since there is no hover, it would be an animation on page load, then on click there will be the grow with a delay in the activation of the button.

All the assets minus the pictures from the APOD site are going to have a cartoon/hand drawn affect.  It will give a hand crafted, cute/whimiscal feel to the site overall.

Copyrights 

https://unsplash.com/photos/wG923J9naFQ
https://unsplash.com/photos/im8y4BO2hso 
https://pixabay.com/illustrations/telescope-astronomy-science-space-5083670/
https://unsplash.com/photos/lLDh9JppH2c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopy

Issues and Challenges - Part 3

tooltip for Telescope on home page https://www.w3schools.com/css/css_tooltip.asp
Positioning the telescope - making the image not resize with a percentage and make it a set size.

getting image to center on Today's Page - Using the bootstrap website I found “d-flex align-items-center justify-content-center h-100” to fix the problem

Overlay JS issue.  Initial JS had the style set to hidden, which removed the element, instead I changed the background transparency to keep the overlay there.  That created another problem that I will fix with JavaScript to make it so there is no overlay when there is an iframe.

Bootstrap navbar is pushing the background image even set to absolute - have not found a solution to this yet.  Possibly a fix with java script that when the hamburger menu is clicked, the button that is the telescope will move as well. 

https://stackoverflow.com/questions/51659414/populate-dropdown-list-with-current-day-month-and-year date picker code

Issues I will fix for capstone 4:

Mobile/single page for the book is having issues - Will make a carousel

Favorite book covers will be updated

Past pictures will change to a tablet background, and tablet asset on the table

Add search past pictures on the navbar

