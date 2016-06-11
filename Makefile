build:
	rm -rf dist
	./node_modules/.bin/webpack --output-filename=dist/react-easy-paginate.js
	./node_modules/.bin/webpack --output-filename=dist/react-easy-paginate.min.js --optimize-minimize
	# copy css file
	cp react-easy-paginate.css ./dist/react-easy-paginate.css
	# minify css file
	node_modules/.bin/cleancss -o ./dist/react-easy-paginate.min.css react-easy-paginate.css

	rm -rf lib
	./node_modules/.bin/babel src --out-dir lib --presets es2015,react

run-example:
	node ./example/server.js
