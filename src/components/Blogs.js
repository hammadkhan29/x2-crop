
import React from 'react'
import blog1 from '../assets/farm1.jpeg'
import blog2 from '../assets/farm2.jpeg'
import blog3 from '../assets/farm3.jpeg'
import blog4 from '../assets/farm4.jpeg'
import blog5 from '../assets/farm5.jpeg'
import blog6 from '../assets/farm6.jpeg'
import blog7 from '../assets/farm7.jpeg'
import blog8 from '../assets/farm8.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { useTitle, useTitleContainer } from "./GeneralComponents";
import MainNavbar from './MainNavbar'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'
import '../App.css'
import styled from 'styled-components'

function Blogs() {
    const blogList = [
        {
            id: 1,
            title: 'Can the weather actually smile?',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog1
        },
        {
            id: 2,
            title: 'Will there be snow this Christmas?',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog2
        },
        {
            id: 3,
            title: 'How our cities are creating a sustainable and healthy human environment.',
            publication: 'Posted on 25 Dec 2022',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog3
        },
        {
            id: 4,
            title: 'How the Circular Economy Can Tackle Today’s Global Challenges',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog4
        },
        {
            id: 5,
            title: 'The Growing World of Urban Agriculture ?',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog5
        },
        {
            id: 6,
            title: 'The Race to Create Super-Crops ?',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog6
        },
        {
            id: 7,
            title: 'The Ancient Road to Our Sustainable Future  ',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog7
        },
        {
            id: 8,
            title: 'Rolling back the years with a new style of farming ',
            publication: 'Posted on 04 Jan 2023',
            text: 'This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
            img: blog8
        }
    ]
    const Title = useTitle();
    const TitleContainer = useTitleContainer();

    const Container = styled("div")(() => ({
        maxHeight: "calc(100vh - 62px)",
        overflowY: "auto",
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
        "::-webkit-scrollbar-thumb": {
          background: "#888",
        },
    
        "::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },}))
    return (

        <>
        <Box sx={{ width: '100%',display: "flex", flexDirection: "column"}} >
            <MainNavbar />
            <Box sx={{ display: 'flex'}} >
                <Sidebar />
                <Box sx={{  width: "calc(100% - 55px)", display: { sm: 'block', xs: 'flex' }, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <TitleContainer style={{ marginBottom: "30px" }}>
                        <Title>Blogs</Title>
                    </TitleContainer>

                    <Box p={10} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                        {/* <Link to={{ pathname: "https://openweather.co.uk/blog/post/can-weather-actually-smile" }} exact target="_blank">  */}
                        <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/will-there-be-snow-christmas">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog1}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Will there be snow this Christmas?
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        What can be more emotive of a happy festive season as the thought of waking up on Christmas day to a gentle covering of pristine snow. It may not be surprising however that different countries have different ideas of what really constitutes a ‘white Christmas’. 

The USA requires a 2.5cm snow covering for their definition to be satisfied....
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>
                        {/* </Link> */}

                        <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/how-our-cities-are-creating-sustainable-and-healthy-human-environment">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog2}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Can the weather actually smile?
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Our cities have always been in a constant state of transition. The recent environmental and climate challenges have given a new impetus to examine the urban infrastructure and environment from a human perspective. The city dweller’s health, both mental and physical, is being placed at the forefront of city design and adaptation. In our previous article we looked at how our cities are becoming more sustainable, we now turn our focus to the human aspects of urban dwelling.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>

                        <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/how-our-cities-are-creating-sustainable-and-healthy-human-environment   ">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog3}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            How our cities are creating a sustainable and healthy human environment
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Our cities have always been in a constant state of transition. The recent environmental and climate challenges have given a new impetus to examine the urban infrastructure and environment from a human perspective. The city dweller’s health, both mental and physical, is being placed at the forefront of city design and adaptation. In our previous article we looked at how our cities are becoming more sustainable, we now turn our focus to the human aspects of urban dwelling....
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </a>
                        </Box>




                        <Box mt={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                        <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/how-circular-economy-can-tackle-todays-global-challenges">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog4}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            How the Circular Economy Can Tackle Today’s Global Challenges
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        As our resources are finite, the traditional linear economic model that does utilize the fabric of products at the end of their useful lives cannot be maintained indefinitely. Linear model products are designed to be effective during their lives, but not at the end. To take an often quoted example of a crisp packet; This is a one-use item that is specifically designed for one purpose....
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>

                            <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/growing-world-urban-agriculture ">
                            <Card sx={{ maxWidth: 345, marginTop:'50px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog5}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            The Growing World of Urban Agriculture ?
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        In our previous article we examined the challenges facing the adoption of a sustainable transportation system using electric vehicles, and some of the technical challenges that were being addressed. In the next series of articles we turn our attention to the urban environment, including its infrastructure and transportation.

We will start by examining the growing challenge of supplying the world’s cities with nutritious, fresh and sustainable food, the growth of farms within the confines of our cities....
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>

                            <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/race-create-super-crops">
                            <Card sx={{ maxWidth: 345, marginTop:'100px' }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog6}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            The Race to Create Super-Crops ?
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Gene editing is seen as a safer and less obtrusive alternative to the older technology of genetic modification. With gene editing, a crop has part of its DNA ‘snipped’ out. With gene modification, the crop’s DNA is modified by having a section of DNA added, sometimes from a different species.

The Scottish government’s stance is to protect the ‘purity’ of Scotland’s food and drinks sector. However the Scottish National Farmers union see that excluding gene-edited crops would put them at a considerable disadvantage to their English counterparts...
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>
                        </Box>



                        <Box mt={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                        <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/ancient-road-our-sustainable-future">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog7}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            The Ancient Road to Our Sustainable Future
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        The scientific notion that very small changes in the Earth’s atmospheric composition could bring about climate change was first identified by physicist John Tyndall in the 1860s. In April 1896, a seminal paper by Swedish scientist Svante Arrhenius entitled “On the influence of Carbonic acid in the air upon the temperature on the ground” first predicted that changes in atmospheric carbon dioxide levels could substantially alter the surface temperature through what is now known as the greenhouse effect.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>

                            <a className='links'  target="_blank" href="https://openweather.co.uk/blog/post/rolling-back-years-new-style-farming">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={blog8}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Rolling back the years with a new style of farming
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                        Homo-Sapiens are estimated to have evolved 300,000 years ago, with our earliest human ancestors dating back two million years. It was not until 1.8 million years ago before we first used fire to cook our food. This technological advance is said to have been a major factor in our development and evolution. Not having to spend valuable  energy on food digestion enabled our brains to develop and evolve into the multidimensional, creative and sometimes slightly esoteric organs of today.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            </a>

                        </Box>
                    </Box>


                </Box>
            </Box>
            </Box>


        </>
    )
}

export default Blogs