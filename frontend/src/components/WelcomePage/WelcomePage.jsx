import "./WelcomePage.css";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="WelcomePage">
      <p dir="rtl">ברוכים הבאים לאפליקצית CookEat</p>
      <p dir="rtl">אפלקצית CookEat היא אפליקציה ל...</p>
      <Link to="/meal-selection">
        <button
          className="get-started-button"
          onClick={() => {
            alert("תמר איך את רוצה שנתחיל עם אנחנו לא עובדים?");
          }}
        >
          בואו נתחיל
        </button>
      </Link>
    </div>
  );
}

export default WelcomePage;
