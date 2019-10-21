echo 'Building SAM package and uploading cloudformation'
sam package --template-file "scripts/template.yaml" --output-template-file "template_$UUID.yaml" --s3-bucket $DEPLOY_BUCKET
sam deploy --template-file "template_$UUID.yaml" --stack-name $STACK --tags Project=$PROJECT --capabilities CAPABILITY_NAMED_IAM --parameter-overrides Environment=$ENV DeployBucket=$DEPLOY_BUCKET DomainBucket=$DOMAIN_BUCKET LogBucket=$LOG_BUCKET LogsUserArn=$LOGS_USER_ARN
rm "template_$UUID.yaml"