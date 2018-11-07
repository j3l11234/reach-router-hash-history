
# reach-router-hash-history

## Introduction
This tools make a hash history for @reach/router  
The third version is inspired by will-stone https://github.com/will-stone/hash-source.

╮(╯_╰)╭
I hope one day the tools will be deprecated 

## Usage

``` JavaScript

import React from 'react';
import ReactDom from 'react-dom';
import { LocationProvider, createHistory } from '@reach/router';
import { createHashSource } from "reach-router-hash-history";

const history = createHistory(createHashSource());
ReactDom.render(
  <LocationProvider history={history}>
    <Component />
  </LocationProvider>,
  document.getElementById('app')
);
```

## Thanks

will-stone  
https://github.com/will-stone
