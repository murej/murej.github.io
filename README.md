
To deploy:

1. `$ grunt build`
2. `$ git add dist && git commit -m "update page"`
3. `$ git subtree push --prefix dist origin master`
4. `$ git branch -d master`
