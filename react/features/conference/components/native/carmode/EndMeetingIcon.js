// @flow

import React from 'react';

import { Icon, IconHangup } from '../../../../base/icons';
import BaseTheme from '../../../../base/ui/components/BaseTheme.native';

const EndMeetingIcon = () => (<Icon
    color = { BaseTheme.palette.icon01 }
    size = { 20 }
    src = { IconHangup } />);

export default EndMeetingIcon;
