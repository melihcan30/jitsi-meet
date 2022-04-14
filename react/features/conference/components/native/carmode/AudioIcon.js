// @flow

import React from 'react';

import { Icon, IconVolumeEmpty } from '../../../../base/icons';
import BaseTheme from '../../../../base/ui/components/BaseTheme.native';

const AudioIcon = () => (<Icon
    color = { BaseTheme.palette.text06 }
    size = { 20 }
    src = { IconVolumeEmpty } />);

export default AudioIcon;
