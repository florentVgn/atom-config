'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _react = _interopRequireWildcard(require('react'));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/** A Progressbar for showing deterministic progress. */
const ProgressBar = exports.ProgressBar = props => _react.createElement('progress', Object.assign({ value: props.value, max: props.max }, props)); /**
                                                                                                                                                    * Copyright (c) 2017-present, Facebook, Inc.
                                                                                                                                                    * All rights reserved.
                                                                                                                                                    *
                                                                                                                                                    * This source code is licensed under the BSD-style license found in the
                                                                                                                                                    * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                                    * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                                    *
                                                                                                                                                    * 
                                                                                                                                                    * @format
                                                                                                                                                    */