// @flow

import React from 'react';
import { SafeAreaView } from 'react-native';

import { Icon, IconCircleActive, IconCircleInactive } from '../../../../../base/icons';

import styles from './styles';

type Props = {

    /**
     * The 1-start-based index of the selected thumb.
     */
    selectedThumb: string,

    /**
     * The total number of thumbs.
     */
    thumbsNumber: number
}

/**
 * Bottom tab navigation screen indicator.
 *
 * @returns {JSX.Element} - The tab navigation indicator.
 */
const NavigationThumb = ({ thumbsNumber, selectedThumb }: Props) => (
    <SafeAreaView
        style = { styles.navigationThumbContainer }>
        {
            new Array(thumbsNumber).fill(0)
                .map((_, index) =>
                    (<Icon
                        key = { `thumb-${index}` }
                        size = { 8 }
                        src = { index + 1 === selectedThumb ? IconCircleActive : IconCircleInactive }
                        style = { styles.navigationThumbIcon } />)
                )
        }
    </SafeAreaView>
);

export default NavigationThumb;
