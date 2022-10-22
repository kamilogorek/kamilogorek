all: build
.PHONY: all

build:
	bundle exec jekyll build
.PHONY: build

watch:
	bundle exec jekyll build --watch
.PHONY: watch

server:
	npx serve _site
.PHONY: server
