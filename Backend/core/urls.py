from django.urls import path
from .views import NewsSearchView
from . import views
urlpatterns = [
    path('search/', NewsSearchView.as_view(), name='news-search'),
    path('category/', views.CategoryListCreateAPIView().as_view(), name="category-list"),
    path('category/<int:pk>/',views.CategoryRetrieveUpdateDestroyAPIView().as_view(), name="category-detail"),
    path('news/',views.NewsListCreateAPIView().as_view(), name="news-list"),
    path('news/<int:pk>',views.NewsRetrieveUpdateDestroyAPIView().as_view(), name="news-detail")
]