import "./standings.css";
import { useSelector } from "react-redux";

import React from "react";

const Standings = () => {
  let plData = useSelector((state, action) => {
    return state.plSliceReducer.plData;
  });
  let plStandings = plData.standings;
  let plTeams = plData.teams;
  let TeamDataArr = useSelector((state, action) => {
    return state.plSliceReducer.teamDataArr;
  });

  return (
    <div className="standings-area">
      <div className="standings-sec">
        <div>
          <h2>Standings</h2>
        </div>
        <div className="standings-container">
          <div className="row pb-3 ">
            <h6 className="text-muted text-center col-2 ">Position</h6>
            <h6 className="text-muted   text-center col-4">Club</h6>
            <h6 className="text-muted text-center col-2">Played</h6>
            <h6 className="text-muted text-center col-2">GD</h6>
            <h6 className="text-muted text-center col-2">Points</h6>
          </div>

          {plStandings.map((val, ind, arr) => {
            let teamNum = parseInt(val.id.slice(1)) - 1;
            let crestImg = teamNum < plTeams.length ? TeamDataArr[teamNum] : "";

            return (
              <div className="row   standings-row-1 " key={ind}>
                <h6 className="text-center col-2  m-0">{val.position}</h6>

                <h6 className=" col-4     m-0">
                  <div className="row   m-0">
                    <div className="standing-img-crest-container col-3">
                      <img
                        className="standing-img-crest-item   m-0"
                        src={crestImg.crest}
                        alt=""
                      />
                    </div>
                    <div className="col-9   m-0">
                      <p className="m-0 ps-2">{val.name.short}</p>
                    </div>
                  </div>
                </h6>
                <h6 className="text-center col-2   ">{val.stats.played}</h6>
                <h6 className="text-center col-2   ">
                  {val.stats.goalDifference}
                </h6>
                <h6 className="text-center col-2  ">{val.stats.points}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Standings;
