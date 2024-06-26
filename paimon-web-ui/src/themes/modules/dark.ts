/* Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License. */

import type { GlobalThemeOverrides } from 'naive-ui'

const textColor = '#EFEFEF'

const dark: GlobalThemeOverrides = {
  common: {
    bodyColor: '#131313',

    primaryColor: '#2475FE',
    primaryColorHover: '#3a7bfa',
    primaryColorPressed: '#1a6efb',
    primaryColorSuppl: '#0060fa',

    infoColor: '#A6A6A6',
    successColor: '#00B69B',
    warningColor: '#FCBE2D',
    errorColor: '#EC4C4D',
  },
  Card: {
    color: '#1B1C1D',
    borderRadius: '8px',
  },
  Button: {
    textColorPrimary: textColor,
    textColorHoverPrimary: textColor,
    textColorPressedPrimary: textColor,
    textColorFocusPrimary: textColor,
    textColorDisabledPrimary: textColor,

    textColorInfo: textColor,
    textColorHoverInfo: textColor,
    textColorPressedInfo: textColor,
    textColorFocusInfo: textColor,
    textColorDisabledInfo: textColor,

    textColorSuccess: textColor,
    textColorHoverSuccess: textColor,
    textColorPressedSuccess: textColor,
    textColorFocusSuccess: textColor,
    textColorDisabledSuccess: textColor,

    textColorWarning: textColor,
    textColorHoverWarning: textColor,
    textColorPressedWarning: textColor,
    textColorFocusWarning: textColor,
    textColorDisabledWarning: textColor,

    textColorError: textColor,
    textColorHoverError: textColor,
    textColorPressedError: textColor,
    textColorFocusError: textColor,
    textColorDisabledError: textColor,
  },
}

export default dark
