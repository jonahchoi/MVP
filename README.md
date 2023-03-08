<h1 align="center">
  <br>
  <img width="429" alt="QuickSend" src="https://user-images.githubusercontent.com/104597125/223588216-7525f6f0-a6a1-4afd-9535-b68574d6b654.png#gh-dark-mode-only">
  <img width="429" alt="QuickSend" src="https://user-images.githubusercontent.com/104597125/223604816-54277534-feab-4ca4-9ab9-2d5d99ef8a38.png#gh-light-mode-only">
  <br>
</h1>

<h4 align="center">
  <br>
  A file-sharing app to send documents, images, etc. to anyone quickly and conveniently. Use personalized QR codes to send files directly to someone's inbox!
  <br>
</h4>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction">![-javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)</a>
<a href="https://reactjs.org/">![-react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)</a>
<a href="https://expressjs.com/">![-express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)</a>
<a href="https://tailwindcss.com/">![-tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)</a>
<a href="https://www.framer.com/">![-framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)</a>
<a href="https://styled-components.com/">![-styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)</a>
<a href="https://firebase.google.com/">![-firebase](https://img.shields.io/badge/Firebase-FFCA28.svg?style=for-the-badge&logo=Firebase&logoColor=black)</a>

<h2 align="center">Contributors</h2>
<a href="https://github.com/jonahchoi">Jonah Choi</a>

<br></br>
<!-- ABOUT THE PROJECT -->
<h2>About the Project</h2>
This web app provides users with a secure platform to send and receive files. It uses Firebase storage for file storage and allows downloads through private links or QR codes. Framer motion animations enhance the user experience, while Firebase authentication enables personalized storage for each user.

### This project includes the following sections:
1. Main Page
2. File Upload
3. File Download
4. Personal Storage
5. Login/Signup
6. Profile

<p align="right">(<a href="#top">back to top</a>)</p>

## App Features
<!-- LANDING PAGE -->
### Main Page:
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223589343-0d123e1c-67be-4eec-a786-193c3d5a9384.gif" alt="Opening Animation">
</div>
<br></br>
This is the opening animation that leads to the home screen. Here we can find a navbar and the option to upload/download files. Be sure to try out the paper airplane!
<br></br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223590529-6f31f09c-9d0e-4599-ba45-5dc7dfe16855.gif" alt="Paper Airplane Toss">
</div>
<br></br>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- FILE UPLOAD -->
### File Upload:
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223601099-8e052425-2346-4cac-89e2-a4871ab971cd.gif" alt="Select Upload Tab" width="500">
</div>
Users can easily access the upload page from the main screen and have two options to upload their files.
<br></br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223594555-6a9c63ae-ad54-4288-971e-b7e33294b0ae.gif" alt="Upload a file" width="500">
</div>
The first one is an anonymous file upload that generates a QR code or 5-digit code, which can be shared with others. Each code has a copy button for convenience and social media share buttons for wider sharing. 
<br></br>
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223594547-4c0a02d6-711e-4257-b933-d489fd3c79c9.gif" alt="Scan a QR code directly" width="500">
</div>
On the other hand, users can also choose to scan someone's personalized QR code to upload an image directly to that person's personal storage.
<br></br>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- FILE DOWNLOAD -->
### File Download:
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223594552-1ef6091c-0b03-49fb-83e4-2f4b01869d2f.gif" alt="File Download" width="500">
</div>
<br></br>
In addition to the upload page, users can also navigate from the main screen to the download page, where they can enter the 5-digit code to gain access and download files.
<br></br>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- PERSONAL STORAGE -->
### Personal Storage:
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223594542-314f5440-d207-4067-8335-508f7fb23857.gif" alt="Personal Storage" width="500">
</div>
<br></br>
When users are logged in, they can access their personal storage, where all files sent directly to their inbox are stored. From here, they can easily download any of their files.
<br></br>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LOGIN FEATURE -->
### Login/Signup:
<div align="center">
  <img src="https://user-images.githubusercontent.com/104597125/223594551-8f810e0e-3a10-4a89-991b-04611bd49d51.gif" alt="Login and profile" width="500">
</div>
<br></br>
  Users can choose to either log in or sign up for an account. Upon logging in, they gain access to their personal storage and personal QR code.
<br></br>
<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started:
  - Install dependencies:
    1. cd into root directory
    2. run `npm install` in the terminal
  -  Make a copy of `example.env` and rename to `.env`
  - Create a new firebase app, and add the config properties to `.env`
  - Run Servers:
    1. From root: `npm run deploy`

  - Launch site: http://localhost:1111

<p align="right">(<a href="#top">back to top</a>)</p>
