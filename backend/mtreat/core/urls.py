from django.urls import path
from .views import UserRegisterView, UserUpdateView, UserLoginView, GetUserInfo

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('update/', UserUpdateView.as_view(), name='update'),
    path('profile/', GetUserInfo.as_view(), name='user-profile'), 
]
