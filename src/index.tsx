import 'materialize-css/dist/css/materialize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {GapSlides} from './slidar2/core/GapSlides';

import {init} from './initGapslides';
import {initReadyPromise} from './slidar2/lifecycle/lifecycle';
import {slideCore} from './slidar2/core/core';
import {Slide} from './slidar2/core/Slide';
import {bindKeyToFunction} from './slidar2/core/keys';
import {renderSlide} from './slidar2/core/render';

init();

const initialSlide = new Slide("init");
renderSlide(initialSlide)

initReadyPromise.then((startIndex) => {
    slideCore.setCurrentSlideWithIndex(startIndex)

    bindKeyToFunction("right", () => slideCore.nextSlide())
    bindKeyToFunction("left", () => slideCore.prevSlide())
    bindKeyToFunction("down", () => slideCore.getCurrentSlide().nextStep())
    bindKeyToFunction("up", () => slideCore.getCurrentSlide().prevStep())
    bindKeyToFunction("r", () => slideCore.refreshSlide())
});
