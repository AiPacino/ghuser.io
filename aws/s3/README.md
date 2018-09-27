This will create an S3 bucket for
[exposing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) the
[profiles' data](https://github.com/ghuser-io/db) to the [front end](../../reframe).

To create the bucket, run

```bash
$ export AWS_ACCOUNT_ID=123456789012
$ ./create_s3_bucket.sh
```
