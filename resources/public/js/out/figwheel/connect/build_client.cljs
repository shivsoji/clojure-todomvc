(ns figwheel.connect.build-client (:require [client.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/client.core.run (apply js/client.core.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'client.core/run' is missing"))), :build-id "client", :websocket-url "ws://localhost:3449/figwheel-ws"})

