provider "aws" {
  profile = "default"
  region = "ap-northeast-1"
}

resource "aws_instance" "example" {
  ami = "ami-0c3fd0f5d33134a76"
  instance_type = "t3.micro"
}
