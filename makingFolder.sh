TRGT='/Users/USERNAME'

echo 'installing dependencies'
npm i
cat > settingUp.sh <<-"EOF"
echo 'Creating directories'
mkdir icons Pictures fonts Movies

echo 'testing'
npm test
echo '^ Should have any output. If it does, then assure that you're in the right directory'
EOF
echo 'Moving files to root'
mv * $(echo $TRGT | tr -d '\r')