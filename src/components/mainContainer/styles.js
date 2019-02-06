import { Platform, StyleSheet, StatusBar } from 'react-native';

import { globalColors } from 'configs/globalStyles';

const top = Platform.OS === 'ios' ? 30 : StatusBar.currentHeight + 10;

export const headerStyle = StyleSheet.create({
  container: {
    paddingTop: top,
    backgroundColor: globalColors.white,
    zIndex: 999,
    marginTop: -30,
  },
  wrapper: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
  },
  backButton: {
    height: 25,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    fontSize: 30,
    color: globalColors.black,
  },
  rightButton: {
    position: 'absolute',
    right: 0,
    height: 25,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: globalColors.black,
  },
});

export const footerStyle = StyleSheet.create({

});

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
  },
  doneButtonWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    padding: 10,
    backgroundColor: globalColors.white,
    borderTopWidth: 1,
    borderTopColor: globalColors.font,
  },
  doneButtonText: {
    color: globalColors.red,
    fontSize: 13,
    textAlign: 'right',
  },
});