# Deployment 4 Flask App

### Objective

Utilizing AWS Elastic Beanstalk and Cloudbees' Jenkins, we want to successfully build a Flask application onto a virtual environment.

### Building the URL Shortener

This process involves the least effort. The app to be deployed is already written for us, and so most of the challenge is to correctly configure our EB environment and Jenkins settings. The EB environemnt is initiliazed by a newly created IAM user - `Jenkins-user`. This account only has AWS EB privileges. I believe this is best practice as it is a more secure approach: there will be a later step that requires us to expose this accounts keys on the Jenkins program, so that it can build onto the EB environment. Should the keys be compromised, at least they don't belong to an account with full admin access.

The EB environment starts an EC2 instance to host our app, and a second EC2 with Jenkins installed builds it onto the first instance. Jenkins uses two plugins, `Cloudbees Credentials Plugin` and `AWS Elastic Beanstalk`. CCP allows us to use credentials and environment variables, while AWSEB plugin allows Jenkins to integrate with our EB environment, done with the aforementioned keys. Once all the information is entered correctly, Jenkins should successfully build the app and by clicking on the environment URL, you can access the site.

### Building the To-Do App

Since the steps are very similar, I will foucs on the fixes implemented.

Firstly, the name of my central `.py` file was labeled `main.py` instead of `application.py`. By following the tutorial, I had named it as such and only realized I needed to change it by re-reading the deployment instructions.

Secondly, in the `application.py` file, I needed to change the line `app = FLASK(__name__)` to `application = FLASK(__name__)`, and all subsequent `@app.route`s to `@application.route`. This information was relayed to me a via a classmate. Though this doesn't seem to make sense since the URL Shortener app utilized "app" instead of "application" and still worked, this one change resulted in Jenkins building the app successfully.

### Building My Own App

Whilst talking to Daniel Adeyanju, he asked if I had any idea what I wanted to do for my own app. I responded in the negative and naturally he proceeded to throw ideas at the proverbial wall. Well, one stuck. Dan had brought up building a Pokedex, an idea that had also been brought up by classmates prior to this assignment. Well, why build what already exists, when I can create from anew? And so I present ```Koala Arena```.

An issue that has arisen. I am trying to, on button click, naviagte to another html file while simultaneously loading information based on that click from the local files/database. It doesn't seem to be working, and I believe it is because the information is delivered before the html file is actually loaded. Then, the second html is loaded, but is blank and so overwrites any delivered information.


The breakdown of this block:
```
if __name__ == "__main__":
    application.run()
```
This is placed in the main executable for the app. When run directly, __name__ will be equal to the string "__main__". However, when this module is instead called in another module __name__ will be equal to the file's name, which should not be "__main__". Thus this will evaluate as false and prevent the app from being executed accidentally.


*Observation*
What happens frequently when researching a solution, is following the wrong thread. You ask a question, and you get an answer that seems like the a solution, so you try to understand it further. You get to a point where you can get ready to implement it, but it doesn't work. In the process of searching for the fault, you realize the answer is not a proper solution at all. removeAttribute() vs removeChild() to get rid of the entire div.

Another issue that arose was using the `fetch` function in my `script.js`. I wanted to fetch an api endpoint that makes a GET request to my database for information on characters. I used the back tick "\`" to format a string to include a variable name, but also included "" within the back ticks. This created an error as you don't need the "" when using the back ticks. I figured this out by right clicking the element > `Inspect`, `Network` and clicking on the api endpoint. This showed the an incorrect request URL with the addition of %22 attached to the URL. Googling url encoding 22 returned a ", meaning this charcter was undesired.