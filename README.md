# NuspacesApp

## Links:
A preview of the app is available [here](https://nuspaces.netlify.app). Please refrain from having explicit images/text in profile and postings.

- [Google Docs README](https://docs.google.com/document/d/1k46pz6Z7I5YSJYhRuhwCIKNLJcph1d36VyWVCA2rFrw/edit#)
- [Time Logs](https://docs.google.com/spreadsheets/d/1ncyh0pu4ngOQzW2tn02UA8mojlnJcOvFKRYmpfL0X9k/edit?usp=sharing)
- [Poster](https://drive.google.com/file/d/1OXa64Dv8BKxa8JJhW4h2nl4RM8cpPVvi/view?usp=sharing)
- [Video](https://drive.google.com/file/d/1Y-SHAHEjkxbzJuIbrZRZICAy5teR_BHl/view?usp=sharing)

## Proposed Level of Achievement:
Apollo 11


## Motivation 

In University, it is easy for students to get too caught up in academics and spend time on-campus only studying in their respective faculty buildings, eating at the same nearby eateries, and seeing the same views of campus.

This shouldn’t be the case! There are many excellent places around campus to visit, whether to engage in quiet contemplation, grab a bite, or just take in the vistas. Some of these spaces are known only to a precious few individuals, but deserve to be shared with others to make their time at NUS invigorating and memorable.

## Aim:

To encourage students to explore the NUS campus, through a social media app purposefully designed to share pictures of locations and categorize them by activities.

## Scope of Project:
### Summary:
The app is a social media platform. Usage of this platform will be similar to other image sharing sites like 9gag/instagram. Users are required to authenticate with their login details. Upon logging in, they will be brought to the home page which will contain a feed of recent posts by other users. Users will be able to:
- Filter the feed posts through category buttons provided in the sidenav;
- Use the search bar to filter for user-generated tags;
- Navigate to another user’s profile to view their details and posts;
- Navigate to their own profile to view/edit their details and make posts;

The app will be developed primarily for the web. We have no immediate plans for the app to be available on mobile devices.
 
## Previous App Progress:
### Key Technologies Used:
The app has primarily been built using the Angular Framework for frontend, as well as utilising Firebase features for the backend cum database, among other useful features.

- Angular: Selected for being a contemporary framework for frontend development, as well as supporting Firebase well via the AngularFire library included in Angular.
  - Angular materials: A library that expedites creation of interactible UI elements, such as sidebars, cards and forms. 
  - Angular PrimeBlocks: A library that contains UI elements which enabled the styling of the landing page. 

- Firebase: Selected for having a suite of useful features useful to a social media app, namely authentication, firestore and storage.
  - Authentication: Handles user creation and authentication, routeguards and redirects
  - Firestore: A NoSQL database which stores user and post data intuitively in collections of documents; efficient and complex querying and retrieval of data possible.
  - Storage: Stores images uploaded in the form of user profiles and post images, with reference URLs that link back to the database entries of respective user and post objects.

Usage of these technologies (predominantly Firebase) is documented in the subsequent sections, as and when they are relevant to the feature being discussed.

## Prototype Rundown:
Note: This section is heavily dependent on images of the prototype webpage and flow diagrams. Refer to the [Google Docs Version](https://docs.google.com/document/d/1k46pz6Z7I5YSJYhRuhwCIKNLJcph1d36VyWVCA2rFrw/edit?usp=sharing) for more details.

### Landing Page:
Users are first directed to the landing page, that will include more details about the software in later updates. The landing page allows users to click the login button on the top right hand corner. 


Technical details: 
- The landing page is designed as one Angular component
- Design uses Angular Primeblocks dependency
- Authguard/routeguard is present, so users cannot enter the homepage by typing in a different route in the search bar, without being first authenticated. We have set it up to direct unauthenticated users to the login page in this scenario.
 
 
### User Authentication & Details:

#### Login Page: 
Upon clicking the ‘login’ button from the landing page, users will be directed to the login page.

Existing users can key in their details, but new users will have to register for a new account using the ‘Sign up’ link at the bottom of the page.

Technical details:
- Form control with validators from Angular/Forms ensure users have to key in both Email & Password. Not doing so (i.e. submitting an invalid form) denies the form and highlights the offending field.
- Angular Fire Authentication Service allows data to be checked against the authentication database in firebase, to ensure the correct account is logged into.

#### Sign-Up Page:
To use the app, users will initially need to register an account. Users will need to supply the following information to make an account:
- Username
- Email
- Password

Subsequently, new users will be directed automatically to the homepage. 
 
Technical details:
- Form control from Angular Forms verifies that password and confirm password have the same password before allowing the signup to be successful. Again, validators ensure that all details are keyed in before the form is valid.
- Upon successful signup, a document will be created in the Firebase Authentication database with an auto-generated userID.
- The use of pipelines also ensures that a corresponding user entry with the same userID is generated in firestore database, which can support additional fields such as userAvatar, description, etc. Doing so allows us flexibility to expand additional fields in future such as account creation date, etc.
 
#### Forget Password Pop-up:
Users can click the 'Forget Password' button on the login page, to reset their password. A popup will appear and require users to enter their email, so they can reset their password with a link sent to their email address (might have to check spam folder). 

Technical details:
- We utilized the endPasswordResetEmail method from Angular/Firebase/Firestore to setup the functionality 
- Email service is also included in the endPasswordResetEmail method, and after changing the password, the details in Firestore Authentication database will be updated

 
### Homepage & Categories:
Upon successful sign-in/account creation, users will arrive at the homepage

The homepage consists of the following elements:

#### Sidebar:
The sidebar consists of the following elements:
- Profile Picture & Description
- View Profile: Clicking on the button will lead a user to the profile page
- Category buttons: The following buttons will filter the posts from the homefeed into the respective categories.
  - Eateries
  - Study Spots
  - Facilities
  - Scenic Views
  - Hidden Gems
- Help button: This leads to the ‘help’ page, where users can view frequently-asked questions as well as a guide on how to navigate the app (Currently not implemented)

Technical details:
- Depending on the ‘Auth state’ of the current user, different elements are hidden/shown. This allows us to change the login button to the logout button in all pages barring the landing page, login page and sign up page.
- Querying the current active user allows the display of the userName, userAvatar and description in the sidebar. These fields change in real time when a user updates his details (see User Profile Page below).
- Each category button is its own router link which has been set up with the abovementioned filtering in place. The ability to disable angular material buttons ensures that after navigating to a category, said category cannot be selected again.

#### Feed:
The feed generates the posts, with filters if provided. Each post displays the userName and userAvatar, the time of posting, the image itself, the post category and the description. The feed is sorted in reverse chronological order. Users can choose to 'Like' the posts, and liked posts will appear in the 'favourites' section in the sidebar. Liking a post enables users to save the posts that they like in their collection. 

Technical details:
- Since posts are stored in a collection, a queryAll returns all posts to display on a homepage, or alternatively has additional filters by category. All posts obtained are sorted by their date of posting. 
- After obtaining these details as an array, the feed component iterates over each item and generates a post, feeding in the relevant details to show on the card.
- Each post object is augmented with a likes array which on liking or unliking adds or removes the current userID to the array respectively.

 
### User Profile Page:
The user profile page will consist of the main details:

#### Profile Card:
A dynamic form which displays the user’s current userName, userAvatar (if applicable) and description (if applicable) and has fields allowing the user to change all three fields.

Technical details:
- Angular form which takes the updated fields as formdata and updates the database accordingly with the appropriate user service. When the page is first loaded, form also subscribes to the current user and updates the form fields to display the current values via patchValue.
- Image upload is handled by a separate upload service, that stores the image under a profiles collection of firebase storage, also taking in the user’s userID. The URL is returned and stored in the database for subsequent retrieval.

#### Add New Post:
To make a new post, users currently supply the following:
- Image
- Comment
- Category

Technical details:
- As per above, the values are taken as formdata and submitted via an appropriate post service. 
- By reading the active user, the service first creates a partial database entry with the user’s current name, avatar, the post comment and category, and a timestamp object generated at time of posting. 
- The entry’s ID is then supplied to the upload service to upload the picture, and the return URL is appended to the database entry subsequently.

#### User’s Previous Posts:

A real-time display of all posts made by the user, displayed in reverse chronological order. This is achieved via the above-mentioned filter applied on userIDs instead of category.

## Added Features & Improvements

For milestone 3, the following features & improvements were developed:
- Forget password functionality
- Viewing other users’ profiles
- Liking/Unliking users’ posts, and favourites tab
- Resizing some app elements
 
### Forget password functionality

Users who forgot their password can click the button above, and a textbox will pop up as shown below. Users will be prompted to fill in their email, and an email will be sent to their email (check SPAM folder), to reset the password. 

Technical details:
- We utilized the endPasswordResetEmail method from Angular/Firebase/Firestore to setup the functionality 
- Email service is also included in the endPasswordResetEmail method, and after changing the password, the details in Firestore Authentication database will be updated
- Changing password can be done manually via firebase GUI as well as shown below

### Viewing other users’ profiles

Clicking on a user’s displayName in a post displays a new profile page. This page consists of said user’s details and their posts sorted in reverse chronological order. 

Technical details:
- By utilising the userID field in the Post object, a post’s displayName is embedded with a router link with the userID as a route parameter, extending off /profile.
- The route parameter is then taken as an input in a new profile-other page which displays:
  - A static (non-form) variant of the profile card, populated userAvatar and description fields obtained by querying the database with the userID, and;
  - Posts generated by filtering the feed using the userID (refer to user’s previous posts above).
 
### Liking/Unliking users’ posts, and favorites tab

Posts now include a like/unlike button that toggles between states when clicked, and a like counter unique to that post which increments and decrements automatically.

Technical details:
- Each post object is augmented with a likes array which on liking or unliking adds or removes the current userID to the array respectively.
- The toggle effect is achieved by querying whether the current userID is an element of the array. If false, the left image (post not liked) displays, else the right image (post liked) displays.
- The post like counter is simply obtained by taking the length of the array. 
  
From the homepage, users can navigate to the favourites tab (located under profile) which displays their liked posts, in reverse chronological order.
 
Technical details:
- This is achieved by filtering the posts and whitelisting posts whose likes array contains the current userID. This is enabled by the array contains argument when querying a firestore database.
 
### Resizing of App Elements

The app top bar, sidenav panel and contents now expand to fit the entire width of the window, enabling them to tolerate some zoom in/out.

Technical details:
- Replaced some pixel measurements with percentage values, allowing HTML elements to scale with zoom in/out.
- However, text scaling affected the readability of some elements, which we have not accounted for
- More complex HTML elements, such as profile cards, post cards, etc. were left untouched due to complex css interactions between elements that we have yet to understand.

## Testing:
### Manual Testing:
For a comprehensive list of tests done to the prototype, refer to the [Google Docs Version](https://docs.google.com/document/d/1k46pz6Z7I5YSJYhRuhwCIKNLJcph1d36VyWVCA2rFrw/edit?usp=sharing). 

### User Testing:
In addition, the following details were gleaned from guided/unguided user testing:
- Home page not conducive to viewing: would greatly benefit having some write up explaining app features, or more explicitly draw user attention to the latest post of each category.
- Categories require stricter guidelines with fewer ambiguous overlap (hidden gems in particular is vague)
- Make Post should not be obscured under user Profile; unintuitive element
- Though not a focus of the project, making elements resizeable would greatly benefit mobile users, as currently the app’s fixed scaling of elements renders it unusable on mobile interface.
- Options to recover forgotten password would be helpful; potential stretch goal.
- Leaning into app’s location-centric nature, having location of each image displayed on a map (i.e. some map integration) would help differentiate the app; potential stretch goal.
- Profile description, comment fields should be larger to account for longer text strings.

## Final Schedule
This is the schedule taking into account final progress (struck through).

The following features we intend to deliver on before mid June:
- ~~Firebase integration for user accounts~~
- ~~Registration page with routing~~
- ~~Proper user registration and login functionality Authguard~~
- ~~User profile page with functionality to change user details~~

The following features we intend to deliver on before end June:
- ~~Filter posts functionality with routing ~~
- ~~Make post functionality with rudimentary CRUD functions~~

The following features we intend to deliver on before mid July:
- Edge case handling, bug fixes pertaining to default users
- ~~Firebase integration for posts~~
- ~~Viewing other profiles~~

The following features we intend to deliver on before end July:
- ~~Help page~~
- ~~Tidying up UI (Predominantly resizing and moving elements around for intuitive navigation)~~
- Stretch features (if time permits)
  - Map integration
  - ~~Save posts~~
  - ~~Forgot password~~
- Bug fixes including those pertaining to netlify hosting

## Software Development Learnings

### Version Control

Github features were employed to manage and archive versions of the application in various development stages. Newly implemented code was first pushed to its own remote branch before a pull request was established to merge the code with the main branch. As of the time of writing there are currently 8 branches excluding main:

Earlier branches were (re)named with the date the branch was published. However we were informed that this was not ideal practice as it was uninformative. Post milestone 2 we would adopt a different naming scheme in line with another feature provided by Github, Issues.

### Tracking and Planning

We were made aware of Github Issues after milestone 2 and began employing it in the month leading up to milestone 3. The comprehensiveness of the system and the ability to create a branch addressing the listed issue allowed us to more clearly document our development features, and track down which features were integrated into which branch. 

 
### Automated Testing and CI/CD

Our initial attempts at testing stopped at manual testing for milestone 2. However, approaching milestone 3 we realised that such testing was insufficient and that some degree of automated testing is considered industry standard. To that end we attempted to write code to test our systems (some of which can be seen pertaining to login systems), and later tried to use streamlined tools such as testproject. Unfortunately we were unsuccessful in this regard and chose to focus on tying up loose ends in time for milestone 3.
This lesson has taught us the value of developing rigorous tests alongside new features and the importance of adhering to frameworks such as CI/CD, ensuring software projects remain mostly bug free when scaled up. Although this was poorly demonstrated in this project, we will attempt to keep this in mind for future projects.
