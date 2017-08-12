// Compiled by ClojureScript 1.9.521 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__28476__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28476 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28477__i = 0, G__28477__a = new Array(arguments.length -  0);
while (G__28477__i < G__28477__a.length) {G__28477__a[G__28477__i] = arguments[G__28477__i + 0]; ++G__28477__i;}
  args = new cljs.core.IndexedSeq(G__28477__a,0);
} 
return G__28476__delegate.call(this,args);};
G__28476.cljs$lang$maxFixedArity = 0;
G__28476.cljs$lang$applyTo = (function (arglist__28478){
var args = cljs.core.seq(arglist__28478);
return G__28476__delegate(args);
});
G__28476.cljs$core$IFn$_invoke$arity$variadic = G__28476__delegate;
return G__28476;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__28479__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__28479 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28480__i = 0, G__28480__a = new Array(arguments.length -  0);
while (G__28480__i < G__28480__a.length) {G__28480__a[G__28480__i] = arguments[G__28480__i + 0]; ++G__28480__i;}
  args = new cljs.core.IndexedSeq(G__28480__a,0);
} 
return G__28479__delegate.call(this,args);};
G__28479.cljs$lang$maxFixedArity = 0;
G__28479.cljs$lang$applyTo = (function (arglist__28481){
var args = cljs.core.seq(arglist__28481);
return G__28479__delegate(args);
});
G__28479.cljs$core$IFn$_invoke$arity$variadic = G__28479__delegate;
return G__28479;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502515423048