# REVAMP

REVAMP is an app based on an Excel spreadsheet app produced by Kim Andersson ( https://www.sei.org/people/kim-andersson/ ) and Daniel Ddiba ( https://www.sei.org/people/daniel-ddiba/ ).  The spreadsheet is in the handover folder on the shared drive.

More info on the project can be found here:
https://www.sei.org/projects-and-tools/tools/revamp/

The tool is currently housed on Heroku at:
http://revamp-dev.herokuapp.com/

The Heroku dashboard is:
https://dashboard.heroku.com/apps/revamp-dev

It was originally agreed to host it on Heroku but it appears that there may not be funding for hosting so it may be moved to the university's IT services.

## Development Environment
Revamp is a standard Django app (Django 2.1.7/Python3.6).  It comprises of the tool itself and a few extra pages for information that are managed using the wagtail CMS.  

To install on an Ubuntu server:
```
sudo apt-get update
sudo apt-get install software-properties-common
sudo apt-add-repository universe
sudo apt-get install libpq-dev
sudo apt-get update
sudo apt-get python-pip
sudo apt-get install python3-venv
sudo snap install --classic heroku
python 3 -m venv ../revamp_env
source ../revamp_env/bin/activate
sudo apt-get install postgresql postgresql-contrib
update-rc.d postgresql enable
service postgresql start
sudo su - postgres
psql
create user revamp password ‘revamp’;
grant all privileges on database revamp to revamp;
alter user revamp createdb;  
```

Clone code:

```
git clone https://gitlab.com/SEI-York/revamp
cd revamp
pip install -r requirements.txt
python manage.py createsuperuser
python manage.py migrate
python manage.py runserver
```





