import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { firebaseConfig } from "../Firebase";

export default function Login() {
    const app = initializeApp(firebaseConfig);
    const auth=getAuth(app);
    const provider=new GoogleAuthProvider()
    
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