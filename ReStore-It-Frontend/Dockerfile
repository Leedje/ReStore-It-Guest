#Uses node version 22 as our base image
FROM node:22

#Use this working DIR
WORKDIR /app

#Copy package.json and package-lock.json from project
COPY package*.json ./

#Install app dependecies
#Run keyword is only for image building
RUN npm install

#Copy the entire app into docker container
COPY . .

#Set ENVironmental variable
ENV PORT=4200

#Exposes the port so the computer can access it
EXPOSE 4200

#Run the app
#CMD keyword starts the container after building
CMD [ "npm", "start" ]
