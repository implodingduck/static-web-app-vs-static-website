source terraform/.env
cd react
npm run build
echo "deploying to Storage Account"
az storage azcopy blob upload --container '$web' --account-name $SA_NAME --source "./dist/*" --recursive
echo "deploying to Static Web Apps"
swa deploy --env production
