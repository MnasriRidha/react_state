import React from 'react'
import profileImg from'./profileImg.jpg'
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    fullName:"Mnasri Ridha ",
    bio:"I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction.", 
    imgSrc:profileImg, 
    profession:"Full Satck JS Developer",
    isShows:false
    };
  }

  handleClick=()=> {
     var x = document.getElementById("profile");
      if( this.state.isShows===false){
        this.setState({isShows:true});
         x.style.display="flex";
    }
    else
    { this.setState({isShows:false});
         x.style.display="none";
  }
  }
  render() {
    return (
    <div className="Toggle" style={{textAlign:"center"}}>
        
        <div id="profile" style={{display:"none", flexDirection:"column", margin:"20px 15px" }}>
            <img src={this.state.imgSrc} alt="profile photo" style={{width:"200px",height:"230px",
            borderRadius:"200px", marginLeft:"auto", marginRight:"auto"}}/>
            <h1 style={{color:"salmon", fontStyle:"oblique" }}>{this.state.fullName}</h1>
            <h3>{this.state.profession}</h3>
            <p>{this.state.bio}</p>
        </div>
        <button onClick={this.handleClick} style={{width: "30%",color:"#04ccde",border: "none",
        padding: "15px 32px",textAlign:"center",fontSize:"25px",margin:"4px 2px",cursor:"pointer",
        boxShadow:"0 8px 16px 0 rgba(255,255,0,1), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
            {this.state.isShows ? 'Hide profile' : 'See Profile'}
        </button>
        </div>
     
    );
  }
}

export default Toggle;