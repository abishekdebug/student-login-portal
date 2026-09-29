


from django.urls import path
from .views import StudentRegistrationView, StudentProfileView

urlpatterns = [
    path(
        "register/",
        StudentRegistrationView.as_view(),
        name="student-register",
    ),
    path(
        "profile/",
        StudentProfileView.as_view(),
        name="student-profile",
    ),
]