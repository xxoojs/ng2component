webpackJsonp([8],{106:function(t,o){"use strict";function e(t){return r.layout(t)}function i(t){return r.layoutFixed(t)}var n=function(){function t(){}return t.prototype.getClosestNotStaticParent=function(t){for(var o=t.parentElement;o&&o!==document.documentElement&&this.isStaticPositioned(o);)o=o.parentElement;return o},t.prototype.getStyle=function(t,o){return window.getComputedStyle(t)[o]},t.prototype.isStaticPositioned=function(t){return"static"===(this.getStyle(t,"position")||"static")},t.prototype.layout=function(t){var o=this.getClosestNotStaticParent(t),e=o.getBoundingClientRect(),i=t.getBoundingClientRect();return{left:Math.round(i.left-e.left)+"px",top:Math.round(i.bottom-e.top)+"px",width:Math.round(i.width)+"px"}},t.prototype.layoutFixed=function(t){var o=t.getBoundingClientRect();return{left:Math.round(o.left)+"px",top:Math.round(o.bottom)+"px",width:Math.round(o.width)+"px"}},t}();o.Position=n;var r=new n;o.layout=e,o.layoutFixed=i},134:function(t,o,e){"use strict";var i=this&&this.__decorate||function(t,o,e,i){var n,r=arguments.length,p=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,o,e,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(p=(r<3?n(p):r>3?n(o,e,p):n(o,e))||p);return r>3&&p&&Object.defineProperty(o,e,p),p},n=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)},r=e(3),p=e(24),l=e(22),s=e(135),c=e(139),a=function(){function t(){}return t=i([r.NgModule({declarations:[s.TooltipComponent],exports:[s.TooltipComponent],imports:[p.FormsModule,l.CommonModule,c.TooltipRoutingModule]}),n("design:paramtypes",[])],t)}();o.TooltipModule=a},135:function(t,o,e){"use strict";var i=this&&this.__decorate||function(t,o,e,i){var n,r=arguments.length,p=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,o,e,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(p=(r<3?n(p):r>3?n(o,e,p):n(o,e))||p);return r>3&&p&&Object.defineProperty(o,e,p),p},n=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)},r=e(3),p=e(106),l=function(){function t(){this.label="我就是你的tooltip！",this.direction="right",this.width="150px",this.position={left:"0px",top:"0px"},this.isHid=!0}return t.prototype.ngAfterViewInit=function(){this.positionFn()},t.prototype.mouseOver=function(){this.isHid=!1,this.positionFn()},t.prototype.mouseOut=function(){this.isHid=!0},t.prototype.positionFn=function(){var t=this.el||this.defaultEl.nativeElement,o=this.tipEl.nativeElement,e=p.layout(t);switch(this.direction){case"top":e.top=parseInt(e.top)-t.offsetHeight-o.scrollHeight-10+"px";break;case"right":e.left=parseInt(e.left)+t.offsetWidth+"px",e.top=parseInt(e.top)-t.offsetHeight+"px";break;case"bottom":break;case"left":e.top=parseInt(e.top)-t.offsetHeight/2+"px"}this.position=e},i([r.ViewChild("test"),n("design:type","function"==typeof(o="undefined"!=typeof r.ElementRef&&r.ElementRef)&&o||Object)],t.prototype,"defaultEl",void 0),i([r.ViewChild("tooltip"),n("design:type","function"==typeof(l="undefined"!=typeof r.ElementRef&&r.ElementRef)&&l||Object)],t.prototype,"tipEl",void 0),i([r.Input(),n("design:type",Object)],t.prototype,"el",void 0),i([r.Input(),n("design:type",String)],t.prototype,"label",void 0),i([r.Input(),n("design:type",String)],t.prototype,"direction",void 0),i([r.Input(),n("design:type",String)],t.prototype,"width",void 0),t=i([r.Component({selector:"tooltip",template:e(136),styles:[e(137)]}),n("design:paramtypes",[])],t);var o,l}();o.TooltipComponent=l},136:function(t,o){t.exports='<div #test (mouseover)="mouseOver()" (mouseout)="mouseOut()" style="display: inline-block;width: 200px;border: 2px solid #D9D9D9;text-align: center;">我的tooltip在哪里？</div>\n<!-- <button #test>提交啊啊啊</button> -->\n<div #tooltip class="tooltip" [hidden]="isHid" [style.left]="position.left" [style.top]="position.top" [class.top]="direction == \'top\'" [class.right]="direction == \'right\'" [class.bottom]="direction == \'bottom\'" [class.left]="direction == \'left\'">\n\t<div class="tooltip-arrow" [class.top]="direction == \'top\'" [class.right]="direction == \'right\'" [class.bottom]="direction == \'bottom\'" [class.left]="direction == \'left\'"></div>\n\t<div class="tooltip-body" [style.width]="width" [class.top]="direction == \'top\'" [class.right]="direction == \'right\'" [class.bottom]="direction == \'bottom\'" [class.left]="direction == \'left\'">\n\t\t<span>{{label}}</span>\n\t</div>\n</div>'},137:function(t,o,e){var i=e(138);"string"==typeof i?t.exports=i:t.exports=i.toString()},138:function(t,o,e){o=t.exports=e(84)(),o.push([t.id,".tooltip{position:absolute}.tooltip .tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid;border-right-color:rgba(0,0,0,.75)}.tooltip .tooltip-arrow.top{left:3px;bottom:8px;border-width:5px 5px 0}.tooltip .tooltip-arrow.right{left:3px;top:8px;border-width:5px 5px 5px 0}.tooltip .tooltip-body{max-width:250px;padding:2px 10px;color:#fff;text-align:left;text-decoration:none;background-color:rgba(0,0,0,.75);border-radius:4px;box-shadow:0 1px 6px rgba(0,0,0,.2)}.tooltip.right{padding-left:8px}.tooltip.top{padding-bottom:8px}",""])},139:function(t,o,e){"use strict";var i=this&&this.__decorate||function(t,o,e,i){var n,r=arguments.length,p=r<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,o,e,i);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(p=(r<3?n(p):r>3?n(o,e,p):n(o,e))||p);return r>3&&p&&Object.defineProperty(o,e,p),p},n=this&&this.__metadata||function(t,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,o)},r=e(3),p=e(29),l=e(135),s=[{path:"",redirectTo:"tooltip"},{path:"tooltip",component:l.TooltipComponent}],c=function(){function t(){}return t=i([r.NgModule({imports:[p.RouterModule.forChild(s)]}),n("design:paramtypes",[])],t)}();o.TooltipRoutingModule=c}});