# Planet Analyser

This is a simple CLI application which helps to find out habitable planets from the data collected by Nasa's Kepler telescope. This data is publically available which can be downloaded as a csv file from the archives of NASA's public website. For a planet to be considered as habitable, it needs to fulfill certain conditions.
Using NodeJS, we can create a pipeline where we can read the data line by line (rather than reading them all in one go which will take a lot of time), convert each row into an object, check for the conditions, collect the details of the planets which fits the criteria to be considered as habitable in an array and present them to the user.

Data: Download CSV from - https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=cumulative

Habitable planet checklist: https://phl.upr.edu/projects/habitable-exoplanets-catalog

Libraries/modules used: csv-parse

# How to run
First npm install, then node index.js

The application should return the number of habitable planets found and their names.
