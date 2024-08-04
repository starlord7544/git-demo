# git-demo

cd                      --- change directory        -->     navigate through the folders (.. to move out)<br>
ls                      --- list file               -->     lists all the files <br>
ls -a or ls -Force      --- list hidden files       -->     lists all hidden files <br>
git status              --> displays the status of the file <br>
    - types
        - untracked     --> new files that git doesn't yet track
        - modified      --> changed
        - staged        --> file is ready to be commited
        - unmodified    --> unchanged

git add file_name.ext   --> add new or changed files in your working directory to the Git Staging area
git add .               --> add all files....

git commit -m"asbxyz"   --> it is the record of change
git push origin main    --> push local commit stuff to online/remote git repo at {origin = curr_repo} in main