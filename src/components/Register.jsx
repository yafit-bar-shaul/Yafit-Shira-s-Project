
import { useContext, useState } from "react";
import MyContext from "./context/context";
import "./Css/Register.css"

export const Register = () => {
    const registerFunc = useContext(MyContext).register;

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onRegister = () => {
        if (password !== confirmPassword) {
            alert("סיסמאות לא תואמות");
            return;
        }

        const newUser = {
            userName,
            email,
            password,
            role: "" // תפקיד ברירת מחדל
        };

        registerFunc(newUser);
    };

    return (
        <>
            <h1>הרשמה</h1>
            <div className="register-form-container">
                <div className="register-form">
                    <input
                        type="text"
                        placeholder="הכנס שם משתמש"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="הכנס אימייל"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="הכנס סיסמא"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="אשר סיסמא"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        className="register-button"
                        onClick={() => {
                            onRegister();
                        }}
                    >
                        להרשמה
                    </button>
                </div>
            </div>
        </>
    );
};