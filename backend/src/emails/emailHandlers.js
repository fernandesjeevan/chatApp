import { resendClient,sender  } from "../lib/resend.js";

import {createWelcomeEmailTemplate} from "../emails/emailTemplates.js";
export const sendWelcomeEmail = async ( email,name,clientURL) =>{
    
    console.log(email)
    console.log(clientURL)
    console.log(sender.name,sender.email)
    console.log(
  "RESEND_API_KEY:",
  process.env.RESEND_API_KEY,
  process.env.RESEND_API_KEY?.length
);
    const {data,error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject: "Welcome to Chatify",
        html: createWelcomeEmailTemplate(name,clientURL),
    });

    if(error){
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome Email")
        
    }
    console.log("Welcome email sent succesffully",data);
}