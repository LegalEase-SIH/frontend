import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { firebaseConfig } from "../Firebase";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export default function SignIn() {
    // console.log("ENV LOADED: ", firebaseConfig.apiKey)
    const navigate=useNavigate()
    const signIn=()=>{
        signInWithPopup(auth,provider).then((result)=>{
            //  console.log(result);
             getAuth().currentUser.getIdToken().then(function(idToken){
               console.log(idToken)
    
               navigate("/")
             })
        }).catch((error)=>{
            console.log(error);
        })
        
        let userId
        auth.onAuthStateChanged((user)=>{
            if(user){
                console.log("userId: ",user.uid)
                userId=user.uid
              
            }
            else {
                console.log("User not logged in")
            }
        })
    }

    

    return (

        <button onClick={signIn}>Sign in</button>
    )
    
}