import { createApi ,  fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/' }),
  endpoints: builder => ({

    login: builder.mutation({
      query: (userdata) => ({
        url : "/auth/login",
        method : "POST",
        body : userdata
      })
    }),
 
    Create: builder.mutation({
     query: (userdata) => ({
    url : "/student/create",
    method : "POST",
    body : userdata
   })
   }),

      GetAll: builder.mutation({
      query: (userdata) => ({
        url : "/student/getAll",
        method : "get",
        body : userdata
      })
    }),

      Get: builder.mutation({
      query: ({id}) => ({
        url : `/student/get/${id}`,
        method : "get"
        // body : id
      })
    }),

  update: builder.mutation({
  query: ({ id,userdata  }) => ({
    url: `/student/update/${id}`,
    method: "PUT",
    body: userdata, // 🔥 this is the missing part!
  }),

 }),

   Delete :builder.mutation({
        query:({id}) => ({
          url: `/student/delete/${id}`,
          method : "delete",
          // body :userdata
        })
      }),




    Createfaculty: builder.mutation({
  query: (userdata) => ({
    url : "/faculty/create",
    method : "POST",
    body : userdata
  })
}),

      GetAllfaculty: builder.mutation({
      query: (userdata) => ({
        url : "/faculty/getAll",
        method : "get",
        body : userdata
      })
    }),

      Getfaculty: builder.mutation({
      query: ({id}) => ({
        url : `/faculty/get/${id}`,
        method : "get",
        // body : userdata
      })
    }),

     Updatefaculty : builder.mutation({
      query :({ id , userdata }) => ({
        url :`/faculty/update/${id}`,
        method : "PUT",
        body : userdata
      })
 }),

   Deletefaculty :builder.mutation({
        query:(id)=>({
          url: `/faculty/delete/${id}`,
          method : "delete",
          // body :userdata
        })
      })


  })
})

export const {
   useLoginMutation,
   useCreateMutation,
 useGetAllMutation,
 useUpdateMutation,
 useDeleteMutation,
 useGetMutation,
  useCreatefacultyMutation,
 useGetAllfacultyMutation,
 useUpdatefacultyMutation,
 useDeletefacultyMutation,
 useGetfacultyMutation,

} = AuthApi