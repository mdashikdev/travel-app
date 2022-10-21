import { createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,FacebookAuthProvider ,signInWithPopup ,updateProfile,signOut } from "firebase/auth";
import {auth} from './firebase.config';

const GoogleProvider = new GoogleAuthProvider();
const FbPovider = new FacebookAuthProvider();

export const createUserwithEmailAndPassword = (name,email,password) => {
   return  createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateName(name)
                .then(res => {
                    return res
                })
                .catch(err => {
                    return err
                })
                return userCredential.user;
            })
            .catch((error) => {
                return error.message;
        });
}

export const loginUserWithEmailAndPass = (email,password) => {
  return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return userCredential.user;
        })
        .catch((error) => {
            return error.message;
        });
}

export const loginWithGoogle = () => {
      return  signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            return result.user;
        }).catch((error) => {
            return error.message;
        });
}

export const loginWithFb = () => {
    return  signInWithPopup(auth, FbPovider)
            .then((result) => {
                return result.user;
            })
            .catch((error) => {
                return error.message;
            });
}

const updateName = (name) => {
   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
            return 'name updated'
        }).catch((error) => {
            return error.message
        });
}

export const SingOut = () => {
   return signOut(auth).then(() => {
            return 'Succussfully loged out'
        }).catch((error) => {
            return 'An error occured'
        });
}