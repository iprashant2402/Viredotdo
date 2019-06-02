import React,{ Component } from "react";
import styled from 'styled-components/native';
import {Text} from 'react-native';

const LogoText = styled.Text`
    font-weight : bold;
    font-size : 20;
    color : #fff;
`
const LogoWrapper = styled.View`
    text-align : center;
    padding : 5px;
`

export class Logo extends Component{
    render(){
        return(
            <LogoWrapper>
            <LogoText>VIRE.DO</LogoText>
            </LogoWrapper>
        );
    }
}