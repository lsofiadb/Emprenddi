from django.db import models

class Specialist(models.Model):
    #primary key 
    id = models.BigAutoField(primary_key=True)
    
    #foreign key 

    #other attributes
    dni = models.IntegerField('dni')
    name = models.CharField('Name', max_length=30)
    lastname = models.CharField('Last_Name', max_length=30)
    age = models.IntegerField('Age')
    email = models.EmailField('Email', max_length=100)
    telephone_number = models.BigIntegerField('Telephone_Number')
    city = models.CharField('City', max_length=30)
    priceXhour = models.IntegerField('priceXhour')
    description = models.TextField('Description')
    category = models.CharField('category', max_length=30)
    url = models.CharField('url', max_length=255)
    score = models.DecimalField('Score', decimal_places=3, max_digits=20)
