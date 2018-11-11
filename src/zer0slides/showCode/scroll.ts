import * as $ from 'jquery';

import {slideCore} from '../core/core';

export const scrollToCurrentLine = (): Promise<void> => {
    const slideSelector = slideCore.getCurrentSlideSelector();
    const selector = `${slideSelector} .line-highlight`;
    const offset = $(selector).offset().top;
    return new Promise(resolve => {
        $("html, body").animate({scrollTop: offset}, 800, "swing", resolve);
    })
}
