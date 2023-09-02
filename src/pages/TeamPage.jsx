import React, { useEffect } from 'react';
import Team from '../components/Team/Team';

const TeamPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh', 
            backgroundColor: '#FFFFFF',
        }}>
            <Team />
        </div>   
    );
  };
  
  export default TeamPage;