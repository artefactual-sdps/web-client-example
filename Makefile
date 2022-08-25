client:
	@rm -rf $(CURDIR)/src/openapi-generator
	@docker container run --rm --user $(shell id -u):$(shell id -g) --volume $(CURDIR):/local openapitools/openapi-generator-cli:v6.0.0 \
		generate \
			--input-spec /local/openapi.yaml \
			--generator-name typescript-fetch \
			--output /local/src/openapi-generator/ \
			--skip-validate-spec \
			-p "generateAliasAsModel=false" \
			-p "withInterfaces=true" \
			-p "supportsES6=true"
