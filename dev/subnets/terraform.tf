provider "aws" {
  region  = "ap-southeast-1"
  profile = "example"
}

data "aws_vpc" "vpc" {
  filter {
    name = "tag:Name"
    values = [
      "vpc-example-dev"
    ]
  }
}

resource "aws_subnet" "subnet_web0" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.100.0/24"
  availability_zone = "ap-southeast-1a"
  tags = {
    Name    = "subnet-example-dev-web0"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_web1" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.101.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name    = "subnet-example-dev-web1"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_web2" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.102.0/24"
  availability_zone = "ap-southeast-1c"
  tags = {
    Name    = "subnet-example-dev-web2"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_app0" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.104.0/24"
  availability_zone = "ap-southeast-1a"
  tags = {
    Name    = "subnet-example-dev-app0"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_app1" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.105.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name    = "subnet-example-dev-app1"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_app2" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.106.0/24"
  availability_zone = "ap-southeast-1c"
  tags = {
    Name    = "subnet-example-dev-app2"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_db0" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.108.0/24"
  availability_zone = "ap-southeast-1a"
  tags = {
    Name    = "subnet-example-dev-db0"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_db1" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.109.0/24"
  availability_zone = "ap-southeast-1b"
  tags = {
    Name    = "subnet-example-dev-db1"
    Project = "example"
    Env     = "dev"
  }
}

resource "aws_subnet" "subnet_db2" {
  vpc_id            = data.aws_vpc.vpc.id
  cidr_block        = "172.88.110.0/24"
  availability_zone = "ap-southeast-1c"
  tags = {
    Name    = "subnet-example-dev-db2"
    Project = "example"
    Env     = "dev"
  }
}

output "subnets" {
  value = {
    webSubnets = [
      aws_subnet.subnet_web0.id,
      aws_subnet.subnet_web1.id,
      aws_subnet.subnet_web2.id
    ]
    appSubnets = [
      aws_subnet.subnet_app0.id,
      aws_subnet.subnet_app1.id,
      aws_subnet.subnet_app2.id
    ]
    dbSubnets = [
      aws_subnet.subnet_db0.id,
      aws_subnet.subnet_db1.id,
      aws_subnet.subnet_db2.id
    ]
  }
}

