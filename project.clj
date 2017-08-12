(defproject todomvc "0.1.0-SNAPSHOT"
  :plugins [
            ;; [lein-cljsbuild "1.1.7"]
            ;; [lein-ring "0.7.1"]
            ;; [lein-environ "1.1.0"]
            [lein-figwheel "0.5.12"]]
  :description "Todomvc using clojure, clojurescript, reagent, lein figweel"
  :url "git@github.com:shivsoji/clojure-todomvc.git"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.521"]
                 ;; [com.novemberain/monger "3.1.0"]
                 ;; [environ "1.1.0"]
                 ;; [boot-environ "1.1.0"]
                 ;; [io.pedestal/pedestal.service "0.5.2"]
                 ;; [io.pedestal/pedestal.jetty "0.5.2"]
                 ;; [ring "1.6.2"]
                 ;; [compojure "1.6.0"]
                 [reagent "0.6.0"]]
  :main ^:skip-aot server.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}}
  ;; :hooks [leiningen.cljsbuild]
  ;; :jar true
  :figwheel {:repl false}
  ;; :ring {:handler server.core/app}
  :cljsbuild {:builds {:client
                       {:source-paths ["src"]
                        :compiler {:asset-path "js/out"
                                   :output-to "resources/public/js/client.js"
                                   :output-dir "resources/public/js/out"}}}})
