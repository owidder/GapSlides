import * as React from 'react';
import {HtmlSlide} from '../html/HtmlSlide';
import {Slide} from './Slide';

interface GapSlidesProps {
    slide: Slide
}

export class GapSlides extends React.Component<GapSlidesProps> {

    public render() {
        return (
            <div>
                <HtmlSlide slide={this.props.slide}/>
            </div>
        );
    }
}
