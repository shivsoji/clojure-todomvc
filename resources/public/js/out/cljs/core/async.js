// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args30249 = [];
var len__28321__auto___30255 = arguments.length;
var i__28322__auto___30256 = (0);
while(true){
if((i__28322__auto___30256 < len__28321__auto___30255)){
args30249.push((arguments[i__28322__auto___30256]));

var G__30257 = (i__28322__auto___30256 + (1));
i__28322__auto___30256 = G__30257;
continue;
} else {
}
break;
}

var G__30251 = args30249.length;
switch (G__30251) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30249.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30252 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30252 = (function (f,blockable,meta30253){
this.f = f;
this.blockable = blockable;
this.meta30253 = meta30253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30254,meta30253__$1){
var self__ = this;
var _30254__$1 = this;
return (new cljs.core.async.t_cljs$core$async30252(self__.f,self__.blockable,meta30253__$1));
});

cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30254){
var self__ = this;
var _30254__$1 = this;
return self__.meta30253;
});

cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30252.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30253","meta30253",1979080893,null)], null);
});

cljs.core.async.t_cljs$core$async30252.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30252";

cljs.core.async.t_cljs$core$async30252.cljs$lang$ctorPrWriter = (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async30252");
});

cljs.core.async.__GT_t_cljs$core$async30252 = (function cljs$core$async$__GT_t_cljs$core$async30252(f__$1,blockable__$1,meta30253){
return (new cljs.core.async.t_cljs$core$async30252(f__$1,blockable__$1,meta30253));
});

}

return (new cljs.core.async.t_cljs$core$async30252(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args30261 = [];
var len__28321__auto___30264 = arguments.length;
var i__28322__auto___30265 = (0);
while(true){
if((i__28322__auto___30265 < len__28321__auto___30264)){
args30261.push((arguments[i__28322__auto___30265]));

var G__30266 = (i__28322__auto___30265 + (1));
i__28322__auto___30265 = G__30266;
continue;
} else {
}
break;
}

var G__30263 = args30261.length;
switch (G__30263) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30261.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args30268 = [];
var len__28321__auto___30271 = arguments.length;
var i__28322__auto___30272 = (0);
while(true){
if((i__28322__auto___30272 < len__28321__auto___30271)){
args30268.push((arguments[i__28322__auto___30272]));

var G__30273 = (i__28322__auto___30272 + (1));
i__28322__auto___30272 = G__30273;
continue;
} else {
}
break;
}

var G__30270 = args30268.length;
switch (G__30270) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30268.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args30275 = [];
var len__28321__auto___30278 = arguments.length;
var i__28322__auto___30279 = (0);
while(true){
if((i__28322__auto___30279 < len__28321__auto___30278)){
args30275.push((arguments[i__28322__auto___30279]));

var G__30280 = (i__28322__auto___30279 + (1));
i__28322__auto___30279 = G__30280;
continue;
} else {
}
break;
}

var G__30277 = args30275.length;
switch (G__30277) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30275.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30282 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30282);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30282,ret){
return (function (){
return fn1.call(null,val_30282);
});})(val_30282,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args30283 = [];
var len__28321__auto___30286 = arguments.length;
var i__28322__auto___30287 = (0);
while(true){
if((i__28322__auto___30287 < len__28321__auto___30286)){
args30283.push((arguments[i__28322__auto___30287]));

var G__30288 = (i__28322__auto___30287 + (1));
i__28322__auto___30287 = G__30288;
continue;
} else {
}
break;
}

var G__30285 = args30283.length;
switch (G__30285) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30283.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28131__auto___30290 = n;
var x_30291 = (0);
while(true){
if((x_30291 < n__28131__auto___30290)){
(a[x_30291] = (0));

var G__30292 = (x_30291 + (1));
x_30291 = G__30292;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__30293 = (i + (1));
i = G__30293;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30297 = (function (flag,meta30298){
this.flag = flag;
this.meta30298 = meta30298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30299,meta30298__$1){
var self__ = this;
var _30299__$1 = this;
return (new cljs.core.async.t_cljs$core$async30297(self__.flag,meta30298__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30299){
var self__ = this;
var _30299__$1 = this;
return self__.meta30298;
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30298","meta30298",1805416211,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30297";

cljs.core.async.t_cljs$core$async30297.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async30297");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30297 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30297(flag__$1,meta30298){
return (new cljs.core.async.t_cljs$core$async30297(flag__$1,meta30298));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30297(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30303 = (function (flag,cb,meta30304){
this.flag = flag;
this.cb = cb;
this.meta30304 = meta30304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30305,meta30304__$1){
var self__ = this;
var _30305__$1 = this;
return (new cljs.core.async.t_cljs$core$async30303(self__.flag,self__.cb,meta30304__$1));
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30305){
var self__ = this;
var _30305__$1 = this;
return self__.meta30304;
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30304","meta30304",460770804,null)], null);
});

cljs.core.async.t_cljs$core$async30303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30303";

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorPrWriter = (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async30303");
});

cljs.core.async.__GT_t_cljs$core$async30303 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30303(flag__$1,cb__$1,meta30304){
return (new cljs.core.async.t_cljs$core$async30303(flag__$1,cb__$1,meta30304));
});

}

return (new cljs.core.async.t_cljs$core$async30303(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30306_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30306_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30307_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30307_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27208__auto__ = wport;
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30308 = (i + (1));
i = G__30308;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27208__auto__ = ret;
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27196__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27196__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27196__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__28328__auto__ = [];
var len__28321__auto___30314 = arguments.length;
var i__28322__auto___30315 = (0);
while(true){
if((i__28322__auto___30315 < len__28321__auto___30314)){
args__28328__auto__.push((arguments[i__28322__auto___30315]));

var G__30316 = (i__28322__auto___30315 + (1));
i__28322__auto___30315 = G__30316;
continue;
} else {
}
break;
}

var argseq__28329__auto__ = ((((1) < args__28328__auto__.length))?(new cljs.core.IndexedSeq(args__28328__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28329__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30311){
var map__30312 = p__30311;
var map__30312__$1 = ((((!((map__30312 == null)))?((((map__30312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30312.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30312):map__30312);
var opts = map__30312__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30309){
var G__30310 = cljs.core.first.call(null,seq30309);
var seq30309__$1 = cljs.core.next.call(null,seq30309);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30310,seq30309__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args30317 = [];
var len__28321__auto___30367 = arguments.length;
var i__28322__auto___30368 = (0);
while(true){
if((i__28322__auto___30368 < len__28321__auto___30367)){
args30317.push((arguments[i__28322__auto___30368]));

var G__30369 = (i__28322__auto___30368 + (1));
i__28322__auto___30368 = G__30369;
continue;
} else {
}
break;
}

var G__30319 = args30317.length;
switch (G__30319) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30317.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30204__auto___30371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___30371){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___30371){
return (function (state_30343){
var state_val_30344 = (state_30343[(1)]);
if((state_val_30344 === (7))){
var inst_30339 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30345_30372 = state_30343__$1;
(statearr_30345_30372[(2)] = inst_30339);

(statearr_30345_30372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (1))){
var state_30343__$1 = state_30343;
var statearr_30346_30373 = state_30343__$1;
(statearr_30346_30373[(2)] = null);

(statearr_30346_30373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (4))){
var inst_30322 = (state_30343[(7)]);
var inst_30322__$1 = (state_30343[(2)]);
var inst_30323 = (inst_30322__$1 == null);
var state_30343__$1 = (function (){var statearr_30347 = state_30343;
(statearr_30347[(7)] = inst_30322__$1);

return statearr_30347;
})();
if(cljs.core.truth_(inst_30323)){
var statearr_30348_30374 = state_30343__$1;
(statearr_30348_30374[(1)] = (5));

} else {
var statearr_30349_30375 = state_30343__$1;
(statearr_30349_30375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (13))){
var state_30343__$1 = state_30343;
var statearr_30350_30376 = state_30343__$1;
(statearr_30350_30376[(2)] = null);

(statearr_30350_30376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (6))){
var inst_30322 = (state_30343[(7)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30343__$1,(11),to,inst_30322);
} else {
if((state_val_30344 === (3))){
var inst_30341 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30343__$1,inst_30341);
} else {
if((state_val_30344 === (12))){
var state_30343__$1 = state_30343;
var statearr_30351_30377 = state_30343__$1;
(statearr_30351_30377[(2)] = null);

(statearr_30351_30377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (2))){
var state_30343__$1 = state_30343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30343__$1,(4),from);
} else {
if((state_val_30344 === (11))){
var inst_30332 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
if(cljs.core.truth_(inst_30332)){
var statearr_30352_30378 = state_30343__$1;
(statearr_30352_30378[(1)] = (12));

} else {
var statearr_30353_30379 = state_30343__$1;
(statearr_30353_30379[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (9))){
var state_30343__$1 = state_30343;
var statearr_30354_30380 = state_30343__$1;
(statearr_30354_30380[(2)] = null);

(statearr_30354_30380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (5))){
var state_30343__$1 = state_30343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30355_30381 = state_30343__$1;
(statearr_30355_30381[(1)] = (8));

} else {
var statearr_30356_30382 = state_30343__$1;
(statearr_30356_30382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (14))){
var inst_30337 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30357_30383 = state_30343__$1;
(statearr_30357_30383[(2)] = inst_30337);

(statearr_30357_30383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (10))){
var inst_30329 = (state_30343[(2)]);
var state_30343__$1 = state_30343;
var statearr_30358_30384 = state_30343__$1;
(statearr_30358_30384[(2)] = inst_30329);

(statearr_30358_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30344 === (8))){
var inst_30326 = cljs.core.async.close_BANG_.call(null,to);
var state_30343__$1 = state_30343;
var statearr_30359_30385 = state_30343__$1;
(statearr_30359_30385[(2)] = inst_30326);

(statearr_30359_30385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___30371))
;
return ((function (switch__30092__auto__,c__30204__auto___30371){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_30363 = [null,null,null,null,null,null,null,null];
(statearr_30363[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_30363[(1)] = (1));

return statearr_30363;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_30343){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30364){if((e30364 instanceof Object)){
var ex__30096__auto__ = e30364;
var statearr_30365_30386 = state_30343;
(statearr_30365_30386[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30387 = state_30343;
state_30343 = G__30387;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_30343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_30343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___30371))
})();
var state__30206__auto__ = (function (){var statearr_30366 = f__30205__auto__.call(null);
(statearr_30366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30371);

return statearr_30366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___30371))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30575){
var vec__30576 = p__30575;
var v = cljs.core.nth.call(null,vec__30576,(0),null);
var p = cljs.core.nth.call(null,vec__30576,(1),null);
var job = vec__30576;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30204__auto___30762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results){
return (function (state_30583){
var state_val_30584 = (state_30583[(1)]);
if((state_val_30584 === (1))){
var state_30583__$1 = state_30583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30583__$1,(2),res,v);
} else {
if((state_val_30584 === (2))){
var inst_30580 = (state_30583[(2)]);
var inst_30581 = cljs.core.async.close_BANG_.call(null,res);
var state_30583__$1 = (function (){var statearr_30585 = state_30583;
(statearr_30585[(7)] = inst_30580);

return statearr_30585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30583__$1,inst_30581);
} else {
return null;
}
}
});})(c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results))
;
return ((function (switch__30092__auto__,c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_30589 = [null,null,null,null,null,null,null,null];
(statearr_30589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__);

(statearr_30589[(1)] = (1));

return statearr_30589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1 = (function (state_30583){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30590){if((e30590 instanceof Object)){
var ex__30096__auto__ = e30590;
var statearr_30591_30763 = state_30583;
(statearr_30591_30763[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30764 = state_30583;
state_30583 = G__30764;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = function(state_30583){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1.call(this,state_30583);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results))
})();
var state__30206__auto__ = (function (){var statearr_30592 = f__30205__auto__.call(null);
(statearr_30592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30762);

return statearr_30592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___30762,res,vec__30576,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30593){
var vec__30594 = p__30593;
var v = cljs.core.nth.call(null,vec__30594,(0),null);
var p = cljs.core.nth.call(null,vec__30594,(1),null);
var job = vec__30594;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28131__auto___30765 = n;
var __30766 = (0);
while(true){
if((__30766 < n__28131__auto___30765)){
var G__30597_30767 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30597_30767) {
case "compute":
var c__30204__auto___30769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30766,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (__30766,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function (state_30610){
var state_val_30611 = (state_30610[(1)]);
if((state_val_30611 === (1))){
var state_30610__$1 = state_30610;
var statearr_30612_30770 = state_30610__$1;
(statearr_30612_30770[(2)] = null);

(statearr_30612_30770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (2))){
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30610__$1,(4),jobs);
} else {
if((state_val_30611 === (3))){
var inst_30608 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30610__$1,inst_30608);
} else {
if((state_val_30611 === (4))){
var inst_30600 = (state_30610[(2)]);
var inst_30601 = process.call(null,inst_30600);
var state_30610__$1 = state_30610;
if(cljs.core.truth_(inst_30601)){
var statearr_30613_30771 = state_30610__$1;
(statearr_30613_30771[(1)] = (5));

} else {
var statearr_30614_30772 = state_30610__$1;
(statearr_30614_30772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (5))){
var state_30610__$1 = state_30610;
var statearr_30615_30773 = state_30610__$1;
(statearr_30615_30773[(2)] = null);

(statearr_30615_30773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (6))){
var state_30610__$1 = state_30610;
var statearr_30616_30774 = state_30610__$1;
(statearr_30616_30774[(2)] = null);

(statearr_30616_30774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30611 === (7))){
var inst_30606 = (state_30610[(2)]);
var state_30610__$1 = state_30610;
var statearr_30617_30775 = state_30610__$1;
(statearr_30617_30775[(2)] = inst_30606);

(statearr_30617_30775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30766,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
;
return ((function (__30766,switch__30092__auto__,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_30621 = [null,null,null,null,null,null,null];
(statearr_30621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__);

(statearr_30621[(1)] = (1));

return statearr_30621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1 = (function (state_30610){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30622){if((e30622 instanceof Object)){
var ex__30096__auto__ = e30622;
var statearr_30623_30776 = state_30610;
(statearr_30623_30776[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30777 = state_30610;
state_30610 = G__30777;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = function(state_30610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1.call(this,state_30610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__;
})()
;})(__30766,switch__30092__auto__,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
})();
var state__30206__auto__ = (function (){var statearr_30624 = f__30205__auto__.call(null);
(statearr_30624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30769);

return statearr_30624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(__30766,c__30204__auto___30769,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
);


break;
case "async":
var c__30204__auto___30778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30766,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (__30766,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function (state_30637){
var state_val_30638 = (state_30637[(1)]);
if((state_val_30638 === (1))){
var state_30637__$1 = state_30637;
var statearr_30639_30779 = state_30637__$1;
(statearr_30639_30779[(2)] = null);

(statearr_30639_30779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (2))){
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30637__$1,(4),jobs);
} else {
if((state_val_30638 === (3))){
var inst_30635 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30637__$1,inst_30635);
} else {
if((state_val_30638 === (4))){
var inst_30627 = (state_30637[(2)]);
var inst_30628 = async.call(null,inst_30627);
var state_30637__$1 = state_30637;
if(cljs.core.truth_(inst_30628)){
var statearr_30640_30780 = state_30637__$1;
(statearr_30640_30780[(1)] = (5));

} else {
var statearr_30641_30781 = state_30637__$1;
(statearr_30641_30781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (5))){
var state_30637__$1 = state_30637;
var statearr_30642_30782 = state_30637__$1;
(statearr_30642_30782[(2)] = null);

(statearr_30642_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (6))){
var state_30637__$1 = state_30637;
var statearr_30643_30783 = state_30637__$1;
(statearr_30643_30783[(2)] = null);

(statearr_30643_30783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30638 === (7))){
var inst_30633 = (state_30637[(2)]);
var state_30637__$1 = state_30637;
var statearr_30644_30784 = state_30637__$1;
(statearr_30644_30784[(2)] = inst_30633);

(statearr_30644_30784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30766,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
;
return ((function (__30766,switch__30092__auto__,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_30648 = [null,null,null,null,null,null,null];
(statearr_30648[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__);

(statearr_30648[(1)] = (1));

return statearr_30648;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1 = (function (state_30637){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30649){if((e30649 instanceof Object)){
var ex__30096__auto__ = e30649;
var statearr_30650_30785 = state_30637;
(statearr_30650_30785[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30786 = state_30637;
state_30637 = G__30786;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = function(state_30637){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1.call(this,state_30637);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__;
})()
;})(__30766,switch__30092__auto__,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
})();
var state__30206__auto__ = (function (){var statearr_30651 = f__30205__auto__.call(null);
(statearr_30651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30778);

return statearr_30651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(__30766,c__30204__auto___30778,G__30597_30767,n__28131__auto___30765,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30787 = (__30766 + (1));
__30766 = G__30787;
continue;
} else {
}
break;
}

var c__30204__auto___30788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___30788,jobs,results,process,async){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___30788,jobs,results,process,async){
return (function (state_30673){
var state_val_30674 = (state_30673[(1)]);
if((state_val_30674 === (1))){
var state_30673__$1 = state_30673;
var statearr_30675_30789 = state_30673__$1;
(statearr_30675_30789[(2)] = null);

(statearr_30675_30789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (2))){
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30673__$1,(4),from);
} else {
if((state_val_30674 === (3))){
var inst_30671 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30673__$1,inst_30671);
} else {
if((state_val_30674 === (4))){
var inst_30654 = (state_30673[(7)]);
var inst_30654__$1 = (state_30673[(2)]);
var inst_30655 = (inst_30654__$1 == null);
var state_30673__$1 = (function (){var statearr_30676 = state_30673;
(statearr_30676[(7)] = inst_30654__$1);

return statearr_30676;
})();
if(cljs.core.truth_(inst_30655)){
var statearr_30677_30790 = state_30673__$1;
(statearr_30677_30790[(1)] = (5));

} else {
var statearr_30678_30791 = state_30673__$1;
(statearr_30678_30791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (5))){
var inst_30657 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30673__$1 = state_30673;
var statearr_30679_30792 = state_30673__$1;
(statearr_30679_30792[(2)] = inst_30657);

(statearr_30679_30792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (6))){
var inst_30659 = (state_30673[(8)]);
var inst_30654 = (state_30673[(7)]);
var inst_30659__$1 = cljs.core.async.chan.call(null,(1));
var inst_30660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30661 = [inst_30654,inst_30659__$1];
var inst_30662 = (new cljs.core.PersistentVector(null,2,(5),inst_30660,inst_30661,null));
var state_30673__$1 = (function (){var statearr_30680 = state_30673;
(statearr_30680[(8)] = inst_30659__$1);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30673__$1,(8),jobs,inst_30662);
} else {
if((state_val_30674 === (7))){
var inst_30669 = (state_30673[(2)]);
var state_30673__$1 = state_30673;
var statearr_30681_30793 = state_30673__$1;
(statearr_30681_30793[(2)] = inst_30669);

(statearr_30681_30793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30674 === (8))){
var inst_30659 = (state_30673[(8)]);
var inst_30664 = (state_30673[(2)]);
var state_30673__$1 = (function (){var statearr_30682 = state_30673;
(statearr_30682[(9)] = inst_30664);

return statearr_30682;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30673__$1,(9),results,inst_30659);
} else {
if((state_val_30674 === (9))){
var inst_30666 = (state_30673[(2)]);
var state_30673__$1 = (function (){var statearr_30683 = state_30673;
(statearr_30683[(10)] = inst_30666);

return statearr_30683;
})();
var statearr_30684_30794 = state_30673__$1;
(statearr_30684_30794[(2)] = null);

(statearr_30684_30794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___30788,jobs,results,process,async))
;
return ((function (switch__30092__auto__,c__30204__auto___30788,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_30688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__);

(statearr_30688[(1)] = (1));

return statearr_30688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1 = (function (state_30673){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30689){if((e30689 instanceof Object)){
var ex__30096__auto__ = e30689;
var statearr_30690_30795 = state_30673;
(statearr_30690_30795[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30796 = state_30673;
state_30673 = G__30796;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = function(state_30673){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1.call(this,state_30673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___30788,jobs,results,process,async))
})();
var state__30206__auto__ = (function (){var statearr_30691 = f__30205__auto__.call(null);
(statearr_30691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30788);

return statearr_30691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___30788,jobs,results,process,async))
);


var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__,jobs,results,process,async){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__,jobs,results,process,async){
return (function (state_30729){
var state_val_30730 = (state_30729[(1)]);
if((state_val_30730 === (7))){
var inst_30725 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30731_30797 = state_30729__$1;
(statearr_30731_30797[(2)] = inst_30725);

(statearr_30731_30797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (20))){
var state_30729__$1 = state_30729;
var statearr_30732_30798 = state_30729__$1;
(statearr_30732_30798[(2)] = null);

(statearr_30732_30798[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (1))){
var state_30729__$1 = state_30729;
var statearr_30733_30799 = state_30729__$1;
(statearr_30733_30799[(2)] = null);

(statearr_30733_30799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (4))){
var inst_30694 = (state_30729[(7)]);
var inst_30694__$1 = (state_30729[(2)]);
var inst_30695 = (inst_30694__$1 == null);
var state_30729__$1 = (function (){var statearr_30734 = state_30729;
(statearr_30734[(7)] = inst_30694__$1);

return statearr_30734;
})();
if(cljs.core.truth_(inst_30695)){
var statearr_30735_30800 = state_30729__$1;
(statearr_30735_30800[(1)] = (5));

} else {
var statearr_30736_30801 = state_30729__$1;
(statearr_30736_30801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (15))){
var inst_30707 = (state_30729[(8)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30729__$1,(18),to,inst_30707);
} else {
if((state_val_30730 === (21))){
var inst_30720 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30737_30802 = state_30729__$1;
(statearr_30737_30802[(2)] = inst_30720);

(statearr_30737_30802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (13))){
var inst_30722 = (state_30729[(2)]);
var state_30729__$1 = (function (){var statearr_30738 = state_30729;
(statearr_30738[(9)] = inst_30722);

return statearr_30738;
})();
var statearr_30739_30803 = state_30729__$1;
(statearr_30739_30803[(2)] = null);

(statearr_30739_30803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (6))){
var inst_30694 = (state_30729[(7)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(11),inst_30694);
} else {
if((state_val_30730 === (17))){
var inst_30715 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
if(cljs.core.truth_(inst_30715)){
var statearr_30740_30804 = state_30729__$1;
(statearr_30740_30804[(1)] = (19));

} else {
var statearr_30741_30805 = state_30729__$1;
(statearr_30741_30805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (3))){
var inst_30727 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30729__$1,inst_30727);
} else {
if((state_val_30730 === (12))){
var inst_30704 = (state_30729[(10)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(14),inst_30704);
} else {
if((state_val_30730 === (2))){
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(4),results);
} else {
if((state_val_30730 === (19))){
var state_30729__$1 = state_30729;
var statearr_30742_30806 = state_30729__$1;
(statearr_30742_30806[(2)] = null);

(statearr_30742_30806[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (11))){
var inst_30704 = (state_30729[(2)]);
var state_30729__$1 = (function (){var statearr_30743 = state_30729;
(statearr_30743[(10)] = inst_30704);

return statearr_30743;
})();
var statearr_30744_30807 = state_30729__$1;
(statearr_30744_30807[(2)] = null);

(statearr_30744_30807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (9))){
var state_30729__$1 = state_30729;
var statearr_30745_30808 = state_30729__$1;
(statearr_30745_30808[(2)] = null);

(statearr_30745_30808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (5))){
var state_30729__$1 = state_30729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30746_30809 = state_30729__$1;
(statearr_30746_30809[(1)] = (8));

} else {
var statearr_30747_30810 = state_30729__$1;
(statearr_30747_30810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (14))){
var inst_30707 = (state_30729[(8)]);
var inst_30709 = (state_30729[(11)]);
var inst_30707__$1 = (state_30729[(2)]);
var inst_30708 = (inst_30707__$1 == null);
var inst_30709__$1 = cljs.core.not.call(null,inst_30708);
var state_30729__$1 = (function (){var statearr_30748 = state_30729;
(statearr_30748[(8)] = inst_30707__$1);

(statearr_30748[(11)] = inst_30709__$1);

return statearr_30748;
})();
if(inst_30709__$1){
var statearr_30749_30811 = state_30729__$1;
(statearr_30749_30811[(1)] = (15));

} else {
var statearr_30750_30812 = state_30729__$1;
(statearr_30750_30812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (16))){
var inst_30709 = (state_30729[(11)]);
var state_30729__$1 = state_30729;
var statearr_30751_30813 = state_30729__$1;
(statearr_30751_30813[(2)] = inst_30709);

(statearr_30751_30813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (10))){
var inst_30701 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30752_30814 = state_30729__$1;
(statearr_30752_30814[(2)] = inst_30701);

(statearr_30752_30814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (18))){
var inst_30712 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30753_30815 = state_30729__$1;
(statearr_30753_30815[(2)] = inst_30712);

(statearr_30753_30815[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (8))){
var inst_30698 = cljs.core.async.close_BANG_.call(null,to);
var state_30729__$1 = state_30729;
var statearr_30754_30816 = state_30729__$1;
(statearr_30754_30816[(2)] = inst_30698);

(statearr_30754_30816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto__,jobs,results,process,async))
;
return ((function (switch__30092__auto__,c__30204__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_30758 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30758[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__);

(statearr_30758[(1)] = (1));

return statearr_30758;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1 = (function (state_30729){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30759){if((e30759 instanceof Object)){
var ex__30096__auto__ = e30759;
var statearr_30760_30817 = state_30729;
(statearr_30760_30817[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30818 = state_30729;
state_30729 = G__30818;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__ = function(state_30729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1.call(this,state_30729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__,jobs,results,process,async))
})();
var state__30206__auto__ = (function (){var statearr_30761 = f__30205__auto__.call(null);
(statearr_30761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_30761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__,jobs,results,process,async))
);

return c__30204__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30819 = [];
var len__28321__auto___30822 = arguments.length;
var i__28322__auto___30823 = (0);
while(true){
if((i__28322__auto___30823 < len__28321__auto___30822)){
args30819.push((arguments[i__28322__auto___30823]));

var G__30824 = (i__28322__auto___30823 + (1));
i__28322__auto___30823 = G__30824;
continue;
} else {
}
break;
}

var G__30821 = args30819.length;
switch (G__30821) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30819.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30826 = [];
var len__28321__auto___30829 = arguments.length;
var i__28322__auto___30830 = (0);
while(true){
if((i__28322__auto___30830 < len__28321__auto___30829)){
args30826.push((arguments[i__28322__auto___30830]));

var G__30831 = (i__28322__auto___30830 + (1));
i__28322__auto___30830 = G__30831;
continue;
} else {
}
break;
}

var G__30828 = args30826.length;
switch (G__30828) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30826.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30833 = [];
var len__28321__auto___30886 = arguments.length;
var i__28322__auto___30887 = (0);
while(true){
if((i__28322__auto___30887 < len__28321__auto___30886)){
args30833.push((arguments[i__28322__auto___30887]));

var G__30888 = (i__28322__auto___30887 + (1));
i__28322__auto___30887 = G__30888;
continue;
} else {
}
break;
}

var G__30835 = args30833.length;
switch (G__30835) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30833.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30204__auto___30890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___30890,tc,fc){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___30890,tc,fc){
return (function (state_30861){
var state_val_30862 = (state_30861[(1)]);
if((state_val_30862 === (7))){
var inst_30857 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30863_30891 = state_30861__$1;
(statearr_30863_30891[(2)] = inst_30857);

(statearr_30863_30891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (1))){
var state_30861__$1 = state_30861;
var statearr_30864_30892 = state_30861__$1;
(statearr_30864_30892[(2)] = null);

(statearr_30864_30892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (4))){
var inst_30838 = (state_30861[(7)]);
var inst_30838__$1 = (state_30861[(2)]);
var inst_30839 = (inst_30838__$1 == null);
var state_30861__$1 = (function (){var statearr_30865 = state_30861;
(statearr_30865[(7)] = inst_30838__$1);

return statearr_30865;
})();
if(cljs.core.truth_(inst_30839)){
var statearr_30866_30893 = state_30861__$1;
(statearr_30866_30893[(1)] = (5));

} else {
var statearr_30867_30894 = state_30861__$1;
(statearr_30867_30894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (13))){
var state_30861__$1 = state_30861;
var statearr_30868_30895 = state_30861__$1;
(statearr_30868_30895[(2)] = null);

(statearr_30868_30895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (6))){
var inst_30838 = (state_30861[(7)]);
var inst_30844 = p.call(null,inst_30838);
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30844)){
var statearr_30869_30896 = state_30861__$1;
(statearr_30869_30896[(1)] = (9));

} else {
var statearr_30870_30897 = state_30861__$1;
(statearr_30870_30897[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (3))){
var inst_30859 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30861__$1,inst_30859);
} else {
if((state_val_30862 === (12))){
var state_30861__$1 = state_30861;
var statearr_30871_30898 = state_30861__$1;
(statearr_30871_30898[(2)] = null);

(statearr_30871_30898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (2))){
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30861__$1,(4),ch);
} else {
if((state_val_30862 === (11))){
var inst_30838 = (state_30861[(7)]);
var inst_30848 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30861__$1,(8),inst_30848,inst_30838);
} else {
if((state_val_30862 === (9))){
var state_30861__$1 = state_30861;
var statearr_30872_30899 = state_30861__$1;
(statearr_30872_30899[(2)] = tc);

(statearr_30872_30899[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (5))){
var inst_30841 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30842 = cljs.core.async.close_BANG_.call(null,fc);
var state_30861__$1 = (function (){var statearr_30873 = state_30861;
(statearr_30873[(8)] = inst_30841);

return statearr_30873;
})();
var statearr_30874_30900 = state_30861__$1;
(statearr_30874_30900[(2)] = inst_30842);

(statearr_30874_30900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (14))){
var inst_30855 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
var statearr_30875_30901 = state_30861__$1;
(statearr_30875_30901[(2)] = inst_30855);

(statearr_30875_30901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (10))){
var state_30861__$1 = state_30861;
var statearr_30876_30902 = state_30861__$1;
(statearr_30876_30902[(2)] = fc);

(statearr_30876_30902[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30862 === (8))){
var inst_30850 = (state_30861[(2)]);
var state_30861__$1 = state_30861;
if(cljs.core.truth_(inst_30850)){
var statearr_30877_30903 = state_30861__$1;
(statearr_30877_30903[(1)] = (12));

} else {
var statearr_30878_30904 = state_30861__$1;
(statearr_30878_30904[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___30890,tc,fc))
;
return ((function (switch__30092__auto__,c__30204__auto___30890,tc,fc){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_30882 = [null,null,null,null,null,null,null,null,null];
(statearr_30882[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_30882[(1)] = (1));

return statearr_30882;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_30861){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30883){if((e30883 instanceof Object)){
var ex__30096__auto__ = e30883;
var statearr_30884_30905 = state_30861;
(statearr_30884_30905[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30906 = state_30861;
state_30861 = G__30906;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_30861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_30861);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___30890,tc,fc))
})();
var state__30206__auto__ = (function (){var statearr_30885 = f__30205__auto__.call(null);
(statearr_30885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___30890);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___30890,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__){
return (function (state_30970){
var state_val_30971 = (state_30970[(1)]);
if((state_val_30971 === (7))){
var inst_30966 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30972_30993 = state_30970__$1;
(statearr_30972_30993[(2)] = inst_30966);

(statearr_30972_30993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (1))){
var inst_30950 = init;
var state_30970__$1 = (function (){var statearr_30973 = state_30970;
(statearr_30973[(7)] = inst_30950);

return statearr_30973;
})();
var statearr_30974_30994 = state_30970__$1;
(statearr_30974_30994[(2)] = null);

(statearr_30974_30994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (4))){
var inst_30953 = (state_30970[(8)]);
var inst_30953__$1 = (state_30970[(2)]);
var inst_30954 = (inst_30953__$1 == null);
var state_30970__$1 = (function (){var statearr_30975 = state_30970;
(statearr_30975[(8)] = inst_30953__$1);

return statearr_30975;
})();
if(cljs.core.truth_(inst_30954)){
var statearr_30976_30995 = state_30970__$1;
(statearr_30976_30995[(1)] = (5));

} else {
var statearr_30977_30996 = state_30970__$1;
(statearr_30977_30996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (6))){
var inst_30950 = (state_30970[(7)]);
var inst_30957 = (state_30970[(9)]);
var inst_30953 = (state_30970[(8)]);
var inst_30957__$1 = f.call(null,inst_30950,inst_30953);
var inst_30958 = cljs.core.reduced_QMARK_.call(null,inst_30957__$1);
var state_30970__$1 = (function (){var statearr_30978 = state_30970;
(statearr_30978[(9)] = inst_30957__$1);

return statearr_30978;
})();
if(inst_30958){
var statearr_30979_30997 = state_30970__$1;
(statearr_30979_30997[(1)] = (8));

} else {
var statearr_30980_30998 = state_30970__$1;
(statearr_30980_30998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (3))){
var inst_30968 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30970__$1,inst_30968);
} else {
if((state_val_30971 === (2))){
var state_30970__$1 = state_30970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30970__$1,(4),ch);
} else {
if((state_val_30971 === (9))){
var inst_30957 = (state_30970[(9)]);
var inst_30950 = inst_30957;
var state_30970__$1 = (function (){var statearr_30981 = state_30970;
(statearr_30981[(7)] = inst_30950);

return statearr_30981;
})();
var statearr_30982_30999 = state_30970__$1;
(statearr_30982_30999[(2)] = null);

(statearr_30982_30999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (5))){
var inst_30950 = (state_30970[(7)]);
var state_30970__$1 = state_30970;
var statearr_30983_31000 = state_30970__$1;
(statearr_30983_31000[(2)] = inst_30950);

(statearr_30983_31000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (10))){
var inst_30964 = (state_30970[(2)]);
var state_30970__$1 = state_30970;
var statearr_30984_31001 = state_30970__$1;
(statearr_30984_31001[(2)] = inst_30964);

(statearr_30984_31001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30971 === (8))){
var inst_30957 = (state_30970[(9)]);
var inst_30960 = cljs.core.deref.call(null,inst_30957);
var state_30970__$1 = state_30970;
var statearr_30985_31002 = state_30970__$1;
(statearr_30985_31002[(2)] = inst_30960);

(statearr_30985_31002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30093__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30093__auto____0 = (function (){
var statearr_30989 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30989[(0)] = cljs$core$async$reduce_$_state_machine__30093__auto__);

(statearr_30989[(1)] = (1));

return statearr_30989;
});
var cljs$core$async$reduce_$_state_machine__30093__auto____1 = (function (state_30970){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_30970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e30990){if((e30990 instanceof Object)){
var ex__30096__auto__ = e30990;
var statearr_30991_31003 = state_30970;
(statearr_30991_31003[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31004 = state_30970;
state_30970 = G__31004;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30093__auto__ = function(state_30970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30093__auto____1.call(this,state_30970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30093__auto____0;
cljs$core$async$reduce_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30093__auto____1;
return cljs$core$async$reduce_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__))
})();
var state__30206__auto__ = (function (){var statearr_30992 = f__30205__auto__.call(null);
(statearr_30992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__))
);

return c__30204__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__,f__$1){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__,f__$1){
return (function (state_31024){
var state_val_31025 = (state_31024[(1)]);
if((state_val_31025 === (1))){
var inst_31019 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31024__$1,(2),inst_31019);
} else {
if((state_val_31025 === (2))){
var inst_31021 = (state_31024[(2)]);
var inst_31022 = f__$1.call(null,inst_31021);
var state_31024__$1 = state_31024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31024__$1,inst_31022);
} else {
return null;
}
}
});})(c__30204__auto__,f__$1))
;
return ((function (switch__30092__auto__,c__30204__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30093__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30093__auto____0 = (function (){
var statearr_31029 = [null,null,null,null,null,null,null];
(statearr_31029[(0)] = cljs$core$async$transduce_$_state_machine__30093__auto__);

(statearr_31029[(1)] = (1));

return statearr_31029;
});
var cljs$core$async$transduce_$_state_machine__30093__auto____1 = (function (state_31024){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_31024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e31030){if((e31030 instanceof Object)){
var ex__30096__auto__ = e31030;
var statearr_31031_31033 = state_31024;
(statearr_31031_31033[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31034 = state_31024;
state_31024 = G__31034;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30093__auto__ = function(state_31024){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30093__auto____1.call(this,state_31024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30093__auto____0;
cljs$core$async$transduce_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30093__auto____1;
return cljs$core$async$transduce_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__,f__$1))
})();
var state__30206__auto__ = (function (){var statearr_31032 = f__30205__auto__.call(null);
(statearr_31032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__,f__$1))
);

return c__30204__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args31035 = [];
var len__28321__auto___31087 = arguments.length;
var i__28322__auto___31088 = (0);
while(true){
if((i__28322__auto___31088 < len__28321__auto___31087)){
args31035.push((arguments[i__28322__auto___31088]));

var G__31089 = (i__28322__auto___31088 + (1));
i__28322__auto___31088 = G__31089;
continue;
} else {
}
break;
}

var G__31037 = args31035.length;
switch (G__31037) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31035.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__){
return (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (7))){
var inst_31044 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31064_31091 = state_31062__$1;
(statearr_31064_31091[(2)] = inst_31044);

(statearr_31064_31091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (1))){
var inst_31038 = cljs.core.seq.call(null,coll);
var inst_31039 = inst_31038;
var state_31062__$1 = (function (){var statearr_31065 = state_31062;
(statearr_31065[(7)] = inst_31039);

return statearr_31065;
})();
var statearr_31066_31092 = state_31062__$1;
(statearr_31066_31092[(2)] = null);

(statearr_31066_31092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (4))){
var inst_31039 = (state_31062[(7)]);
var inst_31042 = cljs.core.first.call(null,inst_31039);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31062__$1,(7),ch,inst_31042);
} else {
if((state_val_31063 === (13))){
var inst_31056 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31067_31093 = state_31062__$1;
(statearr_31067_31093[(2)] = inst_31056);

(statearr_31067_31093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var inst_31047 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31047)){
var statearr_31068_31094 = state_31062__$1;
(statearr_31068_31094[(1)] = (8));

} else {
var statearr_31069_31095 = state_31062__$1;
(statearr_31069_31095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (3))){
var inst_31060 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (12))){
var state_31062__$1 = state_31062;
var statearr_31070_31096 = state_31062__$1;
(statearr_31070_31096[(2)] = null);

(statearr_31070_31096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (2))){
var inst_31039 = (state_31062[(7)]);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31039)){
var statearr_31071_31097 = state_31062__$1;
(statearr_31071_31097[(1)] = (4));

} else {
var statearr_31072_31098 = state_31062__$1;
(statearr_31072_31098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (11))){
var inst_31053 = cljs.core.async.close_BANG_.call(null,ch);
var state_31062__$1 = state_31062;
var statearr_31073_31099 = state_31062__$1;
(statearr_31073_31099[(2)] = inst_31053);

(statearr_31073_31099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (9))){
var state_31062__$1 = state_31062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31074_31100 = state_31062__$1;
(statearr_31074_31100[(1)] = (11));

} else {
var statearr_31075_31101 = state_31062__$1;
(statearr_31075_31101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var inst_31039 = (state_31062[(7)]);
var state_31062__$1 = state_31062;
var statearr_31076_31102 = state_31062__$1;
(statearr_31076_31102[(2)] = inst_31039);

(statearr_31076_31102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (10))){
var inst_31058 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31077_31103 = state_31062__$1;
(statearr_31077_31103[(2)] = inst_31058);

(statearr_31077_31103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (8))){
var inst_31039 = (state_31062[(7)]);
var inst_31049 = cljs.core.next.call(null,inst_31039);
var inst_31039__$1 = inst_31049;
var state_31062__$1 = (function (){var statearr_31078 = state_31062;
(statearr_31078[(7)] = inst_31039__$1);

return statearr_31078;
})();
var statearr_31079_31104 = state_31062__$1;
(statearr_31079_31104[(2)] = null);

(statearr_31079_31104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_31083 = [null,null,null,null,null,null,null,null];
(statearr_31083[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_31083[(1)] = (1));

return statearr_31083;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_31062){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_31062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e31084){if((e31084 instanceof Object)){
var ex__30096__auto__ = e31084;
var statearr_31085_31105 = state_31062;
(statearr_31085_31105[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31106 = state_31062;
state_31062 = G__31106;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__))
})();
var state__30206__auto__ = (function (){var statearr_31086 = f__30205__auto__.call(null);
(statearr_31086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_31086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__))
);

return c__30204__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27876__auto__ = (((_ == null))?null:_);
var m__27877__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,_);
} else {
var m__27877__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27877__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,ch);
} else {
var m__27877__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m);
} else {
var m__27877__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31332 = (function (ch,cs,meta31333){
this.ch = ch;
this.cs = cs;
this.meta31333 = meta31333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31334,meta31333__$1){
var self__ = this;
var _31334__$1 = this;
return (new cljs.core.async.t_cljs$core$async31332(self__.ch,self__.cs,meta31333__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31334){
var self__ = this;
var _31334__$1 = this;
return self__.meta31333;
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31333","meta31333",915695692,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31332";

cljs.core.async.t_cljs$core$async31332.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async31332");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31332 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31332(ch__$1,cs__$1,meta31333){
return (new cljs.core.async.t_cljs$core$async31332(ch__$1,cs__$1,meta31333));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31332(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30204__auto___31557 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___31557,cs,m,dchan,dctr,done){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___31557,cs,m,dchan,dctr,done){
return (function (state_31469){
var state_val_31470 = (state_31469[(1)]);
if((state_val_31470 === (7))){
var inst_31465 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31471_31558 = state_31469__$1;
(statearr_31471_31558[(2)] = inst_31465);

(statearr_31471_31558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (20))){
var inst_31368 = (state_31469[(7)]);
var inst_31380 = cljs.core.first.call(null,inst_31368);
var inst_31381 = cljs.core.nth.call(null,inst_31380,(0),null);
var inst_31382 = cljs.core.nth.call(null,inst_31380,(1),null);
var state_31469__$1 = (function (){var statearr_31472 = state_31469;
(statearr_31472[(8)] = inst_31381);

return statearr_31472;
})();
if(cljs.core.truth_(inst_31382)){
var statearr_31473_31559 = state_31469__$1;
(statearr_31473_31559[(1)] = (22));

} else {
var statearr_31474_31560 = state_31469__$1;
(statearr_31474_31560[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (27))){
var inst_31410 = (state_31469[(9)]);
var inst_31417 = (state_31469[(10)]);
var inst_31337 = (state_31469[(11)]);
var inst_31412 = (state_31469[(12)]);
var inst_31417__$1 = cljs.core._nth.call(null,inst_31410,inst_31412);
var inst_31418 = cljs.core.async.put_BANG_.call(null,inst_31417__$1,inst_31337,done);
var state_31469__$1 = (function (){var statearr_31475 = state_31469;
(statearr_31475[(10)] = inst_31417__$1);

return statearr_31475;
})();
if(cljs.core.truth_(inst_31418)){
var statearr_31476_31561 = state_31469__$1;
(statearr_31476_31561[(1)] = (30));

} else {
var statearr_31477_31562 = state_31469__$1;
(statearr_31477_31562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (1))){
var state_31469__$1 = state_31469;
var statearr_31478_31563 = state_31469__$1;
(statearr_31478_31563[(2)] = null);

(statearr_31478_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (24))){
var inst_31368 = (state_31469[(7)]);
var inst_31387 = (state_31469[(2)]);
var inst_31388 = cljs.core.next.call(null,inst_31368);
var inst_31346 = inst_31388;
var inst_31347 = null;
var inst_31348 = (0);
var inst_31349 = (0);
var state_31469__$1 = (function (){var statearr_31479 = state_31469;
(statearr_31479[(13)] = inst_31387);

(statearr_31479[(14)] = inst_31347);

(statearr_31479[(15)] = inst_31348);

(statearr_31479[(16)] = inst_31349);

(statearr_31479[(17)] = inst_31346);

return statearr_31479;
})();
var statearr_31480_31564 = state_31469__$1;
(statearr_31480_31564[(2)] = null);

(statearr_31480_31564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (39))){
var state_31469__$1 = state_31469;
var statearr_31484_31565 = state_31469__$1;
(statearr_31484_31565[(2)] = null);

(statearr_31484_31565[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (4))){
var inst_31337 = (state_31469[(11)]);
var inst_31337__$1 = (state_31469[(2)]);
var inst_31338 = (inst_31337__$1 == null);
var state_31469__$1 = (function (){var statearr_31485 = state_31469;
(statearr_31485[(11)] = inst_31337__$1);

return statearr_31485;
})();
if(cljs.core.truth_(inst_31338)){
var statearr_31486_31566 = state_31469__$1;
(statearr_31486_31566[(1)] = (5));

} else {
var statearr_31487_31567 = state_31469__$1;
(statearr_31487_31567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (15))){
var inst_31347 = (state_31469[(14)]);
var inst_31348 = (state_31469[(15)]);
var inst_31349 = (state_31469[(16)]);
var inst_31346 = (state_31469[(17)]);
var inst_31364 = (state_31469[(2)]);
var inst_31365 = (inst_31349 + (1));
var tmp31481 = inst_31347;
var tmp31482 = inst_31348;
var tmp31483 = inst_31346;
var inst_31346__$1 = tmp31483;
var inst_31347__$1 = tmp31481;
var inst_31348__$1 = tmp31482;
var inst_31349__$1 = inst_31365;
var state_31469__$1 = (function (){var statearr_31488 = state_31469;
(statearr_31488[(14)] = inst_31347__$1);

(statearr_31488[(15)] = inst_31348__$1);

(statearr_31488[(18)] = inst_31364);

(statearr_31488[(16)] = inst_31349__$1);

(statearr_31488[(17)] = inst_31346__$1);

return statearr_31488;
})();
var statearr_31489_31568 = state_31469__$1;
(statearr_31489_31568[(2)] = null);

(statearr_31489_31568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (21))){
var inst_31391 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31493_31569 = state_31469__$1;
(statearr_31493_31569[(2)] = inst_31391);

(statearr_31493_31569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (31))){
var inst_31417 = (state_31469[(10)]);
var inst_31421 = done.call(null,null);
var inst_31422 = cljs.core.async.untap_STAR_.call(null,m,inst_31417);
var state_31469__$1 = (function (){var statearr_31494 = state_31469;
(statearr_31494[(19)] = inst_31421);

return statearr_31494;
})();
var statearr_31495_31570 = state_31469__$1;
(statearr_31495_31570[(2)] = inst_31422);

(statearr_31495_31570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (32))){
var inst_31409 = (state_31469[(20)]);
var inst_31410 = (state_31469[(9)]);
var inst_31412 = (state_31469[(12)]);
var inst_31411 = (state_31469[(21)]);
var inst_31424 = (state_31469[(2)]);
var inst_31425 = (inst_31412 + (1));
var tmp31490 = inst_31409;
var tmp31491 = inst_31410;
var tmp31492 = inst_31411;
var inst_31409__$1 = tmp31490;
var inst_31410__$1 = tmp31491;
var inst_31411__$1 = tmp31492;
var inst_31412__$1 = inst_31425;
var state_31469__$1 = (function (){var statearr_31496 = state_31469;
(statearr_31496[(20)] = inst_31409__$1);

(statearr_31496[(22)] = inst_31424);

(statearr_31496[(9)] = inst_31410__$1);

(statearr_31496[(12)] = inst_31412__$1);

(statearr_31496[(21)] = inst_31411__$1);

return statearr_31496;
})();
var statearr_31497_31571 = state_31469__$1;
(statearr_31497_31571[(2)] = null);

(statearr_31497_31571[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (40))){
var inst_31437 = (state_31469[(23)]);
var inst_31441 = done.call(null,null);
var inst_31442 = cljs.core.async.untap_STAR_.call(null,m,inst_31437);
var state_31469__$1 = (function (){var statearr_31498 = state_31469;
(statearr_31498[(24)] = inst_31441);

return statearr_31498;
})();
var statearr_31499_31572 = state_31469__$1;
(statearr_31499_31572[(2)] = inst_31442);

(statearr_31499_31572[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (33))){
var inst_31428 = (state_31469[(25)]);
var inst_31430 = cljs.core.chunked_seq_QMARK_.call(null,inst_31428);
var state_31469__$1 = state_31469;
if(inst_31430){
var statearr_31500_31573 = state_31469__$1;
(statearr_31500_31573[(1)] = (36));

} else {
var statearr_31501_31574 = state_31469__$1;
(statearr_31501_31574[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (13))){
var inst_31358 = (state_31469[(26)]);
var inst_31361 = cljs.core.async.close_BANG_.call(null,inst_31358);
var state_31469__$1 = state_31469;
var statearr_31502_31575 = state_31469__$1;
(statearr_31502_31575[(2)] = inst_31361);

(statearr_31502_31575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (22))){
var inst_31381 = (state_31469[(8)]);
var inst_31384 = cljs.core.async.close_BANG_.call(null,inst_31381);
var state_31469__$1 = state_31469;
var statearr_31503_31576 = state_31469__$1;
(statearr_31503_31576[(2)] = inst_31384);

(statearr_31503_31576[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (36))){
var inst_31428 = (state_31469[(25)]);
var inst_31432 = cljs.core.chunk_first.call(null,inst_31428);
var inst_31433 = cljs.core.chunk_rest.call(null,inst_31428);
var inst_31434 = cljs.core.count.call(null,inst_31432);
var inst_31409 = inst_31433;
var inst_31410 = inst_31432;
var inst_31411 = inst_31434;
var inst_31412 = (0);
var state_31469__$1 = (function (){var statearr_31504 = state_31469;
(statearr_31504[(20)] = inst_31409);

(statearr_31504[(9)] = inst_31410);

(statearr_31504[(12)] = inst_31412);

(statearr_31504[(21)] = inst_31411);

return statearr_31504;
})();
var statearr_31505_31577 = state_31469__$1;
(statearr_31505_31577[(2)] = null);

(statearr_31505_31577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (41))){
var inst_31428 = (state_31469[(25)]);
var inst_31444 = (state_31469[(2)]);
var inst_31445 = cljs.core.next.call(null,inst_31428);
var inst_31409 = inst_31445;
var inst_31410 = null;
var inst_31411 = (0);
var inst_31412 = (0);
var state_31469__$1 = (function (){var statearr_31506 = state_31469;
(statearr_31506[(20)] = inst_31409);

(statearr_31506[(27)] = inst_31444);

(statearr_31506[(9)] = inst_31410);

(statearr_31506[(12)] = inst_31412);

(statearr_31506[(21)] = inst_31411);

return statearr_31506;
})();
var statearr_31507_31578 = state_31469__$1;
(statearr_31507_31578[(2)] = null);

(statearr_31507_31578[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (43))){
var state_31469__$1 = state_31469;
var statearr_31508_31579 = state_31469__$1;
(statearr_31508_31579[(2)] = null);

(statearr_31508_31579[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (29))){
var inst_31453 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31509_31580 = state_31469__$1;
(statearr_31509_31580[(2)] = inst_31453);

(statearr_31509_31580[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (44))){
var inst_31462 = (state_31469[(2)]);
var state_31469__$1 = (function (){var statearr_31510 = state_31469;
(statearr_31510[(28)] = inst_31462);

return statearr_31510;
})();
var statearr_31511_31581 = state_31469__$1;
(statearr_31511_31581[(2)] = null);

(statearr_31511_31581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (6))){
var inst_31401 = (state_31469[(29)]);
var inst_31400 = cljs.core.deref.call(null,cs);
var inst_31401__$1 = cljs.core.keys.call(null,inst_31400);
var inst_31402 = cljs.core.count.call(null,inst_31401__$1);
var inst_31403 = cljs.core.reset_BANG_.call(null,dctr,inst_31402);
var inst_31408 = cljs.core.seq.call(null,inst_31401__$1);
var inst_31409 = inst_31408;
var inst_31410 = null;
var inst_31411 = (0);
var inst_31412 = (0);
var state_31469__$1 = (function (){var statearr_31512 = state_31469;
(statearr_31512[(20)] = inst_31409);

(statearr_31512[(9)] = inst_31410);

(statearr_31512[(30)] = inst_31403);

(statearr_31512[(12)] = inst_31412);

(statearr_31512[(29)] = inst_31401__$1);

(statearr_31512[(21)] = inst_31411);

return statearr_31512;
})();
var statearr_31513_31582 = state_31469__$1;
(statearr_31513_31582[(2)] = null);

(statearr_31513_31582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (28))){
var inst_31409 = (state_31469[(20)]);
var inst_31428 = (state_31469[(25)]);
var inst_31428__$1 = cljs.core.seq.call(null,inst_31409);
var state_31469__$1 = (function (){var statearr_31514 = state_31469;
(statearr_31514[(25)] = inst_31428__$1);

return statearr_31514;
})();
if(inst_31428__$1){
var statearr_31515_31583 = state_31469__$1;
(statearr_31515_31583[(1)] = (33));

} else {
var statearr_31516_31584 = state_31469__$1;
(statearr_31516_31584[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (25))){
var inst_31412 = (state_31469[(12)]);
var inst_31411 = (state_31469[(21)]);
var inst_31414 = (inst_31412 < inst_31411);
var inst_31415 = inst_31414;
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31415)){
var statearr_31517_31585 = state_31469__$1;
(statearr_31517_31585[(1)] = (27));

} else {
var statearr_31518_31586 = state_31469__$1;
(statearr_31518_31586[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (34))){
var state_31469__$1 = state_31469;
var statearr_31519_31587 = state_31469__$1;
(statearr_31519_31587[(2)] = null);

(statearr_31519_31587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (17))){
var state_31469__$1 = state_31469;
var statearr_31520_31588 = state_31469__$1;
(statearr_31520_31588[(2)] = null);

(statearr_31520_31588[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (3))){
var inst_31467 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31469__$1,inst_31467);
} else {
if((state_val_31470 === (12))){
var inst_31396 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31521_31589 = state_31469__$1;
(statearr_31521_31589[(2)] = inst_31396);

(statearr_31521_31589[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (2))){
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31469__$1,(4),ch);
} else {
if((state_val_31470 === (23))){
var state_31469__$1 = state_31469;
var statearr_31522_31590 = state_31469__$1;
(statearr_31522_31590[(2)] = null);

(statearr_31522_31590[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (35))){
var inst_31451 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31523_31591 = state_31469__$1;
(statearr_31523_31591[(2)] = inst_31451);

(statearr_31523_31591[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (19))){
var inst_31368 = (state_31469[(7)]);
var inst_31372 = cljs.core.chunk_first.call(null,inst_31368);
var inst_31373 = cljs.core.chunk_rest.call(null,inst_31368);
var inst_31374 = cljs.core.count.call(null,inst_31372);
var inst_31346 = inst_31373;
var inst_31347 = inst_31372;
var inst_31348 = inst_31374;
var inst_31349 = (0);
var state_31469__$1 = (function (){var statearr_31524 = state_31469;
(statearr_31524[(14)] = inst_31347);

(statearr_31524[(15)] = inst_31348);

(statearr_31524[(16)] = inst_31349);

(statearr_31524[(17)] = inst_31346);

return statearr_31524;
})();
var statearr_31525_31592 = state_31469__$1;
(statearr_31525_31592[(2)] = null);

(statearr_31525_31592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (11))){
var inst_31368 = (state_31469[(7)]);
var inst_31346 = (state_31469[(17)]);
var inst_31368__$1 = cljs.core.seq.call(null,inst_31346);
var state_31469__$1 = (function (){var statearr_31526 = state_31469;
(statearr_31526[(7)] = inst_31368__$1);

return statearr_31526;
})();
if(inst_31368__$1){
var statearr_31527_31593 = state_31469__$1;
(statearr_31527_31593[(1)] = (16));

} else {
var statearr_31528_31594 = state_31469__$1;
(statearr_31528_31594[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (9))){
var inst_31398 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31529_31595 = state_31469__$1;
(statearr_31529_31595[(2)] = inst_31398);

(statearr_31529_31595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (5))){
var inst_31344 = cljs.core.deref.call(null,cs);
var inst_31345 = cljs.core.seq.call(null,inst_31344);
var inst_31346 = inst_31345;
var inst_31347 = null;
var inst_31348 = (0);
var inst_31349 = (0);
var state_31469__$1 = (function (){var statearr_31530 = state_31469;
(statearr_31530[(14)] = inst_31347);

(statearr_31530[(15)] = inst_31348);

(statearr_31530[(16)] = inst_31349);

(statearr_31530[(17)] = inst_31346);

return statearr_31530;
})();
var statearr_31531_31596 = state_31469__$1;
(statearr_31531_31596[(2)] = null);

(statearr_31531_31596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (14))){
var state_31469__$1 = state_31469;
var statearr_31532_31597 = state_31469__$1;
(statearr_31532_31597[(2)] = null);

(statearr_31532_31597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (45))){
var inst_31459 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31533_31598 = state_31469__$1;
(statearr_31533_31598[(2)] = inst_31459);

(statearr_31533_31598[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (26))){
var inst_31401 = (state_31469[(29)]);
var inst_31455 = (state_31469[(2)]);
var inst_31456 = cljs.core.seq.call(null,inst_31401);
var state_31469__$1 = (function (){var statearr_31534 = state_31469;
(statearr_31534[(31)] = inst_31455);

return statearr_31534;
})();
if(inst_31456){
var statearr_31535_31599 = state_31469__$1;
(statearr_31535_31599[(1)] = (42));

} else {
var statearr_31536_31600 = state_31469__$1;
(statearr_31536_31600[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (16))){
var inst_31368 = (state_31469[(7)]);
var inst_31370 = cljs.core.chunked_seq_QMARK_.call(null,inst_31368);
var state_31469__$1 = state_31469;
if(inst_31370){
var statearr_31537_31601 = state_31469__$1;
(statearr_31537_31601[(1)] = (19));

} else {
var statearr_31538_31602 = state_31469__$1;
(statearr_31538_31602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (38))){
var inst_31448 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31539_31603 = state_31469__$1;
(statearr_31539_31603[(2)] = inst_31448);

(statearr_31539_31603[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (30))){
var state_31469__$1 = state_31469;
var statearr_31540_31604 = state_31469__$1;
(statearr_31540_31604[(2)] = null);

(statearr_31540_31604[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (10))){
var inst_31347 = (state_31469[(14)]);
var inst_31349 = (state_31469[(16)]);
var inst_31357 = cljs.core._nth.call(null,inst_31347,inst_31349);
var inst_31358 = cljs.core.nth.call(null,inst_31357,(0),null);
var inst_31359 = cljs.core.nth.call(null,inst_31357,(1),null);
var state_31469__$1 = (function (){var statearr_31541 = state_31469;
(statearr_31541[(26)] = inst_31358);

return statearr_31541;
})();
if(cljs.core.truth_(inst_31359)){
var statearr_31542_31605 = state_31469__$1;
(statearr_31542_31605[(1)] = (13));

} else {
var statearr_31543_31606 = state_31469__$1;
(statearr_31543_31606[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (18))){
var inst_31394 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31544_31607 = state_31469__$1;
(statearr_31544_31607[(2)] = inst_31394);

(statearr_31544_31607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (42))){
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31469__$1,(45),dchan);
} else {
if((state_val_31470 === (37))){
var inst_31437 = (state_31469[(23)]);
var inst_31337 = (state_31469[(11)]);
var inst_31428 = (state_31469[(25)]);
var inst_31437__$1 = cljs.core.first.call(null,inst_31428);
var inst_31438 = cljs.core.async.put_BANG_.call(null,inst_31437__$1,inst_31337,done);
var state_31469__$1 = (function (){var statearr_31545 = state_31469;
(statearr_31545[(23)] = inst_31437__$1);

return statearr_31545;
})();
if(cljs.core.truth_(inst_31438)){
var statearr_31546_31608 = state_31469__$1;
(statearr_31546_31608[(1)] = (39));

} else {
var statearr_31547_31609 = state_31469__$1;
(statearr_31547_31609[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (8))){
var inst_31348 = (state_31469[(15)]);
var inst_31349 = (state_31469[(16)]);
var inst_31351 = (inst_31349 < inst_31348);
var inst_31352 = inst_31351;
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31352)){
var statearr_31548_31610 = state_31469__$1;
(statearr_31548_31610[(1)] = (10));

} else {
var statearr_31549_31611 = state_31469__$1;
(statearr_31549_31611[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___31557,cs,m,dchan,dctr,done))
;
return ((function (switch__30092__auto__,c__30204__auto___31557,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30093__auto__ = null;
var cljs$core$async$mult_$_state_machine__30093__auto____0 = (function (){
var statearr_31553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31553[(0)] = cljs$core$async$mult_$_state_machine__30093__auto__);

(statearr_31553[(1)] = (1));

return statearr_31553;
});
var cljs$core$async$mult_$_state_machine__30093__auto____1 = (function (state_31469){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_31469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e31554){if((e31554 instanceof Object)){
var ex__30096__auto__ = e31554;
var statearr_31555_31612 = state_31469;
(statearr_31555_31612[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31613 = state_31469;
state_31469 = G__31613;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30093__auto__ = function(state_31469){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30093__auto____1.call(this,state_31469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30093__auto____0;
cljs$core$async$mult_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30093__auto____1;
return cljs$core$async$mult_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___31557,cs,m,dchan,dctr,done))
})();
var state__30206__auto__ = (function (){var statearr_31556 = f__30205__auto__.call(null);
(statearr_31556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___31557);

return statearr_31556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___31557,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31614 = [];
var len__28321__auto___31617 = arguments.length;
var i__28322__auto___31618 = (0);
while(true){
if((i__28322__auto___31618 < len__28321__auto___31617)){
args31614.push((arguments[i__28322__auto___31618]));

var G__31619 = (i__28322__auto___31618 + (1));
i__28322__auto___31618 = G__31619;
continue;
} else {
}
break;
}

var G__31616 = args31614.length;
switch (G__31616) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31614.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,ch);
} else {
var m__27877__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,ch);
} else {
var m__27877__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m);
} else {
var m__27877__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,state_map);
} else {
var m__27877__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27876__auto__ = (((m == null))?null:m);
var m__27877__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,m,mode);
} else {
var m__27877__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28328__auto__ = [];
var len__28321__auto___31631 = arguments.length;
var i__28322__auto___31632 = (0);
while(true){
if((i__28322__auto___31632 < len__28321__auto___31631)){
args__28328__auto__.push((arguments[i__28322__auto___31632]));

var G__31633 = (i__28322__auto___31632 + (1));
i__28322__auto___31632 = G__31633;
continue;
} else {
}
break;
}

var argseq__28329__auto__ = ((((3) < args__28328__auto__.length))?(new cljs.core.IndexedSeq(args__28328__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28329__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31625){
var map__31626 = p__31625;
var map__31626__$1 = ((((!((map__31626 == null)))?((((map__31626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31626.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31626):map__31626);
var opts = map__31626__$1;
var statearr_31628_31634 = state;
(statearr_31628_31634[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31626,map__31626__$1,opts){
return (function (val){
var statearr_31629_31635 = state;
(statearr_31629_31635[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31626,map__31626__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31630_31636 = state;
(statearr_31630_31636[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31621){
var G__31622 = cljs.core.first.call(null,seq31621);
var seq31621__$1 = cljs.core.next.call(null,seq31621);
var G__31623 = cljs.core.first.call(null,seq31621__$1);
var seq31621__$2 = cljs.core.next.call(null,seq31621__$1);
var G__31624 = cljs.core.first.call(null,seq31621__$2);
var seq31621__$3 = cljs.core.next.call(null,seq31621__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31622,G__31623,G__31624,seq31621__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31804 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31804 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31805){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31806,meta31805__$1){
var self__ = this;
var _31806__$1 = this;
return (new cljs.core.async.t_cljs$core$async31804(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31805__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31806){
var self__ = this;
var _31806__$1 = this;
return self__.meta31805;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31805","meta31805",1431765966,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31804.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31804";

cljs.core.async.t_cljs$core$async31804.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async31804");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31804 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31804(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31805){
return (new cljs.core.async.t_cljs$core$async31804(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31805));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31804(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30204__auto___31971 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31908){
var state_val_31909 = (state_31908[(1)]);
if((state_val_31909 === (7))){
var inst_31823 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31910_31972 = state_31908__$1;
(statearr_31910_31972[(2)] = inst_31823);

(statearr_31910_31972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (20))){
var inst_31835 = (state_31908[(7)]);
var state_31908__$1 = state_31908;
var statearr_31911_31973 = state_31908__$1;
(statearr_31911_31973[(2)] = inst_31835);

(statearr_31911_31973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (27))){
var state_31908__$1 = state_31908;
var statearr_31912_31974 = state_31908__$1;
(statearr_31912_31974[(2)] = null);

(statearr_31912_31974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (1))){
var inst_31810 = (state_31908[(8)]);
var inst_31810__$1 = calc_state.call(null);
var inst_31812 = (inst_31810__$1 == null);
var inst_31813 = cljs.core.not.call(null,inst_31812);
var state_31908__$1 = (function (){var statearr_31913 = state_31908;
(statearr_31913[(8)] = inst_31810__$1);

return statearr_31913;
})();
if(inst_31813){
var statearr_31914_31975 = state_31908__$1;
(statearr_31914_31975[(1)] = (2));

} else {
var statearr_31915_31976 = state_31908__$1;
(statearr_31915_31976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (24))){
var inst_31859 = (state_31908[(9)]);
var inst_31882 = (state_31908[(10)]);
var inst_31868 = (state_31908[(11)]);
var inst_31882__$1 = inst_31859.call(null,inst_31868);
var state_31908__$1 = (function (){var statearr_31916 = state_31908;
(statearr_31916[(10)] = inst_31882__$1);

return statearr_31916;
})();
if(cljs.core.truth_(inst_31882__$1)){
var statearr_31917_31977 = state_31908__$1;
(statearr_31917_31977[(1)] = (29));

} else {
var statearr_31918_31978 = state_31908__$1;
(statearr_31918_31978[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (4))){
var inst_31826 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31826)){
var statearr_31919_31979 = state_31908__$1;
(statearr_31919_31979[(1)] = (8));

} else {
var statearr_31920_31980 = state_31908__$1;
(statearr_31920_31980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (15))){
var inst_31853 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31853)){
var statearr_31921_31981 = state_31908__$1;
(statearr_31921_31981[(1)] = (19));

} else {
var statearr_31922_31982 = state_31908__$1;
(statearr_31922_31982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (21))){
var inst_31858 = (state_31908[(12)]);
var inst_31858__$1 = (state_31908[(2)]);
var inst_31859 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31860 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31861 = cljs.core.get.call(null,inst_31858__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31908__$1 = (function (){var statearr_31923 = state_31908;
(statearr_31923[(9)] = inst_31859);

(statearr_31923[(13)] = inst_31860);

(statearr_31923[(12)] = inst_31858__$1);

return statearr_31923;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31908__$1,(22),inst_31861);
} else {
if((state_val_31909 === (31))){
var inst_31890 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31890)){
var statearr_31924_31983 = state_31908__$1;
(statearr_31924_31983[(1)] = (32));

} else {
var statearr_31925_31984 = state_31908__$1;
(statearr_31925_31984[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (32))){
var inst_31867 = (state_31908[(14)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31908__$1,(35),out,inst_31867);
} else {
if((state_val_31909 === (33))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31926 = state_31908;
(statearr_31926[(7)] = inst_31835);

return statearr_31926;
})();
var statearr_31927_31985 = state_31908__$1;
(statearr_31927_31985[(2)] = null);

(statearr_31927_31985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (13))){
var inst_31835 = (state_31908[(7)]);
var inst_31842 = inst_31835.cljs$lang$protocol_mask$partition0$;
var inst_31843 = (inst_31842 & (64));
var inst_31844 = inst_31835.cljs$core$ISeq$;
var inst_31845 = (cljs.core.PROTOCOL_SENTINEL === inst_31844);
var inst_31846 = (inst_31843) || (inst_31845);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31846)){
var statearr_31928_31986 = state_31908__$1;
(statearr_31928_31986[(1)] = (16));

} else {
var statearr_31929_31987 = state_31908__$1;
(statearr_31929_31987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (22))){
var inst_31867 = (state_31908[(14)]);
var inst_31868 = (state_31908[(11)]);
var inst_31866 = (state_31908[(2)]);
var inst_31867__$1 = cljs.core.nth.call(null,inst_31866,(0),null);
var inst_31868__$1 = cljs.core.nth.call(null,inst_31866,(1),null);
var inst_31869 = (inst_31867__$1 == null);
var inst_31870 = cljs.core._EQ_.call(null,inst_31868__$1,change);
var inst_31871 = (inst_31869) || (inst_31870);
var state_31908__$1 = (function (){var statearr_31930 = state_31908;
(statearr_31930[(14)] = inst_31867__$1);

(statearr_31930[(11)] = inst_31868__$1);

return statearr_31930;
})();
if(cljs.core.truth_(inst_31871)){
var statearr_31931_31988 = state_31908__$1;
(statearr_31931_31988[(1)] = (23));

} else {
var statearr_31932_31989 = state_31908__$1;
(statearr_31932_31989[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (36))){
var inst_31858 = (state_31908[(12)]);
var inst_31835 = inst_31858;
var state_31908__$1 = (function (){var statearr_31933 = state_31908;
(statearr_31933[(7)] = inst_31835);

return statearr_31933;
})();
var statearr_31934_31990 = state_31908__$1;
(statearr_31934_31990[(2)] = null);

(statearr_31934_31990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (29))){
var inst_31882 = (state_31908[(10)]);
var state_31908__$1 = state_31908;
var statearr_31935_31991 = state_31908__$1;
(statearr_31935_31991[(2)] = inst_31882);

(statearr_31935_31991[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (6))){
var state_31908__$1 = state_31908;
var statearr_31936_31992 = state_31908__$1;
(statearr_31936_31992[(2)] = false);

(statearr_31936_31992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (28))){
var inst_31878 = (state_31908[(2)]);
var inst_31879 = calc_state.call(null);
var inst_31835 = inst_31879;
var state_31908__$1 = (function (){var statearr_31937 = state_31908;
(statearr_31937[(15)] = inst_31878);

(statearr_31937[(7)] = inst_31835);

return statearr_31937;
})();
var statearr_31938_31993 = state_31908__$1;
(statearr_31938_31993[(2)] = null);

(statearr_31938_31993[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (25))){
var inst_31904 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31939_31994 = state_31908__$1;
(statearr_31939_31994[(2)] = inst_31904);

(statearr_31939_31994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (34))){
var inst_31902 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31940_31995 = state_31908__$1;
(statearr_31940_31995[(2)] = inst_31902);

(statearr_31940_31995[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (17))){
var state_31908__$1 = state_31908;
var statearr_31941_31996 = state_31908__$1;
(statearr_31941_31996[(2)] = false);

(statearr_31941_31996[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (3))){
var state_31908__$1 = state_31908;
var statearr_31942_31997 = state_31908__$1;
(statearr_31942_31997[(2)] = false);

(statearr_31942_31997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (12))){
var inst_31906 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31908__$1,inst_31906);
} else {
if((state_val_31909 === (2))){
var inst_31810 = (state_31908[(8)]);
var inst_31815 = inst_31810.cljs$lang$protocol_mask$partition0$;
var inst_31816 = (inst_31815 & (64));
var inst_31817 = inst_31810.cljs$core$ISeq$;
var inst_31818 = (cljs.core.PROTOCOL_SENTINEL === inst_31817);
var inst_31819 = (inst_31816) || (inst_31818);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31819)){
var statearr_31943_31998 = state_31908__$1;
(statearr_31943_31998[(1)] = (5));

} else {
var statearr_31944_31999 = state_31908__$1;
(statearr_31944_31999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (23))){
var inst_31867 = (state_31908[(14)]);
var inst_31873 = (inst_31867 == null);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31873)){
var statearr_31945_32000 = state_31908__$1;
(statearr_31945_32000[(1)] = (26));

} else {
var statearr_31946_32001 = state_31908__$1;
(statearr_31946_32001[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (35))){
var inst_31893 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
if(cljs.core.truth_(inst_31893)){
var statearr_31947_32002 = state_31908__$1;
(statearr_31947_32002[(1)] = (36));

} else {
var statearr_31948_32003 = state_31908__$1;
(statearr_31948_32003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (19))){
var inst_31835 = (state_31908[(7)]);
var inst_31855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31835);
var state_31908__$1 = state_31908;
var statearr_31949_32004 = state_31908__$1;
(statearr_31949_32004[(2)] = inst_31855);

(statearr_31949_32004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (11))){
var inst_31835 = (state_31908[(7)]);
var inst_31839 = (inst_31835 == null);
var inst_31840 = cljs.core.not.call(null,inst_31839);
var state_31908__$1 = state_31908;
if(inst_31840){
var statearr_31950_32005 = state_31908__$1;
(statearr_31950_32005[(1)] = (13));

} else {
var statearr_31951_32006 = state_31908__$1;
(statearr_31951_32006[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (9))){
var inst_31810 = (state_31908[(8)]);
var state_31908__$1 = state_31908;
var statearr_31952_32007 = state_31908__$1;
(statearr_31952_32007[(2)] = inst_31810);

(statearr_31952_32007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (5))){
var state_31908__$1 = state_31908;
var statearr_31953_32008 = state_31908__$1;
(statearr_31953_32008[(2)] = true);

(statearr_31953_32008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (14))){
var state_31908__$1 = state_31908;
var statearr_31954_32009 = state_31908__$1;
(statearr_31954_32009[(2)] = false);

(statearr_31954_32009[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (26))){
var inst_31868 = (state_31908[(11)]);
var inst_31875 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31868);
var state_31908__$1 = state_31908;
var statearr_31955_32010 = state_31908__$1;
(statearr_31955_32010[(2)] = inst_31875);

(statearr_31955_32010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (16))){
var state_31908__$1 = state_31908;
var statearr_31956_32011 = state_31908__$1;
(statearr_31956_32011[(2)] = true);

(statearr_31956_32011[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (38))){
var inst_31898 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31957_32012 = state_31908__$1;
(statearr_31957_32012[(2)] = inst_31898);

(statearr_31957_32012[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (30))){
var inst_31859 = (state_31908[(9)]);
var inst_31860 = (state_31908[(13)]);
var inst_31868 = (state_31908[(11)]);
var inst_31885 = cljs.core.empty_QMARK_.call(null,inst_31859);
var inst_31886 = inst_31860.call(null,inst_31868);
var inst_31887 = cljs.core.not.call(null,inst_31886);
var inst_31888 = (inst_31885) && (inst_31887);
var state_31908__$1 = state_31908;
var statearr_31958_32013 = state_31908__$1;
(statearr_31958_32013[(2)] = inst_31888);

(statearr_31958_32013[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (10))){
var inst_31810 = (state_31908[(8)]);
var inst_31831 = (state_31908[(2)]);
var inst_31832 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31833 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31834 = cljs.core.get.call(null,inst_31831,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31835 = inst_31810;
var state_31908__$1 = (function (){var statearr_31959 = state_31908;
(statearr_31959[(16)] = inst_31834);

(statearr_31959[(17)] = inst_31832);

(statearr_31959[(18)] = inst_31833);

(statearr_31959[(7)] = inst_31835);

return statearr_31959;
})();
var statearr_31960_32014 = state_31908__$1;
(statearr_31960_32014[(2)] = null);

(statearr_31960_32014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (18))){
var inst_31850 = (state_31908[(2)]);
var state_31908__$1 = state_31908;
var statearr_31961_32015 = state_31908__$1;
(statearr_31961_32015[(2)] = inst_31850);

(statearr_31961_32015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (37))){
var state_31908__$1 = state_31908;
var statearr_31962_32016 = state_31908__$1;
(statearr_31962_32016[(2)] = null);

(statearr_31962_32016[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31909 === (8))){
var inst_31810 = (state_31908[(8)]);
var inst_31828 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31810);
var state_31908__$1 = state_31908;
var statearr_31963_32017 = state_31908__$1;
(statearr_31963_32017[(2)] = inst_31828);

(statearr_31963_32017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30092__auto__,c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30093__auto__ = null;
var cljs$core$async$mix_$_state_machine__30093__auto____0 = (function (){
var statearr_31967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31967[(0)] = cljs$core$async$mix_$_state_machine__30093__auto__);

(statearr_31967[(1)] = (1));

return statearr_31967;
});
var cljs$core$async$mix_$_state_machine__30093__auto____1 = (function (state_31908){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_31908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e31968){if((e31968 instanceof Object)){
var ex__30096__auto__ = e31968;
var statearr_31969_32018 = state_31908;
(statearr_31969_32018[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32019 = state_31908;
state_31908 = G__32019;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30093__auto__ = function(state_31908){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30093__auto____1.call(this,state_31908);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30093__auto____0;
cljs$core$async$mix_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30093__auto____1;
return cljs$core$async$mix_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30206__auto__ = (function (){var statearr_31970 = f__30205__auto__.call(null);
(statearr_31970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___31971);

return statearr_31970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___31971,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27876__auto__ = (((p == null))?null:p);
var m__27877__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27877__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27876__auto__ = (((p == null))?null:p);
var m__27877__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,p,v,ch);
} else {
var m__27877__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32020 = [];
var len__28321__auto___32023 = arguments.length;
var i__28322__auto___32024 = (0);
while(true){
if((i__28322__auto___32024 < len__28321__auto___32023)){
args32020.push((arguments[i__28322__auto___32024]));

var G__32025 = (i__28322__auto___32024 + (1));
i__28322__auto___32024 = G__32025;
continue;
} else {
}
break;
}

var G__32022 = args32020.length;
switch (G__32022) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32020.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27876__auto__ = (((p == null))?null:p);
var m__27877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,p);
} else {
var m__27877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27876__auto__ = (((p == null))?null:p);
var m__27877__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27876__auto__)]);
if(!((m__27877__auto__ == null))){
return m__27877__auto__.call(null,p,v);
} else {
var m__27877__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27877__auto____$1 == null))){
return m__27877__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32028 = [];
var len__28321__auto___32153 = arguments.length;
var i__28322__auto___32154 = (0);
while(true){
if((i__28322__auto___32154 < len__28321__auto___32153)){
args32028.push((arguments[i__28322__auto___32154]));

var G__32155 = (i__28322__auto___32154 + (1));
i__28322__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var G__32030 = args32028.length;
switch (G__32030) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32028.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27208__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27208__auto__,mults){
return (function (p1__32027_SHARP_){
if(cljs.core.truth_(p1__32027_SHARP_.call(null,topic))){
return p1__32027_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32027_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27208__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32031 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32032){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32032 = meta32032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32033,meta32032__$1){
var self__ = this;
var _32033__$1 = this;
return (new cljs.core.async.t_cljs$core$async32031(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32032__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32033){
var self__ = this;
var _32033__$1 = this;
return self__.meta32032;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32032","meta32032",1674667378,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32031";

cljs.core.async.t_cljs$core$async32031.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async32031");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32031 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32031(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32032){
return (new cljs.core.async.t_cljs$core$async32031(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32032));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32031(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30204__auto___32157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32157,mults,ensure_mult,p){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32157,mults,ensure_mult,p){
return (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32107_32158 = state_32105__$1;
(statearr_32107_32158[(2)] = inst_32101);

(statearr_32107_32158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (20))){
var state_32105__$1 = state_32105;
var statearr_32108_32159 = state_32105__$1;
(statearr_32108_32159[(2)] = null);

(statearr_32108_32159[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var state_32105__$1 = state_32105;
var statearr_32109_32160 = state_32105__$1;
(statearr_32109_32160[(2)] = null);

(statearr_32109_32160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (24))){
var inst_32084 = (state_32105[(7)]);
var inst_32093 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32084);
var state_32105__$1 = state_32105;
var statearr_32110_32161 = state_32105__$1;
(statearr_32110_32161[(2)] = inst_32093);

(statearr_32110_32161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_32036 = (state_32105[(8)]);
var inst_32036__$1 = (state_32105[(2)]);
var inst_32037 = (inst_32036__$1 == null);
var state_32105__$1 = (function (){var statearr_32111 = state_32105;
(statearr_32111[(8)] = inst_32036__$1);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32037)){
var statearr_32112_32162 = state_32105__$1;
(statearr_32112_32162[(1)] = (5));

} else {
var statearr_32113_32163 = state_32105__$1;
(statearr_32113_32163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (15))){
var inst_32078 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32114_32164 = state_32105__$1;
(statearr_32114_32164[(2)] = inst_32078);

(statearr_32114_32164[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (21))){
var inst_32098 = (state_32105[(2)]);
var state_32105__$1 = (function (){var statearr_32115 = state_32105;
(statearr_32115[(9)] = inst_32098);

return statearr_32115;
})();
var statearr_32116_32165 = state_32105__$1;
(statearr_32116_32165[(2)] = null);

(statearr_32116_32165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (13))){
var inst_32060 = (state_32105[(10)]);
var inst_32062 = cljs.core.chunked_seq_QMARK_.call(null,inst_32060);
var state_32105__$1 = state_32105;
if(inst_32062){
var statearr_32117_32166 = state_32105__$1;
(statearr_32117_32166[(1)] = (16));

} else {
var statearr_32118_32167 = state_32105__$1;
(statearr_32118_32167[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (22))){
var inst_32090 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32090)){
var statearr_32119_32168 = state_32105__$1;
(statearr_32119_32168[(1)] = (23));

} else {
var statearr_32120_32169 = state_32105__$1;
(statearr_32120_32169[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (6))){
var inst_32036 = (state_32105[(8)]);
var inst_32084 = (state_32105[(7)]);
var inst_32086 = (state_32105[(11)]);
var inst_32084__$1 = topic_fn.call(null,inst_32036);
var inst_32085 = cljs.core.deref.call(null,mults);
var inst_32086__$1 = cljs.core.get.call(null,inst_32085,inst_32084__$1);
var state_32105__$1 = (function (){var statearr_32121 = state_32105;
(statearr_32121[(7)] = inst_32084__$1);

(statearr_32121[(11)] = inst_32086__$1);

return statearr_32121;
})();
if(cljs.core.truth_(inst_32086__$1)){
var statearr_32122_32170 = state_32105__$1;
(statearr_32122_32170[(1)] = (19));

} else {
var statearr_32123_32171 = state_32105__$1;
(statearr_32123_32171[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (25))){
var inst_32095 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32124_32172 = state_32105__$1;
(statearr_32124_32172[(2)] = inst_32095);

(statearr_32124_32172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (17))){
var inst_32060 = (state_32105[(10)]);
var inst_32069 = cljs.core.first.call(null,inst_32060);
var inst_32070 = cljs.core.async.muxch_STAR_.call(null,inst_32069);
var inst_32071 = cljs.core.async.close_BANG_.call(null,inst_32070);
var inst_32072 = cljs.core.next.call(null,inst_32060);
var inst_32046 = inst_32072;
var inst_32047 = null;
var inst_32048 = (0);
var inst_32049 = (0);
var state_32105__$1 = (function (){var statearr_32125 = state_32105;
(statearr_32125[(12)] = inst_32049);

(statearr_32125[(13)] = inst_32046);

(statearr_32125[(14)] = inst_32048);

(statearr_32125[(15)] = inst_32071);

(statearr_32125[(16)] = inst_32047);

return statearr_32125;
})();
var statearr_32126_32173 = state_32105__$1;
(statearr_32126_32173[(2)] = null);

(statearr_32126_32173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (12))){
var inst_32080 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32127_32174 = state_32105__$1;
(statearr_32127_32174[(2)] = inst_32080);

(statearr_32127_32174[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (2))){
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32105__$1,(4),ch);
} else {
if((state_val_32106 === (23))){
var state_32105__$1 = state_32105;
var statearr_32128_32175 = state_32105__$1;
(statearr_32128_32175[(2)] = null);

(statearr_32128_32175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (19))){
var inst_32036 = (state_32105[(8)]);
var inst_32086 = (state_32105[(11)]);
var inst_32088 = cljs.core.async.muxch_STAR_.call(null,inst_32086);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32105__$1,(22),inst_32088,inst_32036);
} else {
if((state_val_32106 === (11))){
var inst_32046 = (state_32105[(13)]);
var inst_32060 = (state_32105[(10)]);
var inst_32060__$1 = cljs.core.seq.call(null,inst_32046);
var state_32105__$1 = (function (){var statearr_32129 = state_32105;
(statearr_32129[(10)] = inst_32060__$1);

return statearr_32129;
})();
if(inst_32060__$1){
var statearr_32130_32176 = state_32105__$1;
(statearr_32130_32176[(1)] = (13));

} else {
var statearr_32131_32177 = state_32105__$1;
(statearr_32131_32177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var inst_32082 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32132_32178 = state_32105__$1;
(statearr_32132_32178[(2)] = inst_32082);

(statearr_32132_32178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (5))){
var inst_32043 = cljs.core.deref.call(null,mults);
var inst_32044 = cljs.core.vals.call(null,inst_32043);
var inst_32045 = cljs.core.seq.call(null,inst_32044);
var inst_32046 = inst_32045;
var inst_32047 = null;
var inst_32048 = (0);
var inst_32049 = (0);
var state_32105__$1 = (function (){var statearr_32133 = state_32105;
(statearr_32133[(12)] = inst_32049);

(statearr_32133[(13)] = inst_32046);

(statearr_32133[(14)] = inst_32048);

(statearr_32133[(16)] = inst_32047);

return statearr_32133;
})();
var statearr_32134_32179 = state_32105__$1;
(statearr_32134_32179[(2)] = null);

(statearr_32134_32179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (14))){
var state_32105__$1 = state_32105;
var statearr_32138_32180 = state_32105__$1;
(statearr_32138_32180[(2)] = null);

(statearr_32138_32180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (16))){
var inst_32060 = (state_32105[(10)]);
var inst_32064 = cljs.core.chunk_first.call(null,inst_32060);
var inst_32065 = cljs.core.chunk_rest.call(null,inst_32060);
var inst_32066 = cljs.core.count.call(null,inst_32064);
var inst_32046 = inst_32065;
var inst_32047 = inst_32064;
var inst_32048 = inst_32066;
var inst_32049 = (0);
var state_32105__$1 = (function (){var statearr_32139 = state_32105;
(statearr_32139[(12)] = inst_32049);

(statearr_32139[(13)] = inst_32046);

(statearr_32139[(14)] = inst_32048);

(statearr_32139[(16)] = inst_32047);

return statearr_32139;
})();
var statearr_32140_32181 = state_32105__$1;
(statearr_32140_32181[(2)] = null);

(statearr_32140_32181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_32049 = (state_32105[(12)]);
var inst_32046 = (state_32105[(13)]);
var inst_32048 = (state_32105[(14)]);
var inst_32047 = (state_32105[(16)]);
var inst_32054 = cljs.core._nth.call(null,inst_32047,inst_32049);
var inst_32055 = cljs.core.async.muxch_STAR_.call(null,inst_32054);
var inst_32056 = cljs.core.async.close_BANG_.call(null,inst_32055);
var inst_32057 = (inst_32049 + (1));
var tmp32135 = inst_32046;
var tmp32136 = inst_32048;
var tmp32137 = inst_32047;
var inst_32046__$1 = tmp32135;
var inst_32047__$1 = tmp32137;
var inst_32048__$1 = tmp32136;
var inst_32049__$1 = inst_32057;
var state_32105__$1 = (function (){var statearr_32141 = state_32105;
(statearr_32141[(12)] = inst_32049__$1);

(statearr_32141[(17)] = inst_32056);

(statearr_32141[(13)] = inst_32046__$1);

(statearr_32141[(14)] = inst_32048__$1);

(statearr_32141[(16)] = inst_32047__$1);

return statearr_32141;
})();
var statearr_32142_32182 = state_32105__$1;
(statearr_32142_32182[(2)] = null);

(statearr_32142_32182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (18))){
var inst_32075 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32143_32183 = state_32105__$1;
(statearr_32143_32183[(2)] = inst_32075);

(statearr_32143_32183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (8))){
var inst_32049 = (state_32105[(12)]);
var inst_32048 = (state_32105[(14)]);
var inst_32051 = (inst_32049 < inst_32048);
var inst_32052 = inst_32051;
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32052)){
var statearr_32144_32184 = state_32105__$1;
(statearr_32144_32184[(1)] = (10));

} else {
var statearr_32145_32185 = state_32105__$1;
(statearr_32145_32185[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32157,mults,ensure_mult,p))
;
return ((function (switch__30092__auto__,c__30204__auto___32157,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32149 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32149[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32149[(1)] = (1));

return statearr_32149;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32105){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32150){if((e32150 instanceof Object)){
var ex__30096__auto__ = e32150;
var statearr_32151_32186 = state_32105;
(statearr_32151_32186[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32187 = state_32105;
state_32105 = G__32187;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32157,mults,ensure_mult,p))
})();
var state__30206__auto__ = (function (){var statearr_32152 = f__30205__auto__.call(null);
(statearr_32152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32157);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32157,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32188 = [];
var len__28321__auto___32191 = arguments.length;
var i__28322__auto___32192 = (0);
while(true){
if((i__28322__auto___32192 < len__28321__auto___32191)){
args32188.push((arguments[i__28322__auto___32192]));

var G__32193 = (i__28322__auto___32192 + (1));
i__28322__auto___32192 = G__32193;
continue;
} else {
}
break;
}

var G__32190 = args32188.length;
switch (G__32190) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32188.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32195 = [];
var len__28321__auto___32198 = arguments.length;
var i__28322__auto___32199 = (0);
while(true){
if((i__28322__auto___32199 < len__28321__auto___32198)){
args32195.push((arguments[i__28322__auto___32199]));

var G__32200 = (i__28322__auto___32199 + (1));
i__28322__auto___32199 = G__32200;
continue;
} else {
}
break;
}

var G__32197 = args32195.length;
switch (G__32197) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32195.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32202 = [];
var len__28321__auto___32273 = arguments.length;
var i__28322__auto___32274 = (0);
while(true){
if((i__28322__auto___32274 < len__28321__auto___32273)){
args32202.push((arguments[i__28322__auto___32274]));

var G__32275 = (i__28322__auto___32274 + (1));
i__28322__auto___32274 = G__32275;
continue;
} else {
}
break;
}

var G__32204 = args32202.length;
switch (G__32204) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32202.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30204__auto___32277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var state_32243__$1 = state_32243;
var statearr_32245_32278 = state_32243__$1;
(statearr_32245_32278[(2)] = null);

(statearr_32245_32278[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var state_32243__$1 = state_32243;
var statearr_32246_32279 = state_32243__$1;
(statearr_32246_32279[(2)] = null);

(statearr_32246_32279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var inst_32207 = (state_32243[(7)]);
var inst_32209 = (inst_32207 < cnt);
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32209)){
var statearr_32247_32280 = state_32243__$1;
(statearr_32247_32280[(1)] = (6));

} else {
var statearr_32248_32281 = state_32243__$1;
(statearr_32248_32281[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (15))){
var inst_32239 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32249_32282 = state_32243__$1;
(statearr_32249_32282[(2)] = inst_32239);

(statearr_32249_32282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (13))){
var inst_32232 = cljs.core.async.close_BANG_.call(null,out);
var state_32243__$1 = state_32243;
var statearr_32250_32283 = state_32243__$1;
(statearr_32250_32283[(2)] = inst_32232);

(statearr_32250_32283[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (6))){
var state_32243__$1 = state_32243;
var statearr_32251_32284 = state_32243__$1;
(statearr_32251_32284[(2)] = null);

(statearr_32251_32284[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32241 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (12))){
var inst_32229 = (state_32243[(8)]);
var inst_32229__$1 = (state_32243[(2)]);
var inst_32230 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32229__$1);
var state_32243__$1 = (function (){var statearr_32252 = state_32243;
(statearr_32252[(8)] = inst_32229__$1);

return statearr_32252;
})();
if(cljs.core.truth_(inst_32230)){
var statearr_32253_32285 = state_32243__$1;
(statearr_32253_32285[(1)] = (13));

} else {
var statearr_32254_32286 = state_32243__$1;
(statearr_32254_32286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (2))){
var inst_32206 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32207 = (0);
var state_32243__$1 = (function (){var statearr_32255 = state_32243;
(statearr_32255[(7)] = inst_32207);

(statearr_32255[(9)] = inst_32206);

return statearr_32255;
})();
var statearr_32256_32287 = state_32243__$1;
(statearr_32256_32287[(2)] = null);

(statearr_32256_32287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (11))){
var inst_32207 = (state_32243[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32243,(10),Object,null,(9));
var inst_32216 = chs__$1.call(null,inst_32207);
var inst_32217 = done.call(null,inst_32207);
var inst_32218 = cljs.core.async.take_BANG_.call(null,inst_32216,inst_32217);
var state_32243__$1 = state_32243;
var statearr_32257_32288 = state_32243__$1;
(statearr_32257_32288[(2)] = inst_32218);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var inst_32207 = (state_32243[(7)]);
var inst_32220 = (state_32243[(2)]);
var inst_32221 = (inst_32207 + (1));
var inst_32207__$1 = inst_32221;
var state_32243__$1 = (function (){var statearr_32258 = state_32243;
(statearr_32258[(7)] = inst_32207__$1);

(statearr_32258[(10)] = inst_32220);

return statearr_32258;
})();
var statearr_32259_32289 = state_32243__$1;
(statearr_32259_32289[(2)] = null);

(statearr_32259_32289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (5))){
var inst_32227 = (state_32243[(2)]);
var state_32243__$1 = (function (){var statearr_32260 = state_32243;
(statearr_32260[(11)] = inst_32227);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32243__$1,(12),dchan);
} else {
if((state_val_32244 === (14))){
var inst_32229 = (state_32243[(8)]);
var inst_32234 = cljs.core.apply.call(null,f,inst_32229);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32243__$1,(16),out,inst_32234);
} else {
if((state_val_32244 === (16))){
var inst_32236 = (state_32243[(2)]);
var state_32243__$1 = (function (){var statearr_32261 = state_32243;
(statearr_32261[(12)] = inst_32236);

return statearr_32261;
})();
var statearr_32262_32290 = state_32243__$1;
(statearr_32262_32290[(2)] = null);

(statearr_32262_32290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32211 = (state_32243[(2)]);
var inst_32212 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32243__$1 = (function (){var statearr_32263 = state_32243;
(statearr_32263[(13)] = inst_32211);

return statearr_32263;
})();
var statearr_32264_32291 = state_32243__$1;
(statearr_32264_32291[(2)] = inst_32212);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32243__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32225 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32265_32292 = state_32243__$1;
(statearr_32265_32292[(2)] = inst_32225);

(statearr_32265_32292[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30092__auto__,c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32243){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__30096__auto__ = e32270;
var statearr_32271_32293 = state_32243;
(statearr_32271_32293[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32294 = state_32243;
state_32243 = G__32294;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30206__auto__ = (function (){var statearr_32272 = f__30205__auto__.call(null);
(statearr_32272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32277);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32277,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args32296 = [];
var len__28321__auto___32354 = arguments.length;
var i__28322__auto___32355 = (0);
while(true){
if((i__28322__auto___32355 < len__28321__auto___32354)){
args32296.push((arguments[i__28322__auto___32355]));

var G__32356 = (i__28322__auto___32355 + (1));
i__28322__auto___32355 = G__32356;
continue;
} else {
}
break;
}

var G__32298 = args32296.length;
switch (G__32298) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32296.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___32358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32358,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32358,out){
return (function (state_32330){
var state_val_32331 = (state_32330[(1)]);
if((state_val_32331 === (7))){
var inst_32309 = (state_32330[(7)]);
var inst_32310 = (state_32330[(8)]);
var inst_32309__$1 = (state_32330[(2)]);
var inst_32310__$1 = cljs.core.nth.call(null,inst_32309__$1,(0),null);
var inst_32311 = cljs.core.nth.call(null,inst_32309__$1,(1),null);
var inst_32312 = (inst_32310__$1 == null);
var state_32330__$1 = (function (){var statearr_32332 = state_32330;
(statearr_32332[(7)] = inst_32309__$1);

(statearr_32332[(9)] = inst_32311);

(statearr_32332[(8)] = inst_32310__$1);

return statearr_32332;
})();
if(cljs.core.truth_(inst_32312)){
var statearr_32333_32359 = state_32330__$1;
(statearr_32333_32359[(1)] = (8));

} else {
var statearr_32334_32360 = state_32330__$1;
(statearr_32334_32360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (1))){
var inst_32299 = cljs.core.vec.call(null,chs);
var inst_32300 = inst_32299;
var state_32330__$1 = (function (){var statearr_32335 = state_32330;
(statearr_32335[(10)] = inst_32300);

return statearr_32335;
})();
var statearr_32336_32361 = state_32330__$1;
(statearr_32336_32361[(2)] = null);

(statearr_32336_32361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (4))){
var inst_32300 = (state_32330[(10)]);
var state_32330__$1 = state_32330;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32330__$1,(7),inst_32300);
} else {
if((state_val_32331 === (6))){
var inst_32326 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32337_32362 = state_32330__$1;
(statearr_32337_32362[(2)] = inst_32326);

(statearr_32337_32362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (3))){
var inst_32328 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32330__$1,inst_32328);
} else {
if((state_val_32331 === (2))){
var inst_32300 = (state_32330[(10)]);
var inst_32302 = cljs.core.count.call(null,inst_32300);
var inst_32303 = (inst_32302 > (0));
var state_32330__$1 = state_32330;
if(cljs.core.truth_(inst_32303)){
var statearr_32339_32363 = state_32330__$1;
(statearr_32339_32363[(1)] = (4));

} else {
var statearr_32340_32364 = state_32330__$1;
(statearr_32340_32364[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (11))){
var inst_32300 = (state_32330[(10)]);
var inst_32319 = (state_32330[(2)]);
var tmp32338 = inst_32300;
var inst_32300__$1 = tmp32338;
var state_32330__$1 = (function (){var statearr_32341 = state_32330;
(statearr_32341[(10)] = inst_32300__$1);

(statearr_32341[(11)] = inst_32319);

return statearr_32341;
})();
var statearr_32342_32365 = state_32330__$1;
(statearr_32342_32365[(2)] = null);

(statearr_32342_32365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (9))){
var inst_32310 = (state_32330[(8)]);
var state_32330__$1 = state_32330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32330__$1,(11),out,inst_32310);
} else {
if((state_val_32331 === (5))){
var inst_32324 = cljs.core.async.close_BANG_.call(null,out);
var state_32330__$1 = state_32330;
var statearr_32343_32366 = state_32330__$1;
(statearr_32343_32366[(2)] = inst_32324);

(statearr_32343_32366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (10))){
var inst_32322 = (state_32330[(2)]);
var state_32330__$1 = state_32330;
var statearr_32344_32367 = state_32330__$1;
(statearr_32344_32367[(2)] = inst_32322);

(statearr_32344_32367[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32331 === (8))){
var inst_32309 = (state_32330[(7)]);
var inst_32300 = (state_32330[(10)]);
var inst_32311 = (state_32330[(9)]);
var inst_32310 = (state_32330[(8)]);
var inst_32314 = (function (){var cs = inst_32300;
var vec__32305 = inst_32309;
var v = inst_32310;
var c = inst_32311;
return ((function (cs,vec__32305,v,c,inst_32309,inst_32300,inst_32311,inst_32310,state_val_32331,c__30204__auto___32358,out){
return (function (p1__32295_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32295_SHARP_);
});
;})(cs,vec__32305,v,c,inst_32309,inst_32300,inst_32311,inst_32310,state_val_32331,c__30204__auto___32358,out))
})();
var inst_32315 = cljs.core.filterv.call(null,inst_32314,inst_32300);
var inst_32300__$1 = inst_32315;
var state_32330__$1 = (function (){var statearr_32345 = state_32330;
(statearr_32345[(10)] = inst_32300__$1);

return statearr_32345;
})();
var statearr_32346_32368 = state_32330__$1;
(statearr_32346_32368[(2)] = null);

(statearr_32346_32368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32358,out))
;
return ((function (switch__30092__auto__,c__30204__auto___32358,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32350 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32350[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32350[(1)] = (1));

return statearr_32350;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32330){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32351){if((e32351 instanceof Object)){
var ex__30096__auto__ = e32351;
var statearr_32352_32369 = state_32330;
(statearr_32352_32369[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32370 = state_32330;
state_32330 = G__32370;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32330);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32358,out))
})();
var state__30206__auto__ = (function (){var statearr_32353 = f__30205__auto__.call(null);
(statearr_32353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32358);

return statearr_32353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32358,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args32371 = [];
var len__28321__auto___32420 = arguments.length;
var i__28322__auto___32421 = (0);
while(true){
if((i__28322__auto___32421 < len__28321__auto___32420)){
args32371.push((arguments[i__28322__auto___32421]));

var G__32422 = (i__28322__auto___32421 + (1));
i__28322__auto___32421 = G__32422;
continue;
} else {
}
break;
}

var G__32373 = args32371.length;
switch (G__32373) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32371.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___32424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32424,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32424,out){
return (function (state_32397){
var state_val_32398 = (state_32397[(1)]);
if((state_val_32398 === (7))){
var inst_32379 = (state_32397[(7)]);
var inst_32379__$1 = (state_32397[(2)]);
var inst_32380 = (inst_32379__$1 == null);
var inst_32381 = cljs.core.not.call(null,inst_32380);
var state_32397__$1 = (function (){var statearr_32399 = state_32397;
(statearr_32399[(7)] = inst_32379__$1);

return statearr_32399;
})();
if(inst_32381){
var statearr_32400_32425 = state_32397__$1;
(statearr_32400_32425[(1)] = (8));

} else {
var statearr_32401_32426 = state_32397__$1;
(statearr_32401_32426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (1))){
var inst_32374 = (0);
var state_32397__$1 = (function (){var statearr_32402 = state_32397;
(statearr_32402[(8)] = inst_32374);

return statearr_32402;
})();
var statearr_32403_32427 = state_32397__$1;
(statearr_32403_32427[(2)] = null);

(statearr_32403_32427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (4))){
var state_32397__$1 = state_32397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32397__$1,(7),ch);
} else {
if((state_val_32398 === (6))){
var inst_32392 = (state_32397[(2)]);
var state_32397__$1 = state_32397;
var statearr_32404_32428 = state_32397__$1;
(statearr_32404_32428[(2)] = inst_32392);

(statearr_32404_32428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (3))){
var inst_32394 = (state_32397[(2)]);
var inst_32395 = cljs.core.async.close_BANG_.call(null,out);
var state_32397__$1 = (function (){var statearr_32405 = state_32397;
(statearr_32405[(9)] = inst_32394);

return statearr_32405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32397__$1,inst_32395);
} else {
if((state_val_32398 === (2))){
var inst_32374 = (state_32397[(8)]);
var inst_32376 = (inst_32374 < n);
var state_32397__$1 = state_32397;
if(cljs.core.truth_(inst_32376)){
var statearr_32406_32429 = state_32397__$1;
(statearr_32406_32429[(1)] = (4));

} else {
var statearr_32407_32430 = state_32397__$1;
(statearr_32407_32430[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (11))){
var inst_32374 = (state_32397[(8)]);
var inst_32384 = (state_32397[(2)]);
var inst_32385 = (inst_32374 + (1));
var inst_32374__$1 = inst_32385;
var state_32397__$1 = (function (){var statearr_32408 = state_32397;
(statearr_32408[(8)] = inst_32374__$1);

(statearr_32408[(10)] = inst_32384);

return statearr_32408;
})();
var statearr_32409_32431 = state_32397__$1;
(statearr_32409_32431[(2)] = null);

(statearr_32409_32431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (9))){
var state_32397__$1 = state_32397;
var statearr_32410_32432 = state_32397__$1;
(statearr_32410_32432[(2)] = null);

(statearr_32410_32432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (5))){
var state_32397__$1 = state_32397;
var statearr_32411_32433 = state_32397__$1;
(statearr_32411_32433[(2)] = null);

(statearr_32411_32433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (10))){
var inst_32389 = (state_32397[(2)]);
var state_32397__$1 = state_32397;
var statearr_32412_32434 = state_32397__$1;
(statearr_32412_32434[(2)] = inst_32389);

(statearr_32412_32434[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (8))){
var inst_32379 = (state_32397[(7)]);
var state_32397__$1 = state_32397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32397__$1,(11),out,inst_32379);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32424,out))
;
return ((function (switch__30092__auto__,c__30204__auto___32424,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32416[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32416[(1)] = (1));

return statearr_32416;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32397){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32417){if((e32417 instanceof Object)){
var ex__30096__auto__ = e32417;
var statearr_32418_32435 = state_32397;
(statearr_32418_32435[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32436 = state_32397;
state_32397 = G__32436;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32397);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32424,out))
})();
var state__30206__auto__ = (function (){var statearr_32419 = f__30205__auto__.call(null);
(statearr_32419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32424);

return statearr_32419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32424,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32444 = (function (f,ch,meta32445){
this.f = f;
this.ch = ch;
this.meta32445 = meta32445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32446,meta32445__$1){
var self__ = this;
var _32446__$1 = this;
return (new cljs.core.async.t_cljs$core$async32444(self__.f,self__.ch,meta32445__$1));
});

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32446){
var self__ = this;
var _32446__$1 = this;
return self__.meta32445;
});

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32447 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32447 = (function (f,ch,meta32445,_,fn1,meta32448){
this.f = f;
this.ch = ch;
this.meta32445 = meta32445;
this._ = _;
this.fn1 = fn1;
this.meta32448 = meta32448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32449,meta32448__$1){
var self__ = this;
var _32449__$1 = this;
return (new cljs.core.async.t_cljs$core$async32447(self__.f,self__.ch,self__.meta32445,self__._,self__.fn1,meta32448__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32449){
var self__ = this;
var _32449__$1 = this;
return self__.meta32448;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32437_SHARP_){
return f1.call(null,(((p1__32437_SHARP_ == null))?null:self__.f.call(null,p1__32437_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32445","meta32445",-1373296100,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32444","cljs.core.async/t_cljs$core$async32444",1953609767,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32448","meta32448",1473482540,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32447.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32447";

cljs.core.async.t_cljs$core$async32447.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async32447");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32447 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32447(f__$1,ch__$1,meta32445__$1,___$2,fn1__$1,meta32448){
return (new cljs.core.async.t_cljs$core$async32447(f__$1,ch__$1,meta32445__$1,___$2,fn1__$1,meta32448));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32447(self__.f,self__.ch,self__.meta32445,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27196__auto__ = ret;
if(cljs.core.truth_(and__27196__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27196__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32444.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32445","meta32445",-1373296100,null)], null);
});

cljs.core.async.t_cljs$core$async32444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32444";

cljs.core.async.t_cljs$core$async32444.cljs$lang$ctorPrWriter = (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async32444");
});

cljs.core.async.__GT_t_cljs$core$async32444 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32444(f__$1,ch__$1,meta32445){
return (new cljs.core.async.t_cljs$core$async32444(f__$1,ch__$1,meta32445));
});

}

return (new cljs.core.async.t_cljs$core$async32444(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32453 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32453 = (function (f,ch,meta32454){
this.f = f;
this.ch = ch;
this.meta32454 = meta32454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32455,meta32454__$1){
var self__ = this;
var _32455__$1 = this;
return (new cljs.core.async.t_cljs$core$async32453(self__.f,self__.ch,meta32454__$1));
});

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32455){
var self__ = this;
var _32455__$1 = this;
return self__.meta32454;
});

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32453.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32453.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32454","meta32454",220218499,null)], null);
});

cljs.core.async.t_cljs$core$async32453.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32453.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32453";

cljs.core.async.t_cljs$core$async32453.cljs$lang$ctorPrWriter = (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async32453");
});

cljs.core.async.__GT_t_cljs$core$async32453 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32453(f__$1,ch__$1,meta32454){
return (new cljs.core.async.t_cljs$core$async32453(f__$1,ch__$1,meta32454));
});

}

return (new cljs.core.async.t_cljs$core$async32453(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32459 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32459 = (function (p,ch,meta32460){
this.p = p;
this.ch = ch;
this.meta32460 = meta32460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32461,meta32460__$1){
var self__ = this;
var _32461__$1 = this;
return (new cljs.core.async.t_cljs$core$async32459(self__.p,self__.ch,meta32460__$1));
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32461){
var self__ = this;
var _32461__$1 = this;
return self__.meta32460;
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32460","meta32460",-1002098745,null)], null);
});

cljs.core.async.t_cljs$core$async32459.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32459";

cljs.core.async.t_cljs$core$async32459.cljs$lang$ctorPrWriter = (function (this__27819__auto__,writer__27820__auto__,opt__27821__auto__){
return cljs.core._write.call(null,writer__27820__auto__,"cljs.core.async/t_cljs$core$async32459");
});

cljs.core.async.__GT_t_cljs$core$async32459 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32459(p__$1,ch__$1,meta32460){
return (new cljs.core.async.t_cljs$core$async32459(p__$1,ch__$1,meta32460));
});

}

return (new cljs.core.async.t_cljs$core$async32459(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32462 = [];
var len__28321__auto___32506 = arguments.length;
var i__28322__auto___32507 = (0);
while(true){
if((i__28322__auto___32507 < len__28321__auto___32506)){
args32462.push((arguments[i__28322__auto___32507]));

var G__32508 = (i__28322__auto___32507 + (1));
i__28322__auto___32507 = G__32508;
continue;
} else {
}
break;
}

var G__32464 = args32462.length;
switch (G__32464) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32462.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___32510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32510,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32510,out){
return (function (state_32485){
var state_val_32486 = (state_32485[(1)]);
if((state_val_32486 === (7))){
var inst_32481 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32487_32511 = state_32485__$1;
(statearr_32487_32511[(2)] = inst_32481);

(statearr_32487_32511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (1))){
var state_32485__$1 = state_32485;
var statearr_32488_32512 = state_32485__$1;
(statearr_32488_32512[(2)] = null);

(statearr_32488_32512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (4))){
var inst_32467 = (state_32485[(7)]);
var inst_32467__$1 = (state_32485[(2)]);
var inst_32468 = (inst_32467__$1 == null);
var state_32485__$1 = (function (){var statearr_32489 = state_32485;
(statearr_32489[(7)] = inst_32467__$1);

return statearr_32489;
})();
if(cljs.core.truth_(inst_32468)){
var statearr_32490_32513 = state_32485__$1;
(statearr_32490_32513[(1)] = (5));

} else {
var statearr_32491_32514 = state_32485__$1;
(statearr_32491_32514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (6))){
var inst_32467 = (state_32485[(7)]);
var inst_32472 = p.call(null,inst_32467);
var state_32485__$1 = state_32485;
if(cljs.core.truth_(inst_32472)){
var statearr_32492_32515 = state_32485__$1;
(statearr_32492_32515[(1)] = (8));

} else {
var statearr_32493_32516 = state_32485__$1;
(statearr_32493_32516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (3))){
var inst_32483 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32485__$1,inst_32483);
} else {
if((state_val_32486 === (2))){
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32485__$1,(4),ch);
} else {
if((state_val_32486 === (11))){
var inst_32475 = (state_32485[(2)]);
var state_32485__$1 = state_32485;
var statearr_32494_32517 = state_32485__$1;
(statearr_32494_32517[(2)] = inst_32475);

(statearr_32494_32517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (9))){
var state_32485__$1 = state_32485;
var statearr_32495_32518 = state_32485__$1;
(statearr_32495_32518[(2)] = null);

(statearr_32495_32518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (5))){
var inst_32470 = cljs.core.async.close_BANG_.call(null,out);
var state_32485__$1 = state_32485;
var statearr_32496_32519 = state_32485__$1;
(statearr_32496_32519[(2)] = inst_32470);

(statearr_32496_32519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (10))){
var inst_32478 = (state_32485[(2)]);
var state_32485__$1 = (function (){var statearr_32497 = state_32485;
(statearr_32497[(8)] = inst_32478);

return statearr_32497;
})();
var statearr_32498_32520 = state_32485__$1;
(statearr_32498_32520[(2)] = null);

(statearr_32498_32520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32486 === (8))){
var inst_32467 = (state_32485[(7)]);
var state_32485__$1 = state_32485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32485__$1,(11),out,inst_32467);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32510,out))
;
return ((function (switch__30092__auto__,c__30204__auto___32510,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32502 = [null,null,null,null,null,null,null,null,null];
(statearr_32502[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32502[(1)] = (1));

return statearr_32502;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32485){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32503){if((e32503 instanceof Object)){
var ex__30096__auto__ = e32503;
var statearr_32504_32521 = state_32485;
(statearr_32504_32521[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32522 = state_32485;
state_32485 = G__32522;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32485);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32510,out))
})();
var state__30206__auto__ = (function (){var statearr_32505 = f__30205__auto__.call(null);
(statearr_32505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32510);

return statearr_32505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32510,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32523 = [];
var len__28321__auto___32526 = arguments.length;
var i__28322__auto___32527 = (0);
while(true){
if((i__28322__auto___32527 < len__28321__auto___32526)){
args32523.push((arguments[i__28322__auto___32527]));

var G__32528 = (i__28322__auto___32527 + (1));
i__28322__auto___32527 = G__32528;
continue;
} else {
}
break;
}

var G__32525 = args32523.length;
switch (G__32525) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32523.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__){
return (function (state_32695){
var state_val_32696 = (state_32695[(1)]);
if((state_val_32696 === (7))){
var inst_32691 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32697_32738 = state_32695__$1;
(statearr_32697_32738[(2)] = inst_32691);

(statearr_32697_32738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (20))){
var inst_32661 = (state_32695[(7)]);
var inst_32672 = (state_32695[(2)]);
var inst_32673 = cljs.core.next.call(null,inst_32661);
var inst_32647 = inst_32673;
var inst_32648 = null;
var inst_32649 = (0);
var inst_32650 = (0);
var state_32695__$1 = (function (){var statearr_32698 = state_32695;
(statearr_32698[(8)] = inst_32647);

(statearr_32698[(9)] = inst_32649);

(statearr_32698[(10)] = inst_32650);

(statearr_32698[(11)] = inst_32648);

(statearr_32698[(12)] = inst_32672);

return statearr_32698;
})();
var statearr_32699_32739 = state_32695__$1;
(statearr_32699_32739[(2)] = null);

(statearr_32699_32739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (1))){
var state_32695__$1 = state_32695;
var statearr_32700_32740 = state_32695__$1;
(statearr_32700_32740[(2)] = null);

(statearr_32700_32740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (4))){
var inst_32636 = (state_32695[(13)]);
var inst_32636__$1 = (state_32695[(2)]);
var inst_32637 = (inst_32636__$1 == null);
var state_32695__$1 = (function (){var statearr_32701 = state_32695;
(statearr_32701[(13)] = inst_32636__$1);

return statearr_32701;
})();
if(cljs.core.truth_(inst_32637)){
var statearr_32702_32741 = state_32695__$1;
(statearr_32702_32741[(1)] = (5));

} else {
var statearr_32703_32742 = state_32695__$1;
(statearr_32703_32742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (15))){
var state_32695__$1 = state_32695;
var statearr_32707_32743 = state_32695__$1;
(statearr_32707_32743[(2)] = null);

(statearr_32707_32743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (21))){
var state_32695__$1 = state_32695;
var statearr_32708_32744 = state_32695__$1;
(statearr_32708_32744[(2)] = null);

(statearr_32708_32744[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (13))){
var inst_32647 = (state_32695[(8)]);
var inst_32649 = (state_32695[(9)]);
var inst_32650 = (state_32695[(10)]);
var inst_32648 = (state_32695[(11)]);
var inst_32657 = (state_32695[(2)]);
var inst_32658 = (inst_32650 + (1));
var tmp32704 = inst_32647;
var tmp32705 = inst_32649;
var tmp32706 = inst_32648;
var inst_32647__$1 = tmp32704;
var inst_32648__$1 = tmp32706;
var inst_32649__$1 = tmp32705;
var inst_32650__$1 = inst_32658;
var state_32695__$1 = (function (){var statearr_32709 = state_32695;
(statearr_32709[(8)] = inst_32647__$1);

(statearr_32709[(14)] = inst_32657);

(statearr_32709[(9)] = inst_32649__$1);

(statearr_32709[(10)] = inst_32650__$1);

(statearr_32709[(11)] = inst_32648__$1);

return statearr_32709;
})();
var statearr_32710_32745 = state_32695__$1;
(statearr_32710_32745[(2)] = null);

(statearr_32710_32745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (22))){
var state_32695__$1 = state_32695;
var statearr_32711_32746 = state_32695__$1;
(statearr_32711_32746[(2)] = null);

(statearr_32711_32746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (6))){
var inst_32636 = (state_32695[(13)]);
var inst_32645 = f.call(null,inst_32636);
var inst_32646 = cljs.core.seq.call(null,inst_32645);
var inst_32647 = inst_32646;
var inst_32648 = null;
var inst_32649 = (0);
var inst_32650 = (0);
var state_32695__$1 = (function (){var statearr_32712 = state_32695;
(statearr_32712[(8)] = inst_32647);

(statearr_32712[(9)] = inst_32649);

(statearr_32712[(10)] = inst_32650);

(statearr_32712[(11)] = inst_32648);

return statearr_32712;
})();
var statearr_32713_32747 = state_32695__$1;
(statearr_32713_32747[(2)] = null);

(statearr_32713_32747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (17))){
var inst_32661 = (state_32695[(7)]);
var inst_32665 = cljs.core.chunk_first.call(null,inst_32661);
var inst_32666 = cljs.core.chunk_rest.call(null,inst_32661);
var inst_32667 = cljs.core.count.call(null,inst_32665);
var inst_32647 = inst_32666;
var inst_32648 = inst_32665;
var inst_32649 = inst_32667;
var inst_32650 = (0);
var state_32695__$1 = (function (){var statearr_32714 = state_32695;
(statearr_32714[(8)] = inst_32647);

(statearr_32714[(9)] = inst_32649);

(statearr_32714[(10)] = inst_32650);

(statearr_32714[(11)] = inst_32648);

return statearr_32714;
})();
var statearr_32715_32748 = state_32695__$1;
(statearr_32715_32748[(2)] = null);

(statearr_32715_32748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (3))){
var inst_32693 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32695__$1,inst_32693);
} else {
if((state_val_32696 === (12))){
var inst_32681 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32716_32749 = state_32695__$1;
(statearr_32716_32749[(2)] = inst_32681);

(statearr_32716_32749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (2))){
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32695__$1,(4),in$);
} else {
if((state_val_32696 === (23))){
var inst_32689 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32717_32750 = state_32695__$1;
(statearr_32717_32750[(2)] = inst_32689);

(statearr_32717_32750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (19))){
var inst_32676 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32718_32751 = state_32695__$1;
(statearr_32718_32751[(2)] = inst_32676);

(statearr_32718_32751[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (11))){
var inst_32647 = (state_32695[(8)]);
var inst_32661 = (state_32695[(7)]);
var inst_32661__$1 = cljs.core.seq.call(null,inst_32647);
var state_32695__$1 = (function (){var statearr_32719 = state_32695;
(statearr_32719[(7)] = inst_32661__$1);

return statearr_32719;
})();
if(inst_32661__$1){
var statearr_32720_32752 = state_32695__$1;
(statearr_32720_32752[(1)] = (14));

} else {
var statearr_32721_32753 = state_32695__$1;
(statearr_32721_32753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (9))){
var inst_32683 = (state_32695[(2)]);
var inst_32684 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32695__$1 = (function (){var statearr_32722 = state_32695;
(statearr_32722[(15)] = inst_32683);

return statearr_32722;
})();
if(cljs.core.truth_(inst_32684)){
var statearr_32723_32754 = state_32695__$1;
(statearr_32723_32754[(1)] = (21));

} else {
var statearr_32724_32755 = state_32695__$1;
(statearr_32724_32755[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (5))){
var inst_32639 = cljs.core.async.close_BANG_.call(null,out);
var state_32695__$1 = state_32695;
var statearr_32725_32756 = state_32695__$1;
(statearr_32725_32756[(2)] = inst_32639);

(statearr_32725_32756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (14))){
var inst_32661 = (state_32695[(7)]);
var inst_32663 = cljs.core.chunked_seq_QMARK_.call(null,inst_32661);
var state_32695__$1 = state_32695;
if(inst_32663){
var statearr_32726_32757 = state_32695__$1;
(statearr_32726_32757[(1)] = (17));

} else {
var statearr_32727_32758 = state_32695__$1;
(statearr_32727_32758[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (16))){
var inst_32679 = (state_32695[(2)]);
var state_32695__$1 = state_32695;
var statearr_32728_32759 = state_32695__$1;
(statearr_32728_32759[(2)] = inst_32679);

(statearr_32728_32759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32696 === (10))){
var inst_32650 = (state_32695[(10)]);
var inst_32648 = (state_32695[(11)]);
var inst_32655 = cljs.core._nth.call(null,inst_32648,inst_32650);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32695__$1,(13),out,inst_32655);
} else {
if((state_val_32696 === (18))){
var inst_32661 = (state_32695[(7)]);
var inst_32670 = cljs.core.first.call(null,inst_32661);
var state_32695__$1 = state_32695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32695__$1,(20),out,inst_32670);
} else {
if((state_val_32696 === (8))){
var inst_32649 = (state_32695[(9)]);
var inst_32650 = (state_32695[(10)]);
var inst_32652 = (inst_32650 < inst_32649);
var inst_32653 = inst_32652;
var state_32695__$1 = state_32695;
if(cljs.core.truth_(inst_32653)){
var statearr_32729_32760 = state_32695__$1;
(statearr_32729_32760[(1)] = (10));

} else {
var statearr_32730_32761 = state_32695__$1;
(statearr_32730_32761[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____0 = (function (){
var statearr_32734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32734[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__);

(statearr_32734[(1)] = (1));

return statearr_32734;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____1 = (function (state_32695){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32735){if((e32735 instanceof Object)){
var ex__30096__auto__ = e32735;
var statearr_32736_32762 = state_32695;
(statearr_32736_32762[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32763 = state_32695;
state_32695 = G__32763;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__ = function(state_32695){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____1.call(this,state_32695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30093__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__))
})();
var state__30206__auto__ = (function (){var statearr_32737 = f__30205__auto__.call(null);
(statearr_32737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_32737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__))
);

return c__30204__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32764 = [];
var len__28321__auto___32767 = arguments.length;
var i__28322__auto___32768 = (0);
while(true){
if((i__28322__auto___32768 < len__28321__auto___32767)){
args32764.push((arguments[i__28322__auto___32768]));

var G__32769 = (i__28322__auto___32768 + (1));
i__28322__auto___32768 = G__32769;
continue;
} else {
}
break;
}

var G__32766 = args32764.length;
switch (G__32766) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32764.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32771 = [];
var len__28321__auto___32774 = arguments.length;
var i__28322__auto___32775 = (0);
while(true){
if((i__28322__auto___32775 < len__28321__auto___32774)){
args32771.push((arguments[i__28322__auto___32775]));

var G__32776 = (i__28322__auto___32775 + (1));
i__28322__auto___32775 = G__32776;
continue;
} else {
}
break;
}

var G__32773 = args32771.length;
switch (G__32773) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32771.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32778 = [];
var len__28321__auto___32829 = arguments.length;
var i__28322__auto___32830 = (0);
while(true){
if((i__28322__auto___32830 < len__28321__auto___32829)){
args32778.push((arguments[i__28322__auto___32830]));

var G__32831 = (i__28322__auto___32830 + (1));
i__28322__auto___32830 = G__32831;
continue;
} else {
}
break;
}

var G__32780 = args32778.length;
switch (G__32780) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32778.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___32833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32833,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32833,out){
return (function (state_32804){
var state_val_32805 = (state_32804[(1)]);
if((state_val_32805 === (7))){
var inst_32799 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32806_32834 = state_32804__$1;
(statearr_32806_32834[(2)] = inst_32799);

(statearr_32806_32834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (1))){
var inst_32781 = null;
var state_32804__$1 = (function (){var statearr_32807 = state_32804;
(statearr_32807[(7)] = inst_32781);

return statearr_32807;
})();
var statearr_32808_32835 = state_32804__$1;
(statearr_32808_32835[(2)] = null);

(statearr_32808_32835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (4))){
var inst_32784 = (state_32804[(8)]);
var inst_32784__$1 = (state_32804[(2)]);
var inst_32785 = (inst_32784__$1 == null);
var inst_32786 = cljs.core.not.call(null,inst_32785);
var state_32804__$1 = (function (){var statearr_32809 = state_32804;
(statearr_32809[(8)] = inst_32784__$1);

return statearr_32809;
})();
if(inst_32786){
var statearr_32810_32836 = state_32804__$1;
(statearr_32810_32836[(1)] = (5));

} else {
var statearr_32811_32837 = state_32804__$1;
(statearr_32811_32837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (6))){
var state_32804__$1 = state_32804;
var statearr_32812_32838 = state_32804__$1;
(statearr_32812_32838[(2)] = null);

(statearr_32812_32838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (3))){
var inst_32801 = (state_32804[(2)]);
var inst_32802 = cljs.core.async.close_BANG_.call(null,out);
var state_32804__$1 = (function (){var statearr_32813 = state_32804;
(statearr_32813[(9)] = inst_32801);

return statearr_32813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32804__$1,inst_32802);
} else {
if((state_val_32805 === (2))){
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32804__$1,(4),ch);
} else {
if((state_val_32805 === (11))){
var inst_32784 = (state_32804[(8)]);
var inst_32793 = (state_32804[(2)]);
var inst_32781 = inst_32784;
var state_32804__$1 = (function (){var statearr_32814 = state_32804;
(statearr_32814[(10)] = inst_32793);

(statearr_32814[(7)] = inst_32781);

return statearr_32814;
})();
var statearr_32815_32839 = state_32804__$1;
(statearr_32815_32839[(2)] = null);

(statearr_32815_32839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (9))){
var inst_32784 = (state_32804[(8)]);
var state_32804__$1 = state_32804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32804__$1,(11),out,inst_32784);
} else {
if((state_val_32805 === (5))){
var inst_32784 = (state_32804[(8)]);
var inst_32781 = (state_32804[(7)]);
var inst_32788 = cljs.core._EQ_.call(null,inst_32784,inst_32781);
var state_32804__$1 = state_32804;
if(inst_32788){
var statearr_32817_32840 = state_32804__$1;
(statearr_32817_32840[(1)] = (8));

} else {
var statearr_32818_32841 = state_32804__$1;
(statearr_32818_32841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (10))){
var inst_32796 = (state_32804[(2)]);
var state_32804__$1 = state_32804;
var statearr_32819_32842 = state_32804__$1;
(statearr_32819_32842[(2)] = inst_32796);

(statearr_32819_32842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32805 === (8))){
var inst_32781 = (state_32804[(7)]);
var tmp32816 = inst_32781;
var inst_32781__$1 = tmp32816;
var state_32804__$1 = (function (){var statearr_32820 = state_32804;
(statearr_32820[(7)] = inst_32781__$1);

return statearr_32820;
})();
var statearr_32821_32843 = state_32804__$1;
(statearr_32821_32843[(2)] = null);

(statearr_32821_32843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32833,out))
;
return ((function (switch__30092__auto__,c__30204__auto___32833,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32825[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32825[(1)] = (1));

return statearr_32825;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32804){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32826){if((e32826 instanceof Object)){
var ex__30096__auto__ = e32826;
var statearr_32827_32844 = state_32804;
(statearr_32827_32844[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32845 = state_32804;
state_32804 = G__32845;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32833,out))
})();
var state__30206__auto__ = (function (){var statearr_32828 = f__30205__auto__.call(null);
(statearr_32828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32833);

return statearr_32828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32833,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32846 = [];
var len__28321__auto___32916 = arguments.length;
var i__28322__auto___32917 = (0);
while(true){
if((i__28322__auto___32917 < len__28321__auto___32916)){
args32846.push((arguments[i__28322__auto___32917]));

var G__32918 = (i__28322__auto___32917 + (1));
i__28322__auto___32917 = G__32918;
continue;
} else {
}
break;
}

var G__32848 = args32846.length;
switch (G__32848) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32846.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___32920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___32920,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___32920,out){
return (function (state_32886){
var state_val_32887 = (state_32886[(1)]);
if((state_val_32887 === (7))){
var inst_32882 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32888_32921 = state_32886__$1;
(statearr_32888_32921[(2)] = inst_32882);

(statearr_32888_32921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (1))){
var inst_32849 = (new Array(n));
var inst_32850 = inst_32849;
var inst_32851 = (0);
var state_32886__$1 = (function (){var statearr_32889 = state_32886;
(statearr_32889[(7)] = inst_32850);

(statearr_32889[(8)] = inst_32851);

return statearr_32889;
})();
var statearr_32890_32922 = state_32886__$1;
(statearr_32890_32922[(2)] = null);

(statearr_32890_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (4))){
var inst_32854 = (state_32886[(9)]);
var inst_32854__$1 = (state_32886[(2)]);
var inst_32855 = (inst_32854__$1 == null);
var inst_32856 = cljs.core.not.call(null,inst_32855);
var state_32886__$1 = (function (){var statearr_32891 = state_32886;
(statearr_32891[(9)] = inst_32854__$1);

return statearr_32891;
})();
if(inst_32856){
var statearr_32892_32923 = state_32886__$1;
(statearr_32892_32923[(1)] = (5));

} else {
var statearr_32893_32924 = state_32886__$1;
(statearr_32893_32924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (15))){
var inst_32876 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32894_32925 = state_32886__$1;
(statearr_32894_32925[(2)] = inst_32876);

(statearr_32894_32925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (13))){
var state_32886__$1 = state_32886;
var statearr_32895_32926 = state_32886__$1;
(statearr_32895_32926[(2)] = null);

(statearr_32895_32926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (6))){
var inst_32851 = (state_32886[(8)]);
var inst_32872 = (inst_32851 > (0));
var state_32886__$1 = state_32886;
if(cljs.core.truth_(inst_32872)){
var statearr_32896_32927 = state_32886__$1;
(statearr_32896_32927[(1)] = (12));

} else {
var statearr_32897_32928 = state_32886__$1;
(statearr_32897_32928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (3))){
var inst_32884 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32886__$1,inst_32884);
} else {
if((state_val_32887 === (12))){
var inst_32850 = (state_32886[(7)]);
var inst_32874 = cljs.core.vec.call(null,inst_32850);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32886__$1,(15),out,inst_32874);
} else {
if((state_val_32887 === (2))){
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32886__$1,(4),ch);
} else {
if((state_val_32887 === (11))){
var inst_32866 = (state_32886[(2)]);
var inst_32867 = (new Array(n));
var inst_32850 = inst_32867;
var inst_32851 = (0);
var state_32886__$1 = (function (){var statearr_32898 = state_32886;
(statearr_32898[(7)] = inst_32850);

(statearr_32898[(10)] = inst_32866);

(statearr_32898[(8)] = inst_32851);

return statearr_32898;
})();
var statearr_32899_32929 = state_32886__$1;
(statearr_32899_32929[(2)] = null);

(statearr_32899_32929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (9))){
var inst_32850 = (state_32886[(7)]);
var inst_32864 = cljs.core.vec.call(null,inst_32850);
var state_32886__$1 = state_32886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32886__$1,(11),out,inst_32864);
} else {
if((state_val_32887 === (5))){
var inst_32850 = (state_32886[(7)]);
var inst_32859 = (state_32886[(11)]);
var inst_32854 = (state_32886[(9)]);
var inst_32851 = (state_32886[(8)]);
var inst_32858 = (inst_32850[inst_32851] = inst_32854);
var inst_32859__$1 = (inst_32851 + (1));
var inst_32860 = (inst_32859__$1 < n);
var state_32886__$1 = (function (){var statearr_32900 = state_32886;
(statearr_32900[(11)] = inst_32859__$1);

(statearr_32900[(12)] = inst_32858);

return statearr_32900;
})();
if(cljs.core.truth_(inst_32860)){
var statearr_32901_32930 = state_32886__$1;
(statearr_32901_32930[(1)] = (8));

} else {
var statearr_32902_32931 = state_32886__$1;
(statearr_32902_32931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (14))){
var inst_32879 = (state_32886[(2)]);
var inst_32880 = cljs.core.async.close_BANG_.call(null,out);
var state_32886__$1 = (function (){var statearr_32904 = state_32886;
(statearr_32904[(13)] = inst_32879);

return statearr_32904;
})();
var statearr_32905_32932 = state_32886__$1;
(statearr_32905_32932[(2)] = inst_32880);

(statearr_32905_32932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (10))){
var inst_32870 = (state_32886[(2)]);
var state_32886__$1 = state_32886;
var statearr_32906_32933 = state_32886__$1;
(statearr_32906_32933[(2)] = inst_32870);

(statearr_32906_32933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32887 === (8))){
var inst_32850 = (state_32886[(7)]);
var inst_32859 = (state_32886[(11)]);
var tmp32903 = inst_32850;
var inst_32850__$1 = tmp32903;
var inst_32851 = inst_32859;
var state_32886__$1 = (function (){var statearr_32907 = state_32886;
(statearr_32907[(7)] = inst_32850__$1);

(statearr_32907[(8)] = inst_32851);

return statearr_32907;
})();
var statearr_32908_32934 = state_32886__$1;
(statearr_32908_32934[(2)] = null);

(statearr_32908_32934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___32920,out))
;
return ((function (switch__30092__auto__,c__30204__auto___32920,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_32912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32912[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_32912[(1)] = (1));

return statearr_32912;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32886){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e32913){if((e32913 instanceof Object)){
var ex__30096__auto__ = e32913;
var statearr_32914_32935 = state_32886;
(statearr_32914_32935[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32936 = state_32886;
state_32886 = G__32936;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___32920,out))
})();
var state__30206__auto__ = (function (){var statearr_32915 = f__30205__auto__.call(null);
(statearr_32915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___32920);

return statearr_32915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___32920,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32937 = [];
var len__28321__auto___33011 = arguments.length;
var i__28322__auto___33012 = (0);
while(true){
if((i__28322__auto___33012 < len__28321__auto___33011)){
args32937.push((arguments[i__28322__auto___33012]));

var G__33013 = (i__28322__auto___33012 + (1));
i__28322__auto___33012 = G__33013;
continue;
} else {
}
break;
}

var G__32939 = args32937.length;
switch (G__32939) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32937.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30204__auto___33015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___33015,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___33015,out){
return (function (state_32981){
var state_val_32982 = (state_32981[(1)]);
if((state_val_32982 === (7))){
var inst_32977 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32983_33016 = state_32981__$1;
(statearr_32983_33016[(2)] = inst_32977);

(statearr_32983_33016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (1))){
var inst_32940 = [];
var inst_32941 = inst_32940;
var inst_32942 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32981__$1 = (function (){var statearr_32984 = state_32981;
(statearr_32984[(7)] = inst_32941);

(statearr_32984[(8)] = inst_32942);

return statearr_32984;
})();
var statearr_32985_33017 = state_32981__$1;
(statearr_32985_33017[(2)] = null);

(statearr_32985_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (4))){
var inst_32945 = (state_32981[(9)]);
var inst_32945__$1 = (state_32981[(2)]);
var inst_32946 = (inst_32945__$1 == null);
var inst_32947 = cljs.core.not.call(null,inst_32946);
var state_32981__$1 = (function (){var statearr_32986 = state_32981;
(statearr_32986[(9)] = inst_32945__$1);

return statearr_32986;
})();
if(inst_32947){
var statearr_32987_33018 = state_32981__$1;
(statearr_32987_33018[(1)] = (5));

} else {
var statearr_32988_33019 = state_32981__$1;
(statearr_32988_33019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (15))){
var inst_32971 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_32989_33020 = state_32981__$1;
(statearr_32989_33020[(2)] = inst_32971);

(statearr_32989_33020[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (13))){
var state_32981__$1 = state_32981;
var statearr_32990_33021 = state_32981__$1;
(statearr_32990_33021[(2)] = null);

(statearr_32990_33021[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (6))){
var inst_32941 = (state_32981[(7)]);
var inst_32966 = inst_32941.length;
var inst_32967 = (inst_32966 > (0));
var state_32981__$1 = state_32981;
if(cljs.core.truth_(inst_32967)){
var statearr_32991_33022 = state_32981__$1;
(statearr_32991_33022[(1)] = (12));

} else {
var statearr_32992_33023 = state_32981__$1;
(statearr_32992_33023[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (3))){
var inst_32979 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32981__$1,inst_32979);
} else {
if((state_val_32982 === (12))){
var inst_32941 = (state_32981[(7)]);
var inst_32969 = cljs.core.vec.call(null,inst_32941);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32981__$1,(15),out,inst_32969);
} else {
if((state_val_32982 === (2))){
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32981__$1,(4),ch);
} else {
if((state_val_32982 === (11))){
var inst_32949 = (state_32981[(10)]);
var inst_32945 = (state_32981[(9)]);
var inst_32959 = (state_32981[(2)]);
var inst_32960 = [];
var inst_32961 = inst_32960.push(inst_32945);
var inst_32941 = inst_32960;
var inst_32942 = inst_32949;
var state_32981__$1 = (function (){var statearr_32993 = state_32981;
(statearr_32993[(7)] = inst_32941);

(statearr_32993[(8)] = inst_32942);

(statearr_32993[(11)] = inst_32961);

(statearr_32993[(12)] = inst_32959);

return statearr_32993;
})();
var statearr_32994_33024 = state_32981__$1;
(statearr_32994_33024[(2)] = null);

(statearr_32994_33024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (9))){
var inst_32941 = (state_32981[(7)]);
var inst_32957 = cljs.core.vec.call(null,inst_32941);
var state_32981__$1 = state_32981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32981__$1,(11),out,inst_32957);
} else {
if((state_val_32982 === (5))){
var inst_32942 = (state_32981[(8)]);
var inst_32949 = (state_32981[(10)]);
var inst_32945 = (state_32981[(9)]);
var inst_32949__$1 = f.call(null,inst_32945);
var inst_32950 = cljs.core._EQ_.call(null,inst_32949__$1,inst_32942);
var inst_32951 = cljs.core.keyword_identical_QMARK_.call(null,inst_32942,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32952 = (inst_32950) || (inst_32951);
var state_32981__$1 = (function (){var statearr_32995 = state_32981;
(statearr_32995[(10)] = inst_32949__$1);

return statearr_32995;
})();
if(cljs.core.truth_(inst_32952)){
var statearr_32996_33025 = state_32981__$1;
(statearr_32996_33025[(1)] = (8));

} else {
var statearr_32997_33026 = state_32981__$1;
(statearr_32997_33026[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (14))){
var inst_32974 = (state_32981[(2)]);
var inst_32975 = cljs.core.async.close_BANG_.call(null,out);
var state_32981__$1 = (function (){var statearr_32999 = state_32981;
(statearr_32999[(13)] = inst_32974);

return statearr_32999;
})();
var statearr_33000_33027 = state_32981__$1;
(statearr_33000_33027[(2)] = inst_32975);

(statearr_33000_33027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (10))){
var inst_32964 = (state_32981[(2)]);
var state_32981__$1 = state_32981;
var statearr_33001_33028 = state_32981__$1;
(statearr_33001_33028[(2)] = inst_32964);

(statearr_33001_33028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32982 === (8))){
var inst_32941 = (state_32981[(7)]);
var inst_32949 = (state_32981[(10)]);
var inst_32945 = (state_32981[(9)]);
var inst_32954 = inst_32941.push(inst_32945);
var tmp32998 = inst_32941;
var inst_32941__$1 = tmp32998;
var inst_32942 = inst_32949;
var state_32981__$1 = (function (){var statearr_33002 = state_32981;
(statearr_33002[(7)] = inst_32941__$1);

(statearr_33002[(8)] = inst_32942);

(statearr_33002[(14)] = inst_32954);

return statearr_33002;
})();
var statearr_33003_33029 = state_32981__$1;
(statearr_33003_33029[(2)] = null);

(statearr_33003_33029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30204__auto___33015,out))
;
return ((function (switch__30092__auto__,c__30204__auto___33015,out){
return (function() {
var cljs$core$async$state_machine__30093__auto__ = null;
var cljs$core$async$state_machine__30093__auto____0 = (function (){
var statearr_33007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33007[(0)] = cljs$core$async$state_machine__30093__auto__);

(statearr_33007[(1)] = (1));

return statearr_33007;
});
var cljs$core$async$state_machine__30093__auto____1 = (function (state_32981){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_32981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e33008){if((e33008 instanceof Object)){
var ex__30096__auto__ = e33008;
var statearr_33009_33030 = state_32981;
(statearr_33009_33030[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33031 = state_32981;
state_32981 = G__33031;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
cljs$core$async$state_machine__30093__auto__ = function(state_32981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30093__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30093__auto____1.call(this,state_32981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30093__auto____0;
cljs$core$async$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30093__auto____1;
return cljs$core$async$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___33015,out))
})();
var state__30206__auto__ = (function (){var statearr_33010 = f__30205__auto__.call(null);
(statearr_33010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___33015);

return statearr_33010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___33015,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502515427176