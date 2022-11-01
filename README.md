<div align="center">

<h1>New York Times News Reader</h1>
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

[Deployed Application](https://news-reader.vercel.app/)
<br>
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

</div>


## Table of Contents
  - [Introduction](#introduction)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Organizational Resources](#organizational-resources)
  - [Sources](#sources)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)

## Introduction

  - This application was built in an 8 hour time block, the goal was to, at a minimum:
    - Show a list of articles
    - Show a “detailed” view for each article (as opposed to summary/list view)
    - Articles in the list must link to the detailed article view you create
    - Implement some sort of search, filter, OR sort

## Technologies

  - React
  - Router
  - Cypress
  - CircleCi
  - JavaScript
  - HTML
  - CSS
  - Vercel

## Features

- Users can see a list of NY Times selected articles
- Users can query different articles based on popular topics
- Users can search for articles based on keywords
- Users can view details of each an article
- Users can follow a provided link to NY Times published article

## Possible Future Extensions

- Search for articles based on location
- Alphabetize articles
- Add articles to a "Read Later" section

## Set Up

1. Visit [NY Times](https://developer.nytimes.com/docs/top-stories-product/1/overview) create a account or log in
2. Register your application to obtain an API KEY(required)
3. Fork [this](https://github.com/jrmedina/news-reader) repository
4. `git clone` your forked repository
5. `cd` into the repository
5. Run `npm install`
6. Open the repository in your code editor
7. Navigate to the `apiCalls.js` file under the `utils` folder
8. Change the default API KEY to your personal KEY (line 5)
9. Run `npm start`
10. A live server should now be available at `http://localhost:3000/`

## Organizational Resources

- [Github Project Board](https://github.com/users/jrmedina/projects/3)
- [Planning](https://www.figma.com/file/RHQl0rwfdtx0P369CYXl2c/reader-tree?node-id=0%3A1)

## Sources

  - [MDN](http://developer.mozilla.org/en-US/)
  - [W3Schools](https://www.w3schools.com/)
  - [CSS-TRICKS](https://css-tricks.com/)
  - [Cypress Docs](https://www.cypress.io/)

## Contributor(s)

- Joshua Medina
  - [Github](https://github.com/jrmedina)
  - [LinkedIn](https://www.linkedin.com/in/joshua-medina/)
  - [Portfolio](https://portfolio-jrmedina.vercel.app/)

## Project Specs

- [Turing - NY Times News Reader](https://mod4.turing.edu/projects/take_home/take_home_fe)
