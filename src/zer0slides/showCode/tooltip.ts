import * as d3 from 'd3';
import * as $ from 'jquery';
import * as _ from 'lodash';
import {slideCore} from "../core/core";
import {addCleanFunction} from "../lifecycle/lifecycle";

import 'protip/protip.min.css';

require('protip/main');


interface Tooltip {
    lineIndex?: number,
    selector?: string,
    text: string,
    position?: string,
    placement?: string,
}

export const initTooltip = () => {
    addCleanFunction(cleanAfterSlideFinished);
    refresh();
}

const cleanAfterSlideFinished = () => {
    d3.selectAll(".protip-container").remove();
}

const refresh = () => {
    ($ as any).protip();
}

export const reset = () => {
    const slideSelector = slideCore.getCurrentSlideSelector();
    const selector = `${slideSelector} .line-highlight`;

    d3.selectAll(selector)
        .classed("protip", false)

    refresh();
    ($(selector) as any).protipHide();
}

const createTooltipSelector = (tooltip: Tooltip) => {
    if(tooltip.selector) {
        return tooltip.selector;
    }

    const nth = tooltip.lineIndex > 0 ? tooltip.lineIndex + 1 : 1;
    const slideSelector = slideCore.getCurrentSlideSelector();
    const selector = `${slideSelector} .line-highlight:nth-of-type(${nth})`;

    return selector;
}

export const createTooltip = (tooltip: Tooltip) => {
    const selector = createTooltipSelector(tooltip);

    d3.selectAll(selector)
        .classed("protip", true)
        .attr("data-pt-title", tooltip.text)
        .attr("data-pt-gravity", false)
        .attr("data-pt-position", tooltip.position ? tooltip.position : "bottom")
        .attr("data-pt-trigger", "sticky")
        .attr("data-pt-auto-show", true)
        .attr("data-pt-placement", _.isUndefined(tooltip.placement) ? "outside" : tooltip.placement);

    refresh();
    ($(selector) as any).protipShow();
}

export const createTooltips = (tooltips: Tooltip[]) => {
    reset();
    tooltips.forEach(tooltip => {
        tooltip && createTooltip(tooltip)
    })
}

export const tooltip = {
    create: createTooltip,
}
