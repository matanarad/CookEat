import "./MealSelection.css";
import MealBox from "../MealBox/MealBox";
import { useEffect, useState } from "react";
function MealSelection() {
  useEffect(() => {
    setMealsList([
      {
        dishList: ["סלט קייסר", "המבורגר", "ציפס", "עוגת גבינה"],
        allergiesList: ["בשרי", "לא כשר", "מכיל גלוטן"],
        time: "05:30",
      },
      {
        dishList: ["פתריות ממולאות", "סלט קולורבי (איכס)"],
        allergiesList: ["צמחוני", "כשר", "מכיל גלוטן"],
        time: "01:30",
      },
      {
        dishList: ["קרפציו", "סינטה", "גלידה שוקולד"],
        allergiesList: ["בשרי", "מכיל גלוטן"],
        time: "02:00",
      },
      {
        dishList: ["סלט קייסר", "המבורגר", "ציפס", "עוגת גבינה"],
        allergiesList: ["בשרי", "לא כשר", "מכיל גלוטן"],
        time: "05:30",
      },
      {
        dishList: ["פתריות ממולאות", "סלט קולורבי (איכס)"],
        allergiesList: ["צמחוני", "כשר", "מכיל גלוטן"],
        time: "01:30",
      },
      {
        dishList: ["קרפציו", "סינטה", "גלידה שוקולד"],
        allergiesList: ["בשרי", "מכיל גלוטן"],
        time: "02:00",
      },
    ]);
  }, []);
  const [mealsList, setMealsList] = useState([]);
  return (
    <div
      className="MealSelection"
      style={{ gridTemplateRows: `repeat(${mealsList.length},max-content)` }}
    >
      {mealsList.map((value, index) => {
        return (
          <MealBox
            key={index}
            dishList={value["dishList"]}
            allergiesList={value["allergiesList"]}
            time={value["time"]}
          />
        );
      })}
    </div>
  );
}

export default MealSelection;
