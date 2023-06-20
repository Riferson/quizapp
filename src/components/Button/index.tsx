import React from "react";
import {ButtonAction} from './style';
interface Props{
    title:string,
    action?:()=>void,
}
export function Button(dados:Props){
    return(
        <>
        <ButtonAction onClick={dados.action}>{dados.title}</ButtonAction>
        </>
    );
}