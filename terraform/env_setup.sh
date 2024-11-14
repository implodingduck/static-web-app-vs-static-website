#!/bin/bash
source .env
envsubst < backend.tfvars.tmpl > backend.tfvars
terraform init --backend-config=backend.tfvars