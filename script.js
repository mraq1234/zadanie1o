var Counter = React.createClass({
    propTypes: {
        startCountVal: React.PropTypes.number.isRequired,
        incrBtnColor: React.PropTypes.string.isRequired,
        decrBtnColor: React.PropTypes.string.isRequired
    },

    getDefaultProps: function () {
        console.log('getInitialProps ');
        return {
            startCountVal: 0,
            incrBtnColor: 'green',
            decrBtnColor: 'red'
        };
    },

    getInitialState: function () {
        console.log('getInitialState ');
        return {
            counter: this.props.startCountVal
        };
    },

    componentWillMount: function () {
        console.log('componentWillMount - można działać z propsami elementu, ustawić stan');
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('button', {
                id: "incrBtn",
                type: 'button',
                style: {
                    width: '50px',
                    background: this.props.incrBtnColor,
                    color: 'white'
                },
                onClick: this.increment
            }, " + "),
            React.createElement('span', {
                style: {
                    padding: '10px',
                    width: '30px',
                    display: 'inline-block',
                    textAlign: 'center'
                }
            }, this.state.counter),
            React.createElement('button', {
                id: "decrBtn",
                type: 'button',
                style: {
                    width: '50px',
                    background: this.props.decrBtnColor,
                    color: 'white'
                },
                onClick: this.decrement
            }, " - ")
        );
    },

    componentDidMount: function () {
        console.log('componentDidMount - np. można podłączyć jakieś zewn. UI');
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('shouldComponentUpdate - można zadecydować czy ma dojść do updatu elementu');
        return true;
    },

    componentWillUpdate: function (nextProps, nextState) {
        console.log('componentWillUpdate - analogicznie do componentWillMount');

    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('componentDidUpdate - analogicznie do componentDidMount');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount - można posprzątać ...');
    }
});


var element = React.createElement(Counter);

var element2 = React.createElement(Counter, {
    startCountVal: 3,
    incrBtnColor: 'pink',
    decrBtnColor: '#acacac'
});

var element3 = React.createElement(Counter, {
    incrBtnColor: 'black',
    startCountVal: 10
});

ReactDOM.render(element, document.getElementById('app1'));
ReactDOM.render(element2, document.getElementById('app2'));
ReactDOM.render(element3, document.getElementById('app3'));