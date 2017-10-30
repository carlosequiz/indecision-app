console.log('App.js is running!');

// Create app object title/subtitle
// Use title/subtitle in the template
// render template

// only render the subtitle and p tag if subtitle exists - logical and operator
// render new p tag - if options.llenght > 0 "here are your options" "No options"

var appObject = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two']
}

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{appObject.title}</h1>
        {appObject.subtitle && <p>{appObject.subtitle}</p>}
        <p>{appObject.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

// Create a templateTwo var JSX expression
// div 
//  h1 -> Carlos Equiz
//  p -> Age: 30
//  p -> Location: Bogota
// Render templateTwo instead of template
var user = {
    name: 'Carlos Equiz',
    age: 30,
    location: 'Bogota'
}

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);