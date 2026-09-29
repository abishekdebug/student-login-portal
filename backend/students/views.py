from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import StudentSerializer
from rest_framework.permissions import IsAuthenticated


class StudentRegistrationView(APIView):

    def post(self, request):
        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
class StudentProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "message": "You are authenticated!",
            "username": request.user.username
        })