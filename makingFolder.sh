TRGT='/Users/USERNAME'

echo 'installing dependencies'
npm i

echo 'Moving files to root'
mv * $(echo $TRGT | tr -d '\r')