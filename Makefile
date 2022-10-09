all: build
.PHONY: all

build:
	rm -rf _site
	bundle exec jekyll build
	cp -r ../nutrition-database/dist _site/nutrition-database
.PHONY: build
