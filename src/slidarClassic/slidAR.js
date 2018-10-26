import {glowText} from './glowtext/GlowText';
import {showCode} from './showCode/showCode';
import {classUtil} from './classUtil/classUtil';
import {cube} from './cube/cube';
import {lifecycle} from '../zer0slides/lifecycle/lifecycle';
import {steps} from '../zer0slides/steps/steps';
import {metamaskLogo} from './metamask/metamaskLogo';
import {qrUtil} from './qr/qrutil';

const coolText = {glowText};
const initPhase = {markSlideAsReady: lifecycle.slideReady};
const _steps = {
    set: steps.setSteps
}

export const slidAR = {
    classUtil,
    coolText,
    cube,
    glowText,
    initPhase,
    metamaskLogo,
    qrUtil,
    showCode,
    steps: _steps,
};
