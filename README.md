# trivia

* Wireframe

https://app.moqups.com/mwierenga/pxHfUIKpyi/edit/page/ad64222d5

* Project Itemized List

https://trello.com/b/ZoKXspYv/project-1


*  Technologies Used

For my Trivia site, I used HTML, CSS, and JavaScript. Additionally, CSS media queries were used to make the site responsive and one constructor function was created in JavaScript in order to create subsequent trivia questions.

* Approach Taken

Beginning with the wireframe, I used HTML and CSS to lay out and place the featured elements. My first shot at the functionality tried to include all properties and methods into one object constructor and its prototype. I also decided to bring one of my stretch goals into my primary goals. This determined how complex the JavaScript would be. Because I thought that keeping all trivia questions in the same space (each one replacing the previous one) would make the game more enjoyable, I decided to go the complex route.

When I wasn't able to make my first attempt work, I narrowed my object constructor down to just properties, using global functions instead of methods. The biggest obstacle in doing this was programming the Next Question button to replace the following question with the current question. I was finally able to do this by creating a global variable called counter that served as the index number for my questionArray object.

My next obstacle was switching from player 1 to player 2. After toying around with my switch function, I finally had all the lines in the correct order.

* Installation Instructions

Playing trivia is pretty straightforward, but here are the instructions included in the game:

To begin, press the Start button.

For each correct answer you choose, one point will be awarded. Each Player will answer 10 trivia questions each. After the second Player has taken their turn, scores will be compared and a winner decreed from on high.

* Unsolved Problems

I'm happy to report that all obstacles have been overcome . . . so far.