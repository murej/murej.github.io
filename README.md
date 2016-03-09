
To deploy:

1. Make sure you are in `source` branch
2. `$ grunt build`
3. `$ git add dist && git commit -m "update page"`
4. `$ git subtree push --prefix dist origin master`
5. Delete `master` branch
