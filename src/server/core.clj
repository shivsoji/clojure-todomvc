(ns server.core
  (:require
   ;; [io.pedestal.http :as http]
   ;; [io.pedestal.http.route :as route]
   ;; [monger.core :as mg]
   ;; [ring.util.response :as response]
   ;; [compojure.core :refer :all]
   ;; [compojure.route :as route]
   ;; [compojure.handler :as handler]
   )
  (:gen-class))

;; (require '[environ.core :refer [env]])

;; (def mongo-url (env :database-url))

;; (let [uri mongo-url
;; {:keys [conn db]} (mg/connect-via-uri uri)])

;; (defroutes app-routes
;;   (GET "/" [] (response/resource-response "index.html" {:root "public"}))
;;   (route/resources "/")
;;   (route/not-found "Page not found"))

;; (def app
;;   (-> (handler/site app-routes)
;;       ))
