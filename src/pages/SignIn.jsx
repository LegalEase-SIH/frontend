import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { firebaseConfig } from "../Firebase";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export default function SignIn() {
    // console.log("ENV LOADED: ", firebaseConfig.apiKey)
    
    const signIn=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
    }

    return (

        <button onClick={signIn}>Sign in</button>
    )
    
}