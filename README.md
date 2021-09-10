# Random Crypto String Generator

___This is a fork from [crypto-random-string](https://www.npmjs.com/package/crypto-random-string) to work with ExpressJS.___

## Info
- I wanted a random string for my chat room that should not be ever generated again.
- I tried using the above package but it was either not compliant with ExpressJS or I didn't know how to use it.
- So, I decided to write my own forking the package.

## Install
- `npm i crypto-string`

## Use

``` js

    const cryptoString = require('crypto-string')
    // Importing the package

    let id = cryptoString()
    // Generating a random string

    console.log(id)
    // hfy64j

```

## API

- The package exports a function that returns a random string.
- The function takes an optional parameter `length` that specifies the length of the string.
    - If the parameter is not specified, the default length is `6`.
- It generates string from the alphabets and numbers with no special characters (`a-z`, `A-Z`, `0-9`).
- Hope it helps :)
