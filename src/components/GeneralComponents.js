import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';


export const useTitle = ()=>{
    const theme = useTheme();

    return styled('div')(()=>({
        fontFamily: theme.typography.LatoFont,
        fontSize: '28px',
        fontWeight:"bold",
        fontWeight: 400,
        lineHeight:'36px',
        marginLeft: '65px',
        '@media(max-width:600px)': {
            fontSize: '20px',   
            lineHeight:'20px',
        }
    }))    
} 

export const useTitleContainer = ()=>{
    
    return styled('div')(()=>({
        height: '70px',
        borderBottom: '2px solid #B7B7B7',
        display: 'flex',
        alignItems: 'center',
    }))
}