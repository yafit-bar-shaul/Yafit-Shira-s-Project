
import MyContext from "./context/context";
import { useContext } from "react";
import "./Css/UsersManager.css"

export const UsersManager = () => {
    const { users } = useContext(MyContext);
    return (
        <div className="users-container">
            <h1 className="users-title">משתמשים</h1>
            <ul className="users-list">
                {users &&
                    users.map((u) => (

                        <li key={u.id}>

                          <b><span> {u.email} :אימייל</span></b>  

                           <b><span> {u.userName} :שם משתמש</span></b> 

                          <b> <span>  {u.id} :מספר מזהה</span></b> 
                        </li>
                    ))}
            </ul>
        </div>
    );
};
