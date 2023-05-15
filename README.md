# pyodide-react
An example of using Pyodide in React

See [Using Python inside a React web app with Pyodide](https://adamemery.dev/articles/pyodide-react) for more details.
 
Pyodide is a Python interpreter compiled for WebAssembly. It allows you to run Python code in the browser. 

https://pyodide.org/en/stable/

<img width="689" alt="Screenshot 2023-05-11 at 4 08 07 PM" src="https://github.com/aqemery/pyodide-react/assets/2616927/cf02b4e4-740b-4d7b-96cb-c0f29e7b411d">


This project is an example of how to use Pyodide in a React project.

This example project uses Vite to build the React app but you can use any bundler you like in your project. 

https://vitejs.dev

to install the dependencies run:

```
npm install
```

to run the project run on your local machine run:

```
npm run dev
```


## How it works

You will find the Pyodide code in `src/pyodide.js` and the React code in `src/App.js`.

`pyodide.js` is a wrapper around the Pyodide NPM package:

https://www.npmjs.com/package/pyodide


This file uses a singleton pattern to ensure that only one instance of Pyodide is created. 

```javascript
import { Pyodide } from "./pyodide";

const pyodide = Pyodide.getInstance();
pyodide.setOutput((text) => {
    console.log(text);
});
pyodide.run(pyprompt);
```

By default, Pyodide will output to the web console, but the setOutput function allows you to override this behavior so that you can display the output in your app or parse it in some way.

The run function takes a string of Python code and runs it in the Pyodide interpreter. It will also return the last value of the code that was run.

```javascript
const output = pyodide.run("1 + 1");
```







