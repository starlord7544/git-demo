# git-demo

cd                      --- change directory        -->     navigate through the folders (.. to move out)<br>
ls                      --- list file               -->     lists all the files <br>
ls -a or ls -Force      --- list hidden files       -->     lists all hidden files <br>
git status              --> displays the status of the file <br>
    <ul>
        <li>types</li>
        <ul>
            <li> untracked     --> new files that git doesn't yet track </li>
            <li> modified      --> changed </li>
            <li> staged        --> file is ready to be commited </li>
            <li> unmodified    --> unchanged </li>
        </ul>
    </ul>

git add file_name.ext   --> add new or changed files in your working directory to the Git Staging area <br>
git add .               --> add all files.... <br>
git commit -m"asbxyz"   --> it is the record of change <br>
git push origin main    --> push local commit stuff to online/remote git repo at {origin = curr_repo} in main <br>

git init                --> used to create a new git repo <br>
<ul>
    <li> git remote add origin <- link -> </li>
    <li> git remote -v    --> to verify remote </li>
    <li> git branch     --> to check branch </li>
    <li> git branch -M main -->(to rename branch) </li>
    <li> git push origin main </li>
</ul>