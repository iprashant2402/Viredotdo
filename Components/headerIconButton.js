import React, { Component } from 'react'
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {MaterialIcons} from '@expo/vector-icons';

const ButtonBox = styled.TouchableOpacity`
    background: transparent;
    border: none;
    color: ${props => props.color || 'black'};
    padding: 10px 10px;
    `
const ButtonText = styled.Text`
color : ${props => props.color || 'black'};
text-align : center;
`

export class HeaderIconButton extends Component{
    render(){
        let title = this.props.title;
        let textColor = this.props.color;
        let icon = this.props.icon;
        if(icon){
            return(
                <ButtonBox onPress={this.props.onClick} color={textColor}>
                    <ButtonText color={textColor}>
                        <MaterialIcons name={icon} color={textColor} size={20} />     
                    </ButtonText>
                </ButtonBox>
            );
        }
        else{
            return(
                <ButtonBox onPress={this.props.onClick} color={textColor}>
                    <ButtonText color={textColor}>{title}</ButtonText>
                </ButtonBox>
            );
        }      
    }
} ;