# Getting Started with Create  React <a href='https://kanishkakodithuwakku.github.io/new-todo-app/'>TODO</a> App

### create a new app
`npx create-react-app my-app`

### install bootstrap
`npm i bootstrap@5.3.1`

#### add this to index.js
`import "bootstrap/dist/css/bootstrap.min.css";`

### install fontawesome
`npm i --save @fortawesome/fontawesome-svg-core` \
`npm install --save @fortawesome/free-solid-svg-icons` \
`npm install --save @fortawesome/react-fontawesome`

  `import ReactDOM from 'react-dom'` \
  `import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'` \
  `import { faCoffee } from '@fortawesome/free-solid-svg-icons'` \

  `const element = <FontAwesomeIcon icon={faCoffee} />` \
  `ReactDOM.render(element, document.body)`
  
### install uuid

`npm i uuid` 
`import { v4 as uuidv4 } from 'uuid';` 
`uuidv4();`

### install React-Toastify
`npm i react-toastify`

`import { ToastContainer, toast } from 'react-toastify';`\
`import 'react-toastify/dist/ReactToastify.css';`\

`toast("Wow so easy!");`
<ToastContainer />

### JSON Server
`npm install -g json-server`\
`json-server --watch db.json --port 3004`


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


