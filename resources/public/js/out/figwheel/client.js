// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.12";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#js "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e37701){if((e37701 instanceof Error)){
var e = e37701;
return "Error: Unable to stringify";
} else {
throw e37701;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37703 = [];
var len__28321__auto___37706 = arguments.length;
var i__28322__auto___37707 = (0);
while(true){
if((i__28322__auto___37707 < len__28321__auto___37706)){
args37703.push((arguments[i__28322__auto___37707]));

var G__37708 = (i__28322__auto___37707 + (1));
i__28322__auto___37707 = G__37708;
continue;
} else {
}
break;
}

var G__37705 = args37703.length;
switch (G__37705) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37703.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37702_SHARP_){
if(typeof p1__37702_SHARP_ === 'string'){
return p1__37702_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37702_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28328__auto__ = [];
var len__28321__auto___37711 = arguments.length;
var i__28322__auto___37712 = (0);
while(true){
if((i__28322__auto___37712 < len__28321__auto___37711)){
args__28328__auto__.push((arguments[i__28322__auto___37712]));

var G__37713 = (i__28322__auto___37712 + (1));
i__28322__auto___37712 = G__37713;
continue;
} else {
}
break;
}

var argseq__28329__auto__ = ((((0) < args__28328__auto__.length))?(new cljs.core.IndexedSeq(args__28328__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28329__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37710){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37710));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28328__auto__ = [];
var len__28321__auto___37715 = arguments.length;
var i__28322__auto___37716 = (0);
while(true){
if((i__28322__auto___37716 < len__28321__auto___37715)){
args__28328__auto__.push((arguments[i__28322__auto___37716]));

var G__37717 = (i__28322__auto___37716 + (1));
i__28322__auto___37716 = G__37717;
continue;
} else {
}
break;
}

var argseq__28329__auto__ = ((((0) < args__28328__auto__.length))?(new cljs.core.IndexedSeq(args__28328__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28329__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37714){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37714));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37718){
var map__37721 = p__37718;
var map__37721__$1 = ((((!((map__37721 == null)))?((((map__37721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37721):map__37721);
var message = cljs.core.get.call(null,map__37721__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37721__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27208__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27196__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27196__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27196__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30204__auto___37883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___37883,ch){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___37883,ch){
return (function (state_37852){
var state_val_37853 = (state_37852[(1)]);
if((state_val_37853 === (7))){
var inst_37848 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37854_37884 = state_37852__$1;
(statearr_37854_37884[(2)] = inst_37848);

(statearr_37854_37884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (1))){
var state_37852__$1 = state_37852;
var statearr_37855_37885 = state_37852__$1;
(statearr_37855_37885[(2)] = null);

(statearr_37855_37885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (4))){
var inst_37805 = (state_37852[(7)]);
var inst_37805__$1 = (state_37852[(2)]);
var state_37852__$1 = (function (){var statearr_37856 = state_37852;
(statearr_37856[(7)] = inst_37805__$1);

return statearr_37856;
})();
if(cljs.core.truth_(inst_37805__$1)){
var statearr_37857_37886 = state_37852__$1;
(statearr_37857_37886[(1)] = (5));

} else {
var statearr_37858_37887 = state_37852__$1;
(statearr_37858_37887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (15))){
var inst_37812 = (state_37852[(8)]);
var inst_37827 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37812);
var inst_37828 = cljs.core.first.call(null,inst_37827);
var inst_37829 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37828);
var inst_37830 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37829)].join('');
var inst_37831 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37830);
var state_37852__$1 = state_37852;
var statearr_37859_37888 = state_37852__$1;
(statearr_37859_37888[(2)] = inst_37831);

(statearr_37859_37888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (13))){
var inst_37836 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37860_37889 = state_37852__$1;
(statearr_37860_37889[(2)] = inst_37836);

(statearr_37860_37889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (6))){
var state_37852__$1 = state_37852;
var statearr_37861_37890 = state_37852__$1;
(statearr_37861_37890[(2)] = null);

(statearr_37861_37890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (17))){
var inst_37834 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37862_37891 = state_37852__$1;
(statearr_37862_37891[(2)] = inst_37834);

(statearr_37862_37891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (3))){
var inst_37850 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37852__$1,inst_37850);
} else {
if((state_val_37853 === (12))){
var inst_37811 = (state_37852[(9)]);
var inst_37825 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37811,opts);
var state_37852__$1 = state_37852;
if(cljs.core.truth_(inst_37825)){
var statearr_37863_37892 = state_37852__$1;
(statearr_37863_37892[(1)] = (15));

} else {
var statearr_37864_37893 = state_37852__$1;
(statearr_37864_37893[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (2))){
var state_37852__$1 = state_37852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37852__$1,(4),ch);
} else {
if((state_val_37853 === (11))){
var inst_37812 = (state_37852[(8)]);
var inst_37817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37818 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37812);
var inst_37819 = cljs.core.async.timeout.call(null,(1000));
var inst_37820 = [inst_37818,inst_37819];
var inst_37821 = (new cljs.core.PersistentVector(null,2,(5),inst_37817,inst_37820,null));
var state_37852__$1 = state_37852;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37852__$1,(14),inst_37821);
} else {
if((state_val_37853 === (9))){
var inst_37812 = (state_37852[(8)]);
var inst_37838 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37839 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37812);
var inst_37840 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37839);
var inst_37841 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37840)].join('');
var inst_37842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37841);
var state_37852__$1 = (function (){var statearr_37865 = state_37852;
(statearr_37865[(10)] = inst_37838);

return statearr_37865;
})();
var statearr_37866_37894 = state_37852__$1;
(statearr_37866_37894[(2)] = inst_37842);

(statearr_37866_37894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (5))){
var inst_37805 = (state_37852[(7)]);
var inst_37807 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37808 = (new cljs.core.PersistentArrayMap(null,2,inst_37807,null));
var inst_37809 = (new cljs.core.PersistentHashSet(null,inst_37808,null));
var inst_37810 = figwheel.client.focus_msgs.call(null,inst_37809,inst_37805);
var inst_37811 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37810);
var inst_37812 = cljs.core.first.call(null,inst_37810);
var inst_37813 = figwheel.client.autoload_QMARK_.call(null);
var state_37852__$1 = (function (){var statearr_37867 = state_37852;
(statearr_37867[(9)] = inst_37811);

(statearr_37867[(8)] = inst_37812);

return statearr_37867;
})();
if(cljs.core.truth_(inst_37813)){
var statearr_37868_37895 = state_37852__$1;
(statearr_37868_37895[(1)] = (8));

} else {
var statearr_37869_37896 = state_37852__$1;
(statearr_37869_37896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (14))){
var inst_37823 = (state_37852[(2)]);
var state_37852__$1 = state_37852;
var statearr_37870_37897 = state_37852__$1;
(statearr_37870_37897[(2)] = inst_37823);

(statearr_37870_37897[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (16))){
var state_37852__$1 = state_37852;
var statearr_37871_37898 = state_37852__$1;
(statearr_37871_37898[(2)] = null);

(statearr_37871_37898[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (10))){
var inst_37844 = (state_37852[(2)]);
var state_37852__$1 = (function (){var statearr_37872 = state_37852;
(statearr_37872[(11)] = inst_37844);

return statearr_37872;
})();
var statearr_37873_37899 = state_37852__$1;
(statearr_37873_37899[(2)] = null);

(statearr_37873_37899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37853 === (8))){
var inst_37811 = (state_37852[(9)]);
var inst_37815 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37811,opts);
var state_37852__$1 = state_37852;
if(cljs.core.truth_(inst_37815)){
var statearr_37874_37900 = state_37852__$1;
(statearr_37874_37900[(1)] = (11));

} else {
var statearr_37875_37901 = state_37852__$1;
(statearr_37875_37901[(1)] = (12));

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
});})(c__30204__auto___37883,ch))
;
return ((function (switch__30092__auto__,c__30204__auto___37883,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____0 = (function (){
var statearr_37879 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37879[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__);

(statearr_37879[(1)] = (1));

return statearr_37879;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____1 = (function (state_37852){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_37852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e37880){if((e37880 instanceof Object)){
var ex__30096__auto__ = e37880;
var statearr_37881_37902 = state_37852;
(statearr_37881_37902[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37903 = state_37852;
state_37852 = G__37903;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__ = function(state_37852){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____1.call(this,state_37852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30093__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___37883,ch))
})();
var state__30206__auto__ = (function (){var statearr_37882 = f__30205__auto__.call(null);
(statearr_37882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___37883);

return statearr_37882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___37883,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37904_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37904_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37907 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37907){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37906){if((e37906 instanceof Error)){
var e = e37906;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37907], null));
} else {
var e = e37906;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37907))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37908){
var map__37917 = p__37908;
var map__37917__$1 = ((((!((map__37917 == null)))?((((map__37917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37917):map__37917);
var opts = map__37917__$1;
var build_id = cljs.core.get.call(null,map__37917__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37917,map__37917__$1,opts,build_id){
return (function (p__37919){
var vec__37920 = p__37919;
var seq__37921 = cljs.core.seq.call(null,vec__37920);
var first__37922 = cljs.core.first.call(null,seq__37921);
var seq__37921__$1 = cljs.core.next.call(null,seq__37921);
var map__37923 = first__37922;
var map__37923__$1 = ((((!((map__37923 == null)))?((((map__37923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37923.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37923):map__37923);
var msg = map__37923__$1;
var msg_name = cljs.core.get.call(null,map__37923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37921__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37920,seq__37921,first__37922,seq__37921__$1,map__37923,map__37923__$1,msg,msg_name,_,map__37917,map__37917__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37920,seq__37921,first__37922,seq__37921__$1,map__37923,map__37923__$1,msg,msg_name,_,map__37917,map__37917__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37917,map__37917__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37931){
var vec__37932 = p__37931;
var seq__37933 = cljs.core.seq.call(null,vec__37932);
var first__37934 = cljs.core.first.call(null,seq__37933);
var seq__37933__$1 = cljs.core.next.call(null,seq__37933);
var map__37935 = first__37934;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var msg = map__37935__$1;
var msg_name = cljs.core.get.call(null,map__37935__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37933__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37937){
var map__37949 = p__37937;
var map__37949__$1 = ((((!((map__37949 == null)))?((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37949):map__37949);
var on_compile_warning = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37949__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37949,map__37949__$1,on_compile_warning,on_compile_fail){
return (function (p__37951){
var vec__37952 = p__37951;
var seq__37953 = cljs.core.seq.call(null,vec__37952);
var first__37954 = cljs.core.first.call(null,seq__37953);
var seq__37953__$1 = cljs.core.next.call(null,seq__37953);
var map__37955 = first__37954;
var map__37955__$1 = ((((!((map__37955 == null)))?((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37955):map__37955);
var msg = map__37955__$1;
var msg_name = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37953__$1;
var pred__37957 = cljs.core._EQ_;
var expr__37958 = msg_name;
if(cljs.core.truth_(pred__37957.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37958))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37957.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37958))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37949,map__37949__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__,msg_hist,msg_names,msg){
return (function (state_38186){
var state_val_38187 = (state_38186[(1)]);
if((state_val_38187 === (7))){
var inst_38106 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38106)){
var statearr_38188_38238 = state_38186__$1;
(statearr_38188_38238[(1)] = (8));

} else {
var statearr_38189_38239 = state_38186__$1;
(statearr_38189_38239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (20))){
var inst_38180 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38190_38240 = state_38186__$1;
(statearr_38190_38240[(2)] = inst_38180);

(statearr_38190_38240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (27))){
var inst_38176 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38191_38241 = state_38186__$1;
(statearr_38191_38241[(2)] = inst_38176);

(statearr_38191_38241[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (1))){
var inst_38099 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38099)){
var statearr_38192_38242 = state_38186__$1;
(statearr_38192_38242[(1)] = (2));

} else {
var statearr_38193_38243 = state_38186__$1;
(statearr_38193_38243[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (24))){
var inst_38178 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38194_38244 = state_38186__$1;
(statearr_38194_38244[(2)] = inst_38178);

(statearr_38194_38244[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (4))){
var inst_38184 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38186__$1,inst_38184);
} else {
if((state_val_38187 === (15))){
var inst_38182 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38195_38245 = state_38186__$1;
(statearr_38195_38245[(2)] = inst_38182);

(statearr_38195_38245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (21))){
var inst_38135 = (state_38186[(2)]);
var inst_38136 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38137 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38136);
var state_38186__$1 = (function (){var statearr_38196 = state_38186;
(statearr_38196[(7)] = inst_38135);

return statearr_38196;
})();
var statearr_38197_38246 = state_38186__$1;
(statearr_38197_38246[(2)] = inst_38137);

(statearr_38197_38246[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (31))){
var inst_38165 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38165)){
var statearr_38198_38247 = state_38186__$1;
(statearr_38198_38247[(1)] = (34));

} else {
var statearr_38199_38248 = state_38186__$1;
(statearr_38199_38248[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (32))){
var inst_38174 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38200_38249 = state_38186__$1;
(statearr_38200_38249[(2)] = inst_38174);

(statearr_38200_38249[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (33))){
var inst_38161 = (state_38186[(2)]);
var inst_38162 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38163 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38162);
var state_38186__$1 = (function (){var statearr_38201 = state_38186;
(statearr_38201[(8)] = inst_38161);

return statearr_38201;
})();
var statearr_38202_38250 = state_38186__$1;
(statearr_38202_38250[(2)] = inst_38163);

(statearr_38202_38250[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (13))){
var inst_38120 = figwheel.client.heads_up.clear.call(null);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(16),inst_38120);
} else {
if((state_val_38187 === (22))){
var inst_38141 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38142 = figwheel.client.heads_up.append_warning_message.call(null,inst_38141);
var state_38186__$1 = state_38186;
var statearr_38203_38251 = state_38186__$1;
(statearr_38203_38251[(2)] = inst_38142);

(statearr_38203_38251[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (36))){
var inst_38172 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38204_38252 = state_38186__$1;
(statearr_38204_38252[(2)] = inst_38172);

(statearr_38204_38252[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (29))){
var inst_38152 = (state_38186[(2)]);
var inst_38153 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38154 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38153);
var state_38186__$1 = (function (){var statearr_38205 = state_38186;
(statearr_38205[(9)] = inst_38152);

return statearr_38205;
})();
var statearr_38206_38253 = state_38186__$1;
(statearr_38206_38253[(2)] = inst_38154);

(statearr_38206_38253[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (6))){
var inst_38101 = (state_38186[(10)]);
var state_38186__$1 = state_38186;
var statearr_38207_38254 = state_38186__$1;
(statearr_38207_38254[(2)] = inst_38101);

(statearr_38207_38254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (28))){
var inst_38148 = (state_38186[(2)]);
var inst_38149 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38150 = figwheel.client.heads_up.display_warning.call(null,inst_38149);
var state_38186__$1 = (function (){var statearr_38208 = state_38186;
(statearr_38208[(11)] = inst_38148);

return statearr_38208;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(29),inst_38150);
} else {
if((state_val_38187 === (25))){
var inst_38146 = figwheel.client.heads_up.clear.call(null);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(28),inst_38146);
} else {
if((state_val_38187 === (34))){
var inst_38167 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(37),inst_38167);
} else {
if((state_val_38187 === (17))){
var inst_38126 = (state_38186[(2)]);
var inst_38127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38128 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38127);
var state_38186__$1 = (function (){var statearr_38209 = state_38186;
(statearr_38209[(12)] = inst_38126);

return statearr_38209;
})();
var statearr_38210_38255 = state_38186__$1;
(statearr_38210_38255[(2)] = inst_38128);

(statearr_38210_38255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (3))){
var inst_38118 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38118)){
var statearr_38211_38256 = state_38186__$1;
(statearr_38211_38256[(1)] = (13));

} else {
var statearr_38212_38257 = state_38186__$1;
(statearr_38212_38257[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (12))){
var inst_38114 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38213_38258 = state_38186__$1;
(statearr_38213_38258[(2)] = inst_38114);

(statearr_38213_38258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (2))){
var inst_38101 = (state_38186[(10)]);
var inst_38101__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38186__$1 = (function (){var statearr_38214 = state_38186;
(statearr_38214[(10)] = inst_38101__$1);

return statearr_38214;
})();
if(cljs.core.truth_(inst_38101__$1)){
var statearr_38215_38259 = state_38186__$1;
(statearr_38215_38259[(1)] = (5));

} else {
var statearr_38216_38260 = state_38186__$1;
(statearr_38216_38260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (23))){
var inst_38144 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38144)){
var statearr_38217_38261 = state_38186__$1;
(statearr_38217_38261[(1)] = (25));

} else {
var statearr_38218_38262 = state_38186__$1;
(statearr_38218_38262[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (35))){
var state_38186__$1 = state_38186;
var statearr_38219_38263 = state_38186__$1;
(statearr_38219_38263[(2)] = null);

(statearr_38219_38263[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (19))){
var inst_38139 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38139)){
var statearr_38220_38264 = state_38186__$1;
(statearr_38220_38264[(1)] = (22));

} else {
var statearr_38221_38265 = state_38186__$1;
(statearr_38221_38265[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (11))){
var inst_38110 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38222_38266 = state_38186__$1;
(statearr_38222_38266[(2)] = inst_38110);

(statearr_38222_38266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (9))){
var inst_38112 = figwheel.client.heads_up.clear.call(null);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(12),inst_38112);
} else {
if((state_val_38187 === (5))){
var inst_38103 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38186__$1 = state_38186;
var statearr_38223_38267 = state_38186__$1;
(statearr_38223_38267[(2)] = inst_38103);

(statearr_38223_38267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (14))){
var inst_38130 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38130)){
var statearr_38224_38268 = state_38186__$1;
(statearr_38224_38268[(1)] = (18));

} else {
var statearr_38225_38269 = state_38186__$1;
(statearr_38225_38269[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (26))){
var inst_38156 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38186__$1 = state_38186;
if(cljs.core.truth_(inst_38156)){
var statearr_38226_38270 = state_38186__$1;
(statearr_38226_38270[(1)] = (30));

} else {
var statearr_38227_38271 = state_38186__$1;
(statearr_38227_38271[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (16))){
var inst_38122 = (state_38186[(2)]);
var inst_38123 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38124 = figwheel.client.heads_up.display_exception.call(null,inst_38123);
var state_38186__$1 = (function (){var statearr_38228 = state_38186;
(statearr_38228[(13)] = inst_38122);

return statearr_38228;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(17),inst_38124);
} else {
if((state_val_38187 === (30))){
var inst_38158 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38159 = figwheel.client.heads_up.display_warning.call(null,inst_38158);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(33),inst_38159);
} else {
if((state_val_38187 === (10))){
var inst_38116 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38229_38272 = state_38186__$1;
(statearr_38229_38272[(2)] = inst_38116);

(statearr_38229_38272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (18))){
var inst_38132 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38133 = figwheel.client.heads_up.display_exception.call(null,inst_38132);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(21),inst_38133);
} else {
if((state_val_38187 === (37))){
var inst_38169 = (state_38186[(2)]);
var state_38186__$1 = state_38186;
var statearr_38230_38273 = state_38186__$1;
(statearr_38230_38273[(2)] = inst_38169);

(statearr_38230_38273[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38187 === (8))){
var inst_38108 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38186__$1 = state_38186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38186__$1,(11),inst_38108);
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
});})(c__30204__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30092__auto__,c__30204__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____0 = (function (){
var statearr_38234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38234[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__);

(statearr_38234[(1)] = (1));

return statearr_38234;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____1 = (function (state_38186){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_38186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e38235){if((e38235 instanceof Object)){
var ex__30096__auto__ = e38235;
var statearr_38236_38274 = state_38186;
(statearr_38236_38274[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38275 = state_38186;
state_38186 = G__38275;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__ = function(state_38186){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____1.call(this,state_38186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__,msg_hist,msg_names,msg))
})();
var state__30206__auto__ = (function (){var statearr_38237 = f__30205__auto__.call(null);
(statearr_38237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_38237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__,msg_hist,msg_names,msg))
);

return c__30204__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30204__auto___38338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___38338,ch){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___38338,ch){
return (function (state_38321){
var state_val_38322 = (state_38321[(1)]);
if((state_val_38322 === (1))){
var state_38321__$1 = state_38321;
var statearr_38323_38339 = state_38321__$1;
(statearr_38323_38339[(2)] = null);

(statearr_38323_38339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (2))){
var state_38321__$1 = state_38321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38321__$1,(4),ch);
} else {
if((state_val_38322 === (3))){
var inst_38319 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38321__$1,inst_38319);
} else {
if((state_val_38322 === (4))){
var inst_38309 = (state_38321[(7)]);
var inst_38309__$1 = (state_38321[(2)]);
var state_38321__$1 = (function (){var statearr_38324 = state_38321;
(statearr_38324[(7)] = inst_38309__$1);

return statearr_38324;
})();
if(cljs.core.truth_(inst_38309__$1)){
var statearr_38325_38340 = state_38321__$1;
(statearr_38325_38340[(1)] = (5));

} else {
var statearr_38326_38341 = state_38321__$1;
(statearr_38326_38341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (5))){
var inst_38309 = (state_38321[(7)]);
var inst_38311 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38309);
var state_38321__$1 = state_38321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38321__$1,(8),inst_38311);
} else {
if((state_val_38322 === (6))){
var state_38321__$1 = state_38321;
var statearr_38327_38342 = state_38321__$1;
(statearr_38327_38342[(2)] = null);

(statearr_38327_38342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (7))){
var inst_38317 = (state_38321[(2)]);
var state_38321__$1 = state_38321;
var statearr_38328_38343 = state_38321__$1;
(statearr_38328_38343[(2)] = inst_38317);

(statearr_38328_38343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38322 === (8))){
var inst_38313 = (state_38321[(2)]);
var state_38321__$1 = (function (){var statearr_38329 = state_38321;
(statearr_38329[(8)] = inst_38313);

return statearr_38329;
})();
var statearr_38330_38344 = state_38321__$1;
(statearr_38330_38344[(2)] = null);

(statearr_38330_38344[(1)] = (2));


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
});})(c__30204__auto___38338,ch))
;
return ((function (switch__30092__auto__,c__30204__auto___38338,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30093__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30093__auto____0 = (function (){
var statearr_38334 = [null,null,null,null,null,null,null,null,null];
(statearr_38334[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30093__auto__);

(statearr_38334[(1)] = (1));

return statearr_38334;
});
var figwheel$client$heads_up_plugin_$_state_machine__30093__auto____1 = (function (state_38321){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_38321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e38335){if((e38335 instanceof Object)){
var ex__30096__auto__ = e38335;
var statearr_38336_38345 = state_38321;
(statearr_38336_38345[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38346 = state_38321;
state_38321 = G__38346;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30093__auto__ = function(state_38321){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30093__auto____1.call(this,state_38321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30093__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30093__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___38338,ch))
})();
var state__30206__auto__ = (function (){var statearr_38337 = f__30205__auto__.call(null);
(statearr_38337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___38338);

return statearr_38337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___38338,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__){
return (function (state_38367){
var state_val_38368 = (state_38367[(1)]);
if((state_val_38368 === (1))){
var inst_38362 = cljs.core.async.timeout.call(null,(3000));
var state_38367__$1 = state_38367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38367__$1,(2),inst_38362);
} else {
if((state_val_38368 === (2))){
var inst_38364 = (state_38367[(2)]);
var inst_38365 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38367__$1 = (function (){var statearr_38369 = state_38367;
(statearr_38369[(7)] = inst_38364);

return statearr_38369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38367__$1,inst_38365);
} else {
return null;
}
}
});})(c__30204__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____0 = (function (){
var statearr_38373 = [null,null,null,null,null,null,null,null];
(statearr_38373[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__);

(statearr_38373[(1)] = (1));

return statearr_38373;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____1 = (function (state_38367){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_38367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e38374){if((e38374 instanceof Object)){
var ex__30096__auto__ = e38374;
var statearr_38375_38377 = state_38367;
(statearr_38375_38377[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38378 = state_38367;
state_38367 = G__38378;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__ = function(state_38367){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____1.call(this,state_38367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30093__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__))
})();
var state__30206__auto__ = (function (){var statearr_38376 = f__30205__auto__.call(null);
(statearr_38376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_38376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__))
);

return c__30204__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38401){
var state_val_38402 = (state_38401[(1)]);
if((state_val_38402 === (1))){
var inst_38395 = cljs.core.async.timeout.call(null,(2000));
var state_38401__$1 = state_38401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38401__$1,(2),inst_38395);
} else {
if((state_val_38402 === (2))){
var inst_38397 = (state_38401[(2)]);
var inst_38398 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38399 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38398);
var state_38401__$1 = (function (){var statearr_38403 = state_38401;
(statearr_38403[(7)] = inst_38397);

return statearr_38403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38401__$1,inst_38399);
} else {
return null;
}
}
});})(c__30204__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____0 = (function (){
var statearr_38407 = [null,null,null,null,null,null,null,null];
(statearr_38407[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__);

(statearr_38407[(1)] = (1));

return statearr_38407;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____1 = (function (state_38401){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_38401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e38408){if((e38408 instanceof Object)){
var ex__30096__auto__ = e38408;
var statearr_38409_38411 = state_38401;
(statearr_38409_38411[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38412 = state_38401;
state_38401 = G__38412;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__ = function(state_38401){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____1.call(this,state_38401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30206__auto__ = (function (){var statearr_38410 = f__30205__auto__.call(null);
(statearr_38410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_38410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__,figwheel_version,temp__4657__auto__))
);

return c__30204__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38413){
var map__38417 = p__38413;
var map__38417__$1 = ((((!((map__38417 == null)))?((((map__38417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38417):map__38417);
var file = cljs.core.get.call(null,map__38417__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38417__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38417__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38419 = "";
var G__38419__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38419),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38419);
var G__38419__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38419__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38419__$1);
if(cljs.core.truth_((function (){var and__27196__auto__ = line;
if(cljs.core.truth_(and__27196__auto__)){
return column;
} else {
return and__27196__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38419__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38419__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38420){
var map__38427 = p__38420;
var map__38427__$1 = ((((!((map__38427 == null)))?((((map__38427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38427):map__38427);
var ed = map__38427__$1;
var formatted_exception = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38427__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38429_38433 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38430_38434 = null;
var count__38431_38435 = (0);
var i__38432_38436 = (0);
while(true){
if((i__38432_38436 < count__38431_38435)){
var msg_38437 = cljs.core._nth.call(null,chunk__38430_38434,i__38432_38436);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38437);

var G__38438 = seq__38429_38433;
var G__38439 = chunk__38430_38434;
var G__38440 = count__38431_38435;
var G__38441 = (i__38432_38436 + (1));
seq__38429_38433 = G__38438;
chunk__38430_38434 = G__38439;
count__38431_38435 = G__38440;
i__38432_38436 = G__38441;
continue;
} else {
var temp__4657__auto___38442 = cljs.core.seq.call(null,seq__38429_38433);
if(temp__4657__auto___38442){
var seq__38429_38443__$1 = temp__4657__auto___38442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38429_38443__$1)){
var c__28027__auto___38444 = cljs.core.chunk_first.call(null,seq__38429_38443__$1);
var G__38445 = cljs.core.chunk_rest.call(null,seq__38429_38443__$1);
var G__38446 = c__28027__auto___38444;
var G__38447 = cljs.core.count.call(null,c__28027__auto___38444);
var G__38448 = (0);
seq__38429_38433 = G__38445;
chunk__38430_38434 = G__38446;
count__38431_38435 = G__38447;
i__38432_38436 = G__38448;
continue;
} else {
var msg_38449 = cljs.core.first.call(null,seq__38429_38443__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38449);

var G__38450 = cljs.core.next.call(null,seq__38429_38443__$1);
var G__38451 = null;
var G__38452 = (0);
var G__38453 = (0);
seq__38429_38433 = G__38450;
chunk__38430_38434 = G__38451;
count__38431_38435 = G__38452;
i__38432_38436 = G__38453;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38454){
var map__38457 = p__38454;
var map__38457__$1 = ((((!((map__38457 == null)))?((((map__38457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38457):map__38457);
var w = map__38457__$1;
var message = cljs.core.get.call(null,map__38457__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27196__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27196__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27196__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38469 = cljs.core.seq.call(null,plugins);
var chunk__38470 = null;
var count__38471 = (0);
var i__38472 = (0);
while(true){
if((i__38472 < count__38471)){
var vec__38473 = cljs.core._nth.call(null,chunk__38470,i__38472);
var k = cljs.core.nth.call(null,vec__38473,(0),null);
var plugin = cljs.core.nth.call(null,vec__38473,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38479 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38469,chunk__38470,count__38471,i__38472,pl_38479,vec__38473,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38479.call(null,msg_hist);
});})(seq__38469,chunk__38470,count__38471,i__38472,pl_38479,vec__38473,k,plugin))
);
} else {
}

var G__38480 = seq__38469;
var G__38481 = chunk__38470;
var G__38482 = count__38471;
var G__38483 = (i__38472 + (1));
seq__38469 = G__38480;
chunk__38470 = G__38481;
count__38471 = G__38482;
i__38472 = G__38483;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38469);
if(temp__4657__auto__){
var seq__38469__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38469__$1)){
var c__28027__auto__ = cljs.core.chunk_first.call(null,seq__38469__$1);
var G__38484 = cljs.core.chunk_rest.call(null,seq__38469__$1);
var G__38485 = c__28027__auto__;
var G__38486 = cljs.core.count.call(null,c__28027__auto__);
var G__38487 = (0);
seq__38469 = G__38484;
chunk__38470 = G__38485;
count__38471 = G__38486;
i__38472 = G__38487;
continue;
} else {
var vec__38476 = cljs.core.first.call(null,seq__38469__$1);
var k = cljs.core.nth.call(null,vec__38476,(0),null);
var plugin = cljs.core.nth.call(null,vec__38476,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38488 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38469,chunk__38470,count__38471,i__38472,pl_38488,vec__38476,k,plugin,seq__38469__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38488.call(null,msg_hist);
});})(seq__38469,chunk__38470,count__38471,i__38472,pl_38488,vec__38476,k,plugin,seq__38469__$1,temp__4657__auto__))
);
} else {
}

var G__38489 = cljs.core.next.call(null,seq__38469__$1);
var G__38490 = null;
var G__38491 = (0);
var G__38492 = (0);
seq__38469 = G__38489;
chunk__38470 = G__38490;
count__38471 = G__38491;
i__38472 = G__38492;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38493 = [];
var len__28321__auto___38500 = arguments.length;
var i__28322__auto___38501 = (0);
while(true){
if((i__28322__auto___38501 < len__28321__auto___38500)){
args38493.push((arguments[i__28322__auto___38501]));

var G__38502 = (i__28322__auto___38501 + (1));
i__28322__auto___38501 = G__38502;
continue;
} else {
}
break;
}

var G__38495 = args38493.length;
switch (G__38495) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38493.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38496_38504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38497_38505 = null;
var count__38498_38506 = (0);
var i__38499_38507 = (0);
while(true){
if((i__38499_38507 < count__38498_38506)){
var msg_38508 = cljs.core._nth.call(null,chunk__38497_38505,i__38499_38507);
figwheel.client.socket.handle_incoming_message.call(null,msg_38508);

var G__38509 = seq__38496_38504;
var G__38510 = chunk__38497_38505;
var G__38511 = count__38498_38506;
var G__38512 = (i__38499_38507 + (1));
seq__38496_38504 = G__38509;
chunk__38497_38505 = G__38510;
count__38498_38506 = G__38511;
i__38499_38507 = G__38512;
continue;
} else {
var temp__4657__auto___38513 = cljs.core.seq.call(null,seq__38496_38504);
if(temp__4657__auto___38513){
var seq__38496_38514__$1 = temp__4657__auto___38513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38496_38514__$1)){
var c__28027__auto___38515 = cljs.core.chunk_first.call(null,seq__38496_38514__$1);
var G__38516 = cljs.core.chunk_rest.call(null,seq__38496_38514__$1);
var G__38517 = c__28027__auto___38515;
var G__38518 = cljs.core.count.call(null,c__28027__auto___38515);
var G__38519 = (0);
seq__38496_38504 = G__38516;
chunk__38497_38505 = G__38517;
count__38498_38506 = G__38518;
i__38499_38507 = G__38519;
continue;
} else {
var msg_38520 = cljs.core.first.call(null,seq__38496_38514__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38520);

var G__38521 = cljs.core.next.call(null,seq__38496_38514__$1);
var G__38522 = null;
var G__38523 = (0);
var G__38524 = (0);
seq__38496_38504 = G__38521;
chunk__38497_38505 = G__38522;
count__38498_38506 = G__38523;
i__38499_38507 = G__38524;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28328__auto__ = [];
var len__28321__auto___38529 = arguments.length;
var i__28322__auto___38530 = (0);
while(true){
if((i__28322__auto___38530 < len__28321__auto___38529)){
args__28328__auto__.push((arguments[i__28322__auto___38530]));

var G__38531 = (i__28322__auto___38530 + (1));
i__28322__auto___38530 = G__38531;
continue;
} else {
}
break;
}

var argseq__28329__auto__ = ((((0) < args__28328__auto__.length))?(new cljs.core.IndexedSeq(args__28328__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28329__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38526){
var map__38527 = p__38526;
var map__38527__$1 = ((((!((map__38527 == null)))?((((map__38527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38527):map__38527);
var opts = map__38527__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38525){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38525));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38533){if((e38533 instanceof Error)){
var e = e38533;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38533;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38537){
var map__38538 = p__38537;
var map__38538__$1 = ((((!((map__38538 == null)))?((((map__38538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38538):map__38538);
var msg_name = cljs.core.get.call(null,map__38538__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502515433677