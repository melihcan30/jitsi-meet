import { fixAndroidViewClipping } from '../../../../base/styles';
import BaseTheme from '../../../../base/ui/components/BaseTheme.native';

/**
 * Base button style.
 */
const baseButton = {
    borderRadius: BaseTheme.shape.borderRadius,
    height: BaseTheme.spacing[7],
    marginTop: BaseTheme.spacing[3],
    marginLeft: BaseTheme.spacing[10],
    marginRight: BaseTheme.spacing[10],
    display: 'flex',
    justifyContent: 'space-around',
    width: 300
};

/**
 * Base label style.
 */
const baseLabel = {
    display: 'flex',
    fontSize: 16,
    textTransform: 'capitalize'
};

/**
 * The styles of the safe area view that contains the title bar.
 */
const titleBarSafeView = {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
};

/**
 * The styles of the native components of Carmode.
 */
export default {

    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    },

    /**
     * {@code Conference} Style.
     */
    conference: fixAndroidViewClipping({
        alignSelf: 'stretch',
        backgroundColor: BaseTheme.palette.uiBackground,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }),

    roomTimer: {
        color: BaseTheme.palette.text01,
        ...BaseTheme.typography.bodyShortBold,
        paddingHorizontal: 8,
        paddingVertical: 6,
        textAlign: 'center'
    },

    titleView: {
        width: 152,
        height: 28,
        backgroundColor: BaseTheme.palette.ui02,
        borderRadius: 12,
        alignSelf: 'center'
    },

    title: {
        margin: 'auto',
        textAlign: 'center',
        paddingVertical: 4,
        paddingHorizontal: 16,
        color: BaseTheme.palette.text02
    },

    soundDeviceButtonLabel: {
        ...baseLabel,
        color: BaseTheme.palette.text06
    },

    soundDeviceButton: {
        ...baseButton,
        backgroundColor: BaseTheme.palette.section01
    },

    endMeetingButton: {
        ...baseButton,
        backgroundColor: BaseTheme.palette.actionDanger,
        marginBottom: 60
    },

    endMeetingButtonLabel: {
        ...baseLabel,
        color: BaseTheme.palette.text01
    },

    headerLabels: {
        borderBottomLeftRadius: 3,
        borderTopLeftRadius: 3,
        flexShrink: 1,
        paddingHorizontal: 2
    },

    titleBarSafeViewColor: {
        ...titleBarSafeView,
        backgroundColor: BaseTheme.palette.uiBackground
    },

    titleBarWrapper: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    roomNameWrapper: {
        flexDirection: 'row',
        marginRight: 10,
        flexShrink: 1,
        flexGrow: 1
    },

    roomNameView: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flexShrink: 1,
        justifyContent: 'center',
        paddingHorizontal: 5,
        marginBottom: 8
    },

    roomName: {
        color: BaseTheme.palette.text01,
        ...BaseTheme.typography.bodyShortBold
    },

    titleBar: {
        alignSelf: 'center'
    },

    videoStoppedLabel: {
        color: BaseTheme.palette.text01,
        marginBottom: 32,
        ...BaseTheme.typography.bodyShortRegularLarge
    }
};
