'use strict';

var _create = require('./create');

var waterMark = document.createElement('div');
waterMark.className = 'watermark';
waterMark.style.backgroundImage = 'url(' + (0, _create.createWaterMark)() + ')';
document.body.appendChild(waterMark);