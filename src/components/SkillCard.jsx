import React from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';

function SkillCard(props) {
    return (
        <div className="skill-card">
          <h3>{props.title}</h3>
          <ul>
            {props.items.map((item, index) => (
              <li key={index}>
                {item}
                {props.hasVerification && index === 0 && props.verificationUrl && (
                  <a href="#" onClick={(e) => { e.preventDefault(); window.open(props.verificationUrl, "_blank"); }}>
                    <VerifiedIcon />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      );
}

export default SkillCard;