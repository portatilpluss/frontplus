import { config } from "dotenv";
import { urlencoded } from "express";
config();

const Home = (req, res)=>{
    const url = process.env.APIURL;
    const urlFull = `${url}/login`

    res.render("view.home.ejs", {urlFull});
}
const Register = (req, res)=>{
    const url = process.env.APIURL;
    const urlFull = `${url}/register`

    res.render("view.register.ejs", {urlFull});
}
const forgotPassword = (req, res)=>{
    const url = process.env.APIURL;
    const urlFull = `${url}/email`

    res.render("view.forgotpasword.ejs", {urlFull});
}
const insetCode = (req, res)=>{
    const url = process.env.APIURL;
    const urlFull = `${url}/code`

    res.render("view.insertcode.ejs", {urlFull});
}
const updatePassword = (req, res)=>{
    const url = process.env.APIURL;
    const urlFull = `${url}/update`

    res.render("viewupdatepassword.ejs", {urlFull});
}

const logout = (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
}

export const controller = {
    Home,
    Register,
    forgotPassword,
    insetCode,
    updatePassword,
    logout
}