import React from 'react';

interface TextFieldProps {
    type: string;
    name: string;
    class: string;
    texte: string;
}

const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <div className={props.class}>
        <input type={props.type} name={props.name} required/>
        <span>{props.texte}</span>
    </div>
  );
};

export default TextField;