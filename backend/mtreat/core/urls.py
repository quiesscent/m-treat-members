from django.urls import path
from .views import UserRegisterView, UserUpdateView, UserLoginView, GetUserInfo, index, register, login, update, dashboard

urlpatterns = [
    path('', index, name="home"),
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('dashboard', dashboard, name='dashboard'),
    path('dashboard/update', update, name='update'),
    path('api/register/', UserRegisterView.as_view(), name='register'),
    path('api/login/', UserLoginView.as_view(), name='login'),
    path('api/update/', UserUpdateView.as_view(), name='update'),
    path('api/profile/', GetUserInfo.as_view(), name='user-profile'), 
]
