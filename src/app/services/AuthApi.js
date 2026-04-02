import { createApi ,  fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const AuthApi = createApi({
  reducerPath: 'AuthApi',
baseQuery: fetchBaseQuery({ 
  baseUrl: 'http://127.0.0.1:5000/api/',
  prepareHeaders: (headers, { getState }) => {
  const token = localStorage.getItem('accessToken');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}),
  endpoints: builder => ({

    login: builder.mutation({
      query: (userdata) => ({
        url: "auth/login",
        method: "POST",
        body: userdata
      }),
      invalidatesTags: ['User']
    }),

    register: builder.mutation({
      query: (userdata) => ({
        url: "auth/register",
        method: "POST",
        body: userdata
      })
    }),

    completeRegister: builder.mutation({
      query: (userdata) => ({
        url: "auth/complete-register",
        method: "POST",
        body: userdata
      })
    }),

    students: builder.mutation({
      query: (userdata) => ({
        url: "students",
        method: "POST",
        body: userdata
      })
    }),

    getAllStudents: builder.query({
      query: () => "students/getAll",
      providesTags: ['Students']
    }),

    getStudent: builder.query({
      query: (id) => `students/get/${id}`
    }),

  updateStudent: builder.mutation({
  query: ({ id, userdata }) => ({
    url: `students/update/${id}`,
    method: "PUT",
    body: userdata,
  }),
 }),

  deleteStudent: builder.mutation({
    query: (id) => ({
      url: `students/${id}`,
      method: "DELETE",
    }),
  }),




    createFaculty: builder.mutation({
      query: (userdata) => ({
        url: "/faculty/create",
        method: "POST",
        body: userdata
      })
    }),

    getAllFaculty: builder.query({
      query: () => "/faculty/getAll",
      providesTags: ['Faculty']
    }),

    getFaculty: builder.query({
      query: (id) => `/faculty/get/${id}`
    }),

    updateFaculty: builder.mutation({
      query: ({ id , userdata }) => ({
        url: `/faculty/update/${id}`,
        method: "PUT",
        body : userdata
      })
    }),

    deleteFaculty: builder.mutation({
      query: (id) => ({
        url: `faculty/${id}`,
        method: "DELETE"
      }),
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useCompleteRegisterMutation,
  useStudentsMutation,
  useGetAllStudentsQuery,
  useGetStudentQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useCreateFacultyMutation,
  useGetAllFacultyQuery,
  useGetFacultyQuery,
  useUpdateFacultyMutation,
  useDeleteFacultyMutation,
} = AuthApi
