!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e((t=t||self).ReactWindow={},t.React)}(this,function(t,e){"use strict";function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var i=function(t,e){return t.length===e.length&&t.every(function(t,o){return r=t,n=e[o],r===n;var r,n})};function a(t,e){var o;void 0===e&&(e=i);var r,n=[],a=!1;return function(){for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return a&&o===this&&e(l,n)?r:(r=t.apply(this,l),a=!0,o=this,n=l,r)}}var l="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function s(t){cancelAnimationFrame(t.id)}function c(t,e){var o=l();var r={id:requestAnimationFrame(function n(){l()-o>=e?t.call(null):r.id=requestAnimationFrame(n)})};return r}var u=-1;var f=null;function d(t){if(void 0===t&&(t=!1),null===f||t){var e=document.createElement("div"),o=e.style;o.width="50px",o.height="50px",o.overflow="scroll",o.direction="rtl";var r=document.createElement("div"),n=r.style;return n.width="100px",n.height="100px",e.appendChild(r),document.body.appendChild(e),e.scrollLeft>0?f="positive-descending":(e.scrollLeft=1,f=0===e.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(e),f}return f}var h=150,m=function(t){var e=t.columnIndex;t.data;return t.rowIndex+":"+e};function p(t){var i,l,f=t.getColumnOffset,p=t.getColumnStartIndexForOffset,g=t.getColumnStopIndexForStartIndex,S=t.getColumnWidth,I=t.getEstimatedTotalHeight,w=t.getEstimatedTotalWidth,M=t.getOffsetForColumnAndAlignment,x=t.getOffsetForRowAndAlignment,_=t.getRowHeight,C=t.getRowOffset,R=t.getRowStartIndexForOffset,y=t.getRowStopIndexForStartIndex,T=t.initInstanceProps,O=t.shouldResetStyleCacheOnItemSizeChange,z=t.validateProps;return l=i=function(t){function i(e){var o;return(o=t.call(this,e)||this)._instanceProps=T(o.props,n(n(o))),o._resetIsScrollingTimeoutId=null,o._outerRef=void 0,o.state={instance:n(n(o)),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof o.props.initialScrollLeft?o.props.initialScrollLeft:0,scrollTop:"number"==typeof o.props.initialScrollTop?o.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},o._callOnItemsRendered=void 0,o._callOnItemsRendered=a(function(t,e,r,n,i,a,l,s){return o.props.onItemsRendered({overscanColumnStartIndex:t,overscanColumnStopIndex:e,overscanRowStartIndex:r,overscanRowStopIndex:n,visibleColumnStartIndex:i,visibleColumnStopIndex:a,visibleRowStartIndex:l,visibleRowStopIndex:s})}),o._callOnScroll=void 0,o._callOnScroll=a(function(t,e,r,n,i){return o.props.onScroll({horizontalScrollDirection:r,scrollLeft:t,scrollTop:e,verticalScrollDirection:n,scrollUpdateWasRequested:i})}),o._getItemStyle=void 0,o._getItemStyle=function(t,e){var r,n=o.props,i=n.columnWidth,a=n.direction,l=n.rowHeight,s=o._getItemStyleCache(O&&i,O&&a,O&&l),c=t+":"+e;if(s.hasOwnProperty(c))r=s[c];else{var u=f(o.props,e,o._instanceProps),d="rtl"===a;s[c]=r={position:"absolute",left:d?void 0:u,right:d?u:void 0,top:C(o.props,t,o._instanceProps),height:_(o.props,t,o._instanceProps),width:S(o.props,e,o._instanceProps)}}return r},o._getItemStyleCache=void 0,o._getItemStyleCache=a(function(t,e,o){return{}}),o._onScroll=function(t){var e=t.currentTarget,r=e.clientHeight,n=e.clientWidth,i=e.scrollLeft,a=e.scrollTop,l=e.scrollHeight,s=e.scrollWidth;"function"==typeof o.props.onScrollNative&&o.props.onScrollNative(t),o.setState(function(t){if(t.scrollLeft===i&&t.scrollTop===a)return null;var e=o.props.direction,c=i;if("rtl"===e)switch(d()){case"negative":c=-i;break;case"positive-descending":c=s-n-i}c=Math.max(0,Math.min(c,s-n));var u=Math.max(0,Math.min(a,l-r));return{isScrolling:!0,horizontalScrollDirection:t.scrollLeft<i?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:t.scrollTop<a?"forward":"backward",scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._outerRefSetter=function(t){var e=o.props.outerRef;o._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},o._resetIsScrollingDebounced=function(){null!==o._resetIsScrollingTimeoutId&&s(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=c(o._resetIsScrolling,h)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},function(){o._getItemStyleCache(-1)})},o}r(i,t),i.getDerivedStateFromProps=function(t,e){return v(t,e),z(t),null};var l=i.prototype;return l.scrollTo=function(t){var e=t.scrollLeft,o=t.scrollTop;void 0!==e&&(e=Math.max(0,e)),void 0!==o&&(o=Math.max(0,o)),this.setState(function(t){return void 0===e&&(e=t.scrollLeft),void 0===o&&(o=t.scrollTop),t.scrollLeft===e&&t.scrollTop===o?null:{horizontalScrollDirection:t.scrollLeft<e?"forward":"backward",scrollLeft:e,scrollTop:o,scrollUpdateWasRequested:!0,verticalScrollDirection:t.scrollTop<o?"forward":"backward"}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t){var e=t.align,o=void 0===e?"auto":e,r=t.columnIndex,n=t.rowIndex,i=this.props,a=i.columnCount,l=i.height,s=i.rowCount,c=i.width,f=this.state,d=f.scrollLeft,h=f.scrollTop,m=function(t){if(void 0===t&&(t=!1),-1===u||t){var e=document.createElement("div"),o=e.style;o.width="50px",o.height="50px",o.overflow="scroll",document.body.appendChild(e),u=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return u}();void 0!==r&&(r=Math.max(0,Math.min(r,a-1))),void 0!==n&&(n=Math.max(0,Math.min(n,s-1)));var p=I(this.props,this._instanceProps),v=w(this.props,this._instanceProps)>c?m:0,g=p>l?m:0;this.scrollTo({scrollLeft:void 0!==r?M(this.props,r,o,d,this._instanceProps,g):d,scrollTop:void 0!==n?x(this.props,n,o,h,this._instanceProps,v):h})},l.componentDidMount=function(){var t=this.props,e=t.initialScrollLeft,o=t.initialScrollTop;if(null!=this._outerRef){var r=this._outerRef;"number"==typeof e&&(r.scrollLeft=e),"number"==typeof o&&(r.scrollTop=o)}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props.direction,e=this.state,o=e.scrollLeft,r=e.scrollTop;if(e.scrollUpdateWasRequested&&null!=this._outerRef){var n=this._outerRef;if("rtl"===t)switch(d()){case"negative":n.scrollLeft=-o;break;case"positive-ascending":n.scrollLeft=o;break;default:var i=n.clientWidth,a=n.scrollWidth;n.scrollLeft=a-i-o}else n.scrollLeft=Math.max(0,o);n.scrollTop=Math.max(0,r)}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,r=t.children,n=t.className,i=t.columnCount,a=t.direction,l=t.height,s=t.innerRef,c=t.innerElementType,u=t.innerTagName,f=t.itemData,d=t.itemKey,h=void 0===d?m:d,p=t.outerElementType,v=t.outerTagName,g=t.rowCount,S=t.style,M=t.useIsScrolling,x=t.width,_=this.state.isScrolling,C=this._getHorizontalRangeToRender(),R=C[0],y=C[1],T=this._getVerticalRangeToRender(),O=T[0],z=T[1],b=[];if(i>0&&g)for(var P=O;P<=z;P++)for(var W=R;W<=y;W++)b.push(e.createElement(r,{columnIndex:W,data:f,isScrolling:M?_:void 0,key:h({columnIndex:W,data:f,rowIndex:P}),rowIndex:P,style:this._getItemStyle(P,W)}));var D=I(this.props,this._instanceProps),F=w(this.props,this._instanceProps);return e.createElement(p||v||"div",{className:n,onScroll:this._onScroll,ref:this._outerRefSetter,style:o({position:"relative",height:l,width:x,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:a},S)},e.createElement(c||u||"div",{children:b,ref:s,style:{height:D,pointerEvents:_?"none":void 0,width:F}}))},l._callPropsCallbacks=function(){var t=this.props,e=t.columnCount,o=t.onItemsRendered,r=t.onScroll,n=t.rowCount;if("function"==typeof o&&e>0&&n>0){var i=this._getHorizontalRangeToRender(),a=i[0],l=i[1],s=i[2],c=i[3],u=this._getVerticalRangeToRender(),f=u[0],d=u[1],h=u[2],m=u[3];this._callOnItemsRendered(a,l,f,d,s,c,h,m)}if("function"==typeof r){var p=this.state,v=p.horizontalScrollDirection,g=p.scrollLeft,S=p.scrollTop,I=p.scrollUpdateWasRequested,w=p.verticalScrollDirection;this._callOnScroll(g,S,v,w,I)}},l._getHorizontalRangeToRender=function(){var t=this.props,e=t.columnCount,o=t.overscanColumnCount,r=t.overscanColumnsCount,n=t.overscanCount,i=t.rowCount,a=this.state,l=a.horizontalScrollDirection,s=a.isScrolling,c=a.scrollLeft,u=o||r||n||1;if(0===e||0===i)return[0,0,0,0];var f=p(this.props,c,this._instanceProps),d=g(this.props,f,c,this._instanceProps),h=s&&"backward"!==l?1:Math.max(1,u),m=s&&"forward"!==l?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(e-1,d+m)),f,d]},l._getVerticalRangeToRender=function(){var t=this.props,e=t.columnCount,o=t.overscanCount,r=t.overscanRowCount,n=t.overscanRowsCount,i=t.rowCount,a=this.state,l=a.isScrolling,s=a.verticalScrollDirection,c=a.scrollTop,u=r||n||o||1;if(0===e||0===i)return[0,0,0,0];var f=R(this.props,c,this._instanceProps),d=y(this.props,f,c,this._instanceProps),h=l&&"backward"!==s?1:Math.max(1,u),m=l&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,f-h),Math.max(0,Math.min(i-1,d+m)),f,d]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},l}var v=function(t,e){t.children,t.direction,t.height,t.innerTagName,t.outerTagName,t.overscanColumnsCount,t.overscanCount,t.overscanRowsCount,t.width,e.instance},g=function(t,e){var o=t.rowCount,r=e.rowMetadataMap,n=e.estimatedRowHeight,i=e.lastMeasuredRowIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},S=function(t,e){var o=t.columnCount,r=e.columnMetadataMap,n=e.estimatedColumnWidth,i=e.lastMeasuredColumnIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},I=function(t,e,o,r){var n,i,a;if("column"===t?(n=r.columnMetadataMap,i=e.columnWidth,a=r.lastMeasuredColumnIndex):(n=r.rowMetadataMap,i=e.rowHeight,a=r.lastMeasuredRowIndex),o>a){var l=0;if(a>=0){var s=n[a];l=s.offset+s.size}for(var c=a+1;c<=o;c++){var u=i(c);n[c]={offset:l,size:u},l+=u}"column"===t?r.lastMeasuredColumnIndex=o:r.lastMeasuredRowIndex=o}return n[o]},w=function(t,e,o,r){var n,i;return"column"===t?(n=o.columnMetadataMap,i=o.lastMeasuredColumnIndex):(n=o.rowMetadataMap,i=o.lastMeasuredRowIndex),(i>0?n[i].offset:0)>=r?M(t,e,o,i,0,r):x(t,e,o,Math.max(0,i),r)},M=function(t,e,o,r,n,i){for(;n<=r;){var a=n+Math.floor((r-n)/2),l=I(t,e,a,o).offset;if(l===i)return a;l<i?n=a+1:l>i&&(r=a-1)}return n>0?n-1:0},x=function(t,e,o,r,n){for(var i="column"===t?e.columnCount:e.rowCount,a=1;r<i&&I(t,e,r,o).offset<n;)r+=a,a*=2;return M(t,e,o,Math.min(r,i-1),Math.floor(r/2),n)},_=function(t,e,o,r,n,i,a){var l="column"===t?e.width:e.height,s=I(t,e,o,i),c="column"===t?S(e,i):g(e,i),u=Math.max(0,Math.min(c-l,s.offset)),f=Math.max(0,s.offset-l+a+s.size);switch("smart"===r&&(r=n>=f-l&&n<=u+l?"auto":"center"),r){case"start":return u;case"end":return f;case"center":return Math.round(f+(u-f)/2);case"auto":default:return n>=f&&n<=u?n:f>u?f:n<f?f:u}},C=p({getColumnOffset:function(t,e,o){return I("column",t,e,o).offset},getColumnStartIndexForOffset:function(t,e,o){return w("column",t,o,e)},getColumnStopIndexForStartIndex:function(t,e,o,r){for(var n=t.columnCount,i=t.width,a=I("column",t,e,r),l=o+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=I("column",t,++c,r).size;return c},getColumnWidth:function(t,e,o){return o.columnMetadataMap[e].size},getEstimatedTotalHeight:g,getEstimatedTotalWidth:S,getOffsetForColumnAndAlignment:function(t,e,o,r,n,i){return _("column",t,e,o,r,n,i)},getOffsetForRowAndAlignment:function(t,e,o,r,n,i){return _("row",t,e,o,r,n,i)},getRowOffset:function(t,e,o){return I("row",t,e,o).offset},getRowHeight:function(t,e,o){return o.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,o){return w("row",t,o,e)},getRowStopIndexForStartIndex:function(t,e,o,r){for(var n=t.rowCount,i=t.height,a=I("row",t,e,r),l=o+i,s=a.offset+a.size,c=e;c<n-1&&s<l;)s+=I("row",t,++c,r).size;return c},initInstanceProps:function(t,e){var o=t,r={columnMetadataMap:{},estimatedColumnWidth:o.estimatedColumnWidth||50,estimatedRowHeight:o.estimatedRowHeight||50,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(t,o){void 0===o&&(o=!0),e.resetAfterIndices({columnIndex:t,shouldForceUpdate:o})},e.resetAfterRowIndex=function(t,o){void 0===o&&(o=!0),e.resetAfterIndices({rowIndex:t,shouldForceUpdate:o})},e.resetAfterIndices=function(t){var o=t.columnIndex,n=t.rowIndex,i=t.shouldForceUpdate,a=void 0===i||i;"number"==typeof o&&(r.lastMeasuredColumnIndex=Math.min(r.lastMeasuredColumnIndex,o-1)),"number"==typeof n&&(r.lastMeasuredRowIndex=Math.min(r.lastMeasuredRowIndex,n-1)),e._getItemStyleCache(-1),a&&e.forceUpdate()},r},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.columnWidth,t.rowHeight}}),R=150,y=function(t,e){return t};function T(t){var i,l,u=t.getItemOffset,f=t.getEstimatedTotalSize,h=t.getItemSize,m=t.getOffsetForIndexAndAlignment,p=t.getStartIndexForOffset,v=t.getStopIndexForStartIndex,g=t.initInstanceProps,S=t.shouldResetStyleCacheOnItemSizeChange,I=t.validateProps;return l=i=function(t){function i(e){var o;return(o=t.call(this,e)||this)._instanceProps=g(o.props,n(n(o))),o._outerRef=void 0,o._resetIsScrollingTimeoutId=null,o.state={instance:n(n(o)),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"==typeof o.props.initialScrollOffset?o.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},o._callOnItemsRendered=void 0,o._callOnItemsRendered=a(function(t,e,r,n){return o.props.onItemsRendered({overscanStartIndex:t,overscanStopIndex:e,visibleStartIndex:r,visibleStopIndex:n})}),o._callOnScroll=void 0,o._callOnScroll=a(function(t,e,r){return o.props.onScroll({scrollDirection:t,scrollOffset:e,scrollUpdateWasRequested:r})}),o._getItemStyle=void 0,o._getItemStyle=function(t){var e,r=o.props,n=r.direction,i=r.itemSize,a=r.layout,l=o._getItemStyleCache(S&&i,S&&a,S&&n);if(l.hasOwnProperty(t))e=l[t];else{var s=u(o.props,t,o._instanceProps),c=h(o.props,t,o._instanceProps),f="horizontal"===n||"horizontal"===a,d="rtl"===n,m=f?s:0;l[t]=e={position:"absolute",left:d?void 0:m,right:d?m:void 0,top:f?0:s,height:f?"100%":c,width:f?c:"100%"}}return e},o._getItemStyleCache=void 0,o._getItemStyleCache=a(function(t,e,o){return{}}),o._onScrollHorizontal=function(t){var e=t.currentTarget,r=e.clientWidth,n=e.scrollLeft,i=e.scrollWidth;o.setState(function(t){if(t.scrollOffset===n)return null;var e=o.props.direction,a=n;if("rtl"===e)switch(d()){case"negative":a=-n;break;case"positive-descending":a=i-r-n}return a=Math.max(0,Math.min(a,i-r)),{isScrolling:!0,scrollDirection:t.scrollOffset<n?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._onScrollVertical=function(t){var e=t.currentTarget,r=e.clientHeight,n=e.scrollHeight,i=e.scrollTop;o.setState(function(t){if(t.scrollOffset===i)return null;var e=Math.max(0,Math.min(i,n-r));return{isScrolling:!0,scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._outerRefSetter=function(t){var e=o.props.outerRef;o._outerRef=t,"function"==typeof e?e(t):null!=e&&"object"==typeof e&&e.hasOwnProperty("current")&&(e.current=t)},o._resetIsScrollingDebounced=function(){null!==o._resetIsScrollingTimeoutId&&s(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=c(o._resetIsScrolling,R)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},function(){o._getItemStyleCache(-1,null)})},o}r(i,t),i.getDerivedStateFromProps=function(t,e){return O(t,e),I(t),null};var l=i.prototype;return l.scrollTo=function(t){t=Math.max(0,t),this.setState(function(e){return e.scrollOffset===t?null:{scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},l.scrollToItem=function(t,e){void 0===e&&(e="auto");var o=this.props.itemCount,r=this.state.scrollOffset;t=Math.max(0,Math.min(t,o-1)),this.scrollTo(m(this.props,t,e,r,this._instanceProps))},l.componentDidMount=function(){var t=this.props,e=t.direction,o=t.initialScrollOffset,r=t.layout;if("number"==typeof o&&null!=this._outerRef){var n=this._outerRef;"horizontal"===e||"horizontal"===r?n.scrollLeft=o:n.scrollTop=o}this._callPropsCallbacks()},l.componentDidUpdate=function(){var t=this.props,e=t.direction,o=t.layout,r=this.state,n=r.scrollOffset;if(r.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("horizontal"===e||"horizontal"===o)if("rtl"===e)switch(d()){case"negative":i.scrollLeft=-n;break;case"positive-ascending":i.scrollLeft=n;break;default:var a=i.clientWidth,l=i.scrollWidth;i.scrollLeft=l-a-n}else i.scrollLeft=n;else i.scrollTop=n}this._callPropsCallbacks()},l.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&s(this._resetIsScrollingTimeoutId)},l.render=function(){var t=this.props,r=t.children,n=t.className,i=t.direction,a=t.height,l=t.innerRef,s=t.innerElementType,c=t.innerTagName,u=t.itemCount,d=t.itemData,h=t.itemKey,m=void 0===h?y:h,p=t.layout,v=t.outerElementType,g=t.outerTagName,S=t.style,I=t.useIsScrolling,w=t.width,M=this.state.isScrolling,x="horizontal"===i||"horizontal"===p,_=x?this._onScrollHorizontal:this._onScrollVertical,C=this._getRangeToRender(),R=C[0],T=C[1],O=[];if(u>0)for(var z=R;z<=T;z++)O.push(e.createElement(r,{data:d,key:m(z,d),index:z,isScrolling:I?M:void 0,style:this._getItemStyle(z)}));var b=f(this.props,this._instanceProps);return e.createElement(v||g||"div",{className:n,onScroll:_,ref:this._outerRefSetter,style:o({position:"relative",height:a,width:w,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:i},S)},e.createElement(s||c||"div",{children:O,ref:l,style:{height:x?"100%":b,pointerEvents:M?"none":void 0,width:x?b:"100%"}}))},l._callPropsCallbacks=function(){if("function"==typeof this.props.onItemsRendered&&this.props.itemCount>0){var t=this._getRangeToRender(),e=t[0],o=t[1],r=t[2],n=t[3];this._callOnItemsRendered(e,o,r,n)}if("function"==typeof this.props.onScroll){var i=this.state,a=i.scrollDirection,l=i.scrollOffset,s=i.scrollUpdateWasRequested;this._callOnScroll(a,l,s)}},l._getRangeToRender=function(){var t=this.props,e=t.itemCount,o=t.overscanCount,r=this.state,n=r.isScrolling,i=r.scrollDirection,a=r.scrollOffset;if(0===e)return[0,0,0,0];var l=p(this.props,a,this._instanceProps),s=v(this.props,l,a,this._instanceProps),c=n&&"backward"!==i?1:Math.max(1,o),u=n&&"forward"!==i?1:Math.max(1,o);return[Math.max(0,l-c),Math.max(0,Math.min(e-1,s+u)),l,s]},i}(e.PureComponent),i.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},l}var O=function(t,e){t.children,t.direction,t.height,t.layout,t.innerTagName,t.outerTagName,t.width,e.instance},z=function(t,e,o){var r=t.itemSize,n=o.itemMetadataMap,i=o.lastMeasuredIndex;if(e>i){var a=0;if(i>=0){var l=n[i];a=l.offset+l.size}for(var s=i+1;s<=e;s++){var c=r(s);n[s]={offset:a,size:c},a+=c}o.lastMeasuredIndex=e}return n[e]},b=function(t,e,o,r,n){for(;r<=o;){var i=r+Math.floor((o-r)/2),a=z(t,i,e).offset;if(a===n)return i;a<n?r=i+1:a>n&&(o=i-1)}return r>0?r-1:0},P=function(t,e,o,r){for(var n=t.itemCount,i=1;o<n&&z(t,o,e).offset<r;)o+=i,i*=2;return b(t,e,Math.min(o,n-1),Math.floor(o/2),r)},W=function(t,e){var o=t.itemCount,r=e.itemMetadataMap,n=e.estimatedItemSize,i=e.lastMeasuredIndex,a=0;if(i>=o&&(i=o-1),i>=0){var l=r[i];a=l.offset+l.size}return a+(o-i-1)*n},D=T({getItemOffset:function(t,e,o){return z(t,e,o).offset},getItemSize:function(t,e,o){return o.itemMetadataMap[e].size},getEstimatedTotalSize:W,getOffsetForIndexAndAlignment:function(t,e,o,r,n){var i=t.direction,a=t.height,l=t.layout,s=t.width,c="horizontal"===i||"horizontal"===l?s:a,u=z(t,e,n),f=W(t,n),d=Math.max(0,Math.min(f-c,u.offset)),h=Math.max(0,u.offset-c+u.size);switch("smart"===o&&(o=r>=h-c&&r<=d+c?"auto":"center"),o){case"start":return d;case"end":return h;case"center":return Math.round(h+(d-h)/2);case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e,o){return function(t,e,o){var r=e.itemMetadataMap,n=e.lastMeasuredIndex;return(n>0?r[n].offset:0)>=o?b(t,e,n,0,o):P(t,e,Math.max(0,n),o)}(t,o,e)},getStopIndexForStartIndex:function(t,e,o,r){for(var n=t.direction,i=t.height,a=t.itemCount,l=t.layout,s=t.width,c="horizontal"===n||"horizontal"===l?s:i,u=z(t,e,r),f=o+c,d=u.offset+u.size,h=e;h<a-1&&d<f;)d+=z(t,++h,r).size;return h},initInstanceProps:function(t,e){var o={itemMetadataMap:{},estimatedItemSize:t.estimatedItemSize||50,lastMeasuredIndex:-1};return e.resetAfterIndex=function(t,r){void 0===r&&(r=!0),o.lastMeasuredIndex=Math.min(o.lastMeasuredIndex,t-1),e._getItemStyleCache(-1),r&&e.forceUpdate()},o},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){t.itemSize}}),F=p({getColumnOffset:function(t,e){return e*t.columnWidth},getColumnWidth:function(t,e){return t.columnWidth},getRowOffset:function(t,e){return e*t.rowHeight},getRowHeight:function(t,e){return t.rowHeight},getEstimatedTotalHeight:function(t){var e=t.rowCount;return t.rowHeight*e},getEstimatedTotalWidth:function(t){var e=t.columnCount;return t.columnWidth*e},getOffsetForColumnAndAlignment:function(t,e,o,r,n,i){var a=t.columnCount,l=t.columnWidth,s=t.width,c=Math.max(0,a*l-s),u=Math.min(c,e*l),f=Math.max(0,e*l-s+i+l);switch("smart"===o&&(o=r>=f-s&&r<=u+s?"auto":"center"),o){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getOffsetForRowAndAlignment:function(t,e,o,r,n,i){var a=t.rowHeight,l=t.height,s=t.rowCount,c=Math.max(0,s*a-l),u=Math.min(c,e*a),f=Math.max(0,e*a-l+i+a);switch("smart"===o&&(o=r>=f-l&&r<=u+l?"auto":"center"),o){case"start":return u;case"end":return f;case"center":var d=Math.round(f+(u-f)/2);return d<Math.ceil(l/2)?0:d>c+Math.floor(l/2)?c:d;case"auto":default:return r>=f&&r<=u?r:f>u?f:r<f?f:u}},getColumnStartIndexForOffset:function(t,e){var o=t.columnWidth,r=t.columnCount;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getColumnStopIndexForStartIndex:function(t,e,o){var r=t.columnWidth,n=t.columnCount,i=t.width,a=e*r,l=Math.ceil((i+o-a)/r);return Math.max(0,Math.min(n-1,e+l-1))},getRowStartIndexForOffset:function(t,e){var o=t.rowHeight,r=t.rowCount;return Math.max(0,Math.min(r-1,Math.floor(e/o)))},getRowStopIndexForStartIndex:function(t,e,o){var r=t.rowHeight,n=t.rowCount,i=t.height,a=e*r,l=Math.ceil((i+o-a)/r);return Math.max(0,Math.min(n-1,e+l-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.columnWidth,t.rowHeight}}),L=T({getItemOffset:function(t,e){return e*t.itemSize},getItemSize:function(t,e){return t.itemSize},getEstimatedTotalSize:function(t){var e=t.itemCount;return t.itemSize*e},getOffsetForIndexAndAlignment:function(t,e,o,r){var n=t.direction,i=t.height,a=t.itemCount,l=t.itemSize,s=t.layout,c=t.width,u="horizontal"===n||"horizontal"===s?c:i,f=Math.max(0,a*l-u),d=Math.min(f,e*l),h=Math.max(0,e*l-u+l);switch("smart"===o&&(o=r>=h-u&&r<=d+u?"auto":"center"),o){case"start":return d;case"end":return h;case"center":var m=Math.round(h+(d-h)/2);return m<Math.ceil(u/2)?0:m>f+Math.floor(u/2)?f:m;case"auto":default:return r>=h&&r<=d?r:r<h?h:d}},getStartIndexForOffset:function(t,e){var o=t.itemCount,r=t.itemSize;return Math.max(0,Math.min(o-1,Math.floor(e/r)))},getStopIndexForStartIndex:function(t,e,o){var r=t.direction,n=t.height,i=t.itemCount,a=t.itemSize,l=t.layout,s=t.width,c=e*a,u="horizontal"===r||"horizontal"===l?s:n,f=Math.ceil((u+o-c)/a);return Math.max(0,Math.min(i-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){t.itemSize}});function A(t,e){if(null==t)return{};var o,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)o=i[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}function H(t,e){for(var o in t)if(!(o in e))return!0;for(var r in e)if(t[r]!==e[r])return!0;return!1}function k(t,e){var o=t.style,r=A(t,["style"]),n=e.style,i=A(e,["style"]);return!H(o,n)&&!H(r,i)}t.VariableSizeGrid=C,t.VariableSizeList=D,t.FixedSizeGrid=F,t.FixedSizeList=L,t.areEqual=k,t.shouldComponentUpdate=function(t,e){return!k(this.props,t)||H(this.state,e)},Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=index-prod.umd.js.map
