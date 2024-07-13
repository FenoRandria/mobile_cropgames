import React from 'react';

interface ButtonGroundProps {
  sary: string;
  href: string;
  nameClass: string;
  contenu: string;
}

const ButtonGround: React.FC<ButtonGroundProps> = (props) => {

  const handleButtonClick = () => {
    window.location.href = props.href;
    // history.push(props.href);
  };

  return (
    <div className={props.nameClass} onClick={handleButtonClick}>
    <a>
      <p>{props.contenu}</p>
      <div className="icon">
        <img src={props.sary} alt=""/>
      </div>
    </a>
    </div>
  );
};

export default ButtonGround;
