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
    
               navigate("/home")
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
        <div className="flex flex-col space-y-9 justify-center h-screen items-center bg-bg-light">
            <h1 className="text-2xl font-serif ">Welcome to LegalEase. Sign in to get into the world of law</h1>
            <button onClick={signIn} className="bg-orange-400 w-1/6 h-16 border border-slate-800 p-4 rounded-2xl font-semibold text-2xl font-serif">Sign in</button>
        </div>
        
    )
    
}