TRGT='/Users/USERNAME'

echo 'installing dependencies'
npm i
cat > settingUp.sh <<-"EOF"
echo 'Creating directories'
mkdir icons Pictures fonts Movies

echo 'testing'
npm test
EOF
echo 'Moving files to root'
mv * $(echo $TRGT | tr -d '\r')