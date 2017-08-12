{:dev  {:env {:database-url "mongodb://127.0.0.1/tis"}
        :cljsbuild
        {:builds {:client
                  {:figwheel {:on-jsload "client.core/run"}
                   :compiler {:main "client.core"
                              :optimizations :none}}}}}
 :prod {:env {:database-url "mongodb://127.0.0.1/tis"}
        :cljsbuild
        {:builds {:client
                  {:compiler {:optimizations :advanced
                              :elide-asserts true
                              :pretty-print false}}}}}}
