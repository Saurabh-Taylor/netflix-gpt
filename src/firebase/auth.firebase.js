import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class FirebaseAuth{
    auth = getAuth() 
    

    async createUser({email , password}){
       try {
         const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password)
         const user = userCredentials.user;
         return user
       } catch (error) {
         throw new Error("Error at: createUser "+ error.message)
       }
    }
}

const firebaseAuth = new FirebaseAuth()

const response  = await firebaseAuth.createUser({email:"tailorsaurabh@gmail.com" , password: "password"})
console.log(response);