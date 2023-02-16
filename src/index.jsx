import { forwardRef, useRef } from 'react';
import { findNodeHandle, NativeModules, Platform } from 'react-native';
import _update from 'lodash/update';
import _cloneDeep from 'lodash/cloneDeep';

const LINKING_ERROR =
  `The package 'react-native-cam' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const CameraModule = NativeModules.Cam;

if(CameraModule === null){
  console.error("CameraModule")
}

export const Camera = forwardRef((props,ref)=>{
  const nativeRef = useRef();
  useImperativeHandle(ref, function () { return ({
    capture: function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, RNCameraKitModule.capture(options, findNodeHandle((_a = nativeRef.current) !== null && _a !== void 0 ? _a : null))];
                    case 1: 
                    // Because RN doesn't support return types for ViewManager methods
                    // we must use the general module and tell it what View it's supposed to be using
                    return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    requestDeviceCameraAuthorization: function () {
        throw new Error('Not implemented');
    },
    checkDeviceCameraAuthorizationStatus: function () {
        throw new Error('Not implemented');
    },
}) });

// const transformedProps = _cloneDeep(props);
// _update(transformedProps, 'cameraOptions.ratioOverlayColor', (c) => processColor(c));
// _update(transformedProps, 'frameColor', (c) => processColor(c));
// _update(transformedProps, 'laserColor', (c) => processColor(c));
// _update(transformedProps, 'surfaceColor', (c) => processColor(c))
 return(
  <CameraModule 
    style={StyleSheet.absoluteFill}
    ref={nativeRef}
  />
 )
})


 
