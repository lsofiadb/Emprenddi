from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.contrib.auth.hashers import make_password

class UserManager(BaseUserManager):
    def create_user(self, username, password=None):
        """
        Creates and saves a user with the given username and password.
        """
        if not username:
            raise ValueError('Users must have an username')
        user = self.model(username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, password):
        """
        Creates and saves a superuser with the given username and password.
        """
        user = self.create_user(
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class Contractor(AbstractBaseUser, PermissionsMixin):

    #primary key 
    id = models.BigAutoField(primary_key=True)
    
    #other attributes
    dni = models.IntegerField('dni')
    username = models.CharField('Username', max_length=15, unique=True)
    password = models.CharField('Password', max_length=256)
    name = models.CharField('Name', max_length=30)
    lastname = models.CharField('Last_Name', max_length=30)
    age = models.IntegerField('Age')
    email = models.EmailField('Email', max_length=100)
    telephone_number = models.BigIntegerField('Telephone_Number')
    city = models.CharField('City', max_length=30)
    address = models.CharField('Address', max_length=30)

    def save(self, **kwargs):
        some_salt = 'mMUj0DrIK6vgtdIYepkIxN'
        self.password = make_password(self.password, some_salt)
        super().save(**kwargs)
    
    objects = UserManager()
    USERNAME_FIELD = 'username'
