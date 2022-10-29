const importStyles = () => {
  // Import stylesheets
  const foo = false;
  if (foo) {
    require('./mobile.css');
  } else {
    require('./desktop.css');
  }
};

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 onclick="importStyles">JS Starter</h1>`;
