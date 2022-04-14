// @flow

import BaseTheme from '../../../../../base/ui/components/BaseTheme.native';

const DEFAULT_SIZE = 65;

/**
 * The styles of the microphone button.
 */
export default {

    container: (size: number = DEFAULT_SIZE) => {
        return {
            borderRadius: size / 2,
            height: size,
            maxHeight: size,
            justifyContent: 'center',
            overflow: 'hidden',
            width: size,
            maxWidth: size,
            flex: 1,
            zIndex: 1,
            elevation: 1
        };
    },

    icon: (size: number = DEFAULT_SIZE) => {
        return {
            color: BaseTheme.palette.text01,
            fontSize: size * 0.45,
            fontWeight: '100'
        };
    },

    iconContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: BaseTheme.palette.ui03
    },

    unmuted: {
        borderWidth: 4,
        borderColor: BaseTheme.palette.success01
    }
};
