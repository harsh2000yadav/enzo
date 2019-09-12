Enzo:
A basic social networking website.

Features: -Login/Signup
          -Upload Images
          -Like,Comment, View Images
          -Notifications
          -Category division of Posts
          -View own and other users' profile
          -Edit profile
					
Technologies Used: -HTML
									 -CSS
									 -Bootstrap
									 -Javascript
									 -jQuery
									 -NodeJS
									 -MongoDB
									 -Express
									 -EJS


Fields in Database: -username
										-firstname
										-lastname
										-dob
										-bio
										-profile_pic
										-posts
										-followers
										-notifications
										
Routes Used:
-Users: This route handles the following operations:
				-adding a new user(signup)
				-login
				-handle logins with false details
				-logout
				
-Category: This route handles in managing the catgories of posts, all the posts are divided in three categories asked while uploading the post.
					 The posts of each category from the feed can be found separately in their specific tabs in sidebar.
			
-Index: Deals with the operations of rendering the home page
        i.e. retrieving all the posts.
		
-Settings: This helps in rendering the following sections:
						-Settings page
						-Activity
						-Deletion of the post
						-Uploading the post
						
-Users: This route gets:
				-User List
				-Own profile
				
				
				
				
