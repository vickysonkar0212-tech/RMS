# Faculty CRUD Fix Plan - Make it work like Student CRUD

**Information Gathered:**
- FacultyRoutes.js: DELETE `/delete/:id` → FIXED to `/:id`
- AuthApi.js: DELETE `/faculty/delete/${id}` → FIXED to `faculty/${id}`
- FacultyAdd.jsx: error.response.data.message → FIXED to RTK Query format
- FacultyViewAll.jsx: Broken useEffect with non-existent GetAllfaculty/Deletefaculty → Needs RTK Query hooks
- Backend FacultyController.js has bugs (typos, duplicate course field)

**Plan:**
1. Fix FacultyViewAll.jsx - use RTK Query hooks properly
2. Fix FacultyController.js backend bugs
3. Test Faculty CRUD endpoints
4. Fix Edit/Delete if needed

**Current Progress:** 60% (Routes & Add.jsx fixed)

**Next:** Fix ViewAll.jsx & backend controller
