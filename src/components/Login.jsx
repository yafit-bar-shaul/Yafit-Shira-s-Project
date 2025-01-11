import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/context";
import "./Css/Login.css";

export const Login = () => {
  const { login } = useContext(MyContext); // הוצאת הפונקציה מהקונטקסט
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // שימוש ב-useNavigate לצורך ניווט

  const onLogin = () => {
    const success = login(email, password); // קריאה לפונקציה מהקונטקסט
    if (success) {
      alert("התחברת בהצלחה!");
      navigate("/home"); // מעבר לדף הבית
    }
  };

  return (
    <>
      <h1>התחברות</h1>
      <div className="login-form-container">
        <div className="login-form">
          <input
            type="email"
            placeholder="הכנס אימייל"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="הכנס סיסמא"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="login-button"
            onClick={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            להתחברות
          </button>
        </div>
      </div>
    </>
  );
};
