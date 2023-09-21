import './App.css'
import * as calendar from './Calendar/calendar'

const now = new Date()
const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const Calendar = () => {
    const monthData = calendar.getMonthData(now.getFullYear(), now.getMonth());
    function dayOfCalendar(date) {
      if(date.getDate() === now.getDate()) return "ui-datepicker-today"
    }
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{now.toLocaleString("ru", {weekday: 'long'})}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{now.getDate()}</div>
          <div className="ui-datepicker-material-month">{(now.toLocaleString("ru", {day: 'numeric', month: 'long'}).slice(3))}</div>
          <div className="ui-datepicker-material-year">{now.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{now.toLocaleString("ru", {month: 'long'})}</span>&nbsp;<span className="ui-datepicker-year">{now.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
          <tr>
            {weekDayNames.map(name =>
              <th key={name} scope='col' title={name}> {name}</th>)}
          </tr>
        </thead>
        <tbody>
          {monthData.map((week, index) => 
            <tr key={index}>
              {week.map((date, index) => date ?
              <td key={index} className={dayOfCalendar(date)}> {date.getDate()} </td>
              :
              <td key={index} className="ui-datepicker-other-month"/>
              )}
            </tr>
            )}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (

    <Calendar date={now} />
  );
}

export default App
