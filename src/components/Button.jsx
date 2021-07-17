import React from 'react';
import './Button.css';

const isOperator = val => {
	// if its number, or . or =, return true
	return !isNaN(val) || val === "." || val === "=";
}

// props is the Button, props children is the content of button
export const Button = props => (
	// let the style use button wrapper, if it is number, dont add style, if not number (operator) add style operator
	<div className={`button-wrapper ${
		isOperator(props.children) ? null : "operator"
	}`} onClick={() => props.clickNumber(props.children)}>
		{props.children}
	</div>
)
