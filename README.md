# Roll Dice App

An exercise for React state and props

### Quick Note: How to Deploy React App to Github Pages

After creating the app locally and pushing it to Github, the steps below can be followed;

- Inside the local project's folder (in this case _roll-dice_)
  Run `$ npm install gh-pages --save-dev`

- Add the properties below to the _package.json_ file

  - At the top level, add _homepage_ property
    `"homepage": "http://dseda.github.io/roll-dice"`

  - To the _scripts_ property, add;

  `"scripts": {`
  `//...`
  `"predeploy": "npm run build",`
  `"deploy": "gh-pages -d build"`
  `}`

- Then run `$ npm run deploy`
