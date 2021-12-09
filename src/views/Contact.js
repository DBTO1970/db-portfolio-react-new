import { ClassNames } from "@emotion/react";
import React from "react";
import { useStyles } from "../styles";
import ContactForm from "../components/ContactFormComponent";



const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>

            <ContactForm />
        </div>
        
    )
};

export default Contact;