package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}
}

func main() {
	// Initialize database
	if err := InitDB(); err != nil {
		log.Fatalf("Failed to initialize database: %v", err)
	}
	defer CloseDB()

	// Create router
	router := mux.NewRouter()

	// CORS middleware
	corsHandler := handlers.CORS(
		handlers.AllowedOrigins([]string{"http://localhost:3000", "*"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type", "Authorization"}),
		handlers.AllowCredentials(),
	)

	// Public routes
	router.HandleFunc("/api/auth/register", RegisterHandler).Methods("POST")
	router.HandleFunc("/api/auth/login", LoginHandler).Methods("POST")
	router.HandleFunc("/api/events", GetEventsHandler).Methods("GET")
	router.HandleFunc("/api/events/{id}", GetEventHandler).Methods("GET")
	router.HandleFunc("/api/gallery", GetPhotosHandler).Methods("GET")
	router.HandleFunc("/api/gallery/{id}", GetPhotoHandler).Methods("GET")
	router.HandleFunc("/api/contact", SubmitContactHandler).Methods("POST")

	// Protected routes (require authentication)
	router.HandleFunc("/api/auth/logout", AuthMiddleware(LogoutHandler)).Methods("POST")
	router.HandleFunc("/api/admin/events", AuthMiddleware(AdminMiddleware(CreateEventHandler))).Methods("POST")
	router.HandleFunc("/api/admin/events/{id}", AuthMiddleware(AdminMiddleware(UpdateEventHandler))).Methods("PUT")
	router.HandleFunc("/api/admin/events/{id}", AuthMiddleware(AdminMiddleware(DeleteEventHandler))).Methods("DELETE")
	router.HandleFunc("/api/admin/gallery", AuthMiddleware(AdminMiddleware(UploadPhotoHandler))).Methods("POST")
	router.HandleFunc("/api/admin/gallery/{id}", AuthMiddleware(AdminMiddleware(DeletePhotoHandler))).Methods("DELETE")
	router.HandleFunc("/api/admin/contacts", AuthMiddleware(AdminMiddleware(GetContactsHandler))).Methods("GET")
	router.HandleFunc("/api/admin/users", AuthMiddleware(AdminMiddleware(GetUsersHandler))).Methods("GET")

	// Health check
	router.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprintf(w, `{"status":"healthy"}`)
	}).Methods("GET")

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server running on http://localhost:%s", port)
	log.Fatal(http.ListenAndServe(":"+port, corsHandler(router)))
}
