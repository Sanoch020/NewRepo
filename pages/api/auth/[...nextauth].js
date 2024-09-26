import NextAuth from 'next-auth';
//import Providers from 'next-auth/providers';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g. 'Sign in with...')
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      //authorize: async (credentials) => {
        // Implement your own login logic here
        // For example, you could use a database to check username/password
        authorize(credentials) {
            const user = {id: "1",name:"Vijay",username:"vijay",password:"12345"};
        if (credentials.username === user.username && credentials.password === user.password) {
          //return { id: 1, name: 'Admin User' }
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/signin',  // Custom sign-in page
  },
});
