import React, { Component } from 'react';

class NewItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let height = 100 / this.props.maxCount + '%';

        return <div>
            {
                this.props.children.map((item, idx) => {
                    return <div key={'news' + idx} style={{ height: height }}>
                        <div className='newContent'><img src={item.src} /></div>
                        <div className='newContent'><a href={item.href} title={item.value}>{item.value}</a></div>
                        <div className='newContent'><span className='acs-pic-clock'></span>{item.date}</div>
                    </div>
                })
            }
        </div>
    }
}

export default class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { items, left, speed, nowLocal, maxCount  } = this.props;
        let count = items.length;
        let width = 100 / items.length + '%';

        let itemNodes = this.props.items.map((item, idx) => {
            return <li style={{ width: width }} ><NewItem children={item.props.children} key={idx} maxCount={maxCount} /></li>;
        });

        return (
            <ul style={{
                left: -100 * nowLocal + "%",
                transitionDuration: speed + "ms",
                width: count * 100 + "%"
            }}>
                {itemNodes}
            </ul>
        );
    }
}