let foo = false;

function importStyles() {
  console.log('running', foo);

  // Import stylesheets
  if (foo) {
    import('./mobile.css').then(console.log);
  } else {
    import('./desktop.css');
  }
}

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1 id="header">JS Starter</h1>`;

document.getElementById('header').addEventListener('click', () => {
  foo = !foo;

  importStyles();
});
