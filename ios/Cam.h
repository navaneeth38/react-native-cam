
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNCamSpec.h"

@interface Cam : NSObject <NativeCamSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Cam : NSObject <RCTBridgeModule>
#endif

@end
