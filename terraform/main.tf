terraform {
    backend "gcs" {
        bucket = "portfolio-sidd-terraform"
        prefix = "/state/portfolio"
    }
}