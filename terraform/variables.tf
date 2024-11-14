variable "subscription_id" {
  type = string
  sensitive = true
}

variable "location" {
  type    = string
  default = "eastus2"
}

variable "gh_repo" {
  type = string
}

