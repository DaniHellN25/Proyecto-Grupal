import React from "react"
import {createChatBotMessage} from "react-chatbot-kit"
import LearningOptions from "../LearningOptions/LearningOptions.jsx"
import DogPicture from './dogPicture'
const config = {
    botName: "TereBot",
    initialMessages:[
        createChatBotMessage("Hola, Soy Tere Bot. ¿Como puedo ayudarte el dia de hoy? ",{
            widget:"learningOptions"
        }),
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: "#376B7E",
        },
        chatButton: {
          backgroundColor: "#5ccc9d",
        },
    },
    widgets:[
      {  
        widgetName: 'dogPicture',
        widgetFunc: (props) => <DogPicture {...props} />,    
      },
      {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
      }
    ]
}
export default config;