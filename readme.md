# Lost and Hound
![](https://lh3.googleusercontent.com/AL7_u-eIOylhO6o-jzlAcig-NNfrS54EdLO9dbvocYr05Kt1cTCSzZXCpGorFPzZ9i4zBmuY4maGDRdJoHguZCMuV9My2eaCaXGHUeffBI5yoUuOnS0gALsCBMBlRuhPOwaM77q5)
 

### Contributors
[Jacob Nelsen-Epstein](https://github.com/CyberImpXIII)

[Surya Fotedar](https://github.com/suryafotedar)

[Hunter Mason](https://github.com/MasonHN)

[Eric Anthony](https://github.com/anthon78)

[Ken Marut](https://github.com/friedpies)

[Chad Cramer](https://github.com/Chadcramer)

### About the App
*Lost and Hound* is a web app that aims to reconnect lost dogs with their owners. The app aggregates disparate sources of lost dog data and displays it on a single page so that owners don't have to search across multiple websites. Additionally, the app helps *finders* of lost dogs connect with their owners.

To use the app, a user first selects whether they have either lost or found a dog, and then is presented with an up-to-date  list of dogs matching their particular search. The user is then able to filter the results by location and description. If a user finds a match, they are able to contact the original poster and/or share a "flyer" via Facebook.

*Lost and Found* also has its own database where users can post both lost and found dogs which will be included in the search results.

### Tech Stack 
*Lost and Hound* was built primarily with ReactJS on the front end and Node/Express on the backend. Other technologies used are listed below: 

<img src="https://lh3.googleusercontent.com/ZIHOUCCxFaB7NirPhEX4K8cyTPIMvxvdJxpuhjb_qJ_dk-z7qEgD8riaR0ODXzXQZYn23zHpFiwGzxTDT88FTLeUMoPqlIjyLKoL1am8MH5pCoJExjL8SUC8uaeeiAjvQB0_vym6" width="100"/>
<img src="https://lh3.googleusercontent.com/xcong6Yn8NoueMYWPhEfO76dw0Nt70kiDVOCOygTFEQWpysHxcT-5jYzq9XWIgD3lvCGnGrjlhddm7WEOw9V1FlHivqFjZCXF9IDsfd7uQ2SxlI80roSJcnHvb0O7POvlYOPNvRG" width="100" />
<img src="https://lh5.googleusercontent.com/vMTp0AyoPyuTKcvkRNp3SfS9KLkAiBrL_2b3SBwgIOv9z4VvyTD2lHs47h1jmEsk2olzAWIJXyg0HBLTGnjJzWkCFV_Z0B6LFqVOz5dewjLykbC4eRjwZHTOnmBqeXhJccAnc512" width="100" />
<img src="https://lh5.googleusercontent.com/_RcI-sgNRX5J0olXzRycjQN3tysoTXbH8kXRfE0AtBY8KkDrINApsrfZGAkczZYGwKTPZlYdJXQyKmWO4zFzvON9Op6Ovcu0GQxwabxWfGJH__oRB6YCC-qD_3b2yj_efkprD8UP" width="100" />
<img src="https://lh5.googleusercontent.com/rdAoVdYKOCnmtev6t7DJrEY7mG4iYsRPqeTH0Z-OrlsVmiea3q5SMtOGNSa7HzJcyxcIcelTacG5gPNgyBoIviiNcLbohQAicvpldcfM32Klb_ewouDRd67OtYhUAU1CEZB4rBqB" width="100" />
<img src="https://lh6.googleusercontent.com/tKlT8lGB2bTDqSilr_a2y8vaO-QBUdcUIYASnslf-RAKTxUEiEBq-_gTVBP0irIP1ZWNuSvp1fouOJrQBXUr0joVmBZzNyOec4jBpOyVogPZMOYhPH6YQwYOiLdZnfuaDnFel9rn" width="100" />
<img src="https://lh5.googleusercontent.com/pqPRWyCMu39CU4GAERH3XI0fri2uJzMteIV5t-4qAG566IJWdXRABxLjV1jwdVvID-NvFw3USgyM8FXC5w_yAimYz4FY1gVEm96Yd2JQZh-pYl33lHpbOI7-3-uTixqgX1XHRker" width="100" />

  	
### Technical Challenges/Research
Some unexpected challenges we ran into while building this app were 
- Getting data from different websites to match the same schema
- Jest -> configuration, snapshots, writing good quality tests

It was common for website/robots.txt files to prohibit web scraping, which initially was our plan for generating data on lost dogs. Sometimes you just can not legally scrape a website and there is no way around it. In some cases you may need to be granted permission, but either way it is very important to first check out a websites robots.txt page and understand their parameters.

# Client Deliverables
Our team strived to meet the expectations of our primary user by organizing deliverables into specific user stories. Some key user stories are listed below:

#### User Stories
* As a user I should be able to select a lost/found dog's lost/found date so that I can retrieve the appropriate data matching that description

* As a user I should be able to select a lost/found dog's size so that I can retrieve the appropriate data matching that description

* As a user I should be able to select a lost/found dog's location so that I can retrieve the appropriate data matching that description

* As a user I should be able to select a lost/found dog's color so that I can retrieve the appropriate data matching that description

* As a user a should see a list of lost/found results in chronological order that matches the search criteria so that I can get the most recent and relevant data

* As a user I should be able to submit dog description data so I can forward that information to the community/internet

* As a user who has found a lost dog, I want to be able to see relevant ad information for products and resources so that I can prevent this problem in the future

* As a user, I should be able to contact the OP for a post so that I can inform them that I have found / lost this dog

* As a user I should be able to see the top 10 results of my search query and then see more when I scroll to the end, so that I can see a continuous list of dogs

* As a user, if my search query is taking longer than 1 second, I should see visual feedback of my search result so that I can know that the website is working

## Minimum Viable Product (MVP)
The MVP of the app aimed to have an interactive search that allowed the display of lost or found dogs from other sources and then find a list of lost/found dogs based on location. Additionally, being able to sort by description/categories/most recent was a main goal.

### How the App Works:
***GIF

What research was required?
Appropriate Api’s for finding the correct data.
Scraping and its usefulness for finding relevant data
Sorting methods
Determining area and distance
Workflow and Key lessons from your team - specifically those related to: Agile, CI/CD, testing, working with external stakeholders, ticketing, and user stories.
* Your git workflow, style guides, commit guides, etc
We had a master, develop, and personal feature branches. The master branch stores the official release history, and the develop branch serves as an integration branch for features. Develop contains a complete history of the project, where master contains an abridged version. Our developers continuously need to pull to their develop branch and then merge that with their feature branch to stay up to date and minimize conflicts. Each new feature should reside in its own branch, which can be pushed to the develop branch upon completion. Features should never interact directly with the master branch, they strictly merge with the develop branch.  
* What did you learn from the process
Using a dedicated branch to prepare releases makes it possible for one team to polish the current release while another team continues working on features for the next release. It also creates well-defined phases of development. Git workflow is great for agile development, allowing large teams to constantly develop independently and come together with ease as a whole. 
* What were key takeaways from stand ups, code reviews, etc
Testing testing testing. Always test before pull request as things can slip past.
Stand-ups are a fundamental part of agile development. The stand-up is important to keep everyone aware of the team’s landscape and progress. It allows each member to share what they have been working on and what they are planning to do next. We held our meetings first thing in the morning and quickly went around the group where everyone shared and updated the group. These meetings highlight progress and help flag any larger issues. The daily reinforcement of sharing individual successes and plans keep everyone excited about the team’s overall contribution to the organization.
* Writing tests
In the long run, writing tests actually make our code more robust, and easier to maintain. Tests are also important in catching bugs earlier, the more you wait the more nested and difficult the bug becomes, testing allows you to catch bugs early. Testing also improves the quality of code by identifying defects. 

* Link to your trello board, discuss completed tickets
https://trello.com/b/K6y30AZf/lost-and-hound

Any non-MVP tickets (optional)
Code refactorings
Performance Optimizations
Additional features
etc
Notes from your Sprint Retro
What additional features do you plan to add, how do you plan to implement those features?
* Future refactoring?
Include use of Facebook Groups API to allow for more lost and found doggie data to be scraped from local groups.
* Additional dev ops considerations?
* UI/UX additions?
