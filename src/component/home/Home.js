import React from 'react'
import "./home.css"
import data from "../../movies"
import {Link} from "react-router-dom"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import play from "../../Assets/Play.svg"
import detail from "../../Assets/Info.svg"


function Home() {
  let family = data.filter(dat=> dat.type == "family");
  let films = data.filter(dat=> dat.type == "films");
  let action = data.filter(dat=>dat.type =="action");
  let adventure = data.filter(dat=>dat.type == "adventure");
  return (
    <div className="home_main">
      <div className="family">
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"92%", marginLeft:"4%", marginRight:"4%", color:"white", paddingTop:"1%"}}>
          <p style={{fontSize:"18px", fontWeight:"bold"}}>Family</p>
          {family.length>=4? 
          <Link to="/home" style={{fontSize:"13px", opacity:"0.8", textDecoration:"none", color:"inherit"}}>View All</Link>:""}
        </div>
        <div style={{display:"grid",gridGap:"25px",gridTemplateColumns:"repeat(4,minmax(0,1fr))", marginTop:"1%", width:"96%", marginLeft:"4%"}}>
          {family.map((movie)=>(
            <div className="family_warapper">
              
              <img src={movie.img}/>
              <div className="title">{movie.title}</div>
              <div className="duration">1h 30m</div>
              <div className="hov">
                <img src={play} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>Watch Now</span> <br/>
                <img src={detail} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>More Details</span>
              </div>
              <div className="progress">
              {movie.progress<=50?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"red"})} />:""}
               {movie.progress>50 && movie.progress<=70?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"yellow"})} />:""}
               {movie.progress>70 && movie.progress<100?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"green"})} />:""}
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="films">
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"92%", marginLeft:"4%", marginRight:"4%", color:"white", marginTop:"2%"}}>
          <p style={{fontSize:"18px", fontWeight:"bold"}}>Films</p>
          {films.length>=4? 
          <Link to="/home" style={{fontSize:"13px", opacity:"0.8", textDecoration:"none", color:"inherit"}}>View All</Link>:""}
        </div>
        <div style={{display:"grid",gridGap:"25px",gridTemplateColumns:"repeat(4,minmax(0,1fr))", marginTop:"1%", width:"96%", marginLeft:"4%"}}>
          {films.map((movie)=>(
            <div className="family_warapper">
              
              <img src={movie.img}/>
              <div className="title">{movie.title}</div>
              <div className="duration">1h 30m</div>
              <div className="hov">
                <img src={play} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>Watch Now</span> <br/>
                <img src={detail} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>More Details</span>
              </div>
              <div className="progress">
              {movie.progress<=50?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"red"})} />:""}
               {movie.progress>50 && movie.progress<=70?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"yellow"})} />:""}
               {movie.progress>70 && movie.progress<100?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"green"})} />:""}
              </div>
              
            
            </div>
          ))}
        </div>
      </div>
      <div className="action">
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"92%", marginLeft:"4%", marginRight:"4%", color:"white", marginTop:"2%"}}>
          <p style={{fontSize:"18px", fontWeight:"bold"}}>Action</p>
          {action.length>=4? 
          <Link to="/home" style={{fontSize:"13px", opacity:"0.8", textDecoration:"none", color:"inherit"}}>View All</Link>:""}
        </div>
        <div style={{display:"grid",gridGap:"25px",gridTemplateColumns:"repeat(4,minmax(0,1fr))", marginTop:"1%", width:"96%", marginLeft:"4%"}}>
          {action.map((movie)=>(
            <div className="family_warapper">
              
              <img src={movie.img}/>
              <div className="title">{movie.title}</div>
              <div className="duration">1h 30m</div>
              <div className="hov">
                <img src={play} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>Watch Now</span> <br/>
                <img src={detail} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>More Details</span>
              </div>
              <div className="progress">
              {movie.progress<=50?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"red"})} />:""}
               {movie.progress>50 && movie.progress<=70?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"yellow"})} />:""}
               {movie.progress>70 && movie.progress<100?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"green"})} />:""}
              </div>
            
            </div>
          ))}
        </div>
      </div>
      <div className="adventure">
        <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", width:"92%", marginLeft:"4%", marginRight:"4%", color:"white", marginTop:"2%"}}>
          <p style={{fontSize:"18px", fontWeight:"bold"}}>Adventure</p>
          {adventure.length>=4? 
          <Link to="/home" style={{fontSize:"13px", opacity:"0.8", textDecoration:"none", color:"inherit"}}>View All</Link>:""}
        </div>
        <div style={{display:"grid",gridGap:"25px",gridTemplateColumns:"repeat(4,minmax(0,1fr))", marginTop:"1%", width:"96%", marginLeft:"4%"}}>
          {adventure.map((movie)=>(
            <div className="family_warapper">
              
              <img src={movie.img}/>
              <div className="title">{movie.title}</div>
              <div className="duration">1h 30m</div>
              <div className="hov">
                <img src={play} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>Watch Now</span> <br/>
                <img src={detail} style={{height:"13px",width:"13px"}}/><span style={{color:"white", fontSize:"12px", marginLeft:"5px"}}>More Details</span>
              </div>
              <div className="progress">
              {movie.progress<=50?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"red"})} />:""}
               {movie.progress>50 && movie.progress<=70?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"yellow"})} />:""}
               {movie.progress>70 && movie.progress<100?
              <CircularProgressbar value={movie.progress} text={`${movie.progress}%`} styles={buildStyles({textColor:"white", pathColor:"green"})} />:""}
              </div>
              
            
            </div>
          ))}
        </div>
      </div>
    

    </div>
  )
}

export default Home