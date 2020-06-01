echo 'installing homebrew'
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

echo 'exporting path'
export PATH="/usr/local/bin:$PATH"

echo 'installing node and npm'
brew install node

echo 'installing dependencies'
npm i

cat > settingUp.sh <<-"EOF"
echo 'Creating directories'
mkdir icons Pictures fonts Movies

echo 'testing'
npm test
EOF

echo 'Moving files to root'
mv * ../../
# assuming that the directory is in a folder on the desktop