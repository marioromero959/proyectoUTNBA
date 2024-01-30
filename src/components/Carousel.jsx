import { useEffect, useState } from "react"
import styled from 'styled-components'

const StyledButton = styled.button`
    margin:0;
    width:50px;
    padding:2px;
`;

const StyledCarouselImg = styled.img`
    height:100%;
    width:100%;
    opacity:0;
    transition:1s;
    &.loaded{
        opacity:.5;
    }
`;

const StyleP = styled.p`
    text-align:center;
    position:relative;
    font-size:30px;
    top:20em;
    left:10%;
    width:80%;
    color:#fff;
    @media (max-width:480px) {
        top:10em;
    }
`;

export default function Carousel({images,autoplay}){
    const [selectedIndex,setSelectedIndex] = useState(0) 
    const [selectedImage,setSelectedImage] = useState(images[0]) 
    const [loaded,setLoaded] = useState(false) 
    
    useEffect(()=>{
        if(autoplay){
            const interval = setInterval(()=>{
                setNewImage(selectedIndex,images)
            },3000)
            return () =>clearInterval(interval)
        }
    })

    const setNewImage = (index, images, next = true) =>{
        setLoaded(false)
        setTimeout(()=>{
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : (condition ? selectedIndex - 1 : images.length - 1);
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        },500)
    }

    const previous = () =>{
        setNewImage(selectedIndex,images, false)
    }
    const next = () =>{
        setNewImage(selectedIndex,images)
    }
    return (
        <>
        <div style={{ background:'#000',width:'60%', height:'100vh', position:'relative'}}>
            <StyledCarouselImg 
                src={selectedImage} 
                alt="" 
                onLoad={()=>setLoaded(true)} className={loaded ? 'loaded' : ''}/>
        </div>
        <div className="buttons">
            <StyledButton onClick={previous}> {'<'} </StyledButton>
            <StyledButton onClick={next}> {'>'} </StyledButton>
        </div>
        </>

    )

}