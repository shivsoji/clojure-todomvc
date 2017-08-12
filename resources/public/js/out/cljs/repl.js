// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37262){
var map__37287 = p__37262;
var map__37287__$1 = ((((!((map__37287 == null)))?((((map__37287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37287):map__37287);
var m = map__37287__$1;
var n = cljs.core.get.call(null,map__37287__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__37287__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37289_37311 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37290_37312 = null;
var count__37291_37313 = (0);
var i__37292_37314 = (0);
while(true){
if((i__37292_37314 < count__37291_37313)){
var f_37315 = cljs.core._nth.call(null,chunk__37290_37312,i__37292_37314);
cljs.core.println.call(null,"  ",f_37315);

var G__37316 = seq__37289_37311;
var G__37317 = chunk__37290_37312;
var G__37318 = count__37291_37313;
var G__37319 = (i__37292_37314 + (1));
seq__37289_37311 = G__37316;
chunk__37290_37312 = G__37317;
count__37291_37313 = G__37318;
i__37292_37314 = G__37319;
continue;
} else {
var temp__4657__auto___37320 = cljs.core.seq.call(null,seq__37289_37311);
if(temp__4657__auto___37320){
var seq__37289_37321__$1 = temp__4657__auto___37320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37289_37321__$1)){
var c__28027__auto___37322 = cljs.core.chunk_first.call(null,seq__37289_37321__$1);
var G__37323 = cljs.core.chunk_rest.call(null,seq__37289_37321__$1);
var G__37324 = c__28027__auto___37322;
var G__37325 = cljs.core.count.call(null,c__28027__auto___37322);
var G__37326 = (0);
seq__37289_37311 = G__37323;
chunk__37290_37312 = G__37324;
count__37291_37313 = G__37325;
i__37292_37314 = G__37326;
continue;
} else {
var f_37327 = cljs.core.first.call(null,seq__37289_37321__$1);
cljs.core.println.call(null,"  ",f_37327);

var G__37328 = cljs.core.next.call(null,seq__37289_37321__$1);
var G__37329 = null;
var G__37330 = (0);
var G__37331 = (0);
seq__37289_37311 = G__37328;
chunk__37290_37312 = G__37329;
count__37291_37313 = G__37330;
i__37292_37314 = G__37331;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37332 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27208__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_37332);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_37332)))?cljs.core.second.call(null,arglists_37332):arglists_37332));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37293_37333 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37294_37334 = null;
var count__37295_37335 = (0);
var i__37296_37336 = (0);
while(true){
if((i__37296_37336 < count__37295_37335)){
var vec__37297_37337 = cljs.core._nth.call(null,chunk__37294_37334,i__37296_37336);
var name_37338 = cljs.core.nth.call(null,vec__37297_37337,(0),null);
var map__37300_37339 = cljs.core.nth.call(null,vec__37297_37337,(1),null);
var map__37300_37340__$1 = ((((!((map__37300_37339 == null)))?((((map__37300_37339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37300_37339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37300_37339):map__37300_37339);
var doc_37341 = cljs.core.get.call(null,map__37300_37340__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37342 = cljs.core.get.call(null,map__37300_37340__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37338);

cljs.core.println.call(null," ",arglists_37342);

if(cljs.core.truth_(doc_37341)){
cljs.core.println.call(null," ",doc_37341);
} else {
}

var G__37343 = seq__37293_37333;
var G__37344 = chunk__37294_37334;
var G__37345 = count__37295_37335;
var G__37346 = (i__37296_37336 + (1));
seq__37293_37333 = G__37343;
chunk__37294_37334 = G__37344;
count__37295_37335 = G__37345;
i__37296_37336 = G__37346;
continue;
} else {
var temp__4657__auto___37347 = cljs.core.seq.call(null,seq__37293_37333);
if(temp__4657__auto___37347){
var seq__37293_37348__$1 = temp__4657__auto___37347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37293_37348__$1)){
var c__28027__auto___37349 = cljs.core.chunk_first.call(null,seq__37293_37348__$1);
var G__37350 = cljs.core.chunk_rest.call(null,seq__37293_37348__$1);
var G__37351 = c__28027__auto___37349;
var G__37352 = cljs.core.count.call(null,c__28027__auto___37349);
var G__37353 = (0);
seq__37293_37333 = G__37350;
chunk__37294_37334 = G__37351;
count__37295_37335 = G__37352;
i__37296_37336 = G__37353;
continue;
} else {
var vec__37302_37354 = cljs.core.first.call(null,seq__37293_37348__$1);
var name_37355 = cljs.core.nth.call(null,vec__37302_37354,(0),null);
var map__37305_37356 = cljs.core.nth.call(null,vec__37302_37354,(1),null);
var map__37305_37357__$1 = ((((!((map__37305_37356 == null)))?((((map__37305_37356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37305_37356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37305_37356):map__37305_37356);
var doc_37358 = cljs.core.get.call(null,map__37305_37357__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37359 = cljs.core.get.call(null,map__37305_37357__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_37355);

cljs.core.println.call(null," ",arglists_37359);

if(cljs.core.truth_(doc_37358)){
cljs.core.println.call(null," ",doc_37358);
} else {
}

var G__37360 = cljs.core.next.call(null,seq__37293_37348__$1);
var G__37361 = null;
var G__37362 = (0);
var G__37363 = (0);
seq__37293_37333 = G__37360;
chunk__37294_37334 = G__37361;
count__37295_37335 = G__37362;
i__37296_37336 = G__37363;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__37307 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37308 = null;
var count__37309 = (0);
var i__37310 = (0);
while(true){
if((i__37310 < count__37309)){
var role = cljs.core._nth.call(null,chunk__37308,i__37310);
var temp__4657__auto___37364__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37364__$1)){
var spec_37365 = temp__4657__auto___37364__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_37365));
} else {
}

var G__37366 = seq__37307;
var G__37367 = chunk__37308;
var G__37368 = count__37309;
var G__37369 = (i__37310 + (1));
seq__37307 = G__37366;
chunk__37308 = G__37367;
count__37309 = G__37368;
i__37310 = G__37369;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__37307);
if(temp__4657__auto____$1){
var seq__37307__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37307__$1)){
var c__28027__auto__ = cljs.core.chunk_first.call(null,seq__37307__$1);
var G__37370 = cljs.core.chunk_rest.call(null,seq__37307__$1);
var G__37371 = c__28027__auto__;
var G__37372 = cljs.core.count.call(null,c__28027__auto__);
var G__37373 = (0);
seq__37307 = G__37370;
chunk__37308 = G__37371;
count__37309 = G__37372;
i__37310 = G__37373;
continue;
} else {
var role = cljs.core.first.call(null,seq__37307__$1);
var temp__4657__auto___37374__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___37374__$2)){
var spec_37375 = temp__4657__auto___37374__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_37375));
} else {
}

var G__37376 = cljs.core.next.call(null,seq__37307__$1);
var G__37377 = null;
var G__37378 = (0);
var G__37379 = (0);
seq__37307 = G__37376;
chunk__37308 = G__37377;
count__37309 = G__37378;
i__37310 = G__37379;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502515432887