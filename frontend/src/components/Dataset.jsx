
import { ImGithub } from "react-icons/im";
export const team = [
    {
        id:1,
        name:'Aditya Ranjan',
        branch: 'Civil Engineering',
        img:"./img/adityaRanjan.jpeg",
        github:"https://github.com/hereisadi",
        linkedin:"https://www.linkedin.com/in/aditya-ranjan-77a6a522b/",
        icon0:<><button className="btn-icon4"><ImGithub className="icon-color3" size={26} /></button> </>
    }, {
        id:2,
        name:"Ankit Upadhaya",
        branch:"Instrumentation engineering",
        img:"./img/Ankit3.jpeg",
        github:"https://github.com/ankit07an",
        linkedin:"https://www.linkedin.com/in/ankit-upadhaya07",
        icon0:<><button className="btn-icon4"><ImGithub className="icon-color3" size={26} /></button> </>
    },{
        id:3,
        name:"Dorothy Phukon",
        branch:"Electrical Engineering",
        github:"https://github.com/dorothyp12",
        linkedin:"https://www.linkedin.com/in/dorothy-phukon-48a066230",
        icon0:<><button className="btn-icon4"><ImGithub className="icon-color3" size={26} /></button> </>,
        img:"./img/dorothy2.jpg",
    },{
        id:4,
        name:"Chimron Saikia",
        branch:"Computer Science",
        img:"./img/chimronSaikia1.jpg",
        github:"https://github.com/chimron",
        icon0:<><button className="btn-icon4"><ImGithub className="icon-color3" size={26} /></button> </>,
        linkedin:"https://www.linkedin.com/in/chimron-saikia-3617ba22b",
    },
];

export const optio = [
    {
        id:'user',
        first:"Do you want to submit Garbage?",
        btn:"User click here!",
        Title:"User Login | CORBIOS",
        route:"/option/user/login"
    },
    {
        id:'admin',
        first:"Admin login?",
        btn:"Admin click here!",
        route:"/option/admin",
        Title: "Admin Login | CORBIOS"
    },
];

