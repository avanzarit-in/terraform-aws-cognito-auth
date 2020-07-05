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

import { Action } from "redux"

import { NotificationData } from "./reducers"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Notification action types
 */
export enum NotificationActionTypes {
  DISPLAY = "NOTIFICATION_DISPLAY",
  DISMISS = "NOTIFICATION_DISMISS"
}

/* ------------------------------------------------------------------------- */

/**
 * Notification display action
 */
interface NotificationDisplayAction extends Action {
  type: NotificationActionTypes.DISPLAY
  data: NotificationData
}

/**
 * Notification dismiss action
 */
interface NotificationDismissAction extends Action {
  type: NotificationActionTypes.DISMISS
}

/* ------------------------------------------------------------------------- */

/**
 * Notification actions
 */
export type NotificationActions =
  | NotificationDisplayAction
  | NotificationDismissAction

/* ----------------------------------------------------------------------------
 * Actions
 * ------------------------------------------------------------------------- */

/**
 * Display notification action creator
 *
 * @param data - Notification data
 *
 * @return Action
 */
export const displayNotificationAction =
  (data: NotificationData): NotificationDisplayAction => ({
    type: NotificationActionTypes.DISPLAY, data
  })

/**
 * Dismiss notification action creator
 *
 * @return Action
 */
export const dismissNotificationAction =
  (): NotificationDismissAction => ({
    type: NotificationActionTypes.DISMISS
  })
