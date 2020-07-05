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

import { lensProp, set } from "ramda"
import {
  compose,
  withHandlers,
  withState
} from "recompose"

import {
  withFormSubmit,
  WithFormSubmit,
  WithFormSubmitOptions
} from "enhancers"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Form enhancer options
 *
 * @template TRequest - Form request type
 */
export interface WithFormOptions<
  TRequest extends {} = any
> extends WithFormSubmitOptions {
  initial: Readonly<TRequest>          /* Initial form state */
}

/* ------------------------------------------------------------------------- */

/**
 * State properties
 *
 * @template TRequest - Form request type
 */
interface StateProps<TRequest extends {}> {
  request: Readonly<TRequest>,         /* Form state */
  setRequest: (
    request: TRequest
  ) => Readonly<TRequest>              /* Form state reducer */
}

/**
 * Handler properties
 */
interface HandlerProps {
  handleChange(
    ev: React.ChangeEvent<HTMLInputElement>
  ): void                              /* Form change handler */
  handleSubmit(
    ev: React.ChangeEvent<HTMLFormElement>
  ): Promise<void>                     /* Form submit handler */
}

/**
 * Handler callback properties
 *
 * @template TRequest - Form request type
 * @template TResponse - Form response type
 */
type HandlerCallbackProps<TRequest extends {}, TResponse = void> =
  & WithFormSubmit<TRequest, TResponse>
  & StateProps<TRequest>

/* ------------------------------------------------------------------------- */

/**
 * Form enhancer
 *
 * @template TRequest - Form request type
 * @template TResponse - Form response type
 */
export type WithForm<TRequest extends {} = any, TResponse = void> =
  & WithFormSubmit<TRequest, TResponse>
  & StateProps<TRequest>
  & HandlerProps

/* ----------------------------------------------------------------------------
 * Enhancer
 * ------------------------------------------------------------------------- */

/**
 * Enhance component with form change and submit handlers
 *
 * @template TRequest - Form request type
 * @template TResponse - Form response type
 *
 * @param options - Form options
 *
 * @return Component enhancer
 */
export const withForm = <TRequest extends {}, TResponse = void>(
  { initial, ...options }: WithFormOptions<TRequest>
) =>
  compose<WithForm<TRequest, TResponse>, {}>(
    withFormSubmit<TRequest, TResponse>(options),
    withState("request", "setRequest", initial),
    withHandlers<HandlerCallbackProps<TRequest, TResponse>, HandlerProps>({

      /* Update form data */
      handleChange: ({ request, setRequest }) => ev => {
        const { type, name, value, checked } = ev.currentTarget
        type === "checkbox"
          ? setRequest(set(lensProp(name), checked, request))
          : setRequest(set(lensProp(name), value, request))
      },

      /* Submit form data */
      handleSubmit: ({ submit, request }) => ev => {
        ev.preventDefault()
        return submit(request)
      }
    })
  )
