!function(t){function n(n){for(var r,a,s=n[0],u=n[1],l=n[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(c&&c(n);p.length;)p.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],r=!0,s=1;s<e.length;s++){var u=e[s];0!==i[u]&&(r=!1)}r&&(o.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},i={0:0},o=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var c=u;o.push([37,1]),e()}([,,,,,,,function(t,n,e){var r=e(20);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(6).default)("77f9fee7",r,!1,{})},function(t,n,e){var r=e(29);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(6).default)("4cd6b2c9",r,!1,{})},function(t,n,e){var r=e(31);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(6).default)("5b2eb30a",r,!1,{})},function(t,n,e){var r=e(34);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(6).default)("03ada772",r,!1,{})},,,,,,,,,function(t,n,e){"use strict";var r=e(7);e.n(r).a},function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.play {\n  color: green;\n}\n.pause {\n  color: grey;\n}\n",""]),t.exports=n},,,,,,,,function(t,n,e){"use strict";var r=e(8);e.n(r).a},function(t,n,e){(n=e(5)(!1)).push([t.i,"\n[data-v-64cc84e8] .CodeMirror {\n  font-size: 12;\n  height: var(--height);\n  direction: ltr;\n  background: var(--background);\n  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,\n    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;\n}\n",""]),t.exports=n},function(t,n,e){"use strict";var r=e(9);e.n(r).a},function(t,n,e){(n=e(5)(!1)).push([t.i,"\n.column[data-v-74eb68cc] {\n  float: left;\n  width: 355;\n}\n",""]),t.exports=n},,function(t,n,e){"use strict";var r=e(10);e.n(r).a},function(t,n,e){(n=e(5)(!1)).push([t.i,'\n#app {\n  font-size: 18px;\n  font-family: "Roboto", sans-serif;\n}\n.column {\n  float: left;\n  width: 355;\n}\n',""]),t.exports=n},,,function(t,n,e){"use strict";e.r(n);var r=e(18),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",[e("h1",[t._v("Scribbletune playground")]),t._v(" "),e("SaveLoadJson",{model:{value:t.channelsArray,callback:function(n){t.channelsArray=n},expression:"channelsArray"}}),t._v(" "),e("Oscilloscope"),t._v(" "),e("PlayPauseButton",{on:{playPause:t.tonePlayPause}}),t._v(" "),e("button",{on:{click:function(){return t.addChannel()}}},[t._v("\n      Add channel\n    ")])],1),t._v(" "),t._l(t.channels,(function(n,r){return e("div",[e("Channel",{key:"channel-"+r,on:{close:t.removeChannel},model:{value:t.channels[r],callback:function(n){t.$set(t.channels,r,n)},expression:"channels[id]"}})],1)}))],2)};i._withStripped=!0;var o=function(){var t=this.$createElement;return(this._self._c||t)("button",{class:this.buttonClass,on:{click:this.toggle}},[this._v("\n  "+this._s(this.buttonMsg)+"\n")])};o._withStripped=!0;var a={data:function(){return{isPlaying:!1}},computed:{buttonMsg:function(){return this.isPlaying?"Pause":"Play"},buttonClass:function(){return this.isPlaying?"pause":"play"}},methods:{toggle:function(){this.isPlaying=!this.isPlaying,this.$emit("playPause",this.isPlaying)}}},s=(e(19),e(3)),u=Object(s.a)(a,o,[],!1,null,null,null);u.options.__file="src/PlayPauseButton.vue";var l=u.exports,c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"column"},[e("button",{on:{click:function(n){return t.$emit("close",t.id)}}},[t._v("Close")]),t._v(" "),e("button",{on:{click:function(){return t.addEffect()}}},[t._v("Add effect")]),t._v(" "),e("Clip",{key:"clip-"+t.id,model:{value:t.input.clips,callback:function(n){t.$set(t.input,"clips",n)},expression:"input.clips"}}),t._v(" "),e("Instrument",{key:"instrument-"+t.id,attrs:{names:t.instrumentNames},model:{value:t.input.instrument,callback:function(n){t.$set(t.input,"instrument",n)},expression:"input.instrument"}}),t._v(" "),t._l(t.input.effects,(function(n,r){return e("Instrument",{key:"effect-"+r,attrs:{names:t.effectNames,closeButton:!0,height:"100px"},on:{close:t.removeEffect},model:{value:t.input.effects[r],callback:function(n){t.$set(t.input.effects,r,n)},expression:"input.effects[idEffect]"}})}))],2)};c._withStripped=!0;var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.input.name,expression:"input.name"}],on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.input,"name",n.target.multiple?e:e[0])}}},t._l(t.names,(function(n){return e("option",{domProps:{value:n}},[t._v(t._s(n)+" ")])})),0),t._v(" "),t.closeButton?e("button",{on:{click:function(n){return t.$emit("close",t.id)}}},[t._v("Close")]):t._e(),t._v(" "),e("ParamsEditor",{key:"instrument-editor-"+t.id,attrs:{height:t.height},model:{value:t.input.params,callback:function(n){t.$set(t.input,"params",n)},expression:"input.params"}})],1)};f._withStripped=!0;var p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("codemirror",{key:"editor-"+t.id,ref:"editor-"+t.id,style:{height:t.height,background:t.background},attrs:{options:t.editorOptions},on:{focus:function(n){t.background="#FFFFFF"},blur:function(n){t.$emit("input",t.YAML.parse(t.input)),t.background="#F7F7F7"}},model:{value:t.input,callback:function(n){t.input=n},expression:"input"}})],1)};p._withStripped=!0;var h=e(15),d=(e(21),e(23),e(11)),v=e.n(d),m={components:{codemirror:h.codemirror},props:{value:{},editorOptions:{default:function(){return{tabSize:2,mode:"text/yaml",dragDrop:!1,line:!0}}},height:{default:"300px"}},data:function(){return{YAML:v.a,input:v.a.stringify(this.value),background:"#F7F7F7"}},computed:{id:function(){return this.$vnode.key.split("-")[1]}},watch:{value:function(){this.input=v.a.stringify(this.value)}}},y=(e(28),Object(s.a)(m,p,[],!1,null,"64cc84e8",null));y.options.__file="src/ParamsEditor.vue";var b=y.exports,g={components:{ParamsEditor:b},props:{value:void 0,names:void 0,height:{default:"300px"},closeButton:{default:!1}},data:function(){return{input:this.value}},computed:{id:function(){return this.$vnode.key.split("-")[1]},cssParams:function(){return{fontSize:"12px",height:this.height,border:"1px solid #eee"}}},created:function(){this.input||(this.input={name:this.names[0],params:(new Tone[this.names[0]]).get()})},mounted:function(){this.$emit("input",this.input)},watch:{"input.name":{handler:function(){this.input.params=(new Tone[this.input.name]).get()}},input:{deep:!0,handler:function(){this.$emit("input",this.input)}}}},_=Object(s.a)(g,f,[],!1,null,"a0a9ddc0",null);_.options.__file="src/Instrument.vue";var S=_.exports,x=function(){var t=this,n=t.$createElement;return(t._self._c||n)("ParamsEditor",{key:"clips-"+t.id,attrs:{value:t.value,height:"100px"},on:{input:function(n){return t.$emit("input",n)}}})};x._withStripped=!0;var P={components:{ParamsEditor:b},props:{value:{default:function(){return[{notes:"CM-3 CM-3 DM7-3 DM7-3 GM-2 GM-2",pattern:"[xx_-][xx_-][xx_-]"}]}}},computed:{id:function(){return this.$vnode.key.split("-")[1]}},mounted:function(){this.$emit("input",this.value)}},O=Object(s.a)(P,x,[],!1,null,"772fe0c9",null);O.options.__file="src/Clip.vue";var w={components:{Instrument:S,Clip:O.exports},props:{value:{default:function(){return{clips:void 0,instrument:void 0,effects:{}}}}},data:function(){return{input:this.value,instrumentNames:["AMSynth","DuoSynth","FMSynth","MembraneSynth","MetalSynth","MonoSynth","NoiseSynth","PluckSynth","Sampler","Synth"],effectNames:["AutoFilter","AutoPanner","AutoWah","BitCrusher","Chebyshev","Chorus","Distortion","FeedbackDelay","Freeverb","FrequencyShifter","JCReverb","Phaser","PingPongDelay","PitchShift","Reverb","StereoWidener","Tremolo","Vibrato"]}},computed:{id:function(){return this.$vnode.key.split("-")[1]}},methods:{addEffect:function(t){var n=Math.floor(16777215*Math.random()).toString(16).padStart(6,"0");this.$set(this.input.effects,n,t)},removeEffect:function(t){this.$delete(this.input.effects,t)}},watch:{input:{deep:!0,handler:function(){this.$emit("input",this.input)}}}},k=(e(30),Object(s.a)(w,c,[],!1,null,"74eb68cc",null));k.options.__file="src/Channel.vue";var j=k.exports,E=e(16),$=e(12),C=function(){var t=this.$createElement;return(this._self._c||t)("VueP5",{on:{setup:this.setup,draw:this.draw}})};C._withStripped=!0;var M=e(17),T={components:{VueP5:e.n(M).a},data:function(){return{mic:void 0,analyzer:void 0,fft:void 0,meter:void 0}},methods:{setup:function(t){t.createCanvas(550,100),this.analyzer=new Tone.Waveform(2048),this.fft=new Tone.FFT(1024),Tone.Destination.connect(this.analyzer),Tone.Destination.connect(this.fft),t.noFill()},draw:function(t){t.background(255);var n=this.analyzer.getValue(),e=this.fft.getValue();t.noStroke(),t.fill("rgba(0, 100, 255, 0.3)"),t.beginShape(),t.vertex(0,100);for(var r=0;r<e.length;r++)t.vertex(t.map(t.log(r),0,t.log(e.length),0,550),t.map(e[r],-127,0,100,0));t.vertex(550,100),t.endShape(),t.noFill(),t.stroke("rgba(0, 100, 255, 0.7)"),t.strokeWeight(1.5),t.beginShape();for(var i=0,o=0,a=0;a<n.length;a++)n[a]>0&&n[a-1]<=0&&0==i&&(i=1,o=a),1==i&&t.vertex(t.map(a-o,0,n.length,0,715),t.map(n[a],-1,1,100,0));if(0==i)for(a=0;a<n.length;a++)t.vertex(t.map(a,0,n.length,0,715),t.map(n[a],-1,1,100,0));t.endShape()}}},A=Object(s.a)(T,C,[],!1,null,null,null);A.options.__file="src/Oscilloscope.vue";var F=A.exports,I=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("input",{attrs:{type:"file",id:"file",multiple:""},on:{change:this.loadJson}}),this._v(" "),n("button",{on:{click:this.saveJson}},[this._v("\n    Save JSON\n  ")])])};I._withStripped=!0;var N={props:["value"],methods:{saveJson:function(){var t=JSON.stringify(this.value,null,2),n=new Blob([t],{type:"text/plain;charset=utf-8"});Object($.saveAs)(n,"scribbletune-playground-save.json")},loadJson:function(t){var n=this,e=new FileReader;e.onload=function(t){var e=JSON.parse(t.target.result);n.$emit("input",e)};for(var r=t.target.files,i=0;i<r.length;i++)e.readAsText(r[i])}}},J=Object(s.a)(N,I,[],!1,null,null,null);function D(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return B(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return B(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}J.options.__file="src/SaveLoadJson.vue";var z={components:{PlayPauseButton:l,Channel:j,Oscilloscope:F,SaveLoadJson:J.exports},data:function(){return{channels:{},toneInstruments:{},toneEffects:{},session:void 0}},computed:{channelsArray:{get:function(){return Object.values(this.channels)},set:function(t){t.map(this.addChannel)}},channelsInstrumentName:function(){return Object.values(this.channels).map((function(t){var n;return null==t||null===(n=t.instrument)||void 0===n?void 0:n.name}))},channelsInstrumentParams:function(){return Object.values(this.channels).map((function(t){var n;return null==t||null===(n=t.instrument)||void 0===n?void 0:n.params}))},channelsClips:function(){return Object.values(this.channels).map((function(t){return null==t?void 0:t.clips}))},channelsEffectName:function(){return Object.values(this.channels).map((function(t){return(null==t?void 0:t.effects)?Object.values(t.effects).map((function(t){return null==t?void 0:t.name})):void 0}))},channelsEffectParams:function(){return Object.values(this.channels).map((function(t){return(null==t?void 0:t.effects)?Object.values(t.effects).map((function(t){return null==t?void 0:t.params})):void 0}))}},methods:{tonePlayPause:function(t){t?Tone.Transport.start():Tone.Transport.stop()},addChannel:function(t){var n=Math.floor(16777215*Math.random()).toString(16).padStart(6,"0");this.$set(this.channels,n,t)},removeChannel:function(t){this.$delete(this.channels,t)},createSession:function(){var t=this;Tone.Transport.cancel(),this.session=new E.Session,this.toneInstruments={},this.toneEffects={},Object.entries(this.channels).forEach((function(n){var e,r=D(n,2),i=r[0],o=r[1];if((null==o||null===(e=o.instrument)||void 0===e?void 0:e.name)&&(null==o?void 0:o.clips)){t.toneInstruments[i]=new Tone.PolySynth(Tone[o.instrument.name]);var a=Object.entries(o.effects).map((function(n){var e=D(n,2),r=e[0],o=e[1];if(o){var a="".concat(i,"-").concat(r);return t.toneEffects[a]=new Tone[o.name],t.toneEffects[a]}})).filter((function(t){return t})),s={idx:i,instrument:t.toneInstruments[i],clips:o.clips};a.length&&(s.effects=a),t.session.createChannel(s)}}));this.session.startRow(0)},updateToneInstrumentsParams:function(){var t=this;Object.entries(this.channels).forEach((function(n){var e,r=D(n,2),i=r[0],o=r[1];(null==o||null===(e=o.instrument)||void 0===e?void 0:e.params)&&t.toneInstruments[i]&&t.toneInstruments[i].set(o.instrument.params)}))},updateToneEffectsParams:function(){var t=this;Object.entries(this.channels).forEach((function(n){var e=D(n,2),r=e[0],i=e[1];i&&Object.entries(i.effects).forEach((function(n){var e=D(n,2),i=e[0],o=e[1],a="".concat(r,"-").concat(i);(null==o?void 0:o.params)&&t.toneEffects[a]&&t.toneEffects[a].set(o.params)}))}))}},watch:{channels:function(){this.createSession()},channelsInstrumentName:function(){this.createSession()},channelsInstrumentParams:{deep:!0,handler:function(){this.updateToneInstrumentsParams()}},channelsEffectName:function(){this.createSession()},channelsEffectParams:{deep:!0,handler:function(){this.updateToneEffectsParams()}},channelsClips:{deep:!0,handler:function(){this.createSession()}}}},L=(e(33),Object(s.a)(z,i,[],!1,null,null,null));L.options.__file="src/App.vue";var V=L.exports;Tone.Master=Tone.Destination,new r.a({el:"#app",render:function(t){return t(V)}})}]);