import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormGroup from '@mui/material/FormGroup';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';



const ContactForm = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message, datetime } = e.target.elements;
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
            datetime: datetime.value
        };
        let response = await fetch("https://dbcom-server.donbarto.com:5000/contactform", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        console.log(details.datetime);
        alert(result.status);
    };
    
    return (
        <Box sx={{textAlign: 'justify', alignItems: 'center', alignSelf: 'center',color: 'black', padding: '20px', margin: '10px auto 10px auto'}}
                    component="form" 
                    autoComplete="off"
                    onSubmit={handleSubmit}>
            <Card variant="elevation">
                <CardHeader title="Contact Don" />
                    
                <CardContent>
                
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="name" sx={{ marginRight: '10px'}}>Name: </FormLabel>
                        <Input variant="filled" type="text" id="name" required autoFocus/>
                    </FormGroup>
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="email" sx={{ marginRight: '10px'}}>Email: </FormLabel>
                        <Input variant="filled" type="email" id="email" required />
                    </FormGroup>
                    <FormGroup row sx={{paddingBottom: 5}}>
                        <FormLabel htmlFor="message" sx={{ marginRight: '10px'}}>Message: </FormLabel>
                        <TextField 
                            multiline 
                            variant="filled"
                            type="text"
                            placeholder="What's on your mind?"
                            rows={6} 
                            id="message" 
                            style={{width: "60vw"}}
                            required/>
                    </FormGroup>
                    <FormGroup>
                    <FormLabel sx={{ marginRight: '10px'}}>Schedule a Meeting: </FormLabel>
                        <TextField 
                            id="datetime"
                            variant="outlined"
                            color="secondary"
                            type="datetime-local"
                            sx={{ maxWidth: '40vw' }}
                        />
                    </FormGroup>
                    <Button 
                        startIcon={<SendRoundedIcon />}
                        variant="contained" type="submit" sx={{marginTop: '5px', backgroundColor: "color.primary" }}>{status}</Button>
             
            </CardContent>
        </Card>
    </Box>
    );
};

export default ContactForm;

