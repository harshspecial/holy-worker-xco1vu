This is a minimal Next.js app to demonstrate the Front End UI development capability for the given assignment.

## Things Covered

* Dashboard has been developed using Next jS / React JS
* Tried to break down the page into logical modules as per the limited understanding of the Actual logic
* Web view port is covered where container min-width is `1024px` so that the app down does not break on smaller viewports. if the screen is below 1024px, a horizontal scrollbar is presented.
* Greetings are given based on time of the day e.g Good morning and Good Evening
* User api is added to fetch the mocked data which is populated in the app.
* AirWallex api is also integrated to fetch the country wise balances.
* Contry cards become scrollable if there are more cards and it snaps as per the card start.
* All the components are custom made as per the design
* Header is sticky to the top.

## Things NOT Covered
There are few items which should be included here but not present due to shortage of time :(

* 100% test coverage
* proper type checking (typescript)
* responsive design to work across devices
* storybook integration to build component library and developers can interact with it
* deployment configuration for production
* static string localization
* proper linting rules
* add commit hooks to make sure code has no static errors before commit
* few other optimizations

Note: there are few places where string and data is hardcoded in the html due to limited understanding of the functionality and can be incorporated as per requirements.

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
