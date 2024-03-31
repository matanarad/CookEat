import "./MealBox.css";

function MealBox({ dishList = [], allergiesList = [], time }) {
  return (
    <div className="MealBox" dir="rtl">
      <div
        className="dish-list"
        style={{ gridTemplateRows: `repeat(${dishList.length}, max-content)` }}
      >
        {dishList.map((value, index) => {
          return (
            <div className="dish-line" key={index}>
              <div>•</div>
              <div>{value}</div>
            </div>
          );
        })}
      </div>
      <div className="times-and-allergies">
        <div className="time-box">
          <div style={{ justifySelf: "center" }}>🕑</div>
          <div>{time}</div>
        </div>
        <div className="allergies-list">
          {allergiesList.map((value, index) => {
            return (
              <div className="allergy-line" key={index}>
                <div>#</div>
                <div>{value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MealBox;
