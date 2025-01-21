import { config } from "dotenv";

config();

const dashHome = (req, res)=>{

    res.render("admin/home_admin.ejs")
}
const EmployesAdmin = (req, res) =>{
    const url = process.env.APIURL;
    const urlFull = `${url}/admins`;
    res.render("admin/employes_admin.ejs",{urlFull});
}
const ComputersAdmin = (req, res)=>{
    res.render('admin/computers.ejs');
}
const accesoriesAdmin = (req, res)=>{
    res.render('admin/accesories.ejs');
}
const addAdmin = (req, res)=>{
    const url= process.env.APIURL;
    const urlFull = `${url}/admin-reg`;
    res.render('admin/form_admin.ejs', {urlFull});
}
export const  admin = {
    dashHome,
    EmployesAdmin,
    ComputersAdmin,
    accesoriesAdmin,
    addAdmin
}