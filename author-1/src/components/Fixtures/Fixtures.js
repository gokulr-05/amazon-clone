import React from "react";
import data from "../../data/data.json";
import moment from "moment";

export const getLogo = (id) => {
  const teamData = data.teams.filter((item) => item.id == id);
  return teamData;
};

console.log(getLogo("T01")[0].images);

const Fixtures = () => {
  console.log(data.fixtures);
  return (
    <div>
      <div className="">
        <h1>Fixtures</h1>
        {data.fixtures.map((item, index) => (
          <div key={index}>
            <h3> {moment(item.date.start).format("LLLL")}</h3>
            {item.matches.map(
              (item, index) =>
                getLogo(item.teams.home)[0]?.meta?.name &&
                getLogo(item.teams.away)[0]?.meta?.name && (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <div
                      className="team1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 7,
                      }}
                    >
                      <p>{getLogo(item.teams.home)[0]?.meta?.name}</p>
                      <img
                        style={{ width: 20, height: 20, margin: "0 10px" }}
                        src={getLogo(item.teams.home)[0]?.images?.crest}
                        alt=""
                      />
                    </div>
                    {new Date(item.day).toLocaleTimeString("en", {
                      timeStyle: "short",
                      hour12: false,
                      timeZone: "UTC",
                    })}
                    {/* {item.day} */}
                    <div
                      className="team2"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: 7,
                      }}
                    >
                      <img
                        style={{ width: 20, height: 20, margin: "0 10px" }}
                        src={getLogo(item.teams.away)[0]?.images?.crest}
                        alt=""
                      />
                      <p>{getLogo(item.teams.away)[0]?.meta?.name}</p>
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;
