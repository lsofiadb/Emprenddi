"""Microservice_1 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from authentication import views

urlpatterns = [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view()),
    path('verifyToken/', views.VerifyTokenView.as_view()),
    path('contractor/create', views.ContractorCreateView.as_view()),
    #path('contractor/create',views.ContractorCreateView2.as_view()),
    path('contractor/getSelected/<int:pk>',views.ContractorGetSelectedApi.as_view()),
    path('contractor/deleteSelected/<int:pk>',views.ContractorDeleteApi.as_view()),
    path('contractor/getAll',views.ContractorGetAllApi.as_view()), # Get all contractors
    path('specialist/create',views.SpecialistCreateView.as_view()),
    path('specialist/getSelected/<int:pk>',views.SpecialistGetSelectedApi.as_view()),
    path('specialist/getSelectedScore/<int:pk>',views.SpecialistGetSelectedApi_Score.as_view()), #Get Score
    path('specialist/getSelectedPrice/<int:pk>',views.SpecialistGetSelectedApi_priceXhour.as_view()), #Get priceXhour
    path('specialist/deleteSelected/<int:pk>',views.SpecialistDeleteApi.as_view()),
    path('specialist/getAll',views.SpecialistGetAllApi.as_view()), # Get all specialists
    path('specialist/viewbycategory/<str:category>',views.SpecialistbyCategory.as_view()),
]
