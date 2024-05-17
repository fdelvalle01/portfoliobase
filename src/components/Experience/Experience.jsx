import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { PiGraduationCap } from "react-icons/pi";
import { CiMedal } from "react-icons/ci";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Experience.css";
import { width } from '@mui/system';


const Experience = () => {
  return (
    <Container fluid className="project-sectionEx">
    <Particle />
        <Container>
            <Row sx={{display: 'flex'}}>
                <Col md={6} className="home-header">
                    <h1 className="heading-nameEx">
                        <CiMedal className="icon"/> &nbsp;
                        <strong className="main-name">My Experience</strong>
                    </h1>
                    <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2022 - Present
                            </div>
                            <h3 class="resume-title">Full Stack Developer</h3>
                            <div class="institute">
                                    Bolsa de Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                       <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2020 - 2022
                            </div>
                            <h3 class="resume-title">Programmer</h3>
                            <div class="institute">
                                Bolsa de Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                       <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2020 - 2020
                            </div>
                            <h3 class="resume-title">Professional practice</h3>
                            <div class="institute">
                                Bolsa de Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                    </Col>
                <Col md={6} className="home-header">
                    <h1 className="heading-nameEx">
                        <PiGraduationCap className="icon"/> &nbsp;
                        <strong className="main-name">My Education</strong>
                    </h1>
                    <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2022 - 2023
                            </div>
                            <h3 class="resume-title">diploma in Mobile Application</h3>
                            <div class="institute">
                                    Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                    <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2021 - 2022
                            </div>
                            <h3 class="resume-title">Elementary English A2</h3>
                            <div class="institute">
                                    Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                       <Card className='cardEx'>
                       <CardContent >
                            <div className="time">
                                    2016 - 2020
                            </div>
                            <h3 class="resume-title">Informatics Engineer</h3>
                            <div class="institute">
                                    Santiago, Chile
                                </div>
                       </CardContent>
                       </Card>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Experience