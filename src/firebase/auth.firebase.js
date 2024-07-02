import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged } from "firebase/auth";

export class FirebaseAuth{
    auth 
    constructor(){
        this.auth = getAuth()
    }

    async createUser({email , password}){
       try {
         const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password)
         const user = userCredentials.user;
         return user
       } catch (error) {
            reject(error); // Reject the promise with the error
       }
    }

    onAuthStateChanged (){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          console.log("user::from auth class" , user);
          const uid = user.uid;
         
        } else {
          
        }
      });
    }
}

export const firebaseAuth = new FirebaseAuth()