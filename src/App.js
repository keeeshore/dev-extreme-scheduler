import React from "react";

import Scheduler from "devextreme-react/scheduler";

import { data } from "./data.js";

const currentDate = new Date(2021, 2, 28);
const views = ["month"];

const CellTemplate = (props) => {
  console.log("props = ", props);
  return <div>{props.data.text}</div>;
};

const AppointmentTemplate = (props) => {
  console.log("AppointmentTemplate props = ", props);
  return <div>asda1</div>;
};

class App extends React.Component {
  render() {
    return (
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        // dataCellComponent={CellTemplate}
        // appointmentTemplate={AppointmentTemplate}
        startDayHour={9}
      />
    );
  }
}

export default App;
