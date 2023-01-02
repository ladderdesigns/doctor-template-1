
# drchandramouli.com

*The public-facing website for the cardiology practice of Dr. B.V. Chandramouli* 


## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Deployment](#deployment)
- [To-do](#to-do)
- [Contributing](#contributing)
- [License](#license)

## Description

dr.chandramouli.com is the public-facing website for Dr. B.V. Chandramouli's cardiology practice. It houses patient forms, employee information, contact resources, frequently asked questions, and much more.

## Technologies

* React
* Next.js
* TypeScript
* TailwindCSS
* Netlify

## Deployment

To deploy locally, clone this repository and run the following commands inside the project folder:

1. `npm install` or `yarn`;
2. `yarn dev`;

To run a local instance of the Netlify CMS server:

1. change `local_backend` in `public/admin/config.yaml` to `true`
2. from root run `npm run dev-cms`

> :warning: **If running Netlify CMS server**: Be very careful not to commit `local_backend` as `true`

To view the project open `http://localhost:3000`.

This website can be reached at [drchandramouli.com](https://drchandramouli.com).


## License

MIT License

Copyright (c) 2022 Jacob Patel

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.