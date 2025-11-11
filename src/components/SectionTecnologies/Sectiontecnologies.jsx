import IconosContainer from '../IconosContainer/IconosContainer'
import angularLogo from '/src/assets/angular.png';
import reactLogo from '/src/assets/react.png';
import javascriptLogo from '/src/assets/javascript.png';
import nodejs from '/src/assets/nodejs.png'
import mongo from  '/src/assets/mongo.png'
import sass from  '/src/assets/sass.png'
import bootstrap from '/src/assets/Bootstrap.png'
import java from '/src/assets/java.png'
import linux from '/src/assets/linux.png'
import c from '/src/assets/c.png'
import docker from '/src/assets/docker.png'
import git from '/src/assets/git.png'
import css from '/src/assets/css.png'
import express from '/src/assets/express.png'
import sprint from '/src/assets/sprintboot.png'
import python from '/src/assets/python.png'
import mysql from '/src/assets/mysql.png'
import django from '/src/assets/django.png'
import net from '/src/assets/net.png'
import typescript from '/src/assets/typescript.png'

export default function sectiontecnologies() {
    const listImg = [angularLogo,typescript, reactLogo,javascriptLogo,bootstrap,css,sass,nodejs,mongo,java,linux,c,docker,git,express,sprint,python,mysql,django,net];

    return (

        <>
          {listImg.map((img, index) => (
            <IconosContainer key={index} img={img} />
          ))}
        </>
  )
}
