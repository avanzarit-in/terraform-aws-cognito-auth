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
  colors,
  createStyles,
  Theme
} from "@material-ui/core"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Styles
 */
export type Styles = typeof styles

/* ----------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */

/**
 * Styles
 *
 * @param theme - Material theme
 *
 * @return CSS styles
 */
export const styles = ({ palette, spacing }: Theme) =>
  createStyles({

    /* Base styles */
    root: {
      color: palette.common.white,
      fontSmoothing: "antialiased",
      fontWeight: 700,
      paddingTop: spacing.unit * 2,
      paddingRight: spacing.unit * 4,
      paddingBottom: spacing.unit * 2,
      paddingLeft: spacing.unit * 4,
      transition: "background-color .25s"
    },

    /* Success message */
    success: {
      backgroundColor: colors.green.A700
    },

    /* Error message */
    error: {
      backgroundColor: palette.error.main
    }
  })
