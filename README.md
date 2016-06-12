# React-Easy-Paginate

React component to render a pagination.

## Installation

The easises way to use React-Easy-Paginate is ti install from `npm`.

`npm install react-easy-paginate --save`

At this point you can import react-easy-paginate and simple styles in your application :

```javascript
import ReactEasyPaginate from 'react-easy-paginate'

import `react-easy-paginate/dist/react-easy-paginate.css`
```

## Props

|Name|Type|Default Props|Description|
|---|---|---|---|
|`pageTotal`|`Number`|`undefined`|Required. The total number of pages|
|`rangeDisplayed`|`Number`|`undefined`|Required. The range of page displayed|
|`startPage`|`Number`|`1`|From which page starts|
|`onClick`|`Function`|`undefined`|The method to call when click on next/previous page, return number of current page|
|`nextLabel`|`node`|`<a>Next</a>`|Label for the next button|
|`previousLabel`|`node`|`<a>Previous</a>|Label for the previous button|
|`activeClass`|`String`|`active`|The className for the active page|
|`labelDisabledClass`|`String`|`disabled`|The className for the disabled label|

## Example

To run example locally, clone this repo then run:

`//if you do not install the module, if installed, proceed to the next step`

`npm install`

`make run-example`

After open `localhost:8000` (or what port you using in `process.env.PORT`) in a browser.

## License

MIT Licensed.
