{"version":3,"sources":["stepbystep.bundle.js"],"names":["this","BX","exports","main_core_events","ui_hint","main_core","_templateObject","_templateObject2","_templateObject3","_templateObject4","_templateObject5","StepByStepItem","_EventEmitter","babelHelpers","inherits","_this","options","arguments","length","undefined","number","classCallCheck","possibleConstructorReturn","getPrototypeOf","call","header","node","isFirst","isLast","Type","isString","nodeClass","backgroundColor","layout","container","createClass","key","value","getHeader","Tag","render","taggedTemplateLiteral","isObject","titleWrapper","title","innerText","hint","hintNode","appendChild","initHint","UI","Hint","init","getContent","getContainer","counterClass","style","classList","add","EventEmitter","_templateObject$1","StepByStep","target","content","contentWrapper","items","counter","getItem","item","indexOf","push","getContentWrapper","map","html","itemObj","Dom","clean","Event"],"mappings":"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","file":"stepbystep.bundle.map.js"}