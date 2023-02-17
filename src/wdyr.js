import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  });
}
/*
// You can also manually track any component you want by setting whyDidYouRender on them like this:

const BigListPureComponent = props => (
  <div>
    //some heavy component you want to ensure doesn't happen if its not necessary
  </div>
)
BigListPureComponent.whyDidYouRender = true

// You can also pass an object to specify more advanced tracking settings:
EnhancedMenu.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'Menu'
}


Optionally you can pass in options as the second parameter. The following options are available:

include: [RegExp, ...] (null by default)
exclude: [RegExp, ...] (null by default)
trackAllPureComponents: false
trackHooks: true
trackExtraHooks: []
logOwnerReasons: true
logOnDifferentValues: false
hotReloadBufferMs: 500
onlyLogs: false
collapseGroups: false
titleColor
diffNameColor
diffPathColor
notifier: ({Component, displayName, hookName, prevProps, prevState, prevHook, nextProps, nextState, nextHook, reason, options, ownerDataMap}) => void
getAdditionalOwnerData: (element) => {...}
*/