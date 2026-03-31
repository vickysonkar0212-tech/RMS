# Fix Access Token Undefined After Login

## Steps:
1. [x] Edit admin-frontend/src/page/auth/Login.jsx - Change localStorage.setItem("accesstoken", ...) to "accessToken"\n2. [x] Edit admin-frontend/src/layouts/Auth.jsx - Change localStorage.getItem("accesstoken") to "accessToken"\n3. [x] Clear localStorage and test login + protected API calls
