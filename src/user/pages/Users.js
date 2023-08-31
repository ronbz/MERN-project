import React from "react";
import UsersList from "../components/UsersList";

const Users=()=>{
    const USERS=[
        {
        id:'u1',
        name:'ron batz', 
        image:'https://howtodrawforkids.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/08/13-how-to-draw-a-Person.jpg.webp', 
        places: 3
        }
    ];
    return <UsersList items={USERS}/>;
}


export default Users;