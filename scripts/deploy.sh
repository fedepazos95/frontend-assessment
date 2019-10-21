UUID=$$
PROJECT=frontend-assessment
STACK=$ENV-$PROJECT-infra
DOMAIN_BUCKET=$PROJECT-$ENV
LOG_BUCKET=$PROJECT-log-$ENV

echo 'Building SAM package and uploading cloudformation'
sam package --template-file "scripts/template.yaml" --output-template-file "template_$UUID.yaml" --s3-bucket $DEPLOY_BUCKET
sam deploy --template-file "template_$UUID.yaml" --stack-name $STACK --tags Project=$PROJECT --capabilities CAPABILITY_NAMED_IAM --parameter-overrides Environment=$ENV Project=$PROJECT DeployBucket=$DEPLOY_BUCKET DomainBucket=$DOMAIN_BUCKET LogBucket=$LOG_BUCKET LogsUserArn=$LOGS_USER_ARN
rm "template_$UUID.yaml"

echo "Building frontend"
yarn build

CLOUDFRONT_DISTRIBUTION=`aws cloudformation describe-stacks --stack-name "$STACK" \
--output text | grep $ENV-PortalDistribution-$PROJECT | awk -F"\t" '{$0=$5}6'`

echo 'Deploy frontend to AWS S3'
aws s3 cp build/ s3://"${DOMAIN_BUCKET}"/ --acl public-read --recursive
# This is to set the index cache to 1 hour so when there are updates they don't take to long to reach all users
aws s3 cp build/index.html s3://"${DOMAIN_BUCKET}"/ --acl public-read --recursive --cache-control max-age=3600
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION --path "/*"
