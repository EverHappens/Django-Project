from django.urls import path
from . import views

#   url(r'^path/to/url', TemplateView.as_view(template_name='index.html')),

urlpatterns = [
    path('', views.index, name='index'),
    path('secret/', views.secret, name='secret'),
    path('test/', views.test, name='test'),
    path('main/', views.main, name='main'),
    path('games/', views.games, name='games'),
    path('contact/', views.contact, name='contact'),
    path('login/', views.login, name='login'),
    path('signup/', views.signup, name='signup'),
    path('account/', views.account, name='account'),
    path('games/n-back/', views.n_back, name='n-back'),
]
