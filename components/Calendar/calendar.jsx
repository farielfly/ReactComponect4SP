export default class Calender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let month = "March";
        let year = 2017;
        let days = [
            [{ date: 26, hasEvents: false, isCurrentMonth:false }, { date: 27, hasEvents: false, isCurrentMonth:false }, { date: 28, hasEvents: true, isCurrentMonth:false }, { date: 1, hasEvents: false }, { date: 2, hasEvents: false }, { date: 3, hasEvents: false }, { date: 4, hasEvents: false }],
            [{ date: 5, hasEvents: false }, { date: 6, hasEvents: false }, { date: 7, hasEvents: false }, { date: 8, hasEvents: false }, { date: 9, hasEvents: false }, { date: 10, hasEvents: false }, { date: 11, hasEvents: false }],
            [{ date: 12, hasEvents: false }, { date: 13, hasEvents: false }, { date: 14, hasEvents: true, isToday: true }, { date: 15, hasEvents: true }, { date: 16, hasEvents: false }, { date: 17, hasEvents: false }, { date: 18, hasEvents: false }],
            [{ date: 19, hasEvents: false }, { date: 20, hasEvents: false }, { date: 21, hasEvents: false }, { date: 22, hasEvents: false }, { date: 3, hasEvents: false }, { date: 24, hasEvents: false }, { date: 25, hasEvents: false }],
            [{ date: 26, hasEvents: false }, { date: 27, hasEvents: false }, { date: 28, hasEvents: false }, { date: 29, hasEvents: true }, { date: 30, hasEvents: false }, { date: 31, hasEvents: false }, { date: 1, hasEvents: false, isCurrentMonth:false }]];

        let daysCollection = days.map((week, weekIndex) => {
            return (
                <tr>
                    {week.map((day, dayIndex) => {
                        return (
                            <td>
                                <div className="acs-calendar-day">
                                    <div className={day.isToday ? "acs-calendar-today" : ""}>
                                        <span className={day.isCurrentMonth==false ? "acs-calendar-notcurrent" : ""}>{day.date}</span>
                                    </div>
                                    {day.hasEvents ? <span className="acs-calendar-dot"></span> : null}
                                </div>
                            </td>
                        );
                    })}
                </tr>
            );
        });

        return (
            <div className="acs-calendar">
                <div className="acs-calendar-month">
                    <span className="icon-arrow-left"></span>
                    <span>{month + " " + year}</span>
                    <span className="icon-arrow-right"></span>
                </div>
                <table className="acs-calendar-table">
                    <tr className="acs-calendar-tableheader">
                        <th>Sun</th>
                        <th>Mon</th>
                        <th>Tus</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                    </tr>
                    {daysCollection}
                </table>
            </div >
        );
    }
}