// Compiled by ClojureScript 1.9.521 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27208__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27208__auto__){
return or__27208__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27208__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
var or__27208__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27208__auto____$1)){
return or__27208__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34847_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34847_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__34852 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34853 = null;
var count__34854 = (0);
var i__34855 = (0);
while(true){
if((i__34855 < count__34854)){
var n = cljs.core._nth.call(null,chunk__34853,i__34855);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34856 = seq__34852;
var G__34857 = chunk__34853;
var G__34858 = count__34854;
var G__34859 = (i__34855 + (1));
seq__34852 = G__34856;
chunk__34853 = G__34857;
count__34854 = G__34858;
i__34855 = G__34859;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34852);
if(temp__4657__auto__){
var seq__34852__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34852__$1)){
var c__28027__auto__ = cljs.core.chunk_first.call(null,seq__34852__$1);
var G__34860 = cljs.core.chunk_rest.call(null,seq__34852__$1);
var G__34861 = c__28027__auto__;
var G__34862 = cljs.core.count.call(null,c__28027__auto__);
var G__34863 = (0);
seq__34852 = G__34860;
chunk__34853 = G__34861;
count__34854 = G__34862;
i__34855 = G__34863;
continue;
} else {
var n = cljs.core.first.call(null,seq__34852__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34864 = cljs.core.next.call(null,seq__34852__$1);
var G__34865 = null;
var G__34866 = (0);
var G__34867 = (0);
seq__34852 = G__34864;
chunk__34853 = G__34865;
count__34854 = G__34866;
i__34855 = G__34867;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__34918_34929 = cljs.core.seq.call(null,deps);
var chunk__34919_34930 = null;
var count__34920_34931 = (0);
var i__34921_34932 = (0);
while(true){
if((i__34921_34932 < count__34920_34931)){
var dep_34933 = cljs.core._nth.call(null,chunk__34919_34930,i__34921_34932);
topo_sort_helper_STAR_.call(null,dep_34933,(depth + (1)),state);

var G__34934 = seq__34918_34929;
var G__34935 = chunk__34919_34930;
var G__34936 = count__34920_34931;
var G__34937 = (i__34921_34932 + (1));
seq__34918_34929 = G__34934;
chunk__34919_34930 = G__34935;
count__34920_34931 = G__34936;
i__34921_34932 = G__34937;
continue;
} else {
var temp__4657__auto___34938 = cljs.core.seq.call(null,seq__34918_34929);
if(temp__4657__auto___34938){
var seq__34918_34939__$1 = temp__4657__auto___34938;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34918_34939__$1)){
var c__28027__auto___34940 = cljs.core.chunk_first.call(null,seq__34918_34939__$1);
var G__34941 = cljs.core.chunk_rest.call(null,seq__34918_34939__$1);
var G__34942 = c__28027__auto___34940;
var G__34943 = cljs.core.count.call(null,c__28027__auto___34940);
var G__34944 = (0);
seq__34918_34929 = G__34941;
chunk__34919_34930 = G__34942;
count__34920_34931 = G__34943;
i__34921_34932 = G__34944;
continue;
} else {
var dep_34945 = cljs.core.first.call(null,seq__34918_34939__$1);
topo_sort_helper_STAR_.call(null,dep_34945,(depth + (1)),state);

var G__34946 = cljs.core.next.call(null,seq__34918_34939__$1);
var G__34947 = null;
var G__34948 = (0);
var G__34949 = (0);
seq__34918_34929 = G__34946;
chunk__34919_34930 = G__34947;
count__34920_34931 = G__34948;
i__34921_34932 = G__34949;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34922){
var vec__34926 = p__34922;
var seq__34927 = cljs.core.seq.call(null,vec__34926);
var first__34928 = cljs.core.first.call(null,seq__34927);
var seq__34927__$1 = cljs.core.next.call(null,seq__34927);
var x = first__34928;
var xs = seq__34927__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34926,seq__34927,first__34928,seq__34927__$1,x,xs,get_deps__$1){
return (function (p1__34868_SHARP_){
return clojure.set.difference.call(null,p1__34868_SHARP_,x);
});})(vec__34926,seq__34927,first__34928,seq__34927__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__34962 = cljs.core.seq.call(null,provides);
var chunk__34963 = null;
var count__34964 = (0);
var i__34965 = (0);
while(true){
if((i__34965 < count__34964)){
var prov = cljs.core._nth.call(null,chunk__34963,i__34965);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34966_34974 = cljs.core.seq.call(null,requires);
var chunk__34967_34975 = null;
var count__34968_34976 = (0);
var i__34969_34977 = (0);
while(true){
if((i__34969_34977 < count__34968_34976)){
var req_34978 = cljs.core._nth.call(null,chunk__34967_34975,i__34969_34977);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34978,prov);

var G__34979 = seq__34966_34974;
var G__34980 = chunk__34967_34975;
var G__34981 = count__34968_34976;
var G__34982 = (i__34969_34977 + (1));
seq__34966_34974 = G__34979;
chunk__34967_34975 = G__34980;
count__34968_34976 = G__34981;
i__34969_34977 = G__34982;
continue;
} else {
var temp__4657__auto___34983 = cljs.core.seq.call(null,seq__34966_34974);
if(temp__4657__auto___34983){
var seq__34966_34984__$1 = temp__4657__auto___34983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34966_34984__$1)){
var c__28027__auto___34985 = cljs.core.chunk_first.call(null,seq__34966_34984__$1);
var G__34986 = cljs.core.chunk_rest.call(null,seq__34966_34984__$1);
var G__34987 = c__28027__auto___34985;
var G__34988 = cljs.core.count.call(null,c__28027__auto___34985);
var G__34989 = (0);
seq__34966_34974 = G__34986;
chunk__34967_34975 = G__34987;
count__34968_34976 = G__34988;
i__34969_34977 = G__34989;
continue;
} else {
var req_34990 = cljs.core.first.call(null,seq__34966_34984__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34990,prov);

var G__34991 = cljs.core.next.call(null,seq__34966_34984__$1);
var G__34992 = null;
var G__34993 = (0);
var G__34994 = (0);
seq__34966_34974 = G__34991;
chunk__34967_34975 = G__34992;
count__34968_34976 = G__34993;
i__34969_34977 = G__34994;
continue;
}
} else {
}
}
break;
}

var G__34995 = seq__34962;
var G__34996 = chunk__34963;
var G__34997 = count__34964;
var G__34998 = (i__34965 + (1));
seq__34962 = G__34995;
chunk__34963 = G__34996;
count__34964 = G__34997;
i__34965 = G__34998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34962);
if(temp__4657__auto__){
var seq__34962__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34962__$1)){
var c__28027__auto__ = cljs.core.chunk_first.call(null,seq__34962__$1);
var G__34999 = cljs.core.chunk_rest.call(null,seq__34962__$1);
var G__35000 = c__28027__auto__;
var G__35001 = cljs.core.count.call(null,c__28027__auto__);
var G__35002 = (0);
seq__34962 = G__34999;
chunk__34963 = G__35000;
count__34964 = G__35001;
i__34965 = G__35002;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34962__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34970_35003 = cljs.core.seq.call(null,requires);
var chunk__34971_35004 = null;
var count__34972_35005 = (0);
var i__34973_35006 = (0);
while(true){
if((i__34973_35006 < count__34972_35005)){
var req_35007 = cljs.core._nth.call(null,chunk__34971_35004,i__34973_35006);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35007,prov);

var G__35008 = seq__34970_35003;
var G__35009 = chunk__34971_35004;
var G__35010 = count__34972_35005;
var G__35011 = (i__34973_35006 + (1));
seq__34970_35003 = G__35008;
chunk__34971_35004 = G__35009;
count__34972_35005 = G__35010;
i__34973_35006 = G__35011;
continue;
} else {
var temp__4657__auto___35012__$1 = cljs.core.seq.call(null,seq__34970_35003);
if(temp__4657__auto___35012__$1){
var seq__34970_35013__$1 = temp__4657__auto___35012__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34970_35013__$1)){
var c__28027__auto___35014 = cljs.core.chunk_first.call(null,seq__34970_35013__$1);
var G__35015 = cljs.core.chunk_rest.call(null,seq__34970_35013__$1);
var G__35016 = c__28027__auto___35014;
var G__35017 = cljs.core.count.call(null,c__28027__auto___35014);
var G__35018 = (0);
seq__34970_35003 = G__35015;
chunk__34971_35004 = G__35016;
count__34972_35005 = G__35017;
i__34973_35006 = G__35018;
continue;
} else {
var req_35019 = cljs.core.first.call(null,seq__34970_35013__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35019,prov);

var G__35020 = cljs.core.next.call(null,seq__34970_35013__$1);
var G__35021 = null;
var G__35022 = (0);
var G__35023 = (0);
seq__34970_35003 = G__35020;
chunk__34971_35004 = G__35021;
count__34972_35005 = G__35022;
i__34973_35006 = G__35023;
continue;
}
} else {
}
}
break;
}

var G__35024 = cljs.core.next.call(null,seq__34962__$1);
var G__35025 = null;
var G__35026 = (0);
var G__35027 = (0);
seq__34962 = G__35024;
chunk__34963 = G__35025;
count__34964 = G__35026;
i__34965 = G__35027;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35032_35036 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35033_35037 = null;
var count__35034_35038 = (0);
var i__35035_35039 = (0);
while(true){
if((i__35035_35039 < count__35034_35038)){
var ns_35040 = cljs.core._nth.call(null,chunk__35033_35037,i__35035_35039);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35040);

var G__35041 = seq__35032_35036;
var G__35042 = chunk__35033_35037;
var G__35043 = count__35034_35038;
var G__35044 = (i__35035_35039 + (1));
seq__35032_35036 = G__35041;
chunk__35033_35037 = G__35042;
count__35034_35038 = G__35043;
i__35035_35039 = G__35044;
continue;
} else {
var temp__4657__auto___35045 = cljs.core.seq.call(null,seq__35032_35036);
if(temp__4657__auto___35045){
var seq__35032_35046__$1 = temp__4657__auto___35045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35032_35046__$1)){
var c__28027__auto___35047 = cljs.core.chunk_first.call(null,seq__35032_35046__$1);
var G__35048 = cljs.core.chunk_rest.call(null,seq__35032_35046__$1);
var G__35049 = c__28027__auto___35047;
var G__35050 = cljs.core.count.call(null,c__28027__auto___35047);
var G__35051 = (0);
seq__35032_35036 = G__35048;
chunk__35033_35037 = G__35049;
count__35034_35038 = G__35050;
i__35035_35039 = G__35051;
continue;
} else {
var ns_35052 = cljs.core.first.call(null,seq__35032_35046__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35052);

var G__35053 = cljs.core.next.call(null,seq__35032_35046__$1);
var G__35054 = null;
var G__35055 = (0);
var G__35056 = (0);
seq__35032_35036 = G__35053;
chunk__35033_35037 = G__35054;
count__35034_35038 = G__35055;
i__35035_35039 = G__35056;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27208__auto__ = goog.require__;
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35057__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35057 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35058__i = 0, G__35058__a = new Array(arguments.length -  0);
while (G__35058__i < G__35058__a.length) {G__35058__a[G__35058__i] = arguments[G__35058__i + 0]; ++G__35058__i;}
  args = new cljs.core.IndexedSeq(G__35058__a,0);
} 
return G__35057__delegate.call(this,args);};
G__35057.cljs$lang$maxFixedArity = 0;
G__35057.cljs$lang$applyTo = (function (arglist__35059){
var args = cljs.core.seq(arglist__35059);
return G__35057__delegate(args);
});
G__35057.cljs$core$IFn$_invoke$arity$variadic = G__35057__delegate;
return G__35057;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35060 = cljs.core._EQ_;
var expr__35061 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35061))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__35060,expr__35061){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__35060,expr__35061))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__35060,expr__35061){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35063){if((e35063 instanceof Error)){
var e = e35063;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35063;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__35060,expr__35061))
} else {
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35061))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__35061))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__35060.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35061))){
return ((function (pred__35060,expr__35061){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35064){if((e35064 instanceof Error)){
var e = e35064;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35064;

}
}})());
});
;})(pred__35060,expr__35061))
} else {
return ((function (pred__35060,expr__35061){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35060,expr__35061))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35065,callback){
var map__35068 = p__35065;
var map__35068__$1 = ((((!((map__35068 == null)))?((((map__35068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35068.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35068):map__35068);
var file_msg = map__35068__$1;
var request_url = cljs.core.get.call(null,map__35068__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35068,map__35068__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35068,map__35068__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__){
return (function (state_35092){
var state_val_35093 = (state_35092[(1)]);
if((state_val_35093 === (7))){
var inst_35088 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
var statearr_35094_35114 = state_35092__$1;
(statearr_35094_35114[(2)] = inst_35088);

(statearr_35094_35114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (1))){
var state_35092__$1 = state_35092;
var statearr_35095_35115 = state_35092__$1;
(statearr_35095_35115[(2)] = null);

(statearr_35095_35115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (4))){
var inst_35072 = (state_35092[(7)]);
var inst_35072__$1 = (state_35092[(2)]);
var state_35092__$1 = (function (){var statearr_35096 = state_35092;
(statearr_35096[(7)] = inst_35072__$1);

return statearr_35096;
})();
if(cljs.core.truth_(inst_35072__$1)){
var statearr_35097_35116 = state_35092__$1;
(statearr_35097_35116[(1)] = (5));

} else {
var statearr_35098_35117 = state_35092__$1;
(statearr_35098_35117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (6))){
var state_35092__$1 = state_35092;
var statearr_35099_35118 = state_35092__$1;
(statearr_35099_35118[(2)] = null);

(statearr_35099_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (3))){
var inst_35090 = (state_35092[(2)]);
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35092__$1,inst_35090);
} else {
if((state_val_35093 === (2))){
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35093 === (11))){
var inst_35084 = (state_35092[(2)]);
var state_35092__$1 = (function (){var statearr_35100 = state_35092;
(statearr_35100[(8)] = inst_35084);

return statearr_35100;
})();
var statearr_35101_35119 = state_35092__$1;
(statearr_35101_35119[(2)] = null);

(statearr_35101_35119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (9))){
var inst_35076 = (state_35092[(9)]);
var inst_35078 = (state_35092[(10)]);
var inst_35080 = inst_35078.call(null,inst_35076);
var state_35092__$1 = state_35092;
var statearr_35102_35120 = state_35092__$1;
(statearr_35102_35120[(2)] = inst_35080);

(statearr_35102_35120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (5))){
var inst_35072 = (state_35092[(7)]);
var inst_35074 = figwheel.client.file_reloading.blocking_load.call(null,inst_35072);
var state_35092__$1 = state_35092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35092__$1,(8),inst_35074);
} else {
if((state_val_35093 === (10))){
var inst_35076 = (state_35092[(9)]);
var inst_35082 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35076);
var state_35092__$1 = state_35092;
var statearr_35103_35121 = state_35092__$1;
(statearr_35103_35121[(2)] = inst_35082);

(statearr_35103_35121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35093 === (8))){
var inst_35072 = (state_35092[(7)]);
var inst_35078 = (state_35092[(10)]);
var inst_35076 = (state_35092[(2)]);
var inst_35077 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35078__$1 = cljs.core.get.call(null,inst_35077,inst_35072);
var state_35092__$1 = (function (){var statearr_35104 = state_35092;
(statearr_35104[(9)] = inst_35076);

(statearr_35104[(10)] = inst_35078__$1);

return statearr_35104;
})();
if(cljs.core.truth_(inst_35078__$1)){
var statearr_35105_35122 = state_35092__$1;
(statearr_35105_35122[(1)] = (9));

} else {
var statearr_35106_35123 = state_35092__$1;
(statearr_35106_35123[(1)] = (10));

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
});})(c__30204__auto__))
;
return ((function (switch__30092__auto__,c__30204__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30093__auto__ = null;
var figwheel$client$file_reloading$state_machine__30093__auto____0 = (function (){
var statearr_35110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35110[(0)] = figwheel$client$file_reloading$state_machine__30093__auto__);

(statearr_35110[(1)] = (1));

return statearr_35110;
});
var figwheel$client$file_reloading$state_machine__30093__auto____1 = (function (state_35092){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_35092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e35111){if((e35111 instanceof Object)){
var ex__30096__auto__ = e35111;
var statearr_35112_35124 = state_35092;
(statearr_35112_35124[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35125 = state_35092;
state_35092 = G__35125;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30093__auto__ = function(state_35092){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30093__auto____1.call(this,state_35092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30093__auto____0;
figwheel$client$file_reloading$state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30093__auto____1;
return figwheel$client$file_reloading$state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__))
})();
var state__30206__auto__ = (function (){var statearr_35113 = f__30205__auto__.call(null);
(statearr_35113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__))
);

return c__30204__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35126,callback){
var map__35129 = p__35126;
var map__35129__$1 = ((((!((map__35129 == null)))?((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35129):map__35129);
var file_msg = map__35129__$1;
var namespace = cljs.core.get.call(null,map__35129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35129,map__35129__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35129,map__35129__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35131){
var map__35134 = p__35131;
var map__35134__$1 = ((((!((map__35134 == null)))?((((map__35134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35134):map__35134);
var file_msg = map__35134__$1;
var namespace = cljs.core.get.call(null,map__35134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35136){
var map__35139 = p__35136;
var map__35139__$1 = ((((!((map__35139 == null)))?((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35139):map__35139);
var file_msg = map__35139__$1;
var namespace = cljs.core.get.call(null,map__35139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27196__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27196__auto__){
var or__27208__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27208__auto__)){
return or__27208__auto__;
} else {
var or__27208__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27208__auto____$1)){
return or__27208__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27196__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35141,callback){
var map__35144 = p__35141;
var map__35144__$1 = ((((!((map__35144 == null)))?((((map__35144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35144):map__35144);
var file_msg = map__35144__$1;
var request_url = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35144__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30204__auto___35248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto___35248,out){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto___35248,out){
return (function (state_35230){
var state_val_35231 = (state_35230[(1)]);
if((state_val_35231 === (1))){
var inst_35204 = cljs.core.seq.call(null,files);
var inst_35205 = cljs.core.first.call(null,inst_35204);
var inst_35206 = cljs.core.next.call(null,inst_35204);
var inst_35207 = files;
var state_35230__$1 = (function (){var statearr_35232 = state_35230;
(statearr_35232[(7)] = inst_35207);

(statearr_35232[(8)] = inst_35205);

(statearr_35232[(9)] = inst_35206);

return statearr_35232;
})();
var statearr_35233_35249 = state_35230__$1;
(statearr_35233_35249[(2)] = null);

(statearr_35233_35249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (2))){
var inst_35207 = (state_35230[(7)]);
var inst_35213 = (state_35230[(10)]);
var inst_35212 = cljs.core.seq.call(null,inst_35207);
var inst_35213__$1 = cljs.core.first.call(null,inst_35212);
var inst_35214 = cljs.core.next.call(null,inst_35212);
var inst_35215 = (inst_35213__$1 == null);
var inst_35216 = cljs.core.not.call(null,inst_35215);
var state_35230__$1 = (function (){var statearr_35234 = state_35230;
(statearr_35234[(10)] = inst_35213__$1);

(statearr_35234[(11)] = inst_35214);

return statearr_35234;
})();
if(inst_35216){
var statearr_35235_35250 = state_35230__$1;
(statearr_35235_35250[(1)] = (4));

} else {
var statearr_35236_35251 = state_35230__$1;
(statearr_35236_35251[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (3))){
var inst_35228 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35230__$1,inst_35228);
} else {
if((state_val_35231 === (4))){
var inst_35213 = (state_35230[(10)]);
var inst_35218 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35213);
var state_35230__$1 = state_35230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35230__$1,(7),inst_35218);
} else {
if((state_val_35231 === (5))){
var inst_35224 = cljs.core.async.close_BANG_.call(null,out);
var state_35230__$1 = state_35230;
var statearr_35237_35252 = state_35230__$1;
(statearr_35237_35252[(2)] = inst_35224);

(statearr_35237_35252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (6))){
var inst_35226 = (state_35230[(2)]);
var state_35230__$1 = state_35230;
var statearr_35238_35253 = state_35230__$1;
(statearr_35238_35253[(2)] = inst_35226);

(statearr_35238_35253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35231 === (7))){
var inst_35214 = (state_35230[(11)]);
var inst_35220 = (state_35230[(2)]);
var inst_35221 = cljs.core.async.put_BANG_.call(null,out,inst_35220);
var inst_35207 = inst_35214;
var state_35230__$1 = (function (){var statearr_35239 = state_35230;
(statearr_35239[(7)] = inst_35207);

(statearr_35239[(12)] = inst_35221);

return statearr_35239;
})();
var statearr_35240_35254 = state_35230__$1;
(statearr_35240_35254[(2)] = null);

(statearr_35240_35254[(1)] = (2));


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
});})(c__30204__auto___35248,out))
;
return ((function (switch__30092__auto__,c__30204__auto___35248,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____0 = (function (){
var statearr_35244 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35244[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__);

(statearr_35244[(1)] = (1));

return statearr_35244;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____1 = (function (state_35230){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_35230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e35245){if((e35245 instanceof Object)){
var ex__30096__auto__ = e35245;
var statearr_35246_35255 = state_35230;
(statearr_35246_35255[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35256 = state_35230;
state_35230 = G__35256;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__ = function(state_35230){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____1.call(this,state_35230);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto___35248,out))
})();
var state__30206__auto__ = (function (){var statearr_35247 = f__30205__auto__.call(null);
(statearr_35247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto___35248);

return statearr_35247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto___35248,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35257,opts){
var map__35261 = p__35257;
var map__35261__$1 = ((((!((map__35261 == null)))?((((map__35261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35261):map__35261);
var eval_body = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35261__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27196__auto__ = eval_body;
if(cljs.core.truth_(and__27196__auto__)){
return typeof eval_body === 'string';
} else {
return and__27196__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35263){var e = e35263;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35264_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35264_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35273){
var vec__35274 = p__35273;
var k = cljs.core.nth.call(null,vec__35274,(0),null);
var v = cljs.core.nth.call(null,vec__35274,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35277){
var vec__35278 = p__35277;
var k = cljs.core.nth.call(null,vec__35278,(0),null);
var v = cljs.core.nth.call(null,vec__35278,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35284,p__35285){
var map__35533 = p__35284;
var map__35533__$1 = ((((!((map__35533 == null)))?((((map__35533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35533.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35533):map__35533);
var opts = map__35533__$1;
var before_jsload = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35533__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35534 = p__35285;
var map__35534__$1 = ((((!((map__35534 == null)))?((((map__35534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35534):map__35534);
var msg = map__35534__$1;
var files = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35534__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30204__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30205__auto__ = (function (){var switch__30092__auto__ = ((function (c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35688){
var state_val_35689 = (state_35688[(1)]);
if((state_val_35689 === (7))){
var inst_35548 = (state_35688[(7)]);
var inst_35549 = (state_35688[(8)]);
var inst_35550 = (state_35688[(9)]);
var inst_35551 = (state_35688[(10)]);
var inst_35556 = cljs.core._nth.call(null,inst_35549,inst_35551);
var inst_35557 = figwheel.client.file_reloading.eval_body.call(null,inst_35556,opts);
var inst_35558 = (inst_35551 + (1));
var tmp35690 = inst_35548;
var tmp35691 = inst_35549;
var tmp35692 = inst_35550;
var inst_35548__$1 = tmp35690;
var inst_35549__$1 = tmp35691;
var inst_35550__$1 = tmp35692;
var inst_35551__$1 = inst_35558;
var state_35688__$1 = (function (){var statearr_35693 = state_35688;
(statearr_35693[(7)] = inst_35548__$1);

(statearr_35693[(11)] = inst_35557);

(statearr_35693[(8)] = inst_35549__$1);

(statearr_35693[(9)] = inst_35550__$1);

(statearr_35693[(10)] = inst_35551__$1);

return statearr_35693;
})();
var statearr_35694_35780 = state_35688__$1;
(statearr_35694_35780[(2)] = null);

(statearr_35694_35780[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (20))){
var inst_35591 = (state_35688[(12)]);
var inst_35599 = figwheel.client.file_reloading.sort_files.call(null,inst_35591);
var state_35688__$1 = state_35688;
var statearr_35695_35781 = state_35688__$1;
(statearr_35695_35781[(2)] = inst_35599);

(statearr_35695_35781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (27))){
var state_35688__$1 = state_35688;
var statearr_35696_35782 = state_35688__$1;
(statearr_35696_35782[(2)] = null);

(statearr_35696_35782[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (1))){
var inst_35540 = (state_35688[(13)]);
var inst_35537 = before_jsload.call(null,files);
var inst_35538 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35539 = (function (){return ((function (inst_35540,inst_35537,inst_35538,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35281_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35281_SHARP_);
});
;})(inst_35540,inst_35537,inst_35538,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35540__$1 = cljs.core.filter.call(null,inst_35539,files);
var inst_35541 = cljs.core.not_empty.call(null,inst_35540__$1);
var state_35688__$1 = (function (){var statearr_35697 = state_35688;
(statearr_35697[(14)] = inst_35538);

(statearr_35697[(13)] = inst_35540__$1);

(statearr_35697[(15)] = inst_35537);

return statearr_35697;
})();
if(cljs.core.truth_(inst_35541)){
var statearr_35698_35783 = state_35688__$1;
(statearr_35698_35783[(1)] = (2));

} else {
var statearr_35699_35784 = state_35688__$1;
(statearr_35699_35784[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (24))){
var state_35688__$1 = state_35688;
var statearr_35700_35785 = state_35688__$1;
(statearr_35700_35785[(2)] = null);

(statearr_35700_35785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (39))){
var inst_35641 = (state_35688[(16)]);
var state_35688__$1 = state_35688;
var statearr_35701_35786 = state_35688__$1;
(statearr_35701_35786[(2)] = inst_35641);

(statearr_35701_35786[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (46))){
var inst_35683 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35702_35787 = state_35688__$1;
(statearr_35702_35787[(2)] = inst_35683);

(statearr_35702_35787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (4))){
var inst_35585 = (state_35688[(2)]);
var inst_35586 = cljs.core.List.EMPTY;
var inst_35587 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35586);
var inst_35588 = (function (){return ((function (inst_35585,inst_35586,inst_35587,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35282_SHARP_){
var and__27196__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35282_SHARP_);
if(cljs.core.truth_(and__27196__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35282_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35282_SHARP_)));
} else {
return and__27196__auto__;
}
});
;})(inst_35585,inst_35586,inst_35587,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35589 = cljs.core.filter.call(null,inst_35588,files);
var inst_35590 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35591 = cljs.core.concat.call(null,inst_35589,inst_35590);
var state_35688__$1 = (function (){var statearr_35703 = state_35688;
(statearr_35703[(17)] = inst_35585);

(statearr_35703[(12)] = inst_35591);

(statearr_35703[(18)] = inst_35587);

return statearr_35703;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35704_35788 = state_35688__$1;
(statearr_35704_35788[(1)] = (16));

} else {
var statearr_35705_35789 = state_35688__$1;
(statearr_35705_35789[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (15))){
var inst_35575 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35706_35790 = state_35688__$1;
(statearr_35706_35790[(2)] = inst_35575);

(statearr_35706_35790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (21))){
var inst_35601 = (state_35688[(19)]);
var inst_35601__$1 = (state_35688[(2)]);
var inst_35602 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35601__$1);
var state_35688__$1 = (function (){var statearr_35707 = state_35688;
(statearr_35707[(19)] = inst_35601__$1);

return statearr_35707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(22),inst_35602);
} else {
if((state_val_35689 === (31))){
var inst_35686 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35688__$1,inst_35686);
} else {
if((state_val_35689 === (32))){
var inst_35641 = (state_35688[(16)]);
var inst_35646 = inst_35641.cljs$lang$protocol_mask$partition0$;
var inst_35647 = (inst_35646 & (64));
var inst_35648 = inst_35641.cljs$core$ISeq$;
var inst_35649 = (cljs.core.PROTOCOL_SENTINEL === inst_35648);
var inst_35650 = (inst_35647) || (inst_35649);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35650)){
var statearr_35708_35791 = state_35688__$1;
(statearr_35708_35791[(1)] = (35));

} else {
var statearr_35709_35792 = state_35688__$1;
(statearr_35709_35792[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (40))){
var inst_35663 = (state_35688[(20)]);
var inst_35662 = (state_35688[(2)]);
var inst_35663__$1 = cljs.core.get.call(null,inst_35662,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35664 = cljs.core.get.call(null,inst_35662,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35665 = cljs.core.not_empty.call(null,inst_35663__$1);
var state_35688__$1 = (function (){var statearr_35710 = state_35688;
(statearr_35710[(20)] = inst_35663__$1);

(statearr_35710[(21)] = inst_35664);

return statearr_35710;
})();
if(cljs.core.truth_(inst_35665)){
var statearr_35711_35793 = state_35688__$1;
(statearr_35711_35793[(1)] = (41));

} else {
var statearr_35712_35794 = state_35688__$1;
(statearr_35712_35794[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (33))){
var state_35688__$1 = state_35688;
var statearr_35713_35795 = state_35688__$1;
(statearr_35713_35795[(2)] = false);

(statearr_35713_35795[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (13))){
var inst_35561 = (state_35688[(22)]);
var inst_35565 = cljs.core.chunk_first.call(null,inst_35561);
var inst_35566 = cljs.core.chunk_rest.call(null,inst_35561);
var inst_35567 = cljs.core.count.call(null,inst_35565);
var inst_35548 = inst_35566;
var inst_35549 = inst_35565;
var inst_35550 = inst_35567;
var inst_35551 = (0);
var state_35688__$1 = (function (){var statearr_35714 = state_35688;
(statearr_35714[(7)] = inst_35548);

(statearr_35714[(8)] = inst_35549);

(statearr_35714[(9)] = inst_35550);

(statearr_35714[(10)] = inst_35551);

return statearr_35714;
})();
var statearr_35715_35796 = state_35688__$1;
(statearr_35715_35796[(2)] = null);

(statearr_35715_35796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (22))){
var inst_35605 = (state_35688[(23)]);
var inst_35601 = (state_35688[(19)]);
var inst_35609 = (state_35688[(24)]);
var inst_35604 = (state_35688[(25)]);
var inst_35604__$1 = (state_35688[(2)]);
var inst_35605__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35604__$1);
var inst_35606 = (function (){var all_files = inst_35601;
var res_SINGLEQUOTE_ = inst_35604__$1;
var res = inst_35605__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35605,inst_35601,inst_35609,inst_35604,inst_35604__$1,inst_35605__$1,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35283_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35283_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35605,inst_35601,inst_35609,inst_35604,inst_35604__$1,inst_35605__$1,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35607 = cljs.core.filter.call(null,inst_35606,inst_35604__$1);
var inst_35608 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35609__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35608);
var inst_35610 = cljs.core.not_empty.call(null,inst_35609__$1);
var state_35688__$1 = (function (){var statearr_35716 = state_35688;
(statearr_35716[(23)] = inst_35605__$1);

(statearr_35716[(24)] = inst_35609__$1);

(statearr_35716[(25)] = inst_35604__$1);

(statearr_35716[(26)] = inst_35607);

return statearr_35716;
})();
if(cljs.core.truth_(inst_35610)){
var statearr_35717_35797 = state_35688__$1;
(statearr_35717_35797[(1)] = (23));

} else {
var statearr_35718_35798 = state_35688__$1;
(statearr_35718_35798[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (36))){
var state_35688__$1 = state_35688;
var statearr_35719_35799 = state_35688__$1;
(statearr_35719_35799[(2)] = false);

(statearr_35719_35799[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (41))){
var inst_35663 = (state_35688[(20)]);
var inst_35667 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35668 = cljs.core.map.call(null,inst_35667,inst_35663);
var inst_35669 = cljs.core.pr_str.call(null,inst_35668);
var inst_35670 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35669)].join('');
var inst_35671 = figwheel.client.utils.log.call(null,inst_35670);
var state_35688__$1 = state_35688;
var statearr_35720_35800 = state_35688__$1;
(statearr_35720_35800[(2)] = inst_35671);

(statearr_35720_35800[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (43))){
var inst_35664 = (state_35688[(21)]);
var inst_35674 = (state_35688[(2)]);
var inst_35675 = cljs.core.not_empty.call(null,inst_35664);
var state_35688__$1 = (function (){var statearr_35721 = state_35688;
(statearr_35721[(27)] = inst_35674);

return statearr_35721;
})();
if(cljs.core.truth_(inst_35675)){
var statearr_35722_35801 = state_35688__$1;
(statearr_35722_35801[(1)] = (44));

} else {
var statearr_35723_35802 = state_35688__$1;
(statearr_35723_35802[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (29))){
var inst_35641 = (state_35688[(16)]);
var inst_35605 = (state_35688[(23)]);
var inst_35601 = (state_35688[(19)]);
var inst_35609 = (state_35688[(24)]);
var inst_35604 = (state_35688[(25)]);
var inst_35607 = (state_35688[(26)]);
var inst_35637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35640 = (function (){var all_files = inst_35601;
var res_SINGLEQUOTE_ = inst_35604;
var res = inst_35605;
var files_not_loaded = inst_35607;
var dependencies_that_loaded = inst_35609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35641,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35637,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35639){
var map__35724 = p__35639;
var map__35724__$1 = ((((!((map__35724 == null)))?((((map__35724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35724):map__35724);
var namespace = cljs.core.get.call(null,map__35724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35641,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35637,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35641__$1 = cljs.core.group_by.call(null,inst_35640,inst_35607);
var inst_35643 = (inst_35641__$1 == null);
var inst_35644 = cljs.core.not.call(null,inst_35643);
var state_35688__$1 = (function (){var statearr_35726 = state_35688;
(statearr_35726[(16)] = inst_35641__$1);

(statearr_35726[(28)] = inst_35637);

return statearr_35726;
})();
if(inst_35644){
var statearr_35727_35803 = state_35688__$1;
(statearr_35727_35803[(1)] = (32));

} else {
var statearr_35728_35804 = state_35688__$1;
(statearr_35728_35804[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (44))){
var inst_35664 = (state_35688[(21)]);
var inst_35677 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35664);
var inst_35678 = cljs.core.pr_str.call(null,inst_35677);
var inst_35679 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35678)].join('');
var inst_35680 = figwheel.client.utils.log.call(null,inst_35679);
var state_35688__$1 = state_35688;
var statearr_35729_35805 = state_35688__$1;
(statearr_35729_35805[(2)] = inst_35680);

(statearr_35729_35805[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (6))){
var inst_35582 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35730_35806 = state_35688__$1;
(statearr_35730_35806[(2)] = inst_35582);

(statearr_35730_35806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (28))){
var inst_35607 = (state_35688[(26)]);
var inst_35634 = (state_35688[(2)]);
var inst_35635 = cljs.core.not_empty.call(null,inst_35607);
var state_35688__$1 = (function (){var statearr_35731 = state_35688;
(statearr_35731[(29)] = inst_35634);

return statearr_35731;
})();
if(cljs.core.truth_(inst_35635)){
var statearr_35732_35807 = state_35688__$1;
(statearr_35732_35807[(1)] = (29));

} else {
var statearr_35733_35808 = state_35688__$1;
(statearr_35733_35808[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (25))){
var inst_35605 = (state_35688[(23)]);
var inst_35621 = (state_35688[(2)]);
var inst_35622 = cljs.core.not_empty.call(null,inst_35605);
var state_35688__$1 = (function (){var statearr_35734 = state_35688;
(statearr_35734[(30)] = inst_35621);

return statearr_35734;
})();
if(cljs.core.truth_(inst_35622)){
var statearr_35735_35809 = state_35688__$1;
(statearr_35735_35809[(1)] = (26));

} else {
var statearr_35736_35810 = state_35688__$1;
(statearr_35736_35810[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (34))){
var inst_35657 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35657)){
var statearr_35737_35811 = state_35688__$1;
(statearr_35737_35811[(1)] = (38));

} else {
var statearr_35738_35812 = state_35688__$1;
(statearr_35738_35812[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (17))){
var state_35688__$1 = state_35688;
var statearr_35739_35813 = state_35688__$1;
(statearr_35739_35813[(2)] = recompile_dependents);

(statearr_35739_35813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (3))){
var state_35688__$1 = state_35688;
var statearr_35740_35814 = state_35688__$1;
(statearr_35740_35814[(2)] = null);

(statearr_35740_35814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (12))){
var inst_35578 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35741_35815 = state_35688__$1;
(statearr_35741_35815[(2)] = inst_35578);

(statearr_35741_35815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (2))){
var inst_35540 = (state_35688[(13)]);
var inst_35547 = cljs.core.seq.call(null,inst_35540);
var inst_35548 = inst_35547;
var inst_35549 = null;
var inst_35550 = (0);
var inst_35551 = (0);
var state_35688__$1 = (function (){var statearr_35742 = state_35688;
(statearr_35742[(7)] = inst_35548);

(statearr_35742[(8)] = inst_35549);

(statearr_35742[(9)] = inst_35550);

(statearr_35742[(10)] = inst_35551);

return statearr_35742;
})();
var statearr_35743_35816 = state_35688__$1;
(statearr_35743_35816[(2)] = null);

(statearr_35743_35816[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (23))){
var inst_35605 = (state_35688[(23)]);
var inst_35601 = (state_35688[(19)]);
var inst_35609 = (state_35688[(24)]);
var inst_35604 = (state_35688[(25)]);
var inst_35607 = (state_35688[(26)]);
var inst_35612 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35614 = (function (){var all_files = inst_35601;
var res_SINGLEQUOTE_ = inst_35604;
var res = inst_35605;
var files_not_loaded = inst_35607;
var dependencies_that_loaded = inst_35609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35612,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35613){
var map__35744 = p__35613;
var map__35744__$1 = ((((!((map__35744 == null)))?((((map__35744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35744):map__35744);
var request_url = cljs.core.get.call(null,map__35744__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35612,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35615 = cljs.core.reverse.call(null,inst_35609);
var inst_35616 = cljs.core.map.call(null,inst_35614,inst_35615);
var inst_35617 = cljs.core.pr_str.call(null,inst_35616);
var inst_35618 = figwheel.client.utils.log.call(null,inst_35617);
var state_35688__$1 = (function (){var statearr_35746 = state_35688;
(statearr_35746[(31)] = inst_35612);

return statearr_35746;
})();
var statearr_35747_35817 = state_35688__$1;
(statearr_35747_35817[(2)] = inst_35618);

(statearr_35747_35817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (35))){
var state_35688__$1 = state_35688;
var statearr_35748_35818 = state_35688__$1;
(statearr_35748_35818[(2)] = true);

(statearr_35748_35818[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (19))){
var inst_35591 = (state_35688[(12)]);
var inst_35597 = figwheel.client.file_reloading.expand_files.call(null,inst_35591);
var state_35688__$1 = state_35688;
var statearr_35749_35819 = state_35688__$1;
(statearr_35749_35819[(2)] = inst_35597);

(statearr_35749_35819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (11))){
var state_35688__$1 = state_35688;
var statearr_35750_35820 = state_35688__$1;
(statearr_35750_35820[(2)] = null);

(statearr_35750_35820[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (9))){
var inst_35580 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35751_35821 = state_35688__$1;
(statearr_35751_35821[(2)] = inst_35580);

(statearr_35751_35821[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var inst_35550 = (state_35688[(9)]);
var inst_35551 = (state_35688[(10)]);
var inst_35553 = (inst_35551 < inst_35550);
var inst_35554 = inst_35553;
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35554)){
var statearr_35752_35822 = state_35688__$1;
(statearr_35752_35822[(1)] = (7));

} else {
var statearr_35753_35823 = state_35688__$1;
(statearr_35753_35823[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (14))){
var inst_35561 = (state_35688[(22)]);
var inst_35570 = cljs.core.first.call(null,inst_35561);
var inst_35571 = figwheel.client.file_reloading.eval_body.call(null,inst_35570,opts);
var inst_35572 = cljs.core.next.call(null,inst_35561);
var inst_35548 = inst_35572;
var inst_35549 = null;
var inst_35550 = (0);
var inst_35551 = (0);
var state_35688__$1 = (function (){var statearr_35754 = state_35688;
(statearr_35754[(7)] = inst_35548);

(statearr_35754[(32)] = inst_35571);

(statearr_35754[(8)] = inst_35549);

(statearr_35754[(9)] = inst_35550);

(statearr_35754[(10)] = inst_35551);

return statearr_35754;
})();
var statearr_35755_35824 = state_35688__$1;
(statearr_35755_35824[(2)] = null);

(statearr_35755_35824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (45))){
var state_35688__$1 = state_35688;
var statearr_35756_35825 = state_35688__$1;
(statearr_35756_35825[(2)] = null);

(statearr_35756_35825[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (26))){
var inst_35605 = (state_35688[(23)]);
var inst_35601 = (state_35688[(19)]);
var inst_35609 = (state_35688[(24)]);
var inst_35604 = (state_35688[(25)]);
var inst_35607 = (state_35688[(26)]);
var inst_35624 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35626 = (function (){var all_files = inst_35601;
var res_SINGLEQUOTE_ = inst_35604;
var res = inst_35605;
var files_not_loaded = inst_35607;
var dependencies_that_loaded = inst_35609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35624,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35625){
var map__35757 = p__35625;
var map__35757__$1 = ((((!((map__35757 == null)))?((((map__35757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35757):map__35757);
var namespace = cljs.core.get.call(null,map__35757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35624,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35627 = cljs.core.map.call(null,inst_35626,inst_35605);
var inst_35628 = cljs.core.pr_str.call(null,inst_35627);
var inst_35629 = figwheel.client.utils.log.call(null,inst_35628);
var inst_35630 = (function (){var all_files = inst_35601;
var res_SINGLEQUOTE_ = inst_35604;
var res = inst_35605;
var files_not_loaded = inst_35607;
var dependencies_that_loaded = inst_35609;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35624,inst_35626,inst_35627,inst_35628,inst_35629,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35605,inst_35601,inst_35609,inst_35604,inst_35607,inst_35624,inst_35626,inst_35627,inst_35628,inst_35629,state_val_35689,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35631 = setTimeout(inst_35630,(10));
var state_35688__$1 = (function (){var statearr_35759 = state_35688;
(statearr_35759[(33)] = inst_35629);

(statearr_35759[(34)] = inst_35624);

return statearr_35759;
})();
var statearr_35760_35826 = state_35688__$1;
(statearr_35760_35826[(2)] = inst_35631);

(statearr_35760_35826[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (16))){
var state_35688__$1 = state_35688;
var statearr_35761_35827 = state_35688__$1;
(statearr_35761_35827[(2)] = reload_dependents);

(statearr_35761_35827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (38))){
var inst_35641 = (state_35688[(16)]);
var inst_35659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35641);
var state_35688__$1 = state_35688;
var statearr_35762_35828 = state_35688__$1;
(statearr_35762_35828[(2)] = inst_35659);

(statearr_35762_35828[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (30))){
var state_35688__$1 = state_35688;
var statearr_35763_35829 = state_35688__$1;
(statearr_35763_35829[(2)] = null);

(statearr_35763_35829[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (10))){
var inst_35561 = (state_35688[(22)]);
var inst_35563 = cljs.core.chunked_seq_QMARK_.call(null,inst_35561);
var state_35688__$1 = state_35688;
if(inst_35563){
var statearr_35764_35830 = state_35688__$1;
(statearr_35764_35830[(1)] = (13));

} else {
var statearr_35765_35831 = state_35688__$1;
(statearr_35765_35831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (18))){
var inst_35595 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35595)){
var statearr_35766_35832 = state_35688__$1;
(statearr_35766_35832[(1)] = (19));

} else {
var statearr_35767_35833 = state_35688__$1;
(statearr_35767_35833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (42))){
var state_35688__$1 = state_35688;
var statearr_35768_35834 = state_35688__$1;
(statearr_35768_35834[(2)] = null);

(statearr_35768_35834[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (37))){
var inst_35654 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35769_35835 = state_35688__$1;
(statearr_35769_35835[(2)] = inst_35654);

(statearr_35769_35835[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35548 = (state_35688[(7)]);
var inst_35561 = (state_35688[(22)]);
var inst_35561__$1 = cljs.core.seq.call(null,inst_35548);
var state_35688__$1 = (function (){var statearr_35770 = state_35688;
(statearr_35770[(22)] = inst_35561__$1);

return statearr_35770;
})();
if(inst_35561__$1){
var statearr_35771_35836 = state_35688__$1;
(statearr_35771_35836[(1)] = (10));

} else {
var statearr_35772_35837 = state_35688__$1;
(statearr_35772_35837[(1)] = (11));

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
}
});})(c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30092__auto__,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____0 = (function (){
var statearr_35776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35776[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__);

(statearr_35776[(1)] = (1));

return statearr_35776;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____1 = (function (state_35688){
while(true){
var ret_value__30094__auto__ = (function (){try{while(true){
var result__30095__auto__ = switch__30092__auto__.call(null,state_35688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30095__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30095__auto__;
}
break;
}
}catch (e35777){if((e35777 instanceof Object)){
var ex__30096__auto__ = e35777;
var statearr_35778_35838 = state_35688;
(statearr_35778_35838[(5)] = ex__30096__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30094__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35839 = state_35688;
state_35688 = G__35839;
continue;
} else {
return ret_value__30094__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30093__auto__;
})()
;})(switch__30092__auto__,c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30206__auto__ = (function (){var statearr_35779 = f__30205__auto__.call(null);
(statearr_35779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30204__auto__);

return statearr_35779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30206__auto__);
});})(c__30204__auto__,map__35533,map__35533__$1,opts,before_jsload,on_jsload,reload_dependents,map__35534,map__35534__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30204__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35842,link){
var map__35845 = p__35842;
var map__35845__$1 = ((((!((map__35845 == null)))?((((map__35845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35845):map__35845);
var file = cljs.core.get.call(null,map__35845__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35845,map__35845__$1,file){
return (function (p1__35840_SHARP_,p2__35841_SHARP_){
if(cljs.core._EQ_.call(null,p1__35840_SHARP_,p2__35841_SHARP_)){
return p1__35840_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35845,map__35845__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35851){
var map__35852 = p__35851;
var map__35852__$1 = ((((!((map__35852 == null)))?((((map__35852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35852):map__35852);
var match_length = cljs.core.get.call(null,map__35852__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35852__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35847_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35847_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35854_SHARP_,p2__35855_SHARP_){
return cljs.core.assoc.call(null,p1__35854_SHARP_,cljs.core.get.call(null,p2__35855_SHARP_,key),p2__35855_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35856 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35856);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35856);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35857,p__35858){
var map__35863 = p__35857;
var map__35863__$1 = ((((!((map__35863 == null)))?((((map__35863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35863):map__35863);
var on_cssload = cljs.core.get.call(null,map__35863__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35864 = p__35858;
var map__35864__$1 = ((((!((map__35864 == null)))?((((map__35864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35864):map__35864);
var files_msg = map__35864__$1;
var files = cljs.core.get.call(null,map__35864__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1502515430675