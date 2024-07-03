import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged , signOut ,updateProfile, signInWithEmailAndPassword } from "firebase/auth";










export class FirebaseAuth{
    auth 
    constructor(){
        this.auth = getAuth()
    }

    async createUser({email , password , displayName}){
       try {
         const userCredentials = await createUserWithEmailAndPassword(this.auth, email, password)
         const user = userCredentials.user;
         await updateProfile(user, {
          displayName: displayName , photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
         return user
       } catch (error) {
            reject(error); // Reject the promise with the error
       }
    }

    async signOutUser(){
      try {
        const user = await signOut(this.auth)
        console.log(user);
      } catch (error) {
        console.log("user::from signout class" , error.message);
      }
    }

    async signInUser({email , password}){
      try {
        const userCredentials = await signInWithEmailAndPassword(this.auth, email, password)
        console.log("user userCredentials from sign in class::"+userCredentials);
        const user = userCredentials.user;
        console.log("user logged in from sign in class::" , user);
      } catch (error) {
        console.log("user::from signin class" , error.message);
      }
       
    }


}

export const firebaseAuth = new FirebaseAuth()


    // onAuthStateChanged (){
      
    //   const user  = onAuthStateChanged(this.auth, (user) => {
    //       if (user) {
    //         console.log("user::from auth class" , user);
    //       }
    //       return  user
    //   });
    //   return user
    // }