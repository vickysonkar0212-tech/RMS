# RMS Deployment TODO (FREE: Render + Vercel + MongoDB Atlas)

## Completed
- [x] Analyze project structure and create deployment plan

## Code Fixes (Completed by AI)
- [x] Update backend CORS for prod
- [x] Fix frontend API baseUrls (AuthApi.js)
- [x] Create .env.example files (backend & frontend)
- [x] Update README.md with deployment guide

## Setup (User)
1. Create MongoDB Atlas FREE cluster → Get DB_URL (mongodb+srv://...)
2. Sign up Render.com, Vercel.com accounts
3. Get Razorpay test keys (rzp_test_xxx / xxx) or disable payments
4. Create GitHub repo: `rms-project` (or your choice)

## Git & Deploy
5. `git init && git add . && git commit -m "Initial commit"`
6. `git remote add origin https://github.com/YOUR_USERNAME/rms-project.git`
7. `git push -u origin main`
8. **Backend Render**: New Web Service → Connect GitHub → backend/ → Environment vars (DB_URL, JWT_SECRET=your-super-secret-change-in-prod, RAZORPAY_KEY_ID=rzp_test_xxx, RAZORPAY_KEY_SECRET=xxx)
9. **Frontend Vercel**: Import GitHub → admin-frontend/ → Env: VITE_API_URL=https://your-backend.onrender.com/api/
10. Test live app!

## Progress Tracking
Update this file as steps complete. AI will mark code fixes.
