package main

import "net/http"

func main() {
	http.HandleFunc("/", hello)
	http.ListenAndServe(":3300", nil)
}

func hello(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hello me!"))
}
