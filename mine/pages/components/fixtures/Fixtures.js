import { useState, useEffect } from "react";
import "./fixtures.css";
import { useSelector } from "react-redux";

const Fixtures = () => {
  let plData = useSelector((state, action) => {
    return state.plSliceReducer.plData;
  });

  let TeamDataArr = useSelector((state, action) => {
    return state.plSliceReducer.teamDataArr;
  });

  console.log("TeamDataArr=", TeamDataArr);

  let plFixtures = plData.fixtures;
  let plTeams = plData.teams;
  let plStandings = plData.standings;

  return (
    <div className="fixtures-area">
      <div className="fixtures-sec">
        <div className="fixtures-header d-flex align-items-center justify-content-between">
          <h2 className="m-0">Fixtures</h2>
          <p className="m-0">View all fixtures</p>
        </div>

        <div className="mt-3">
          {plFixtures.map((val, index, arr) => {
            let months = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ];
            let days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            let plDate = val.date.start;
            let date = new Date(val.date.start);
            let day = days[date.getDay()];
            let month = months[date.getMonth()];
            let year = date.getFullYear();
            let d = date.getDate();
            let formattedData = `${day}, ${d} ${month} ${year}`;

            return (
              <div key={index} className="fixture-item-container pt-2">
                <h6
                  style={{ color: " rgb(61, 1, 88)" }}
                  className="text-center"
                >
                  {formattedData}
                </h6>

                <div className="fixture-data-container">
                  {val.matches.map((value1, index1, arr1) => {
                    let home = parseInt(value1.teams.home.slice(1)) - 1;
                    let away = parseInt(value1.teams.away.slice(1)) - 1;

                    console.log("home=", home);

                    let d1 = new Date(value1.day).toLocaleTimeString("en", {
                      timeStyle: "short",
                      hour12: false,
                      timeZone: "UTC",
                    });

                    return (
                      TeamDataArr[home] &&
                      TeamDataArr[away] && (
                        <div
                          key={index1}
                          className="
                      
                        "
                        >
                          <div className="fixture-row row ">
                            <div className="fixture-row-1 col-5">
                              <div className="fixture-row-text">
                                <h6>{TeamDataArr[home]?.name}</h6>
                              </div>
                              <div className="fixture-img-container">
                                {TeamDataArr[home]?.crest && (
                                  <img
                                    className="fixture-img-item"
                                    src={TeamDataArr[home]?.crest}
                                    alt="crest"
                                  />
                                )}
                              </div>
                            </div>
                            <div className="col-2 pt-3">
                              <div className="time-box-1   ">
                                <h6 className="text-muted time-item text-center m-0">
                                  {d1}
                                </h6>
                              </div>
                            </div>
                            <div className="fixture-row-2 col-5">
                              <div className="fixture-img-container">
                                {TeamDataArr[away]?.crest && (
                                  <img
                                    className="fixture-img-item"
                                    src={TeamDataArr[away]?.crest}
                                    alt="crest"
                                  />
                                )}
                              </div>
                              <div className="fixture-row-text">
                                <h6>{TeamDataArr[away]?.name}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
