import {ChangeEvent} from "react";

type InputPropsType = {
	currentText: string// НУЖНО ПРОТИПИЗИРОВАТЬ
	setCurrentText: (e:string)=>void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
		props.setCurrentText(e.currentTarget.value);
	};

	return (
	  <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};
