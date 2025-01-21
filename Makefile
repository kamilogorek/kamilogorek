all: build
.PHONY: all

build:
	deno task build
.PHONY: build

server:
	deno task serve
.PHONY: server
