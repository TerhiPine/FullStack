How to run locally step-by-step:
1.  Make sure you have needed tools installed (node, git, VS Code (optional, I'll be using VSC))
2.  Clone repository using terminal in VSC (git clone https://github.com/TerhiPine/ws3-movies.git)
3.  Have depencies installed, again in terminal (npm install)

You will be needing API key (http://www.omdbapi.com/apikey.aspx), after getting your own, replace mine with your own
- In VSC go to movies.js-file
- Find this part: const API_KEY = "ADD_YOUR_OWN_API";

Currently API key is hardcoded and it is not the best practice, for real-life production it would be better to make .env to the project root and add .env to gitingore-file,
that way your API key (often they cost money) does not end up in GitHub/Public use.

4. For launching in terminal: npm start

For locally running website it uses port 5000 so your URL for website will be http://localhost:5000/.
If you have something already running on port 5000 you will get error. Make sure that port is free.

<img width="790" height="1029" alt="Screenshot (395)" src="https://github.com/user-attachments/assets/71abf0c5-b249-4923-ad45-f3cf8686aea3" />
Running on Render

<img width="792" height="1022" alt="Screenshot (394)" src="https://github.com/user-attachments/assets/772f35ed-3c2b-44b5-a0a6-eb263e57d2c3" />
Running locally

  
