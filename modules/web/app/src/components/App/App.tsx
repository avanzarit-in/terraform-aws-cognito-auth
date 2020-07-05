/*
 * Copyright (c) 2018-2019 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import {
  withStyles,
  WithStyles
} from "@material-ui/core"
import * as React from "react"
import { Route, Switch } from "react-router-dom"
import {
  compose,
  setDisplayName
} from "recompose"

import {
  Authenticate,
  Leave,
  NotFound,
  Register,
  RegisterVerification,
  Reset,
  ResetVerification
} from "routes"

import { Styles, styles } from "./App.styles"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Render properties
 */
export type RenderProps =
  & WithStyles<Styles>

/* ----------------------------------------------------------------------------
 * Presentational component
 * ------------------------------------------------------------------------- */

/**
 * Render component
 *
 * @param props - Properties
 *
 * @return JSX element
 */
export const Render: React.FunctionComponent<RenderProps> =
  ({ classes }) =>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/" component={Authenticate} />
        <Route exact path="/leave" component={Leave} />
        <Route exact path="/register" component={Register} />
        <Route path="/register/:code+" component={RegisterVerification} />
        <Route exact path="/reset" component={Reset} />
        <Route path="/reset/:code+" component={ResetVerification} />
        <Route component={NotFound} />
      </Switch>
    </div>

/* ----------------------------------------------------------------------------
 * Enhanced component
 * ------------------------------------------------------------------------- */

/**
 * Enhance component
 *
 * @return Component enhancer
 */
export function enhance() {
  return compose<RenderProps, {}>(
    withStyles(styles),
    setDisplayName("App")
  )
}

/**
 * Application component
 */
export const App = enhance()(Render)
