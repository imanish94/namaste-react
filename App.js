const create = React.createElement('div', {className: 'container'}, [
    React.createElement('div', {className: 'row'}, [
        React.createElement('div', {className: 'col'}, [
            React.createElement('h1', {id: 'heading'}, 'Namaste React Akshay Saini')
        ])
    ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(create);