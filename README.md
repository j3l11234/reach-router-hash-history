
# reach-router-hash-history

## Introduction
this tools make a hash history for @reach/router

╮(╯_╰)╭
I hope one day the tools will be deprecated 

## Usage

``` JavaScript

import React from 'react';
import ReactDom from 'react-dom';
import { LocationProvider } from '@reach/router';
import { createHashHistory } from "reach-router-hash-history";

const history = createHashHistory();
ReactDom.render(
  <LocationProvider history={history}>
    <Component />
  </LocationProvider>,
  document.getElementById('app')
);
```