# NuspacesApp

## Links:
A preview of the app is available [here](https://nuspaces.netlify.app). For the moment there is no authentication so any random username or password will suffice.

- [Google Docs README](https://docs.google.com/document/d/1S2zsQyFxJmrxjLL55tYTYT_QVheyUSoPsE25tSZuO9Y/edit?usp=sharing)
- [Time Logs](https://docs.google.com/spreadsheets/d/1ncyh0pu4ngOQzW2tn02UA8mojlnJcOvFKRYmpfL0X9k/edit?usp=sharing)
- [Poster](https://drive.google.com/file/d/1XEZE-wDRyBWk6a9dqKPs-F_CiuA_eRH8/view?usp=sharing)
- [Video](https://drive.google.com/file/d/1ngp8xdnAyZSt2FVAsOj7ZEuD0IRZAMQ4/view?usp=sharing)

## Proposed Level of Achievement:
Gemini 


## Motivation 

In University, it is easy for students to get too caught up in academics and spend time on-campus only studying in their respective faculty buildings, eating at the same nearby eateries, and seeing the same views of campus.

This shouldn’t be the case! There are many excellent places around campus to visit, whether to engage in quiet contemplation, grab a bite, or just take in the vistas. Some of these spaces are known only to a precious few individuals, but deserve to be shared with others to make their time at NUS invigorating and memorable.

## Aim:

To encourage students to explore the NUS campus, through a social media app purposefully designed to share pictures of locations and categorize them by activities.

## User Stories:

1. As a student who has been studying in my faculty building for 1-2 years, I want to find other study locations for a change of scenery, or ones which I may find more conducive.
2. As a student who has previously not wandered far to find eateries in the interest of time, I may be interested in alternative places to eat when I have a longer break between lessons.
3. As a student who has some time to relax, I may want to venture out to a picturesque location for a quick breather, or may be looking for appropriate recreational facilities for other activities.
4. As a student who has encountered any space which could qualify for the above scenarios, I may want to raise awareness of such a space for other students to experience.

## Scope of Project:

### Summary: 
The app is a social media platform. Usage of this platform will be similar to other image sharing sites like 9gag/instagram. Users are required to authenticate with their login details. Upon logging in, they will be brought to the home page which will contain a feed of recent posts by other users. Users will be able to:

- Filter the feed posts through category buttons provided in the sidenav;
- Use the search bar to filter for user-generated tags;
- Navigate to another user’s profile to view their details and posts;
- Navigate to their own profile to view/edit their details and make posts;

The app will be developed primarily for the web. We have no immediate plans for the app to be available on mobile devices.

**This section is heavily reliant on mockup and prototype images, please refer to the [Google Docs Version](https://docs.google.com/document/d/1S2zsQyFxJmrxjLL55tYTYT_QVheyUSoPsE25tSZuO9Y/edit).**

### User Authentication & Details:
To use the app, users will initially need to register an account. Users will need to supply the following information to make an account:

- Username
- Email
- Password

Subsequently, users can enter their email and password into the login screen to access the app. Upon entering the app, users can further customize their profile with the following information:

- Profile avatar
- Tagline

### Homepage:
The homepage is presented to users upon authenticating. The following is a description of elements present:

- The top bar is present throughout and its contents do not change. From left to right:
  - The NUSpaces logo is clickable and will navigate back to the homepage if clicked from any other page.
  - The search bar allows users to search for posts using user-generated tags.
  - The logout button will log users out and navigate back to the login page.

- The feed shows a scroll of posts in reverse chronological order, displaying the following information:
  - Poster’s avatar and username, which can be clicked to view their profile
  - Post date and time
  - Post image
  - Post category
  - Post comment/description

### Homepage (Sidebar):
The sidebar consists of the following elements:
- Profile Picture 
- View Profile: Clicking on the button will lead a user to the profile page
- Category buttons: The following buttons will filter the posts into the respective categories
  - Eateries
  - Study Spots
  - Facilities
  - Scenic Views
  - Hidden Gems
- Help button: This leads to the ‘help’ page, where users can view frequently-asked questions as well as a guide on how to navigate the app

### User Profile Page:
The user profile page will consist of the main details:
- User avatar
- User name
- User tagline
- ‘Add new Post’ button: Clicking on it will lead to the ‘add new post’ page for users to publish a post 
- Previous posts: Scrolling down the page will show all the user's previous posts

### Add New Post:
To make a new post, users must supply the following:
- Post image
- Post comment/ description
- Category
- Locations
- User-defined tags (optional)

## Tech Stack
We will be utilizing the following frameworks for this project:
- Firebase: A cloud-hosted NoSQL database (realtime-database)
- Angular(.js): a client-side JavaScript framework
  - Dependencies: Angular Materials (Library to streamline UI design)

## Similar Existing Applications
### Reddit
Reddit’s UI provides a good, simple starting point to emulate, and its top bar, side bar and content layout presents information clearly to a user, while not changing much between pages. The ability to post a full-sized image as the post body also facilitates and enables image-sharing subreddits, which is comparable in scope to our project.

### Instagram
Our app takes inspiration from Instagram/9gag, which is an image-centric sharing social media platform. Similar to Instagram, the homepage of the NUSpaces application is also an image feed for users to scroll and enjoy the photos. Since NUSpaces focuses on NUS content and our goal is primarily for people to explore NUS, we boast an additional category sorting feature. The categories include food, study spots, etc. so as to provide more streamlined content for users.

## Proposed Schedule

The following features we intend to deliver on before mid June:
	
- Firebase integration for user accounts
- Registration page with routing 
- Proper user registration and login functionality
Authguard
- User profile page with functionality to change user details

The following features we intend to deliver on before end June:

- Filter posts functionality with routing
- Make post functionality with rudimentary CRUD functions

The following features we intend to deliver on before mid July:

- Firebase integration for posts
- Viewing other profiles
- User-generated tags and tag searching

The following features we intend to deliver on before end July:

- Help page
- Tidying up UI
