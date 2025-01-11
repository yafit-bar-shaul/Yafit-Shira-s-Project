import { useState } from "react";


function CreateStore() {
 
    const [users, setUsers] = useState([

        { id: 1, userName: "Shira", email: "shiras05485@gmail.com", password: "2151", role: "manager" },
        { id: 2, userName: "Yafit", email: "y0527606784@gmail.com", password: "3282", role: "manager" },
        { id: 3, userName: "shprinza", email: "shprinza@gmail.com", password: "5678", role: "user" },
        { id: 4, userName: "sara", email: "sara@gmail.com", password: "1234", role: "user" }
    ]);


    const [currentUser, setCurrentUser] = useState(null);
    const store = {
        users,
        currentUser,
        login: (email, password) => {
            const user = users.find(u => u.email == email && u.password == password)
            if (!user)

                alert("אחד הפרטים שהוזנו שגוי")

            else {
                setCurrentUser(user);
                alert(user.userName + "התחבר בהצלחה")
                 //navigate("/home");
            }
        },

        register: (newUser) => {
            if (users.includes(u => u.email == newUser.email))
                alert("האימייל קיים במערכת")
            else {
                newUser.id = users[users.length - 1].id + 1;
                setUsers([...users, newUser])
                setCurrentUser(newUser);
                alert(newUser.userName + " נרשם בהצלחה")
            }
        },
        loguot:()=>{
            setCurrentUser(null)
        }
    }
    return store;

}
export { CreateStore };