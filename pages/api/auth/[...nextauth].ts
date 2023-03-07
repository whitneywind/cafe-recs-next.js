import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials, req) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                // perform login logic
                // find out user from db
                if (email !== "maggie@gmail.com" || password !== "123") {
                    console.log('nope not maggie')
                    return null;
                }
                // if everything is fine
                return { id: '123', name: 'maggie', email: 'maggie@gmail.com'}
            },
        })
    ],
    pages: {
        signIn: '/user/sign-in',
        signOut: '/user/register',
    }
}

export default NextAuth(authOptions)
