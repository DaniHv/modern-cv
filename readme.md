# Modern CV Made With React.js and Gatsby.js

<span style="display:block;text-align:center">![Modern CV Demo](./screenshot.png?raw=true)</span>

This is a complete modern web version of a traditional cv with a lot of features to make it more informative, with complete details about yourself, your jobs, studies, certifications, knowledges and skills, made in a visually atractive way with images, subpages, dropdowns, links and more. Everything without the use of APIs, and can be served statically (and free) with platforms like Vercel.

## Features and Functioning

* Responsive Design CV Web/Tablet/Mobile.
* Total Multilanguage Support, no limit.
* Data stored in .json files and loaded with GraphQL (Gatsby)
* Subpages with Markdown files for About Yourself Page, Jobs, Studies and Certifications.
* Image of your certificates and Courses List of it (If it is multicourse certification).

## Installation and Usage

Make your own fork of the repo or clone it with:

```
git clone https://github.com/danihv/modern-cv
```

Now, install the dependencies and run it as development with:

```
npm run install
```
```
gatsby develop
```

Now you have your own cv working! But now you'll want to configure it with your own information, to do it you need to modify the following .json files:

* /src/data/personal.json: Object of Personal Data
* /src/data/links.json: Array of Links used in the sidebar
* /src/data/skills.json: Array of Your Skills
* /src/data/jobs.json: Array of Your Studies
* /src/data/studies.json: Array of Your Jobs
* /src/data/certifications.json: Array of Your Certifications
* /src/data/knowledges.json: Array of Your Knowledges

## Development Stack

* Typescript
* React.js
* Gatsby.js
* Styled Components

## License
[MIT](https://choosealicense.com/licenses/mit/)