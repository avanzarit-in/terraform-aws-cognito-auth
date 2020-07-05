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

import { MuiThemeProvider } from "@material-ui/core"
import * as React from "react"
import { render } from "react-dom"
import { Provider as StateProvider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { App } from "components/App"
import { store, theme } from "providers"

/* ----------------------------------------------------------------------------
 * Configuration
 * ------------------------------------------------------------------------- */

/* Load configuration from meta tags to omit inline JavaScript for CSP */
const config = document.querySelectorAll<HTMLMetaElement>("meta[name^=config]")
window.env = Array.from(config).reduce((env, meta) => {
  const key = meta.name.replace(/^config\:/, "")
  return {
    ...env,
    [key.toUpperCase() as keyof typeof window.env]: meta.content
  }
}, {} as any)

/* ----------------------------------------------------------------------------
 * Application
 * ------------------------------------------------------------------------- */

render(
  <StateProvider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </StateProvider>,
  document.getElementById("root")
)
