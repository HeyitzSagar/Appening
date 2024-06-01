# API Documentation

There is no fixed title for this task, but this task comprises or sums up the concepts of usage of JSON web tokens, Authorization, and Authentication, where I was allowing the user with a user type of "admin"
to fetch the list of all the users available.
If a user tries to access the endpoint of all users, it may throw a forbidden error if the user type is "User".

I have used the jwt tokens and passed them into the token payload.

# Prequisites
  Node JS
  Express
  JSONWEBTOKENS
  bcrypt
  nodemon
  mongoose
  MongoDB

# Installations Guide
  Install Node JS
  Clone this repo
  npm install 
  npm start


## User Signup and Login

### Signup
- **Endpoint:** `POST /signup`
- **Description:** Allows users to create an account.
- **Request Body:**
  ```json
  {
    "username": "example",
    "password": "password",
    "userType": "user"
  }
  ```
  ```json
  {
    "username": "example",
    "password": "password",
    "userType": "admin"
  }
  ```
  -**Description:** User signed up with userType as  "admin" can fetch the entire user list.
  ![usersignupadmin](https://github.com/HeyitzSagar/Appening/assets/137028088/b98435f6-2081-488e-a550-3722c88e69e6)
  -**Description:** The user signed up with userType as "user" and cannot fetch the entire user list.
  ![signupasuser](https://github.com/HeyitzSagar/Appening/assets/137028088/b2510e46-ce49-44b0-a2db-8010273f1e79)

  -**Description:** The user login and the API response are tokenized  values.
  ![loginasadmin](https://github.com/HeyitzSagar/Appening/assets/137028088/f04bd1df-1610-480b-a6fb-aa7657b6ba48)

  -**Description:** Sagar who signs up as an admin while logging through API, the API sends a tokenized value to access the ALL USER(to perform authorization), but if a user is not authorized using
  a tokenized value then it will throw a "Forbidden" message![Forbidden error](https://github.com/HeyitzSagar/Appening/assets/137028088/1a1efefc-41f2-47c9-a33c-fe165ca4725a)
.
  ![tokenizedauthorization](https://github.com/HeyitzSagar/Appening/assets/137028088/732e271d-0eed-4daa-b443-02daac7bb75a)


  -**Description:** Let's see the searchAnagram API response.

  ![Trap](https://github.com/HeyitzSagar/Appening/assets/137028088/1da52019-83fd-47d9-8caa-727377be8f2d)
  ![charge](https://github.com/HeyitzSagar/Appening/assets/137028088/2f140d31-8162-4082-9345-4238f5b1e7ac)


This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  

  

  


