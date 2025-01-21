import { config } from 'dotenv'
import jwt from 'jsonwebtoken'
config();


export const oauth = async(req, res, next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.redirect('/'); 
        }


        const decoded = await jwt.verify(token, process.env.PRIVATE_KEY);        
        next();
    } catch (error) {
        console.log(error);
        return res.redirect('/'); 
    }
}

export const oauthEmail = async(req, res, next)=>{
    try {
        const token = req.cookies.tokenemail;
        if(!token){
            return res.redirect('/'); 
        }


        const decoded = await jwt.verify(token, process.env.PRIVATE_KEY);
        
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error);
        return res.redirect('/'); 
    }
}