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
- [Walkthrough](#walkthrough)
- [Set Up](#set-up)
- [Testing](#testing)
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
- Add articles to a "Read Later" section

## Walkthrough

<img width="450" height="300" src="https://media.giphy.com/media/Pk0S9wTjQqkwR5koUS/giphy.gif"/>
<img width="150" height="300"src="https://media.giphy.com/media/dyWeeUxho796SzUKmM/giphy.gif"/>

## Set Up

1. Visit [NY Times](https://developer.nytimes.com/docs/top-stories-product/1/overview) create a account or log in
2. Register your application to obtain an API KEY(required)
3. Fork [this](https://github.com/jrmedina/news-reader) repository
4. `git clone` your forked repository
5. `cd` into the repository
6. Run `npm install`
7. Open the repository in your code editor
8. Navigate to the `apiCalls.js` file under the `utils` folder
9. Change the default API KEY to your personal KEY (line 5)
10. Run `npm start`
11. A live server should now be available at `http://localhost:3000/`

## Testing

Testing is currently done with Cypress and is at 100%
To view or add tests:

1. Follow the steps laid out withing th the [Set Up](#set-up) section
2. In your terminal run `npm run cypress`
3. Click `E2E Testing` next click `Start E2E Testing in Chrome`
4. To run current tests click on and of the specs provided
5. To create your own tests click on `+ New spec` in the top right corner
   - Create new empty spec
   - Provoide a file name for testing spec
   - A sample test will be provided, click `Okay, run the spec`
6. Not sure what to test? [This Documentation](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Write-your-first-test) provides some insight
7. After tests are complete within your spec, you can run `npx nyc report --reporter=text-summary` in your terminal to see a coverage report

## Organizational Resources

- [Github Project Board](https://github.com/users/jrmedina/projects/3)
- [Planning](https://www.figma.com/file/RHQl0rwfdtx0P369CYXl2c/reader-tree?node-id=0%3A1)

<img src="https://user-images.githubusercontent.com/102757890/199547690-65f988e0-1b75-4373-a8cd-d6056b5b5e1c.png" width=600px/>

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
