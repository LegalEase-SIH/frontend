import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { firebaseConfig } from "../Firebase";
import { AuthContext } from "../context/AuthContext";
import { initializeAppCheck,ReCaptchaEnterpriseProvider} from "firebase/app-check";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider()


export default function Login() {
    
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