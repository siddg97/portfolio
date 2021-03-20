provider "google" {
    credentials = file("key.json")
    project     = "portfolio-sidd"
    region      = "us-west1"
    zone      = "us-west1-a"
}

# IP ADDRESS
resource "google_compute_address" "ip_address" {
    name = "${terraform.workspace}-ip"
}

# NETWORK
resource "google_compute_network" "vpc" {
    name = "vpc"
}

# FIREWALL
resource "google_compute_firewall" "allow_http" {
    name    = "allow-http-${terraform.workspace}"
    network = google_compute_network.vpc.name

    allow {
        protocol = "tcp"
        ports    = ["80", "443"]
    }

    source_ranges = [ "0.0.0.0/0" ]

    target_tags = [ "allow-http-${terraform.workspace}" ]
}

resource "google_compute_firewall" "allow_ssh" {
    name    = "allow-ssh-${terraform.workspace}"
    network = google_compute_network.vpc.name

    allow {
        protocol = "tcp"
        ports    = ["22"]
    }
    source_ranges = [ "0.0.0.0/0" ]

    target_tags = [ "allow-ssh-${terraform.workspace}" ]
}

# OS IMAGE
data "google_compute_image" "cos_image" {
    family = "cos-81-lts"
    project = "cos-cloud"
}

# VM
resource "google_compute_instance" "instance" {
    name         = "${var.app_name}-vm-${terraform.workspace}"
    machine_type = var.gcp_machine_type
    zone         = "us-west1-a"

    tags = setunion(google_compute_firewall.allow_http.target_tags, google_compute_firewall.allow_ssh.target_tags)

    boot_disk {
        initialize_params {
            image = data.google_compute_image.cos_image.self_link
        }
    }

    network_interface {
        network = google_compute_network.vpc.name

        access_config {
            nat_ip = google_compute_address.ip_address.address
        }
    }

    service_account {
        scopes = ["storage-ro"]
    }
}