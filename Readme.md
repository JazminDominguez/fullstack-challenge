# ReWorth Coding Challenge: fullstack

## Let's Begin! 🚀

To get started clone project and install dependencies.

```{.bash}
git clone https://github.com/JazminDominguez/fullstack-challenge
```

```{.bash}
cd fullstack-challenge
npm install
```

After that start the development server and the test api server(run each
command in a separate terminal session, I recommend using tmux)

```{.bash}
npm start
```

## Construction process 👷🏽‍♀️

### Requirement Analysis

        Understand the requerements and expectations of the challenge.

### Taks Planification

To get the job done i divided the challenge into small tasks. Each task it's followed by a serie of smaller tasks to get them done:

_Display the offers in a list using the data available from the API_

-   Perform a GET request to the API and fetch the offer array when the component mounts (UseEffect Hook).
-   Pass the array of offers as props to the DocumentDirectoryList.
-   Map the props to generate an automatic list. Show name and created date.
-   Print list on window.

_Apply Styles and Design UI_

-   Sketch the list design. Use Reworth Colors. Mobile First.
-   Get Reworth's color from their site.
-   Add Component Library and Flexbox ( Rebass: Quick, mobile-first responsive styles with array-based syntax )
-   Use Sass for color variables and styles.

_Change date format from Unix to es-MX format_

-   Read about unix time convertion.
-   Apply date convertion on map so the API doesn't get directly modify.
-   Add styles to fit better the list/card.

_Add pagination_

-   Check Api endpoint to know how to apply paggination filters.
-   Add useState [page, setPage] with default value od 1.
-   Add filters to URL endpoint. (Bring 10 items per page, 3 pages in total).
-   Add Pagination buttons with setState on click so API gets called again.

_Check & Run_

-   Check for errors and console.logs out of place.

## Tools and Libraries 📚📖

For this challenge i added [Rebass](https://rebassjs.org/) as Component/UI Library.

**Why Rebass?**
Rebass is a component library with a Flexbox layout. It has predefined breakpoints and has an array-like inline-style. Thanks to this sintax Rebass can set the grid and UI fast and with lesser clasess and css- code for small projects.

[Rebass site](https://rebassjs.org/)
[Rebass github](https://github.com/rebassjs/rebass)

## Technologies Used

-   Reactjs
-   Parcel
-   Babel
-   Sass
-   Rebass

## Developer 🧑🏽‍🤝‍🧑🏽

_Jaz Dominguez_
