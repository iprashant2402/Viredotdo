import React, { Component } from 'react'
import styled from 'styled-components/native';
import {Text} from 'react-native';


const ButtonBox = styled.TouchableOpacity`
    background: ${props => props.color || 'blue'};
    border-radius: 3px;
    border: 2px solid ${props => props.color || 'blue'};
    margin: 0 10px;
    padding: 10px 10px;
    `
const ButtonOutline = styled(ButtonBox)`
    background : transparent;
    border: 2px solid ${props => props.color || 'blue'};
`

const ButtonOutlineText = styled.Text`
    color: ${props => props.color || 'blue'};
    text-align : center;
`

const ButtonText = styled.Text`
color : #fff;
text-align : center;
`

export class Button extends Component{
    render(){
        let title = this.props.title;
        let color = this.props.color;
        let type = this.props.type;
        if(type == 'outline'){
            return(
                <ButtonOutline onPress={this.props.onClick} color={color}>
                    <ButtonOutlineText color={color}>{title}</ButtonOutlineText>
                </ButtonOutline>
            );
        }
        else{
            return(
                <ButtonBox onPress={this.props.onClick} color={color}>
                    <ButtonText color={color}>{title}</ButtonText>
                </ButtonBox>
            );
        }
    }
} ;