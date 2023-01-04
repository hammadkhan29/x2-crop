
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
    return (

        <>
            <MainNavbar />
            <Box sx={{ display: 'flex', width: '100vw' }} >
                <Sidebar />
                <Box sx={{ width: 'calc(100% - 62px)', maxHeight: "calc(100vh - 55px)" }}>
                    <TitleContainer style={{ marginBottom: "30px" }}>
                        <Title>Blogs</Title>
                    </TitleContainer>

                    <Box p={10} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>


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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>




                        <Box mt={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>


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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


                            <Card sx={{ maxWidth: 345 }}>
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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                            <Card sx={{ maxWidth: 345 }}>
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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>



                        <Box mt={8} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>


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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating',
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>


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
                                            This may seem a rather bizarre question. The ability for the weather to change our moods is well known. Some individuals prefer warm and sunny weather, and there are those individuals known as pluviophiles, who can find comfort, peace and joy during rainy days.Weather watchers around the world can find the sheer variability of our weather patterns fascinating
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Box>
                    </Box>


                </Box>
            </Box>


        </>
    )
}

export default Blogs