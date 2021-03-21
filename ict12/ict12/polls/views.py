from django.shortcuts import render
from django.http import HttpResponse
from django.template import Context, loader
from .models import Game

# Create your views here.

def index(request):
    print("FOUND")
    return HttpResponse("Hello world! Looks like you finally started to do your shit")

def secret(request):
    return HttpResponse("WOW! You found it!")

def test(request):
    page = loader.get_template('home.html')
    return HttpResponse(render(request, page))

def main(request):
    template_name = 'main.html'
    # if request.user_is_authenticated(): template_name='main_in.html'
    return HttpResponse(render(request, template_name))

def games(request):
    glist = Game.objects.all()
    return HttpResponse(render(request, "games.html", {'glist': glist}))

def contact(request):
    return HttpResponse(render(request, "contact.html"))

def login(request):
    return HttpResponse(render(request, "login.html"))

def signup(request):
    return HttpResponse(render(request, "signup.html"))

def account(request):
    return HttpResponse(render(request, "account.html"))

def logout(request):
    #logout procedure
    return HttpResponse(render(request, "main.html"))

def n_back(request):
    return HttpResponse(render(request, "n-back.html"))
