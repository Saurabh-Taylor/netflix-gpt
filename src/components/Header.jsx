import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { firebaseAuth } from "../firebase/auth.firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { addUser, removeUser } from "../store/features/userSlice";
import { logo } from "../constants";





const Header = ({logoClass="absolute"}) => {
  const navigate  = useNavigate()
  const dispatch =useDispatch()
  const user  = useSelector(state => state.user)


  useEffect(()=>{
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      
        if (user) {
          const {uid , email , displayName} = user
          dispatch(addUser({uid , email , displayName}))
          navigate("/browse")
        }else{
          dispatch(removeUser())
          navigate("/")
        }
    });

    return ()=> unsubcribed()
    
  },[])

  const handleSignOut = async (e)=>{
    try {
      e.preventDefault()
      await firebaseAuth.signOutUser()
      navigate('/signup')
    } catch (error) {
      navigate('/error')
    }
  }
  
  return (
    <div className="bg-black" >
      <div className=" " >
        {" "}
        <img
          className={`w-32 z-10 cursor-pointer ml-10 absolute`}
          src={logo}
          alt=""
        />
      </div>
      {user &&(
        <div className="flex mr-4 items-center  p-2 absolute z-10  right-4 top-6 " >
        <img className="w-12 mr-4 cursor-pointer rounded-lg" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt=""  />
        <button onClick={handleSignOut} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign Out</button>
      </div>
      )}
    </div>
  );
};

export default Header;
