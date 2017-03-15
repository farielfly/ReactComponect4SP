const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getCalendarData(year, month) {
    let newDate;
    if (year != null && month != null) {
        newDate = new Date(year, month);
    } else {
        newDate = new Date((new Date()).setDate(1));
    }

    let curYear = newDate.getFullYear(),
        curMonth = newDate.getMonth(),
        curDate = newDate.getDate(),
        curDay = newDate.getDay();

    let monthDays = getDayNumberInMonth(newDate);
    let startDate, endDate;
    if (curDay % 7 == 0) {
        startDate = new Date(newDate.getTime());
        if (monthDays % 7 == 0) {
            endDate = new Date(curYear, curMonth, monthDays);
        } else {
            endDate = new Date(curYear, curMonth + 1, (7 - (monthDays % 7)));
        }
    } else {
        startDate = new Date(curYear, curMonth, (1 - curDay));
        if ((curDay + monthDays) % 7 == 0) {
            endDate = new Date(curYear, curMonth, monthDays);
        } else {
            endDate = new Date(curYear, curMonth + 1, (7 - ((curDay + monthDays) % 7)));
        }
    }

    let days = [];
    let today = new Date();
    while (startDate < endDate) {
        let row = [];
        for (let j = 0; j < 7; j++) {
            row.push({
                date: startDate.getDate(),
                isCurrentMonth: startDate.getMonth() == curMonth,
                isToday: startDate.getDate() == today.getDate() && startDate.getMonth() == today.getMonth() && startDate.getFullYear() == today.getFullYear()
            });
            startDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
        }
        days.push(row);
    }
    return {
        year: curYear,
        month: curMonth,
        days: days
    };
}

function getDayNumberInMonth(date) {
    let tempDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return tempDate.getDate();
}

function handlePreMonthClick() {
    this.setState(
        getCalendarData(this.state.month == 0 ? this.state.year - 1 : this.state.year, this.state.month == 0 ? this.state.month = 11 : this.state.month - 1)
    );
}

function handleNextMonthClick() {
    this.setState(
        getCalendarData(this.state.month == 11 ? this.state.year + 1 : this.state.year, this.state.month == 11 ? this.state.month = 0 : this.state.month + 1)
    );
}

const Calender = React.createClass({
    getInitialState() {
        return getCalendarData();
    },

    render() {
        let year = this.state.year;
        let month = this.state.month;
        let days = this.state.days;
        let daysCollection = days.map((week, weekIndex) => {
            return (
                <tr>
                    {week.map((day, dayIndex) => {
                        return (
                            <td className="acs-calendar-days">
                                <div className="acs-calendar-day">
                                    <div className={day.isToday ? "acs-calendar-today" : ""}>
                                        <span className={day.isCurrentMonth == false ? "acs-calendar-notcurrent" : ""}>{day.date}</span>
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
                <table className="acs-calendar-table">
                    <tbody>
                        <tr className="acs-calendar-month">
                            <td colSpan="7">
                                <div style={{ display: 'inline-block' }}>
                                    <span className="acs-calendar-icon-left" onClick={handlePreMonthClick.bind(this)}></span>
                                    <span style={{ float: 'left', marginTop: '5px', width: '180px' }}>{months[month] + " " + year}</span>
                                    <span className="acs-calendar-icon-right" onClick={handleNextMonthClick.bind(this)}></span>
                                </div >
                            </td>
                        </tr>
                        <tr className="acs-calendar-week">
                            <td>Sun</td>
                            <td>Mon</td>
                            <td>Tus</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                        {daysCollection}
                    </tbody>
                </table>
            </div >
        );
    }
});

export default Calender;