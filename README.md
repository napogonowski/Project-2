# GA Project 2: Butter

#### Full-stack CRUD Application

## App Description

For Project 2 I created the application Butter to address my problem of forgetting to do my physio exercises. Butter is a Full-stack CRUD Application that allows users to create "Injury Profiles" and keep track of the exercises given to them by their physiotherapist. Drawing from my own experience dealing with injuries, I found that the community aspect at physiotherapy was particularly valuable. I tried to incorporate this social aspect via the “Butter Bunch” where users can share exercises and save ones they like

## App Screenshots

![Imgur](https://i.imgur.com/CmdG6Hk.png)
![Imgur](https://i.imgur.com/XEl52dX.png)
![Imgur](https://i.imgur.com/EvwO3Tv.png)
![Imgur](https://i.imgur.com/7318yNm.png)

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose
- Google OAuth
- Passport
- Method Override
- Sessions
- Bootstrap

## Getting Started
Unfortunately, I have not deployed my application on Heroku:
However, when this application ultimately does get deployed, all you will need a working Gmail account to access your very own profile.

## Reflections
I came into this project week quite overwhelmed by the content. My progress throughout project week severely halted by the need to change/refactor models, getting CRUD functionality working and understand what was required to pull off my vision. Due to the "unique" project context, I found it tricky to find solutions to problems to arose, which resulted significant time spent researching. Once I was able to figure out CRUD with 'profiles', I was able to use that as a guide to tackle the next two sets of CRUDS of my application. Each of these provided their own difficulties and errors along the way.

I still don't feel overly confident with the content, however, this project provided many opportunities for growth both personally and as a developer.

Next time I would plan/map out my application better. This would have given me a better road map to follow, focused my attention and saved me a significant amount of time i could have used elsewhere or finished my project at a reasonable hour.

## Project Next Steps
Ambitiously I had envisioned a few extra features that unfortunately were unable to be included. Time was against me and I had to prioritise functionality. However, if I had more time I would have liked to implement:

1. Journal: I wanted to provide a journal function so that users had the ability to reflect on their rehabilitation journey. Again, drawing from my own experiences, journaling was helpful with both processing how you’re feeling and as a reflection tool to see how far you progressed. The journal would have recorded the date created, completed exercises, and a review of the session.

2. Progress Bar: When visualising this project, the idea of a progress bar on the users' profile was something I really wanted to implement. The progress bar value would come from the product of "trainings per week" \* "the number of exercises" the user has in their exercise plan. Upon completion of a session, the user would self -report and increase the value of their progress bar Additional functionality was needed to make this work that I didn’t have the time to figure out.

3. YouTube API: My original plan was to incorporate YouTube API into the create function. Using the name given in the form as a search value, to pair the exercise with a physio related video. Due to my slow start, I had focus time and effort elsewhere. I ultimately found a workaround to still have YouTube videos in my project, however they are provided by the user.
