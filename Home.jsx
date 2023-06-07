import React from "react"
import Topbar from "../../component/topbar/Topbar";
import Feed from "../../component/feed/Feed";
import Cardd from "../../component/cardd/Cardd";
import "./Home.css"





export default function Home() {
  return (
    <>
        <Topbar />
        <div className="home-container">
        <Feed />
        <Cardd />

       

        </div>
    
        
    </>
  )
};