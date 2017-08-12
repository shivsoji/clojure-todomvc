// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.connect.build_client');
goog.require('cljs.core');
goog.require('client.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__29917__delegate = function (x){
if(cljs.core.truth_(client.core.run)){
return cljs.core.apply.call(null,client.core.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'client.core/run' is missing");
}
};
var G__29917 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__29918__i = 0, G__29918__a = new Array(arguments.length -  0);
while (G__29918__i < G__29918__a.length) {G__29918__a[G__29918__i] = arguments[G__29918__i + 0]; ++G__29918__i;}
  x = new cljs.core.IndexedSeq(G__29918__a,0);
} 
return G__29917__delegate.call(this,x);};
G__29917.cljs$lang$maxFixedArity = 0;
G__29917.cljs$lang$applyTo = (function (arglist__29919){
var x = cljs.core.seq(arglist__29919);
return G__29917__delegate(x);
});
G__29917.cljs$core$IFn$_invoke$arity$variadic = G__29917__delegate;
return G__29917;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"client",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_client.js.map?rel=1502516165313