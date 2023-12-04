
import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import {Routes,Route} from "react-router-dom";
import { Toaster } from "@/components/ui/toaster"
import Explore from "./_root/pages/Explore";
import Saved from "./_root/pages/Saved";
import AllUsers from "./_root/pages/AllUsers";
import CreatePost from "./_root/pages/CreatePost";
import EditPost from "./_root/pages/EditPost";
import PostDetails from "./_root/pages/PostDetails";
import Profile from "./_root/pages/Profile";
import UpdateProfile from "./_root/pages/UpdateProfile";


function App() {
  

  return (
   <main className="flex h-screen">
     <Routes>
       <Route element={<AuthLayout/>}>
         <Route path="/sign-in" element={<SigninForm/>} />
         <Route path="/sign-up" element={<SignupForm/>} />

       </Route>
       <Route element={<RootLayout />}>
         <Route index element={<Home/>} />
         <Route path="/explore" element={<Explore />}></Route>
         <Route path="/saved" element={<Saved />}></Route>
         <Route path="/all-users" element={<AllUsers />}></Route>
         <Route path="/create-post" element={<CreatePost />}></Route>
         <Route path="/update-post/:id" element={<EditPost />}></Route>
         <Route path="/posts/:id" element={<PostDetails />}></Route>
         <Route path="/profile/:id/*" element={<Profile />}></Route>
         <Route path="/update-profile/:id" element={<UpdateProfile />}></Route>
      
       </Route>

     </Routes>
     <Toaster/>

   </main>
  )
}

export default App
