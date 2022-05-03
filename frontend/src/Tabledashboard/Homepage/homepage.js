import React from 'react'
import './homepage.scss';
import Hcpm from '../../components/headerCPM';

const Homepage=()=>{

  return (
   
    <div className='homepage'>
 <Hcpm text={'Home Page'}/>


<div className='homepage-body'>
 
  <div className="description">  <span className="description-hg">POINTS </span>is a tournament management application for Battle Grounds Mobile India .  </div>

  <div className='instruction' >

    <div className='instruction-hg'><span className='xxx'>1</span>
    <div className='ins-text'>Signin with your Google Account</div>
    
  
    </div>
    <div className='instruction-hg'><span className='xxx'>2</span>
    <div className='ins-text'>Click on 'Create tournament' button. Fill up the details such as Tournament name, Organiser name etc. Set the points system for the tournament.</div>
    
    </div>
    <div className='instruction-hg'><span className='xxx'>3</span>
    <div className='ins-text'>Click on "edit" button to add teams , results, etc.. click on "drop" button to drop the table</div>
    
    </div>
    <div className='instruction-hg'><span className='xxx'>4</span>
    <div className='ins-text'> To add a team , enter the team name and hit enter . Teams can be added or dropped at any time you want. </div>
    
    </div>
    <div className='instruction-hg'><span className='xxx'>5</span>
    <div className='ins-text'> Click on "Right arrow" fixed at left side of your screen to navigate to  teams, results and overall standings page</div>
    
    </div>
    <div className='instruction-hg'><span className='xxx'>6</span>
    <div className='ins-text'> Navigate to "results" page to enter the results.Select the team for their respective place and enter thier finishes.Check the results in the preview shown above the points card.Click "finish and save" to push the results to the points table of the current match </div>
    
    </div>
    <div className='instruction-hg'><span className='xxx'>7</span>
    <div className='ins-text'> Navigate to "overall"  page to download the points table. </div>
    
    </div>
  </div>
</div> 
    </div>
);
     
}

export default Homepage