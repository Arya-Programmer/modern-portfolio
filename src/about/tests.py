from django.test import TestCase
from rest_framework.test import APIClient
from .models import About, Skill


class AboutAPITest(TestCase):
    def setUp(self):
        self.client = APIClient()
        skill = Skill.objects.create(name="Python")
        self.about = About.objects.create(
            name="Arya",
            occupation="Software Engineer",
            bio="Loves code.",
            email="arya@example.com",
            phone="123456789",
            location="Earth",
        )
        self.about.skills.add(skill)

    def test_about_list(self):
        response = self.client.get("/api/about/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], "Arya")

    def test_skill_list(self):
        response = self.client.get("/api/skills/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.data), 1)
