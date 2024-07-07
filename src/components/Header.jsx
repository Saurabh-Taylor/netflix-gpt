import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { firebaseAuth } from "../firebase/auth.firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebase";
import { addUser, removeUser } from "../store/features/userSlice";
import { logo } from "../constants";
import SearchBar from "./SearchBar";

const Header = ({logoClass="absolute"}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    const unsubcribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubcribed();
  }, []);

  const handleSignOut = async (e) => {
    try {
      e.preventDefault();
      await firebaseAuth.signOutUser();
      navigate('/signup');
    } catch (error) {
      navigate('/error');
    }
  };

  return (
    <div className="bg-black h-0">
      <div>
        <img
          className={`w-24 sm:w-28  lg:w-32 z-10 cursor-pointer ml-10 ${logoClass}`}
          src={logo}
          alt=""
        />
      </div>
      {user && (
        <div className="flex items-center p-2 absolute z-10 right-4 top-6 sm:mr-4 sm:top-8 sm:right-8  ">
          <SearchBar />
          <img className=" mr-2 w-8 h-8 sm:w-10 sm:h-10   cursor-pointer rounded-lg" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt="" />
          <button onClick={handleSignOut} type="button" className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs sm:text-sm md:text-base lg:text-lg px-3 py-1.5 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-5 lg:py-2 mr-2">Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
