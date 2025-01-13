
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "./context/context";
import "./Css/Login.css";

export const Login = () => {
  // חיבור לפונקצית התחברות מהסטור
  const { login } = useContext(MyContext);
  // הגדרת משתנה אימייל וסיסמא
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // שימוש במשתנה של ניווט
  const navigate = useNavigate();
  // מפעיל את הפונקציה של התחברות, שולח לפונקציה של ההתחברות בסטור את האיימל והסיסמא
  const onLogin = () => {
    const success = login(email, password);
    // אם התשובה היתתה הצלחה הוא מנווט לדף הבית
    if (success) {
      navigate("/home");
    }
  };

  return (
    <div className="login-form-container">
      <h1>התחברות</h1>
      <div className="login-form">
        <input type="email" placeholder="הכנס אימייל" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="הכנס סיסמא" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" className="login-button" onClick={(e) => { e.preventDefault(); onLogin(); }}>
          התחברות</button>
      </div>
    </div>
  );
};

